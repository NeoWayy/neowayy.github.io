"use client";

import Image from "next/image";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation/navgationMenu";
import { Button } from "./ui/button";

function Navigation() {
    return (
        <nav className="border-b bg-background sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16">
                    <div className="w-48">
                        <Link className="text-2xl font-bold hover:text-primary flex text-center items-center gap-2 transition-all" href={"/"}>
                            <Image src="/neoLogo.png" alt="NeoLogo" width={50} height={50} />
                            NeoWay
                        </Link>
                    </div>
                    
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Button variant="ghost" asChild>
                                        <a href="/projects">Projects</a>
                                    </Button>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;