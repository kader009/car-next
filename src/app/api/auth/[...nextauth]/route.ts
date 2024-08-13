import { connectDb } from '@/app/lib/connectDb';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { Db } from 'mongodb';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 3600 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
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
          console.log('no user found with the email');
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
  ],
  callbacks: {},
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
