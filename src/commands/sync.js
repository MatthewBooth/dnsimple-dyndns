const { Command, flags } = require('@oclif/command')
const dnsimple = require('dnsimple')({})
const Config = require('../lib/config')
const getIpAddress = require('../lib/ip-address')

class SyncCommand extends Command {
  async run () {
    const configuration = new Config(this.config.configDir)

    const { flags } = this.parse(SyncCommand)
    const quiet = flags.quiet
    const force = flags.force

    if (!configuration.isConfiguredFully()) {
      const error = 'Error: Not configured correctly. Please run "dnsimple-dyndns config"'
      this.error(error, { exit: 1 })
    }

    const ipAddress = await getIpAddress(this)
    const hasChanged = ipAddress !== configuration.ipAddress

    if (hasChanged || force) {
      dnsimple.setAccessToken(configuration.token)

      const attributes = { content: ipAddress, ttl: 3600 }

      dnsimple.zones.updateZoneRecord(
        configuration.accountId,
        configuration.domainId,
        configuration.recordId,
        attributes
      ).then(() => {
        if (!quiet) {
          this.log('Success! The record was updated')
        }
        configuration.ipAddress = ipAddress
      }).catch(error => {
        if (!quiet) {
          this.error(error.message, { exit: 1 })
        }
      })

      configuration.updateConfig()
    } else if (!quiet) {
      this.log('No change')
    }
  }
}

SyncCommand.description = `Sync the configured record with your current IP.

Will check if your IP has changed since the last update and sync as appropriate.

Forced update:  'dnsimple-dyndns sync --force'
               'dnsimple-dyndns -f'

Silent update:  'dnsimple-dyndns sync --quiet'
               'dnsimple-dyndns -q' 
`

SyncCommand.flags = {
  quiet: flags.boolean({
    char: 'q',
    description: 'Do not display any output',
    required: false,
    default: false
  }),
  force: flags.boolean({
    char: 'f',
    description: 'Force the sync to happen, even if your IP hasn\'t changed',
    required: false,
    default: false
  })
}

module.exports = SyncCommand
