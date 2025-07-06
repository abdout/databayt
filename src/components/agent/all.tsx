import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useLocale } from '@/hooks/use-locale';

// Upwork SVG as a React component to match Lucide signature
const UpworkIcon = ({ size = 24, className, ...props }: { size?: number; className?: string } & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439" />
  </svg>
);

const AgentCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background hover:border-primary transition-[border-color] duration-200 text-foreground hover:text-foreground cursor-pointer p-2"
      )}
    >
      <div className={cn(
        "flex h-[180px] flex-col justify-between rounded-sm p-6"
      )}>
        <div className="text-foreground">
          <Icon size={24} />
        </div>
        <div className="space-y-2 text-start rtl:text-end">
          <h4 className="text-foreground font-medium font-arabic">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground font-light leading-relaxed font-arabic">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const AllAgents = () => {
  const { t } = useLocale()
  
  const agents = [
    {
      id: 1,
      title: t('pages.agent.upwork.title'),
      slug: 'upwork',
      icon: UpworkIcon,
      description: t('pages.agent.upwork.description'),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {agents.map((agent) => (
        <Link
          key={agent.id}
          href={`/agent/${agent.slug}`}
        >
          <AgentCard {...agent} />
        </Link>
      ))}
    </div>
  );
};

export default AllAgents;