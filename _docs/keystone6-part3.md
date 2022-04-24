# Chefdog dev adventure : Part 3, keystonejs6 updates

Lets expand our cms construction. What I want to do is write reviews on coffee. So what I need for that, are:

## 1. an option to store and update company information

Open schema.ts and and after Tag:

```typescript
Company: list({
    ui: {
      isHidden: false,
    },
    fields: {
      name: text(),
      description: text(),
      logo: image(),
      posts: relationship({ ref: 'Post.company', many: false }),
    },
  }),
  ```

  And lets create a relationship from posts to company:

  ```

  ```

## 2. an option to store and update review data.



## 3. Seed data

In the `cfg-cms\seed-data` folder there is a setup on populating the database. 
The package.json now has an extra option and to run the seed-data execute `npm run seed-data` in a terminal.
The seed data option is configured in the keystone.ts file, like so:

```typescript
db: {
      provider: 'postgresql',
      url: DATABASE_URL,
      enableLogging: true,
      useMigrations: false,
      idField: { kind: 'uuid' },
      async onConnect(context) {
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(context);
        }
      },
    },
  ```


