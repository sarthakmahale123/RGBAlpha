const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

async function main(){
    try{
        await db.category.createMany({
            data:[
                {name:"Famous People"},
                {name:"Movies & TV"},
                {name:"Musicians"},
                {name:"Games"},
                {name:"Animals"},
                {name:"Philosphy"},
                {name:"Scientists"},



            ]
        })
    }
    catch(e){
        console.log("Error in seedings ",e);

    }
    finally{
        await db.$disconnect();
    }
}

main();