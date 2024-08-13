import { connectDb } from '@/app/lib/connectDb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const newUser = await request.json();

  try {
    const db = await connectDb();
    const userCollection = db?.collection('carUser');
    const exists = await userCollection?.findOne({ email: newUser.email });

    if (exists) {
      return NextResponse.json({ message: 'user exists' }, { status: 404 });
    }

    const response = await userCollection?.insertOne(newUser);

    return NextResponse.json(
      { message: 'user created', response },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error during user creation:', error);
    return NextResponse.json(
      { message: 'something went wrong', error},
      { status: 500 }
    );
  }
}
