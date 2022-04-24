import { KeystoneContext } from '@keystone-6/core/types';
import { authors, posts, companies } from './data';

type AuthorProps = {
    name: string;
    email: string;
    password: string;
};

type CompanyProps = {
  name: string;
  description: string,
  email: string;
};

type PostProps = {
  title: string;
  slug: string;
  status: string;
  publishDate: string;
  author: Object;
  content: string;
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

    const createCompany = async (companyData: CompanyProps) => {
      let company = null;
      try {
        company = await context.query.Company.findOne({
          where: { email: companyData.email },
          query: 'id',
        });
      } catch (e) {}
      if (!company) {
        company = await context.query.Company.createOne({
          data: companyData,
          query: 'id',
        });
      }
      return company;
    };

    for (const company of companies) {
      console.log(`👩 Adding company: ${company.name}`);
      await createCompany(company);
    }


    const createPost = async (postData: PostProps) => {
      console.log(postData.author);
      let users = await context.query.User.findMany({
        where: { name: { equals: postData.author } },
        query: 'id',
      });

      postData.author = { connect: { id: users[0].id } };
      await context.query.Post.createOne({
        data: postData,
        query: 'id',
      });
    };

    for (const post of posts) {
      console.log(`📝 Adding post: ${post.title}`);
      await createPost(post);
    }
  
    console.log(`✅ Seed data inserted`);
    console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
    process.exit();
}