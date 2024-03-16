import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
    // offset pagination
    const offsetData = await prisma.post.findMany({
        skip: 5,
        take: 2
    })

    // console.log(offsetData);

    // courser based pagination
    const courserData = await prisma.post.findMany({
        skip: 1,
        take: 2,
        cursor: {
            id: 25
        }
    })
    // console.log(courserData);


    // sorting
    const sorting = await prisma.post.findMany({
        orderBy: {
            title: "desc"
        }
    })
    console.log(sorting);


}

paginationSorting();