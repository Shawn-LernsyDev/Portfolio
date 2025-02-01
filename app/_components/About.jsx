import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-4">
      {/* Badges */}
      <div className="flex gap-3 mb-12">
        <Badge variant="secondary" className="px-4 py-1 text-sm flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          Cyber Security
        </Badge>
        <Badge variant="secondary" className="px-4 py-1 text-sm flex items-center gap-2">
          <Code2 className="w-4 h-4" />
          Software Developer
        </Badge>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image with modern shape */}
        <div className="relative">
          <div className="w-full aspect-square relative">
            {/* Decorative background shapes */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-[60px] rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-[60px] -rotate-3" />
            
            {/* Image container */}
            <div className="absolute inset-0 overflow-hidden rounded-[60px]">
              <img
                src="/api/placeholder/400/400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Securing Digital Frontiers & Building Solutions</h2>
          
          <p className="text-gray-600">
            As a Software Developer with a focus on Cybersecurity, I combine technical expertise with security-first thinking. My work spans developing secure applications and implementing robust security measures to protect digital assets.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Security Expertise</h3>
              <p className="text-gray-600">
                Specialized in penetration testing, security auditing, and implementing secure coding practices across web applications.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Development Focus</h3>
              <p className="text-gray-600">
                Experienced in full-stack development with emphasis on secure architecture, API security, and modern frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;