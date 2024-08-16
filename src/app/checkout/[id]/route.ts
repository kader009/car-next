import { connectDb } from '@/app/lib/connectDb';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const booking = request.json();
  const db = await connectDb();
  const bookingCollection = db?.collection('service');

  try {
    const newBooking = await bookingCollection?.insertOne({ booking });

    return NextResponse.json({ message: 'booking a slot successfully' });
  } catch (error) {
    console.log(error);
  }
};
