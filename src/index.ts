import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is title",
    //         content: "This is Content...2",
    //         authorName: "Md. Nasim Reza"
    //     }
    // });

    const getAllPostFromDB = await prisma.post.findMany();
    console.log(getAllPostFromDB);


}

main()