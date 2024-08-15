import { connectDb } from '@/app/lib/connectDb';
import { services } from '@/app/lib/services';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const db = await connectDb();
  const serviceCollection = db?.collection('service');

  try {
    await serviceCollection?.deleteMany();
    const response = await serviceCollection?.insertMany(services as any[]);
    return NextResponse.json({ message: 'data seeded successfully' });
  } catch (error) {
    console.log(error);
  }
};
