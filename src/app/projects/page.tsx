import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Download, Gamepad, Github, Globe, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "Projects | NeoWay"
}

export default function Projects() {
    const projects = [
        // Websites
        {
            name: "NeoWay Website",
            description: "This very website",
            icon: <Rss size={24} />,
            repo: "https://github.com/NeoWayy/website",
            site: "https://neoway.top",
            download: "",
            category: "website",
            tags: ["Web"],
            featured: false
        },
        // Game Mods
        {
            name: "NeoBonerooms",
            description: "Mod for The Bonerooms, comes with fixes and features Version 1.1.0",
            icon: <Gamepad size={24} />,
            repo: "https://github.com/NeoWayy/NeoBonerooms",
            download: "https://github.com/NeoWayy/NeoBonerooms/releases/download/v1.1.0/NeoBonerooms.dll",
            category: "games",
            tags: ["Mod", "Unity", "BepinEx"],
            featured: true
        }
    ];

    const categories = {
        featured:   "Featured Projects",
        website:    "Websites & Web Apps",
        games:      "Game Mods",
        frameworks: "Modding Frameworks",
        software:   "Desktop Software"
    };

    return (
        <div className="min-h-screen">
            <div className="container mx-auto py-8 px-4">
                <div className="text-center mb-8">
                    <h1 className="animate__animated animate__fadeInDown text-4xl font-bold mb-4">Our Projects</h1>
                    <p className="animate__animated animate__fadeInUp text-muted-foreground max-w-2xl mx-auto">
                        Here are projects and tools that we made. Some of these will be maintained.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="animate__animated animate__fadeInDown text-2xl font-bold mb-6 border-b pb-2">
                        Featured Projects
                    </h2>
                    <div className="animate__animated animate__fadeInUp grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.filter((project) => project.featured).map((project, index) => (
                            <Card key={index} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-full bg-primary/10">
                                                {project.icon}
                                            </div>
                                            <h3 className="text-xl font-bold">{project.name}</h3>
                                        </div>
                                        <div className="flex gap-1">
                                            {project.tags && project.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{project.description}</p>
                                </CardContent>
                                <CardFooter className="flex gap-2 flex-wrap">
                                    {project.repo && (
                                        <Link href={project.repo} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button className="w-full" size="sm">
                                                <Github className="mr-2" size={16} />
                                                Github
                                            </Button>
                                        </Link>
                                    )}
                                    {project.site && (
                                        <Link href={project.site} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button variant="secondary" className="w-full" size="sm">
                                                <Globe className="mr-2" size={16} />
                                                Visit Site
                                            </Button>
                                        </Link>
                                    )}
                                    {project.download && (
                                        <Link href={project.download} className="flex-1">
                                            <Button className="w-full" size="sm">
                                                <Download className="mr-2" size={16} />
                                                Download
                                            </Button>
                                        </Link>
                                    )}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>

                {Object.entries(categories)
                .filter(([categoryId]) => categoryId !== "featured")
                .map(([categoryId, categoryName]) => {
                    const categoryProjects = projects.filter(
                    (project) => project.category === categoryId
                    );
                    if (categoryProjects.length === 0) return null;

                    return (
                    <div key={categoryId} className="mb-12">
                        <h2 className="animate__animated animate__fadeInDown text-2xl font-bold mb-6 border-b pb-2">
                        {categoryName}
                        </h2>
                        <div className="animate__animated animate__fadeInUp grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryProjects.map((project, index) => (
                            <Card
                            key={index}
                            className="flex flex-col h-full transition-all duration-200 hover:shadow-lg"
                            >
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-primary/10">
                                    {project.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">
                                    {project.name}
                                    </h3>
                                </div>
                                <div className="flex gap-1">
                                    {project.tags &&
                                    project.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} variant="secondary">
                                        {tag}
                                        </Badge>
                                    ))}
                                </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">
                                {project.description}
                                </p>
                            </CardContent>
                            <CardFooter className="flex gap-2 flex-wrap">
                                {project.repo && (
                                <Link
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1"
                                >
                                    <Button
                                    className="w-full"
                                    size="sm"
                                    >
                                    <Github className="mr-2" size={16} />
                                    GitHub
                                    </Button>
                                </Link>
                                )}
                                {project.site && (
                                <Link
                                    href={project.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1"
                                >
                                    <Button
                                    variant="secondary"
                                    className="w-full"
                                    size="sm"
                                    >
                                    <Globe className="mr-2" size={16} />
                                    Visit Site
                                    </Button>
                                </Link>
                                )}
                                {project.download && (
                                <Link href={project.download} className="flex-1">
                                    <Button className="w-full" size="sm">
                                    <Download className="mr-2" size={16} />
                                    Download
                                    </Button>
                                </Link>
                                )}
                            </CardFooter>
                            </Card>
                        ))}
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}