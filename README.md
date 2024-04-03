[![Netlify Status](https://api.netlify.com/api/v1/badges/c57a716e-4f40-4d77-8496-747a6eb50470/deploy-status)](https://app.netlify.com/sites/iliosproject/deploys)

## About

This is the code-base for the new Ilios Project Website.

## Development

For developing locally, we recommend using Docker with the provided Dockerfile.

To use Docker, you will need to have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed on your system, and you will need to add the path to the iliosproject.org codebase (this folder!) to your docker configuration by visiting `Resources -> File Sharing` in your Docker Desktop Settings and adding the path there.

1. From within the iliosproject.org codebase directory, run the following command to build the docker image locally:
```bash
docker build --no-cache -t iliosproject .
```

2. Continuing from within the same directory, run the docker image:
```bash
docker run --rm --name iliosproject -p 4000:4000 -v .:/srv/app -t iliosproject
```

When the Docker container starts, it will build the iliosproject.org website locally, and will let you know when it is ready. When the containe is fully started, you can visit your local site in your browser by visiting http://localhost:4000.


### Developing locally without using Docker
To run the site locally using Jekyll, `ruby`, `gem` and `bundler` are assumed to be installed. If these packages already exist on your system, just do the following:

First build the packages and dependencies:
```bash
bundle install
```

Then serve via Jekyll.
```bash
bundle exec jekyll serve
```
The site should now be available for viewing in your browser at http://localhost:4000
