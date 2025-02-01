import React from 'react';
import { BriefcaseIcon } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Led development of core products and mentored junior developers."
    },
    {
      role: "Software Engineer",
      company: "Innovation Labs",
      period: "2020 - 2022",
      description: "Built scalable web applications using React and Node.js."
    },
    {
      role: "Junior Developer",
      company: "StartUp Inc",
      period: "2018 - 2020",
      description: "Developed and maintained client-facing applications."
    }
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div className="relative">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative">
            <div className="flex items-start">
              {/* Icon and vertical line */}
              <div className="relative mr-6">
                <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6" />
                </div>
                {index !== experiences.length - 1 && (
                  <div className="absolute top-12 left-1/2 w-0.5 h-full -translate-x-1/2 bg-gray-200" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 mt-1">
                  <span className="font-medium">{exp.company}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;