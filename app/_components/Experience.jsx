import React from 'react';
import { BriefcaseIcon } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Applications Developer (Dynamics 365 Business Central)",
      company: "Teclogix Solutions Limited",
      period: "February, 2025 - Present",
      description: "Led development of core products and mentored junior developers."
    },
    {
      role: "Software Engineer",
      company: "Call Center International Kenya",
      period: "November, 2023 – January, 2025",
      description: "• I address receipt complaint and request to confirm their integrity under Instacart"
    },
    {
      role: "Intern",
      company: "Kenyatta National Hospital",
      period: "May, 2023 - July, 2023",
      description: "User support in both Hardware and Software Issues, including the Hospital Management System and Network infrastructure."
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