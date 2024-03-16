import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
    const createUser = prisma.user.create({
        data: {
            username: 'nasimReza',
            email: 'nasimreza@gamil.com'
        }
    });

    const updateUser = prisma.user.update({
        where: {
            id: 3,
        },
        data: {
            age: 99
        }
    });

    const [createData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ]);

    console.log(createData, updateData);


};

batchTransaction();