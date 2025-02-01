import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

const Projects = () => {
  const projects = [
    {
      title: "Nirvana Eatery Application",
      description: "This is a mobile appliaction that allows clients to order food from a local eatery",
      image: "/nirvana_eatery_logo.png",
      github: "https://github.com/Shawn-LernsyDev/Eatery-FoodOrdering-Application",
      demo: "https://demo-link-1.com"
    },
    {
      title: "Lernsy",
      description: "This is a mobile application that reserves Cinema seats and also has more interesting features.",
      image: "/1.png",
      github: "https://github.com/Shawn-LernsyDev/Lernsy-Cinema",
      demo: "https://demo-link-2.com"
    },
    {
      title: "Cyber Security Playbook",
      description: "This is a comprehensive, structured guide designed to help organizations manage and respond to cyber threats effectively. It outlines a set of predefined actions, procedures, and protocols to follow during a security incident or breach.",
      image: "/image.png",
      github: "https://azure-buttercup-bcb.notion.site/SHAWN-S-CYBER-SECURITY-PLAYBOOK-59f89e654055459ea22ef0b9fd8149da?pvs=4", //Notion
      demo: "https://demo-link-3.com"
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="p-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            
            <CardContent className="flex-1 p-6">
              <CardTitle className="mb-3">{project.title}</CardTitle>
              <p className="text-gray-600">{project.description}</p>
            </CardContent>
            
            <CardFooter className="p-6 pt-0 gap-4">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button className="flex items-center gap-2" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;