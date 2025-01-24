import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
    await prisma.task.create({
        data: {
            title: 'task1',
            color: 'blue',
            completed: false,
        }
    })

    const allTasks = await prisma.task.findMany()
    console.log(allTasks)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })