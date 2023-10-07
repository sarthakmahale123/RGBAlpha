'use client'

import { Button } from "@/components/ui/button";

import { Ghost } from "lucide-react";
import { useRouter } from "next/navigation";


const data = [
    {
    "id":1,
    "label":"Physics"
    },
    {
    "id":3,
    "label":"Maths"
    },
    {
    "id":4,
    "label":"Maths"
    },
    {
    "id":5,
    "label":"Chemistry"
    },
        {
    "id":6,
    "label":"Physics"
    },
        {
    "id":7,
    "label":"Maths"
    },
        {
    "id":8,
    "label":"Chemistry"
    },
        {
    "id":9,
    "label":"Maths"
    },
        {
    "id":10,
    "label":"Physics"
    },
    
]


const Quizzes = () => {
    const quizzes = data;

    const router = useRouter();

    return ( 
        <div className="flex flex-col gap-4 m-10 items-center justify-start ">
            {quizzes.map((dat) => (
                <Button variant="ghost" className="mx-6 bg-neutral-200 hover:bg-black hover:text-cyan-100 rounded-xl w-200 flex flex-row items-center px-20 py-8 "
                key={dat.id} onClick={() => router.push(`/quiz/${dat.id}`)}
                >   
                    <div className="p-1">QuizId : {dat.id}</div>
                    <div className="p-4 "  >
                    
                        {dat.label}</div>
                
                </Button>
            ))}

        </div>
     );
}
 
export default Quizzes;