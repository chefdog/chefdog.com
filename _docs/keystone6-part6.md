## Issues and thoughts

Many times I deleted the postgres docker image and keep running into errors that most of the user data is not available in the database.
This sounds silly, because indeed you delete your database with its structure. But I haven't got around to include a proper step in the docker file to create the database.
So I wind up running `npm run dev` and `npm run seed-data` locally and after that re-launch the keystone instance.