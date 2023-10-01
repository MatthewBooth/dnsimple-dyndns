import {Command, Flags} from '@oclif/core'
import AppConfig from '../lib/app-config'
import IpAddress from '../lib/ip-address'
import {DNSimple} from 'dnsimple'

export default class Sync extends Command {
  static description = `Sync the configured record with your current IP.

Will check if your IP has changed since the last update and sync as appropriate.

Forced update:  'dnsimple-dyndns sync --force'
               'dnsimple-dyndns -f'

Silent update:  'dnsimple-dyndns sync --quiet'
               'dnsimple-dyndns -q'
`

  static flags = {
    quiet: Flags.boolean({
      char: 'q',
      description: 'Do not display any output',
      required: false,
      default: false,
    }),
    force: Flags.boolean({
      char: 'f',
      description: 'Force the sync to happen, even if your IP hasn\'t changed',
      required: false,
      default: false,
    }),
  }

  public async run(): Promise<void> {
    const appConfig = new AppConfig(this.config.configDir)

    const {flags} = await this.parse(Sync)

    const quiet = flags.quiet
    const force = flags.force

    if (!appConfig.isConfiguredFully()) {
      const error = 'Error: Not configured correctly. Please run "dnsimple-dyndns config"'
      this.error(error, {exit: 1})
    }

    const ipAddress = await (new IpAddress()).get(this)
    const hasChanged = ipAddress !== appConfig.ipAddress

    const dnsimple = new DNSimple({accessToken: appConfig.token})

    if (hasChanged || force) {
      const attributes = {content: ipAddress, ttl: 3600}

      dnsimple.zones.updateZoneRecord(appConfig.accountId, appConfig.domainId, appConfig.recordId, attributes)
      .then(_ => {
        if (!quiet) {
          this.log('Success! The record was updated')
          appConfig.ipAddress = ipAddress
        }
      })
      .catch(error => {
        if (!quiet) {
          this.error(error.message, {exit: 1})
        }
      })
      appConfig.updateConfig()
    } else if (!quiet) {
      this.log('No change')
    }
  }
}
