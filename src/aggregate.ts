import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregate = async () => {
    const aggregations = await prisma.user.aggregate(
        {
            _count: {
                id: true
            }
        }
    )

    const sumAggregate = await prisma.user.aggregate({
        _min: {
            age: true
        },
        _count: {
            username: true
        }
    })

    //find record in database
    const countData = await prisma.user.count();
    console.log(countData);

}

aggregate();