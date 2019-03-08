const { Command } = require('@oclif/command')
const Config = require('../lib/config')

class ShowCommand extends Command {
  async run () {
    const configuration = new Config(this.config.configDir)
    if (!configuration.isConfiguredMinimally()) {
      this.error('No config.')
    }
    if (!configuration.isConfiguredFully()) {
      this.warn('You are missing a domain and/or record configuration.')
      this.warn('Please create a domain or run "dnsimple-dyndns config"')
    }
    this.log('Configuration: ')
    this.log(JSON.stringify(configuration.toJson(), null, '  '))
  }
}

ShowCommand.description = 'Show the current configuration'

module.exports = ShowCommand
