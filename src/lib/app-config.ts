import * as path from 'node:path'
import * as fs from 'node:fs'
import {formatISO} from 'date-fns'

export default class AppConfig {
  private readonly _configFile: string;
  _token = '';
  _accountId = 0;
  _domainId = '';
  _recordId = 0;
  _recordName = '';
  _ipAddress = '';
  _createdAt = '';
  _updatedAt = '';

  constructor(configDir: string) {
    this._configFile = path.join(configDir, 'config.json')
    const hasConfig = fs.existsSync(this._configFile)

    if (hasConfig) {
      const data: Buffer = fs.readFileSync(this._configFile)
      const json = JSON.parse(data.toString())
      this.fromJson(json.config)
    } else {
      fs.mkdirSync(configDir, {recursive: true})
      this._createNewConfig()
    }
  }

  writeConfig(): void {
    fs.writeFileSync(this._configFile, JSON.stringify(this.toJson()), 'utf8')
  }

  updateConfig(): void {
    this.updatedAt = this.getISODateString()
    this.writeConfig()
  }

  getISODateString(): string {
    return formatISO(new Date())
  }

  private _createNewConfig() {
    this.token = ''
    this.accountId = 0
    this.domainId = ''
    this.recordId = 0
    this.recordName = ''
    this.ipAddress = ''
    this.createdAt = this.getISODateString()
    this.updatedAt = this.getISODateString()
    this.writeConfig()
  }

  toJson(): Record<string, any> {
    return {
      config: {
        token: this.token,
        accountId: this.accountId,
        domainId: this.domainId,
        recordId: this.recordId,
        recordName: this.recordName,
        ipAddress: this.ipAddress,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
      },
    }
  }

  fromJson(json: Record<string, any>): void {
    this.token = json.token
    this.accountId = json.accountId
    this.domainId = json.domainId
    this.recordId = json.recordId
    this.recordName = json.recordName
    this.ipAddress = json.ipAddress
    this.createdAt = json.createdAt
    this.updatedAt = json.updatedAt
  }

  isConfiguredFully(): boolean {
    return this.isConfiguredMinimally() && this.domainId !== null && this.recordId !== null
  }

  isConfiguredMinimally(): boolean {
    return this.token !== null && this.accountId !== null
  }

  get token(): string {
    return this._token || ''
  }

  set token(value: string) {
    this._token = value
  }

  get accountId(): number {
    return this._accountId || 0
  }

  set accountId(value: number) {
    this._accountId = value
  }

  get domainId(): string {
    return this._domainId || ''
  }

  set domainId(value: string) {
    this._domainId = value
  }

  get recordId(): number {
    return this._recordId || 0
  }

  set recordId(value: number) {
    this._recordId = value
  }

  get recordName(): string {
    return this._recordName || ''
  }

  set recordName(value: string) {
    this._recordName = value
  }

  get ipAddress(): string {
    return this._ipAddress || ''
  }

  set ipAddress(value: string) {
    this._ipAddress = value
  }

  get createdAt(): string {
    return this._createdAt || ''
  }

  set createdAt(value: string) {
    this._createdAt = value
  }

  get updatedAt(): string {
    return this._updatedAt || ''
  }

  set updatedAt(value: string) {
    this._updatedAt = value
  }
}
