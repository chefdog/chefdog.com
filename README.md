# Chefdog dev adventures: Docker, Docker Compose, keystonejs 6, Azure and NextJS

## 1. Introduction

This repo is an howto get Keystone6 up and running in a docker container, setup a blog in keystone, add a frontend
and deploy to azure. It is a work in progress repo and it is done when it is done.

Now I am sure that there a many solutions and that there are better solutions as what I am presenting here. But I tried many approaches and used a couple of guides, none of them worked with Keystone6. This guide provides a working solution for keystone6 and docker. 

## 2. Requirements

- [Visual Studio Code 1.66.0](https://code.visualstudio.com/download)
- [Docker desktop 4.6.1](https://www.docker.com/get-started/)
- Windows 11 (or any OS you like, but windows 11 is what I use)
- [KeystoneJS](https://keystonejs.com/docs) -  (will be initialized in this tutorial)
- sqlite (will be initialized+installed in this tutorial)
- [nodejs 16.14.2](https://nodejs.org/en/)
- [postgresql](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- [pgadmin4](https://www.pgadmin.org/)

Visual Studio Code extensions:

- [Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Sqlite exension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)
- [Azure Storage](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestorage)

## 3. Project setup

This development adventures series, consists of a couple folders.
- _docs; the markdown files
- _sources; free images that are used. Images are downloaded from [vecteezy.com](https://www.vecteezy.com)
- chefdog.keystone; the CMS
- chefdog.frontend; the nextjs website
- chefdog.postgres; sql files

The frontend was based on [Landing page](https://www.tailwindtoolbox.com/templates/landing-page-demo.php)

## 4. Table of contents

- Part 1: [Setup keystone in docker (done)](/_docs/keystone6-part1.md)
- Part 2: [Adding postgress sql](/_docs/keystone6-part2.md)
- Part 3: [Expanding the blog sample](/_docs/keystone6-part3.md). 
- Part 4: [Adding a frontend in nextjs](/_docs/keystone6-part4.md). (inprogress)
- Part 5: [Docker Compose](/_docs/keystone6-part5.md) (inprogress)
- Part 6: Azure (todo)
- Part 7: [Thoughts and issues](/_docs/keystone6-part7.md) 

