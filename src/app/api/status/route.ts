import { PrismaClient } from '../../../../generated/prisma'

const prisma = new PrismaClient()

export async function GET() {
    const status = await prisma.status.findFirst({
        orderBy: {
            createdAt: 'desc'
        }
    });
    return Response.json(status);
}