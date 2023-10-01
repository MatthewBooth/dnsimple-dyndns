import {Args, Command, Flags, ux} from '@oclif/core'
import AppConfig from '../lib/app-config'
import {DNSimple} from 'dnsimple'
import IpAddress from '../lib/ip-address'

export default class Config extends Command {
  static description = `Run through the setup wizard and create a configuration file.
Run through a series of prompts to configure your record, or pass along the appropriate options.

You can pass partial options and answer the remaining mandatory config settings as prompts.

Wizard:   'dnsimple-dyndns config'

Automate: 'dnsimple-dyndns config --token=[DNSIMPLE TOKEN] --domain=example.com --subdomain=local --quiet'
         'dnsimple-dyndns config -t [DNSIMPLE TOKEN] -d example.com -s local -q'

Partial:  'dnsimple-dyndns config --token=[DNSIMPLE TOKEN]'
`
  static flags = {
    quiet: Flags.boolean({
      char: 'q',
      description: 'Do not display any output',
      required: false,
      default: false,
    }),
    token: Flags.string({
      char: 't',
      description: 'DNSimple API Token',
      required: false,
      default: '',
    }),
    accountId: Flags.integer({
      char: 'i',
      description: 'DNSimple Account ID',
      required: false,
      default: 0,
    }),
    domain: Flags.string({
      char: 'd',
      description: 'The Domain Name you wish to use',
      required: false,
      default: '',
    }),
    'sub-domain': Flags.string({
      char: 's',
      description: 'The Sub-Domain Name you wish to use',
      required: false,
      default: '',
    }),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const appConfig = new AppConfig(this.config.configDir)
    const {flags} = await this.parse(Config)

    const quiet = flags.quiet
    let token = flags.token
    let domain = flags.domain
    let subDomain = flags.subDomain
    let accountId = flags.accountId
    let recordId = 0

    if (token === '') {
      token = await ux.prompt('Please enter your DNSimple API Token', {type: 'mask'})
    }

    if (domain === '') {
      domain = await ux.prompt('Please enter your Domain Name')
    }

    if (accountId === 0) {
      accountId = Number.parseInt(await ux.prompt('Please enter your DNSimple Account ID'), 10)
    }

    let useSubDomain = false
    if ((!flags.token && !flags.domain) && !flags.subDomain) {
      useSubDomain = await ux.confirm('Are you using a Sub-Domain?')
      if (useSubDomain) {
        subDomain = await ux.prompt('Please enter your Sub-Domain Name')
      }
    }

    const dnsimple = new DNSimple({accessToken: token})

    await (useSubDomain ? dnsimple.zones.listZoneRecords(accountId, domain, {name: subDomain})
    .then(response => {
      if (response.data.length === 1) {
        recordId = response.data[0].id
      }
    })
    .catch(error => {
      this.error(error.message, {exit: 1})
    }) : dnsimple.zones.listZoneRecords(accountId, domain, {type: 'A'})
    .then(response => {
      if (response.data.length > 0) {
        const result = response.data.find(el => el.name === '')
        if (result) {
          recordId = result.id
        } else {
          return new Error('It broke')
        }
      }
    })
    .catch(error => {
      this.error(error.message, {exit: 1})
    }))

    appConfig.token = token
    appConfig.accountId = accountId
    appConfig.domainId = domain
    appConfig.recordId = recordId
    appConfig.recordName = subDomain
    appConfig.ipAddress = await (new IpAddress()).get(this)
    appConfig.updateConfig()

    if (!quiet) {
      this.log('Success! Configuration saved:')
      this.log(JSON.stringify(appConfig.toJson(), null, '  '))
    }
  }
}
