import { connectDb } from '@/app/lib/connectDb';
import NextAuth, { Account, Awaitable, RequestInternal, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { Db } from 'mongodb';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 3600 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined,
        req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>
      ): Awaitable<User | null> {
        const { email, password } = credentials;

        if (!email || !password) {
          return null;
        }

        const db: Db | undefined = await connectDb();

        if (!db) {
          throw new Error('Failed to connect to the database.');
        }

        const currentUser = await db.collection('carUser').findOne({ email });

        if (!currentUser) {
          console.error('No user found with the email');
          return null;
        }

        const passwordMatch = bcrypt.compareSync(
          password,
          currentUser.password
        );

        if (!passwordMatch) {
          return null;
        }

        return currentUser;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: User; account: Account }) {
      if (account?.provider === 'google' || account?.provider === 'github') {
        const { name, email, image } = user;
        console.log(user);
        // try {
        //   const db = await connectDb();
        //   const userCollection = db?.collection('carUser');
        //   const userExists = userCollection?.findOne({ email });

        //   if (!userExists) {
        //     const response = await userCollection?.insertOne(user);
        //     return user;
        //   }
        // } catch (error) {
        //   console.log(error);
        // }
        return true;
      } else {
        return user;
      }
    },
  },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
