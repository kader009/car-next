import { connectDb } from '@/app/lib/connectDb';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, { params }: any) => {
  const db = await connectDb();
  const serviceCollection = db?.collection('service');

  try {
    const service = await serviceCollection?.findOne({
      _id: params.id,
    });

    return NextResponse.json({ service });
  } catch (error) {
    console.log(error);
  }
};
