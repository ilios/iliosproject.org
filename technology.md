---
layout: page
title: Technology
permalink: /technology/
topLevel: true
redirect_from: '/tech-specs/'

---

Current Recommended Minimum System Requirements for Ilios 3 Installation:

Standard production-grade Linux or Windows server with at least 500GB of storage available (for learning materials storage):

- Apache: at least 2.2.15
- MySQL: at least 5.1.73 – with the InnoDB backing engines
- PHP: at least 5.4.4 – must have support for mysqli (note mysqli, as opposed to mysql)

Ilios has been successfully implemented as a WIMP (Windows 7/2008R2, IIS, MySQL, PHP) and WAMP (Windows&nbsp;7/2008R2, Apache, MySQL, PHP) stack for those running in a Windows environment. Documentation will be forthcoming for interested parties.

The current deployment of Ilios deploys with its own native authentication system as the default, but may be switched via the configuration file to use shibboleth 2.4 or LDAP for authentication if so desired. 

For further information, please refer to the most recent read me, installation, and release notes available with the code at our Ilios [GitHub page](https://github.com/ilios/ilios){:target="_blank"}.
