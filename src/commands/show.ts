import {Command} from '@oclif/core'
import AppConfig from '../lib/app-config'

export default class Show extends Command {
  static description = `Show the current configuration.
Ensure you have run 'dnsimple-dyndns config' first.

This will print the JSON output for your current configuration.
`

  public async run(): Promise<void> {
    const appConfig = new AppConfig(this.config.configDir)

    if (!appConfig.isConfiguredMinimally()) {
      this.error('No config.')
    }

    if (!appConfig.isConfiguredFully()) {
      this.warn('You are missing a domain and/or record configuration.')
      this.warn('Please create a domain or run "dnsimple-dyndns config"')
    }

    this.log('Configuration: ')
    this.log(JSON.stringify(appConfig.toJson(), null, '  '))
  }
}
