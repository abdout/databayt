'use client';

import { Button } from "@/components/ui/button"
import { appsData } from "./contant"
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";

const LinkButton = ({ href, type }: { href: string; type: "repository" | "preview" }) => {
  const { t } = useDocsTranslation();
  
  const Repository = () => (
    <svg className="w-3 h-3 ltr:mr-1 rtl:ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="currentColor" d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.25 3.25 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A3 3 0 0 1 6 15h13.5Z"/>
      <path fill="currentColor" d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2z"/>
    </svg>
  )
  
  const Preview = () => (
    <svg className="w-3 h-3 ltr:mr-1 rtl:ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3.5"/>
        <path d="M21 12s-1-8-9-8s-9 8-9 8"/>
      </g>
    </svg>
  )
  
  return (
    <Button variant="ghost" size="sm" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center">
        {type === "repository" ? <Repository /> : <Preview />} 
        <span>{t(`docs.upwork.apps.${type}`, { defaultMessage: type === "repository" ? "Repo" : "View" })}</span>
      </a>
    </Button>
  )
}

export default function ActiveApps() {
  const { t } = useDocsTranslation();
  
  return (
    <div>
      <h4 className="rtl:text-right">{t('docs.upwork.apps.title', { defaultMessage: 'Active apps' })}</h4>
      <div className="grid grid-cols-1 my-6 ltr:mr-8 rtl:ml-8">
        {appsData.map((app, index) => (
          <div key={app.name}>
            <div className="flex flex-col sm:flex-row gap-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="font-mono text-sm text-muted-foreground min-w-[20px]">{index + 1}.</div>
                <div className="font-medium rtl:text-right">
                  {t(`docs.upwork.apps.data.${app.id}.name`, { defaultMessage: app.name })}
                </div>
              </div>
              <div className="text-sm text-muted-foreground sm:ml-[140px] rtl:text-right rtl:leading-loose">
                {t(`docs.upwork.apps.data.${app.id}.description`, { defaultMessage: app.description })}
              </div>
              <div className="flex gap-2 mt-2 sm:mt-0">
                <LinkButton href={app.repositoryUrl} type="repository" />
                <LinkButton href={app.previewUrl} type="preview" />
              </div>
            </div>
            {index < appsData.length - 1 && (
              <hr className="border-t border-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
