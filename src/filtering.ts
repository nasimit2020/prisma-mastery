import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "title"
                    }
                },
                {
                    published: true
                }
            ]
        }
    })


    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: "title"
                    }
                },
                {
                    published: true
                }
            ]
        }
    })

    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                {
                    title: {
                        contains: 'that'
                    }
                }
            ]
        }
    })

    const startsWith = await prisma.user.findMany({
        where: {
            email: {
                startsWith: 'user1'
            }
        }
    })

    const endsWith = await prisma.user.findMany({
        where: {
            email: {
                endsWith: 'ph.com'
            }
        }
    })

    const equalsWith = await prisma.user.findMany({
        where: {
            email: {
                equals: 'user2@ph.com'
            }
        }
    })

    const userNameArray = ['user1', 'user3', 'user5'];
    const userNamesByIn = await prisma.user.findMany({
        where: {
            username: {
                in: userNameArray
            }
        }
    })

    const userNameByBotIn = await prisma.user.findMany({
        where: {
            username: {
                notIn: userNameArray
            }
        }
    })

    const inDepthData = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            post: {
                include: {
                    postCategory: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    })
    console.dir(inDepthData, { depth: Infinity });

};

filtering();