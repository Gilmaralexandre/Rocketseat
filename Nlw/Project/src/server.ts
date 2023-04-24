import fastify from 'fastify'
import {PrismaClient} from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/hello', async() =>{
    const habits = await prisma.habits.findMany()
        
    return habits
        
})

app.listen({
    port: 3333
}).then(() => {
    console.log('Http Server running ...')
})