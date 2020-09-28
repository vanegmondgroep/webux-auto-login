# WinCC WebUX Auto Login

WinCC WebUX provides a solution for device- and browser-independent operator control and monitoring of the automation system. This script allows you to automatically login into WebUX using parameters in the request URL.

## Installation

1. [Download the files from this repository.](https://github.com/vanegmondgroep/webux-auto-login/archive/master.zip)
2. Copy `scripts/veg-auto-login.js` to `C:\inetpub\wwwroot\Siemens\WebRH\public\content\` on the WebUX server.
3. Add the following line to the `head` section of `C:\inetpub\wwwroot\Siemens\WebRH\views\index.jade`:

```
script(src='/content/veg-auto-login.js', type='text/javascript')
```

## Usage

Open WebUX using the following URL: `https://<server-ip>/?webux-user=<username>&webux-pass=<password>&auto-login=yes`. The script will try to automatically login using the provided username and password.