oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dnsimple-dyndns
$ dnsimple-dyndns COMMAND
running command...
$ dnsimple-dyndns (--version)
dnsimple-dyndns/3.0.0 linux-x64 node-v20.8.0
$ dnsimple-dyndns --help [COMMAND]
USAGE
  $ dnsimple-dyndns COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dnsimple-dyndns config [FILE]`](#dnsimple-dyndns-config-file)
* [`dnsimple-dyndns hello PERSON`](#dnsimple-dyndns-hello-person)
* [`dnsimple-dyndns hello:world`](#dnsimple-dyndns-helloworld)
* [`dnsimple-dyndns help [COMMANDS]`](#dnsimple-dyndns-help-commands)
* [`dnsimple-dyndns plugins`](#dnsimple-dyndns-plugins)
* [`dnsimple-dyndns plugins:install PLUGIN...`](#dnsimple-dyndns-pluginsinstall-plugin)
* [`dnsimple-dyndns plugins:inspect PLUGIN...`](#dnsimple-dyndns-pluginsinspect-plugin)
* [`dnsimple-dyndns plugins:install PLUGIN...`](#dnsimple-dyndns-pluginsinstall-plugin-1)
* [`dnsimple-dyndns plugins:link PLUGIN`](#dnsimple-dyndns-pluginslink-plugin)
* [`dnsimple-dyndns plugins:uninstall PLUGIN...`](#dnsimple-dyndns-pluginsuninstall-plugin)
* [`dnsimple-dyndns plugins:uninstall PLUGIN...`](#dnsimple-dyndns-pluginsuninstall-plugin-1)
* [`dnsimple-dyndns plugins:uninstall PLUGIN...`](#dnsimple-dyndns-pluginsuninstall-plugin-2)
* [`dnsimple-dyndns plugins:update`](#dnsimple-dyndns-pluginsupdate)
* [`dnsimple-dyndns show`](#dnsimple-dyndns-show)
* [`dnsimple-dyndns sync`](#dnsimple-dyndns-sync)

## `dnsimple-dyndns config [FILE]`

Run through the setup wizard and create a configuration file.

```
USAGE
  $ dnsimple-dyndns config [FILE] [-q] [-t <value>] [-i <value>] [-d <value>] [-s <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -d, --domain=<value>      The Domain Name you wish to use
  -i, --accountId=<value>   DNSimple Account ID
  -q, --quiet               Do not display any output
  -s, --sub-domain=<value>  The Sub-Domain Name you wish to use
  -t, --token=<value>       DNSimple API Token

DESCRIPTION
  Run through the setup wizard and create a configuration file.
  Run through a series of prompts to configure your record, or pass along the appropriate options.

  You can pass partial options and answer the remaining mandatory config settings as prompts.

  Wizard:   'dnsimple-dyndns config'

  Automate: 'dnsimple-dyndns config --token=[DNSIMPLE TOKEN] --domain=example.com --subdomain=local --quiet'
  'dnsimple-dyndns config -t [DNSIMPLE TOKEN] -d example.com -s local -q'

  Partial:  'dnsimple-dyndns config --token=[DNSIMPLE TOKEN]'
```

_See code: [src/commands/config.ts](https://github.com/MatthewBooth/dnsimple-dyndns/blob/v3.0.0/src/commands/config.ts)_

## `dnsimple-dyndns hello PERSON`

Say hello

```
USAGE
  $ dnsimple-dyndns hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/MatthewBooth/dnsimple-dyndns/blob/v3.0.0/src/commands/hello/index.ts)_

## `dnsimple-dyndns hello:world`

Say hello world

```
USAGE
  $ dnsimple-dyndns hello:world

DESCRIPTION
  Say hello world

EXAMPLES
  $ dnsimple-dyndns hello:world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/MatthewBooth/dnsimple-dyndns/blob/v3.0.0/src/commands/hello/world.ts)_

## `dnsimple-dyndns help [COMMANDS]`

Display help for dnsimple-dyndns.

```
USAGE
  $ dnsimple-dyndns help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dnsimple-dyndns.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `dnsimple-dyndns plugins`

List installed plugins.

```
USAGE
  $ dnsimple-dyndns plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dnsimple-dyndns plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/index.ts)_

## `dnsimple-dyndns plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dnsimple-dyndns plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ dnsimple-dyndns plugins:add

EXAMPLES
  $ dnsimple-dyndns plugins:install myplugin 

  $ dnsimple-dyndns plugins:install https://github.com/someuser/someplugin

  $ dnsimple-dyndns plugins:install someuser/someplugin
```

## `dnsimple-dyndns plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dnsimple-dyndns plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dnsimple-dyndns plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/inspect.ts)_

## `dnsimple-dyndns plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dnsimple-dyndns plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ dnsimple-dyndns plugins:add

EXAMPLES
  $ dnsimple-dyndns plugins:install myplugin 

  $ dnsimple-dyndns plugins:install https://github.com/someuser/someplugin

  $ dnsimple-dyndns plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/install.ts)_

## `dnsimple-dyndns plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dnsimple-dyndns plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ dnsimple-dyndns plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/link.ts)_

## `dnsimple-dyndns plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dnsimple-dyndns plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dnsimple-dyndns plugins:unlink
  $ dnsimple-dyndns plugins:remove
```

## `dnsimple-dyndns plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dnsimple-dyndns plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dnsimple-dyndns plugins:unlink
  $ dnsimple-dyndns plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/uninstall.ts)_

## `dnsimple-dyndns plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dnsimple-dyndns plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dnsimple-dyndns plugins:unlink
  $ dnsimple-dyndns plugins:remove
```

## `dnsimple-dyndns plugins:update`

Update installed plugins.

```
USAGE
  $ dnsimple-dyndns plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/update.ts)_

## `dnsimple-dyndns show`

Show the current configuration.

```
USAGE
  $ dnsimple-dyndns show

DESCRIPTION
  Show the current configuration.
  Ensure you have run 'dnsimple-dyndns config' first.

  This will print the JSON output for your current configuration.
```

_See code: [src/commands/show.ts](https://github.com/MatthewBooth/dnsimple-dyndns/blob/v3.0.0/src/commands/show.ts)_

## `dnsimple-dyndns sync`

Sync the configured record with your current IP.

```
USAGE
  $ dnsimple-dyndns sync [-q] [-f]

FLAGS
  -f, --force  Force the sync to happen, even if your IP hasn't changed
  -q, --quiet  Do not display any output

DESCRIPTION
  Sync the configured record with your current IP.

  Will check if your IP has changed since the last update and sync as appropriate.

  Forced update:  'dnsimple-dyndns sync --force'
  'dnsimple-dyndns -f'

  Silent update:  'dnsimple-dyndns sync --quiet'
  'dnsimple-dyndns -q'
```

_See code: [src/commands/sync.ts](https://github.com/MatthewBooth/dnsimple-dyndns/blob/v3.0.0/src/commands/sync.ts)_
<!-- commandsstop -->
