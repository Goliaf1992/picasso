import React from "react";
import TemplateCard from "../template-card/TemplateCard";
import { Template } from "../../templates/[id]/page";

interface TemplateSectionProps {
  templates: Template[];
}

const TemplateSection: React.FC<TemplateSectionProps> = ({ templates }) => {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 py-20 text-center h-auto min-h-screen flex flex-col items-center justify-around z-10 bg-white shadow-lg rounded-[0%_0%_30%_30%_/_30%_30%_40px_40px] 
      sm:rounded-[0%_0%_40%_40%_/_40%_40%_50px_50px] 
      md:rounded-[0%_0%_50%_50%_/_50%_50%_70px_70px]  -mt-[67px]"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in text-[var(--color-text-gray)] !pt-[67px] !pb-[67px] sm:pt-0 sm:pb-0">
        Попробуйте сейчас
      </h1>
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </section>
  );
};

export default TemplateSection;