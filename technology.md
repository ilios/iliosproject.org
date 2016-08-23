---
layout: page
title: Technology
permalink: /technology/
topLevel: true
redirect_from: '/tech-specs/'

---

__Current (as of 8/2016) Recommended Minimum System Requirements for Ilios 3 Installation:__

Standard production-grade Linux or Windows server with at least 500GB of storage available (for learning materials storage):

Ilios 3 uses a Symfony (PHP/SQL) backend to serve its API, so these tools and their required dependencies need to be installed before you can install the application itself. Here at the Ilios Project, we currently run and recommend running Ilios 3 using a "LAMP" (Linux Apache MySQL PHP) technology stack with the following software packages and versions:

- CentOS 7 - Any modern Linux should work, but we recommend Redhat (RHEL, CentOS, or Fedora) or Ubuntu
- MySQL using the InnoDB database engine (v5.1 or later required, 5.5+ recommended)
- PHP v5.6 or later (available for CentOS and RHEL from [https://www.softwarecollections.org/en/](https://www.softwarecollections.org/en/){:target="_blank"})

PHP should configured with a 'memory_limit' setting of at least 386MB and have the following required packages/modules/extensions enabled:

- php-mbstring - for UTF-8 support
- php-ldap - for ldap-connectivity support (when using LDAP)
- php-xml
- php-domxml
- php-pecl-apcu - caching
- php-mysql - DB connectivity
- php-mysqlnd - DB connectivity
- php-pdo - DB connectivity

You will also need the Composer PHP package management tool. If you do not have it, you can learn about it and download it at [https://getcomposer.org](https://getcomposer.org){:target="_blank"}.

 Several institutions have successfully deployed Ilios using Microsoft IIS on Windows as their webserver, but we do not recommend it as we do not have alot of experience with it ourselves and we've only ever support Ilios on Linux systems. That being said, if you MUST use IIS for Windows and are having trouble getting Ilios running properly, please contact the Ilios Project Support Team at [support@iliosproject.org](mailto:support@iliosproject.org){:target="_blank"} if you have any problems and we might be able to help you out!

The current deployment of Ilios deploys with its own native authentication system as the default, but may be switched via the configuration file to use shibboleth 2.4 or LDAP for authentication if so desired.

For further information, please refer to the most recent read me, installation, and release notes available with the code at our Ilios [GitHub page](https://github.com/ilios/ilios){:target="_blank"}.
