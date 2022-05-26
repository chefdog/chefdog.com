# Chefdog dev adventure : Part 5, nextjs

## 1. Install nextjs app
run `npx create-next-app@latest --typescript`

## 2. Configuration

Open package.json and edit the `dev` command into: 

```json
"scripts": {
    "dev": "next dev -p 3500"
},
```

## 3. Template

I have used a very simple free template, called Landing. There is very little styling need, the ones I made are located in:
`styles\global.css`

And some javascript, these are included in de the `pages/index.tsx` file.

In the `sources` folder, you will find all the image sources, with licenses. All images are free to use.

## 4. Frontend nextjs & Keystone

This blog sample uses graphql setup in order to connect to the keystone backend.
All the graphql queries are in the `lib/queries.tsx` file and the client is the `appollo-client.tsx`.
Next to those additions, I used a standard structure.
