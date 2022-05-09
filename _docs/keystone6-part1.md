# Keystone6 docker

## 4. Keystone

First step is to setup keystone. Make sure you installed nodejs.
Open Visual Studio Code and open a new terminal.

Run the following command in the root folder: `npm init keystone-app`. On the question "What directory should create-keystone-app generate your app into?"
I use cfg-cms as application name, you could use anything.

Next goto the aplpication folder, `cd cfg-cms`, run `npm run dev` and lets see if the keystone cms works. Open http://localhost:3000
Remember we are working with Sqlite. Sqlite is an awesome database, but should not be used for larger projects in production environments.

I made some changes in order to build a frontend and get the production version running:
- In keystone.ts 

I have added the following in the config:

cors:

`server: {
      cors: {
        origin: 'http://localhost:3500',
        credentials: false,
        allowedHeaders: 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
      },
    }`

And images:
`images: {
      upload: 'local',
      local: {
        storagePath: 'public/images',
        baseUrl: '/images',
      },
    },`

- Auth
Added an hardcode session secret : `sessionSecret = '0657DAC5-0923-4D2D-B585-35CE0A5184A8';`
Remember this needs to come from your environment settings, or better, from a ci/cd pipeline.
This will do, for now.

Now lets see if you can get a production version up and running. This will be done locally first, in order to spot any error.
In Visual Studio Code, goto the app (`cd cfg-cms`) open a new terminal and run `npm run build`. And when done `npm run start`.

Make sure to shutdown the running version, before you continue.

## 5. Docker

Open VS Code Command Palette (F1) and type `add docker files to workspace`, then select the Docker: Add Docker files to workspace command.
Node.js > cfg-cms\package.json > 3000 > No

This wil generate a docker file and .dockerignore. We need to change the contents of the docker file. 
The docker files uses a similar setup as https://v5.keystonejs.com/guides/deployment but with changes in order to get keystone6 working.
The main solution was to certain copy files before the npm install command. And make sure the right user is executing the steps.

## 6. Build a docker image

Open VS Code Command Palette (F1) and type `Docker Images: Build Image`. If everything is succesfull, open the docker extension in Visual Studio Code.
You should see your image under the Images tab. Open docker desktop and run the image. Make sure you add "optional settings", add port 3000 under localhost.
Running the image could also be done with Visual Studio Code.

Log info from within the container can be accessed by clicking on the running container. And In Visual Studio Code, using the docker extension, you can look at the filesystem.
If everything is correct you should be able to login into keystone on localhost:3000

This completes part 1 of this tutorial.
