import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // find all
    const getAllPostFromDB = await prisma.post.findMany();

    // find first or throw error
    // const findFirst = await prisma.post.findFirstOrThrow({
    //     where: {
    //         id: 1
    //     }
    // });

    // find unique
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 9
        },
        select: {
            title: true,
            content: true,
            authorName: true
        }
    })

    console.log(findUnique);


}

main()