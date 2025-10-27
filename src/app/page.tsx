import React from "react";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Gamepad } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Home | NeoWay"
}

export default function Home() {
    return (
        <div className="min-h-[89vh] flex flex-col">
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="items-center justify-center flex mb-8">
                        <div className="relative">
                            <Image src="/neoLogo.png" unoptimized={true} width={160} height={160} alt="NeoLogo" className="transition-transform hover:scale-105 duration-300" />
                        </div>
                    </div>
                </div>
                <h1 className="animate__animated animate__fadeInDown text-6xl md:text-7xl font-extrabold mb-2 bg-primary bg-clip-text text-transparent bg-gradient-to-r from-primary t-accent/60 dark:text-primary">
                    NeoWay
                </h1>
                <p className="animate__animated animate__fadeInUp text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                    A orgnatization that started in 2025 and founded by neoislost
                </p>

                <div className="animate__animated animate__fadeInUp flex flex-col sm:flex-row gap-6 justify-center mb-16">
                    <Link href="#aboutus">
                        <Button size="lg" variant="outline" className="text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            About Us
                        </Button>
                    </Link>
                    <Link href="/projects">
                        <Button size="lg" className="text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Explore our Projects
                        </Button>
                    </Link>
                    <Link href="#ourteam">
                        <Button size="lg" variant="outline" className="text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Our Team
                        </Button>
                    </Link>
                </div>
            </main>

            <section id="aboutus" className="py-16 px-4 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        About Us
                    </h2>
                    <p className="animate__animated animate__fadeInUp text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                        NeoWay is a new organization founded in 2025 by NeoIsLost. We're just getting started, creating tools and game mods that make gaming more fun and customizable.
                    </p>
                </div>
            </section>

            <section id="activeprojects" className="py-16 px-4 bg-muted/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Our Active Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="animate__animated animate__fadeInUp hover:shadow-lg transition-shadow duration-300 transition-all duration-300 transform hover:scale-105">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                    <Globe className="text-primary-foreground" />
                                </div>
                                <CardTitle>Website</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    This very website you are viewing now!
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="animate__animated animate__fadeInUp hover:shadow-lg transition-shadow duration-300 transition-all duration-300 transform hover:scale-105">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                    <Gamepad className="text-primary-foreground" />
                                </div>
                                <CardTitle>NeoBonerooms</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    Mod for The Bonerooms, comes with fixes and features
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="ourteam" className="py-16 px-4 bg-primary/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Our Team
                    </h2>
                    <div className="items-center justify-center flex mb-8">
                        <div className="relative px-4">
                            <Image src="/team/neoislost.jpg" width={160} height={160} alt="neoislost" className="transition-transform hover:scale-105 duration-300" />
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"></div>
                            <h1 className="text-2xl flex justify-center">NeoIsLost</h1>
                            <p className="flex justify-center">Founder & Owner</p>
                        </div>
                        <div className="relative px-4">
                            <Image src="/team/ilik3trains.gif" width={160} height={160} alt="ilik3trains" className="transition-transform hover:scale-105 duration-300" />
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"></div>
                            <h1 className="text-2xl flex justify-center">ilik3trains</h1>
                            <p className="flex justify-center">Developer & Tester</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
