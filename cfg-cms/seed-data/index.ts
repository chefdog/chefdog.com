import { KeystoneContext } from '@keystone-next/keystone/types';
import { authors } from './data';

type AuthorProps = {
    name: string;
    email: string;
  };

export async function insertSeedData(context: KeystoneContext) {
    console.log(`🌱 Inserting seed data`);

    const createAuthor = async (authorData: AuthorProps) => {
        let author = null;
        try {
          author = await context.query.User.findOne({
            where: { email: authorData.email },
            query: 'id',
          });
        } catch (e) {}
        if (!author) {
          author = await context.query.User.createOne({
            data: authorData,
            query: 'id',
          });
        }
        return author;
    };

    for (const author of authors) {
        console.log(`👩 Adding author: ${author.name}`);
        await createAuthor(author);
    }

    

    console.log(`✅ Seed data inserted`);
    console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
    process.exit();
}