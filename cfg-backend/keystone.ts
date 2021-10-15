import { config } from '@keystone-next/keystone';
import { lists } from './schema';
import { insertSeedData } from './seed-data';

export default config({
  db: {
    provider: 'sqlite',
    url: process.env.DATABASE_URL || 'file:./keystone-example.db',
    async onConnect(context) {
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(context);
      }
    },
  }, 
  lists,
  graphql: {
    cors: {
      origin: '*',
      credentials: false,
      allowedHeaders: 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
    },
  }
});
