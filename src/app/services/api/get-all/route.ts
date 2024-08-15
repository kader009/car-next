import { connectDb } from '@/app/lib/connectDb';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const db = await connectDb();
  const serviceCollection = db?.collection('service');

  try {
    const service = await serviceCollection?.find().toArray();
    return NextResponse.json({ service });
  } catch (error) {
    console.log(error);
  }
};
