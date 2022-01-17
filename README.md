
# Introduction

Chefdog.com solution consists of two project; cfg-app and cfg-backend.
The frontend is an angular 12 project, called cfg-app and cfg-backend is based on keystoneJs CMS.

!!! WARNING !!!
This repository is under development and will not run yet.

## Legal issues

The frontend styling template cannot be used. The frontend styling template has been build by
Damian Komoński (komon.ski). All those files are located under assets.

## Instructions

To run this project:

1. Clone the this repository locally
2. Open solution with your favorite IDE, Visual Studio Code for example and open 2 terminals
3. In terminal 1, navigate to this directory `cd cfg-backend`
4. run `npm install`
5. Run `npm run dev`

This will start the Keystone Admin UI at [localhost:3000](http://localhost:3000).
You can use the Admin UI to create items in your database.
You can also access a Apollo Sandbox at [localhost:3000/api/graphql](http://localhost:3000/api/graphql), which allows you to directly run GraphQL queries and mutations.

6. In terminal 2, navigate to this directory `cd cfg-app`
7. run `npm install`
8. run `ng serve`

This will start the angular app at [localhost:4200](http://localhost:4200).


## CFG-APP

### Theme

The current theme, located in assets/theme is under a commercial license. 
The theme author: Damian Komoński (komon.ski)

Should you want to use the theme, you will have to buy a license:

https://themeforest.net/item/dblog-modern-personal-portfolio-and-blog-html-template/18545819


## CFG-BACKEND

### config

1. CORS rules are placed in the keystone config (keystone.ts), change these according to your own hosting platform.
2. Image upload handling (I use the image field type in post and articles), is in keystone config.


### Base Project - Blog

This project implements a basic **Blog**, with `Posts` and `Authors`.


#### Optional: add sample data

This example includes sample data. To add it to your database:

1. Ensure you’ve initialised your project with `yarn dev` at least once.
2. Run `yarn seed-data`. This will populate your database with sample content.
3. Run `yarn dev` again to startup Admin UI with sample data in place.
