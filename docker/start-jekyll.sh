#!/bin/bash
cd /srv/app
bundle install
bundle exec jekyll serve --host 0.0.0.0

