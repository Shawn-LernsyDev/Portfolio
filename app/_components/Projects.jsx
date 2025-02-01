import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

const Projects = () => {
  const projects = [
    {
      title: "Secure Chat App",
      description: "End-to-end encrypted chat application built with React and Node.js. Features real-time messaging and file sharing with military-grade encryption.",
      image: "/api/placeholder/400/200",
      github: "https://github.com/yourusername/project1",
      demo: "https://demo-link-1.com"
    },
    {
      title: "Portfolio Scanner",
      description: "Automated security scanner for web applications. Identifies vulnerabilities and provides detailed reports with remediation steps.",
      image: "/api/placeholder/400/200",
      github: "https://github.com/yourusername/project2",
      demo: "https://demo-link-2.com"
    },
    {
      title: "Crypto Tracker",
      description: "Real-time cryptocurrency tracking dashboard with price alerts and portfolio management features.",
      image: "/api/placeholder/400/200",
      github: "https://github.com/yourusername/project3",
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