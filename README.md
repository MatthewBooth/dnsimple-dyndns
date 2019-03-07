# DNSimple - Dynamic DNS

This package is a simple tool to dynamically update a DNS record with the IP address of your current machine.

This is especially useful running on a server or computer that is behind a dynamic public IP address.

## Installation

```bash
npm install --global dnsimple-dyndns

OR

npm i -g dnsimple-dyndns
```

## Usage
Basic usage of the package can be found below. 

You must set some environment variables, or pass them along with the command.

### CLI
For example, you could use run:

```bash
DOMAIN=example.com RECORD_ID=1234567 ACCOUNT_ID=9876543 TOKEN=ToKeNToKeNToKeN dnsimple-dyndns show
```
### Environment
Add the following to your global environment (E.G. `.bashrc`, `.zshrc`, `/etc/environment`):

```bash
DOMAIN=example.com
RECORD_ID=1234567
ACCOUNT_ID=9876543
TOKEN=ToKeNToKeNToKeN
```

Then, you can simply run `dnsimple-dyndns show` from your commandline

### Script

You can also wrap them in a BASH script:

```bash
#!/usr/bin/env bash
export DOMAIN=example.com
export RECORD_ID=1234567
export ACCOUNT_ID=9876543
export TOKEN=ToKeNToKeNToKeN

dnsimple-dyndns $*
```

and execute like `./dns.sh update`

## Help
```bash
Usage: dnsimple-dyndns [options] [command]

Options:
  -V, --version     output the version number
  -h, --help        output usage information

Commands:
  show              Show current configuration
  new [subdomain]   Create a new subdomain and record with your current IP
  update [options]  Update the configured record with your current IP
```

## Suggested use
A good use of this package would be in conjunction with a crontask that executes on a server or computer at your home.

### Cron task
1. Find out where the package was installed:

    ```bash
    npm root -g dnsimple-dyndns
    ```
    
    You should get a response, such as `/usr/local/lib/node_modules/bin/dnsimple-dyndns`.

2. Create a crontab entry by typing the following command
    ```bash
    crontab -e
    ```
    
    and then add the following line

    ```bash
    */5 * * * * DOMAIN=example.com RECORD_ID=1234567 ACCOUNT_ID=9876543 TOKEN=ToKeNToKeNToKeN /usr/local/lib/node_modules/bin/dnsimple-dyndns update
    ```
    
    This will create a crontask that run every 5 minutes. 
    
    Please see [Cron Cheatsheet](https://devhints.io/cron) for more assistance with this.
