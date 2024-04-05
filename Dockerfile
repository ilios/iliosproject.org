FROM ruby:3.3.0
RUN gem install rubygems-bundler && \
    echo "#!/bin/bash" > /usr/local/sbin/start-jekyll.sh && \
    echo "cd /srv/app" >> /usr/local/sbin/start-jekyll.sh && \
    echo "bundle install" >> /usr/local/sbin/start-jekyll.sh && \
    echo "bundle exec jekyll serve --host 0.0.0.0" >> /usr/local/sbin/start-jekyll.sh && \
    chmod +x /usr/local/sbin/start-jekyll.sh

EXPOSE 4000

WORKDIR /srv/app
ENTRYPOINT [ "start-jekyll.sh" ]

