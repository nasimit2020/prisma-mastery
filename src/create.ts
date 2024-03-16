import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    // const createUser = await prisma.user.create({
    //     data: {
    //         username: 'user2',
    //         email: 'user2@ph.com',
    //         role: UserRole.user
    //     }
    // })

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: 'This is bio of user 1...',
    //         userId: 1
    //     }
    // })

    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "Software Engineering"
    //     }
    // })

    const createPost = await prisma.post.create({
        data: {
            title: 'this is title',
            content: 'this is content of the author 1',
            authorId: 1,
            postCategory: {
                create: [
                    {
                        categoryId: 2
                    },
                    {
                        categoryId: 3
                    },
                    {
                        categoryId: 4
                    },
                ]
            }
        },
        include: {
            postCategory: true
        }
    })

    console.log(createPost);


}

main()