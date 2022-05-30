
# Chefdog dev adventure : Part 2, keystonejs6 and postgresql

## 1.A. install postgresql

[Postgresql 14.2](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

Setup a dbuser and password for the keystone database. For development purpose I made an user with super-user role.

### 1.B. postgres docker

The other option is to pull a ready to go docker image. 

[Docker postgres](https://hub.docker.com/_/postgres)

Open visual studio code, open een new terminal and get the postgres docker image: `docker pull postgres`.
To run the image: `docker run --name some-name-postgres -p 5432:5432 -e POSTGRES_PASSWORD=yourPassWord -d postgres`

### 1.B.1

In order to setup the database for keystone, I have added a sql script that will be executed in the dockerfile

## 2. Configure keystone

[See official documentation](https://keystonejs.com/docs/apis/config#postgresql)

Create a new file, called keystone-settings.ts in the root of the application. Its content should contain something like this:

```typescript
const KeystoneSettings = () => {    
    let DATABASE_URL = 'postgres://cfg-keystone-db-admin:1ch@fdog33@localhost:5432/cfg-keystone-db';

    if(process.env.NODE_ENV === 'production') {
        DATABASE_URL = `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
    }
    return DATABASE_URL;    
}

export default KeystoneSettings;
```

and in the keystone.ts file, use the settings

```typescript
db: {
      provider: 'postgresql',
      url: KeystoneSettings(),
      enableLogging: true,
      useMigrations: true,
      idField: { kind: 'uuid' },
    }
```
