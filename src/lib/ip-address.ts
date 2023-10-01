import axios from 'axios'
import {Command} from '@oclif/core'

export default class IpAddress {
  public async get(command: Command) : Promise<string> {
    let ipAddress = ''
    await axios.get('https://api.ipify.org?format=json')
    .then(response => {
      ipAddress = response.data.ip
    })
    .catch(error => {
      command.error(error.message)
    })
    return ipAddress
  }
}
