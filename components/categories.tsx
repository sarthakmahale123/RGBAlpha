'use client'

import { Category } from "@prisma/client"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"
import qs from 'query-string'

interface CategoryProps{
    data:Category[]
}

export const Categories = ({
    data
}:CategoryProps) => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const category = searchParams.get('name');
    const categoryId = searchParams.get('categoryId')
    const onClick = (id:string|undefined)=> {
        const query = {categoryId:id}

        const url = qs.stringifyUrl({url:window.location.href,query:query},{skipEmptyString:true,skipNull:true})

        router.push(url)
    }
    
    
    return (
        

        <div className="w-full overflow-x-auto space-x-2 flex p-1 ">

            <Button 
            onClick={() => onClick(undefined)}
            className={cn(`
            flex items-center text-color-white hover:text-cyan-800
            text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10
            hover:opacity-75 transition

            `,
            !categoryId? "bg-primary/25":'bg-primary/10'
            )}
            
            >
                Hello
            </Button>
            
            {data.map((dataa) => (
                <Button 
                key={dataa.id}
                className={cn(`
                flex items-center text-color-white hover:text-cyan-800
                text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10
                hover:opacity-75 transition
                
                `,
                dataa.id === categoryId?'bg-primary/25':'bg-primary/10')}
                
                onClick={() => onClick(dataa.id)}>
                {dataa.name}
                </Button>
                
            ))}

        </div>
    )
}