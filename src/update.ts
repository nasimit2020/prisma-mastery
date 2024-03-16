import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const update = async () => {
    // single update
    // const singleUpdate = await prisma.post.update({
    //     where: {
    //         id: 7
    //     },
    //     data: {
    //         title: "Title 5",
    //         content: "Content 5",
    //         authorName: "Author 5"
    //     }
    // });


    // const manyUpdate = await prisma.post.updateMany({
    //     where: {
    //         title: "Title 2"
    //     },
    //     data: {
    //         published: true
    //     }
    // })

    const updateUnique = await prisma.post.upsert({
        create: {
            title: "Post 1",
            content: "Content 1",
        },
        update: {
            authorName: "Nasim"
        },
        where: {
            id: 9
        }
    })

    console.log(updateUnique);

}

update();