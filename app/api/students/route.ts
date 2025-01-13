import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  const students = await prisma.student.findMany();
  return NextResponse.json(students);
}

export async function POST(request: Request) {
  const { firstName, lastName, age } = await request.json();
  const student = await prisma.student.create({
    data: { firstName, lastName, age },
  });
  return NextResponse.json(student, { status: 201 });
}

export async function DELETE(request: Request) {
  const { ids }: { ids: number[] } = await request.json();
  await prisma.student.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
  return NextResponse.json({ message: 'Students deleted successfully' });
}

// export async function GET_BY_ID({ params }: { params: { id: string } }) {
//   const student = await prisma.student.findUnique({
//     where: { id: Number(params.id) },
//   });
//   return NextResponse.json(student);
// }
