---
layout: page
title: Technology
permalink: /technology/
topLevel: true
redirect_from: '/tech-specs/'

---

## Supported Browsers

Chrome || Firefox ESR || Edge || Safari || Safari iOS |
--- | ---| --- | ---| --- | ---| --- | ---| --- | ---| --- |
![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.6.0/chrome/chrome_48x48.png) || ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.6.0/firefox/firefox_48x48.png) || ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.6.0/edge/edge_48x48.png) || ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.6.0/safari/safari_48x48.png) || ![Safari iOS](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.6.0/safari-ios/safari-ios_48x48.png)
Latest ✔ || Latest ✔ || Latest ✔ || Latest ✔ || Latest ✔ |

__Current (as of 3/2022) Recommended Minimum System Requirements for Ilios 3 Installation:__

Standard production-grade Linux or Windows server with at least 500GB of storage available (for learning materials storage):

Ilios 3 uses a Symfony (PHP/SQL) backend to serve its API, so these tools and their required dependencies need to be installed before you can install the application itself. Here at the Ilios Project, we currently run and recommend running Ilios 3 using a "LAMP" (Linux Apache MySQL PHP) technology stack with - the following software packages and versions:

- CentOS 7 - Any modern Linux should work, but we recommend Redhat (RHEL, CentOS, or Fedora) or Ubuntu
- MySQL using the InnoDB database engine (*v5.5 or later required*, 5.7+ recommended)
- PHP - In order to ensure the best security and performance of the application overall, we have adopted a policy of requiring the latest version of PHP for running Ilios. (see [PHP Version Policy](https://github.com/ilios/ilios/blob/master/docs/ilios_php_version_policy.md))

PHP should configured with a 'memory_limit' setting of at least 386MB and have the following required packages/modules/extensions enabled:

- php-mbstring - for UTF-8 support
- php-ldap - for ldap-connectivity support (when using LDAP)
- php-xml
- php-pecl-apcu - caching
- php-mysql - DB connectivity
- php-mysqlnd - DB connectivity
- php-pdo - DB connectivity
- php-zip - for native zip package [de]compression during the composer installation process

CentOS, RedHat, and Fedora Linux distributions come with SELinux installed and enabled by default. SELinux, aka "Security-Enhanced Linux", greatly limits many actions typically allowed out-of-the-box on most Linux distros so, if you seem to be having issues with your Ilios installation not working correctly and you have SELinux installed and enabled, we recommend you review your SELinux settings and/or check out our [Troubleshooting](https://github.com/ilios/ilios/blob/master/docs/install.md#troubleshooting) section in the code documents.

You must enable URL-rewriting on your webserver. For those using Apache, this can be done by installing and enabling the 'mod_rewrite' module. In IIS, this is handled via the [Microsoft IIS URL Rewrite extension](https://www.iis.net/downloads/microsoft/url-rewrite).

You will also need the Composer PHP package management tool. If you do not have it, you can learn about it and download it at [https://getcomposer.org](https://getcomposer.org){:target="_blank"}.

 Several institutions have successfully deployed Ilios using Microsoft IIS on Windows as their webserver, but we do not recommend it as we do not have alot of experience with it ourselves and we've only ever support Ilios on Linux systems. That being said, if you MUST use IIS for Windows and are having trouble getting Ilios running properly, please contact the Ilios Project Support Team at [support@iliosproject.org](mailto:support@iliosproject.org){:target="_blank"} if you have any problems and we might be able to help you out!

The current deployment of Ilios deploys with its own native authentication system as the default, but may be switched via the configuration file to use shibboleth 2.4, CAS, or LDAP for authentication if so desired.

For further information, please refer to the most recent read me, installation, and release notes available with the code at our Ilios [GitHub page](https://github.com/ilios/ilios){:target="_blank"} and [Installation Instructions](https://github.com/ilios/ilios/blob/master/docs/install.md).
