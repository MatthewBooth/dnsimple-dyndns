DNSimple Dynamic DNS
===============

A simple Node JS application to sync a DNSimple DNS record of your choosing with your dynamic IP.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dnsimple-dyndns.svg)](https://npmjs.org/package/dnsimple-dyndns)
[![Downloads/week](https://img.shields.io/npm/dw/dnsimple-dyndns.svg)](https://npmjs.org/package/dnsimple-dyndns)
[![License](https://img.shields.io/npm/l/dnsimple-dyndns.svg)](https://github.com/MatthewBooth/dnsimple-dyndns/blob/master/package.json)
[![Waffle.io - Columns and their card count](https://badge.waffle.io/MatthewBooth/dnsimple-dyndns.svg?columns=all)](https://waffle.io/MatthewBooth/dnsimple-dyndns)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Cron job](#cron-job)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dnsimple-dyndns
$ dnsimple-dyndns COMMAND
running command...
$ dnsimple-dyndns (-v|--version|version)
dnsimple-dyndns/2.0.0 linux-x64 node-v10.15.2
$ dnsimple-dyndns --help [COMMAND]
USAGE
  $ dnsimple-dyndns COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dnsimple-dyndns config`](#dnsimple-dyndns-config)
* [`dnsimple-dyndns help [COMMAND]`](#dnsimple-dyndns-help-command)
* [`dnsimple-dyndns show`](#dnsimple-dyndns-show)
* [`dnsimple-dyndns sync`](#dnsimple-dyndns-sync)

## `dnsimple-dyndns config`

Run through the setup Wizard and create a configuration file

```
USAGE
  $ dnsimple-dyndns config

OPTIONS
  -d, --domain=domain        The Domain Name you wish to use
  -q, --quiet                Do not display any output
  -s, --subDomain=subDomain  The Sub-Domain Name you wish to use
  -t, --token=token          DNSimple API Token belonging to an account
```

_See code: [src/commands/config.js](https://github.com/MatthewBooth/dnsimple-dyndns/blob/v2.0.0/src/commands/config.js)_

## `dnsimple-dyndns help [COMMAND]`

display help for dnsimple-dyndns

```
USAGE
  $ dnsimple-dyndns help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `dnsimple-dyndns show`

Show the current configuration

```
USAGE
  $ dnsimple-dyndns show
```

_See code: [src/commands/show.js](https://github.com/MatthewBooth/dnsimple-dyndns/blob/v2.0.0/src/commands/show.js)_

## `dnsimple-dyndns sync`

Sync the configured record with your current IP

```
USAGE
  $ dnsimple-dyndns sync

OPTIONS
  -f, --force  Force the sync to happen, even if your IP hasn't changed
  -q, --quiet  Do not display any output
```

_See code: [src/commands/sync.js](https://github.com/MatthewBooth/dnsimple-dyndns/blob/v2.0.0/src/commands/sync.js)_
<!-- commandsstop -->

# Cron job
1. Configure your record by running:
        
2. Find out where the package was installed:

    ```sh-session
    $ npm root -g dnsimple-dyndns
    ```
    
    You should get a response, such as `/usr/local/lib/node_modules/bin/dnsimple-dyndns`.

3. Create a crontab entry by typing the following command
    ```sh-session
    $ crontab -e
    ```
    
    and then add the following line

    ```bash
    */5 * * * * /usr/local/lib/node_modules/bin/dnsimple-dyndns sync
    ```
    
    This will create a crontask that run every 5 minutes. 
    
    Please see [Cron Cheatsheet](https://devhints.io/cron) for more assistance with this.
