FROM ubuntu:latest as ubuntu
COPY docker/start-jekyll.sh /usr/local/sbin/
RUN apt-get update && \
    apt-get install -y ruby && \
    apt-get install -y gem && \
    apt-get install -y bundler && \
    chmod +x /usr/local/sbin/start-jekyll.sh

EXPOSE 4000

WORKDIR /srv/app
ENTRYPOINT [ "start-jekyll.sh" ]

