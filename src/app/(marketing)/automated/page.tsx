'use client';
import React, { useState } from 'react';
import ProjectCard from '@/components/automated/card';
import PageHeader from '@/components/atom/page-header';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLocale } from "@/hooks/use-locale";
import { useAutomatedI18n } from '@/components/automated/use-automated-i18n';

const Automated = () => {
  const { t } = useLocale();
  const automatedProjects = useAutomatedI18n();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProjects = searchQuery 
    ? automatedProjects.filter(project => 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : automatedProjects;
  
  return (
    
      <div className="py-8">
      <div className="flex flex-col items-center space-y-8">
      <PageHeader title={t("pages.automated.title")} />
        
        <div className="relative w-full max-w-xs">
          <Search className="absolute rtl:right-3 ltr:left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            type="search"
            placeholder={t("pages.automated.searchPlaceholder")}
            className="w-full rtl:pr-10 ltr:pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            src={project.src}
            name={project.name}
          />
        ))}
      </div>
      </div>
    </div>
     
   
  );
};

export default Automated;
