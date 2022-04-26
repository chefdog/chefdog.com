
# Chefdog dev adventure : Part 2, keystonejs6 and postrgresql

## 1.A. install postgresql

[Postgresql 14.2](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

First setup a dbuser and password for the keystone database. For development purpose I made an user with super-user role.
Create a `.env` file in the root of the application (cfg-cms in my case) and create the following variable,
or copy the .env.example file and rename it to .env en change its content. Remember to add .env to your .gitignore file

`DB_URL=postgres://your-db-user:your-db-password@your-db-server-address/your-db-name;`

Create a new file, called config.ts in the root of the application. Its content should containe:

```typescript
export const DATABASE_URL = process.env.DB_URL || `postgres://${process.env.USER}@localhost/keystone-6-example`;
```

### 1.B. postgres docker

The other option is to pull a ready to go docker image. 

[Docker postgres](https://hub.docker.com/_/postgres)

Open visual studio code, open een new terminal and get the postgres docker image: `docker pull postgres`.
To run the image: `docker run --name some-name-postgres -p 5432:5432 -e POSTGRES_PASSWORD=yourPassWord -d postgres`

### 1.B.1

In order to setup the database for keystone, I have added a sql script that will be executed in the dockerfile

## 2. Configure keystone

[See official documentation](https://keystonejs.com/docs/apis/config#postgresql)

My setup is:

```typescript
db: {
      provider: 'postgresql',
      url: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB_NAME}`,
      enableLogging: true,
      useMigrations: true,
      idField: { kind: 'uuid' },
    }
```
