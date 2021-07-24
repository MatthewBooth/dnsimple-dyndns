const writeJsonFile = require('write-json-file')
const path = require('path')
const fs = require('fs')
const formatISO = require('date-fns/formatISO')

class Config {
  constructor (configDir) {
    this._configFile = path.join(configDir, 'config.json')

    const hasConfig = fs.existsSync(this._configFile)
    if (hasConfig) {
      let data = fs.readFileSync(this._configFile)
      let json = JSON.parse(data)
      this.fromJson(json.config)
    } else {
      this._createNewConfig()
    }
  }

  get token () {
    return this._token || null
  }

  set token (value) {
    this._token = value
  }

  get accountId () {
    return this._accountId || null
  }

  set accountId (value) {
    this._accountId = value
  }

  get domainId () {
    return this._domainId || null
  }

  set domainId (value) {
    this._domainId = value
  }

  get recordId () {
    return this._recordId || null
  }

  set recordId (value) {
    this._recordId = value
  }

  get recordName () {
    return this._recordName || null
  }

  set recordName (value) {
    this._recordName = value
  }

  get ipAddress () {
    return this._ipAddress || null
  }

  set ipAddress (value) {
    this._ipAddress = value
  }

  get createdAt () {
    return this._createdAt || null
  }

  set createdAt (value) {
    this._createdAt = value
  }

  get updatedAt () {
    return this._updatedAt || null
  }

  set updatedAt (value) {
    this._updatedAt = value
  }

  _createNewConfig () {
    this.token = ''
    this.accountId = ''
    this.domainId = ''
    this.recordId = ''
    this.recordName = ''
    this.ipAddress = ''
    this.createdAt = this.getISODateString()
    this.updatedAt = this.getISODateString()
    this.writeConfig()
  }

  toJson () {
    return {
      config: {
        token: this.token,
        accountId: this.accountId,
        domainId: this.domainId,
        recordId: this.recordId,
        recordName: this.recordName,
        ipAddress: this.ipAddress,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      }
    }
  }

  fromJson (json) {
    this.token = json.token
    this.accountId = json.accountId
    this.domainId = json.domainId
    this.recordId = json.recordId
    this.recordName = json.recordName
    this.ipAddress = json.ipAddress
    this.createdAt = json.createdAt
    this.updatedAt = json.updatedAt
  }

  getISODateString () {
    return formatISO(new Date())
  }

  writeConfig () {
    return writeJsonFile.sync(this._configFile, this.toJson())
  }

  updateConfig () {
    this.updatedAt = this.getISODateString()
    return writeJsonFile.sync(this._configFile, this.toJson())
  }

  isConfiguredFully () {
    return this.isConfiguredMinimally() && this.domainId !== null && this.recordId !== null
  }

  isConfiguredMinimally () {
    return this.token !== null && this.accountId !== null
  }
}

module.exports = Config
