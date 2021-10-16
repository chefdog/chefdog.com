
# Introduction

Chefdog.com solution consists of two project; cfg-app and cfg-backend.
The frontend is an angular 12 project, called cfg-app and cfg-backend is based on keystoneJs CMS.

## CFG-APP

### Theme

The current theme, located in assets/theme is under a commercial license. 
The theme author: Damian Komoński (komon.ski)

Should you want to use the theme, you will have to buy a license:

https://themeforest.net/item/dblog-modern-personal-portfolio-and-blog-html-template/18545819


## CFG-BACKEND

### config

CORS rules are placed in the keystone config (keystone.ts), change these according to your own hosting platform.


### Base Project - Blog

This project implements a basic **Blog**, with `Posts` and `Authors`.

Use it as a starting place for learning how to use Keystone.

### Instructions

To run this project:

1. Clone the Keystone repository locally
2. Navigate to this directory `cd examples/blog`
3. Run `yarn dev`

This will start the Admin UI at [localhost:3000](http://localhost:3000).
You can use the Admin UI to create items in your database.

You can also access a Apollo Sandbox at [localhost:3000/api/graphql](http://localhost:3000/api/graphql), which allows you to directly run GraphQL queries and mutations.

Congratulations, you're now up and running with Keystone! 🚀

#### Optional: add sample data

This example includes sample data. To add it to your database:

1. Ensure you’ve initialised your project with `yarn dev` at least once.
2. Run `yarn seed-data`. This will populate your database with sample content.
3. Run `yarn dev` again to startup Admin UI with sample data in place.
