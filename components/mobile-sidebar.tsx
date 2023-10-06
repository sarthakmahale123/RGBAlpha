'use client'
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetTrigger,
    SheetContent
} from './ui/sheet'
import { Sidebar } from "./Sidebar";

const MobileSidebar = () => {
    return ( 
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
                <Sidebar />

            </SheetContent>
        </Sheet>
     );
}
 
export default MobileSidebar;