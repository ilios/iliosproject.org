<!-- markdownlint-disable MD041 -->

[![Netlify Status](https://api.netlify.com/api/v1/badges/c57a716e-4f40-4d77-8496-747a6eb50470/deploy-status)](https://app.netlify.com/sites/iliosproject/deploys)

## About

This is the codebase for the Ilios Project Website at [https://www.iliosproject.org](https://www.iliosproject.org).

## Development

For developing locally, we recommend using Docker with the provided Dockerfile.

### Requirements

To use Docker, you will need to have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed on your system, and you will need to add the path to the iliosproject.org codebase (this folder!) to your docker configuration by visiting `Resources -> File Sharing` in your Docker Desktop Settings and adding the path there. See below for more info...

### Get the code

Clone the code from [https://github.com/ilios/iliosproject.org](https://github.com/ilios/iliosproject.org) - NOTE: you must have a Github username and password with proper permissions to clone code from this repository:

```bash
git clone git@github.com:/ilios/iliosproject.org
```

When the code is checked out, change into the newly-created `iliosproject.org` directory:

```bash
cd iliosproject.org
```

You are now in the codebase directory from where all of the rest of the following commands will be run.  To see the full path of the codebase directory you are in, run `pwd` to get the `Present Working Directory` path:

```bash
pwd
```

This is your codebase directory path. Make sure that the path displayed here is added as a "Shared folder" in your Docker Desktop settings. Open your Docker Desktop settings and go to `Resources -> File Sharing` and select `Create Share +` and browse to and select your codebase folder.

### Steps to run Docker

```bash
docker compose up
```

When the Docker container starts, it will build the iliosproject.org website locally, and will let you know when it is ready. Once the container is fully started, you can visit your local site in your browser by visiting [http://localhost:4000](http://localhost:4000).

When you are done editing the code as-needed and would like to stop the iliosproject container, press `CTRL-C` in the same terminal window that is running the docker image. Once the container is completely stopped, you will see that the Jekyll process in your terminal window has now exited cleanly.

When you are ready to work on the iliosproject.org codebase again, do a `git pull` and repeat the steps above.

## Developing locally without using Docker

To run the site locally using Jekyll, `ruby`, `gem` and `bundler` are assumed to be installed. If these packages already exist on your system, just do the following:

First build the packages and dependencies:

```bash
bundle install
```

Then serve via Jekyll.

```bash
bundle exec jekyll serve
```

The site should now be available for viewing in your browser at [http://localhost:4000](http://localhost:4000).
