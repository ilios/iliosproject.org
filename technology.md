---
layout: page
title: Technology
permalink: /technology/
topLevel: false
---
Current Recommended Minimum System Requirements:

Standard production-grade Linux or Windows server with at least 500GB of storage available (for learning materials storage):

- Apache: at least 2.2.13 (or IIS 6+)
- MySQL: at least 5.0.77 – with both the InnoDB and MyISAM backing engines
- PHP: at least 5.3.x – must have support for mysqli (note mysqli, as opposed to mysql)

Ilios has been successfully implemented as a WIMP (Windows 7/2008R2, IIS, MySQL, PHP) and WAMP (Windows&nbsp;7/2008R2, Apache, MySQL, PHP) stack for those running in a Windows environment. Documentation will be forthcoming for interested parties.

The current deployment of Ilios deploys with its own native authentication system as the default, but may be switched via the configuration file to use shibboleth 2.4 for authentication if so desired. For further information, please refer to the most recent read me and release notes available with the code at our Ilios [GitHub page](https://github.com/ilios/ilios).
