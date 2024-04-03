FROM ubuntu:latest as ubuntu
RUN apt-get update && \
    apt-get install -y ruby && \
    apt-get install -y gem && \
    apt-get install -y bundler && \
    echo "#!/bin/bash" > /usr/local/sbin/start-jekyll.sh && \
    echo "cd /srv/app" >> /usr/local/sbin/start-jekyll.sh && \
    echo "bundle install" >> /usr/local/sbin/start-jekyll.sh && \
    echo "bundle exec jekyll serve --host 0.0.0.0" >> /usr/local/sbin/start-jekyll.sh && \
    chmod +x /usr/local/sbin/start-jekyll.sh

EXPOSE 4000

WORKDIR /srv/app
ENTRYPOINT [ "start-jekyll.sh" ]

