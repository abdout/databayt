'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";

export default function PatternPage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.pattern.title', { defaultMessage: 'Patterns' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.pattern.introduction.consistency', { 
          defaultMessage: '**Consistency** is the foundation of maintainable code. At Databayt, we follow established patterns that ensure our codebase remains scalable, readable, and collaborative. Every pattern serves a purpose — from atomic components to server actions, from naming conventions to file organization.' 
        })}
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.pattern.introduction.atomicDesign', { 
          defaultMessage: 'We believe in **atomic design principles** where small, reusable components compose into larger, more complex systems. This isn\'t just about React components; it\'s a philosophy that extends to functions, hooks, utilities, and entire application architecture.' 
        })}
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.pattern.introduction.realWorld', { 
          defaultMessage: 'The patterns documented here emerge from real-world usage across our [open source repositories](https://github.com/abdout/databayt), tested in production environments, and refined through community feedback. Every decision prioritizes developer experience, type safety, and long-term maintainability.' 
        })}
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.pattern.namingConventions.title', { defaultMessage: 'Naming Conventions' })}
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.namingConventions.filesAndFolders.title', { defaultMessage: 'Files and Folders' })}
      </h3>
      <ul className="list-disc pl-6 rtl:pr-6 rtl:pl-0 space-y-2 mb-6 rtl:text-right rtl:leading-loose">
        <li>
          {t('docs.pattern.namingConventions.filesAndFolders.components', { 
            defaultMessage: '**Components**: PascalCase for component files (`Button.tsx`, `UserProfile.tsx`)'
          })}
        </li>
        <li>
          {t('docs.pattern.namingConventions.filesAndFolders.pages', { 
            defaultMessage: '**Pages**: kebab-case for route segments (`user-profile`, `sign-in`)'
          })}
        </li>
        <li>
          {t('docs.pattern.namingConventions.filesAndFolders.utilities', { 
            defaultMessage: '**Utilities**: camelCase for utility files (`formatDate.ts`, `validateEmail.ts`)'
          })}
        </li>
        <li>
          {t('docs.pattern.namingConventions.filesAndFolders.constants', { 
            defaultMessage: '**Constants**: SCREAMING_SNAKE_CASE for constant files (`API_ENDPOINTS.ts`)'
          })}
        </li>
        <li>
          {t('docs.pattern.namingConventions.filesAndFolders.hooks', { 
            defaultMessage: '**Hooks**: camelCase with `use` prefix (`useAuth.ts`, `useLocalStorage.ts`)'
          })}
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.namingConventions.variablesAndFunctions.title', { defaultMessage: 'Variables and Functions' })}
      </h3>
      <ul className="list-disc pl-6 rtl:pr-6 rtl:pl-0 space-y-2 mb-6 rtl:text-right rtl:leading-loose">
        <li>
          {t('docs.pattern.namingConventions.variablesAndFunctions.components', { 
            defaultMessage: '**Components**: PascalCase (`export function UserCard()`)'
          })}
        </li>
        <li>
          {t('docs.pattern.namingConventions.variablesAndFunctions.functions', { 
            defaultMessage: '**Functions**: camelCase (`export function formatCurrency()`)'
          })}
        </li>
        <li>
          {t('docs.pattern.namingConventions.variablesAndFunctions.variables', { 
            defaultMessage: '**Variables**: camelCase (`const userData = await fetchUser()`)'
          })}
        </li>
        <li>
          {t('docs.pattern.namingConventions.variablesAndFunctions.constants', { 
            defaultMessage: '**Constants**: SCREAMING_SNAKE_CASE (`const API_BASE_URL = \'https://api.example.com\'`)'
          })}
        </li>
        <li>
          {t('docs.pattern.namingConventions.variablesAndFunctions.types', { 
            defaultMessage: '**Types/Interfaces**: PascalCase (`interface UserData`, `type ApiResponse`)'
          })}
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.namingConventions.databaseAndAPI.title', { defaultMessage: 'Database and API' })}
      </h3>
      <ul className="list-disc pl-6 rtl:pr-6 rtl:pl-0 space-y-2 mb-6 rtl:text-right rtl:leading-loose">
        <li>
          {t('docs.pattern.namingConventions.databaseAndAPI.tables', { 
            defaultMessage: '**Database tables**: snake_case (`user_profiles`, `order_items`)'
          })}
        </li>
        <li>
          {t('docs.pattern.namingConventions.databaseAndAPI.routes', { 
            defaultMessage: '**API routes**: kebab-case (`/api/user-profile`, `/api/order-history`)'
          })}
        </li>
        <li>
          {t('docs.pattern.namingConventions.databaseAndAPI.env', { 
            defaultMessage: '**Environment variables**: SCREAMING_SNAKE_CASE (`DATABASE_URL`, `NEXT_PUBLIC_API_KEY`)'
          })}
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.pattern.functionPatterns.title', { defaultMessage: 'Function Patterns' })}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.pattern.functionPatterns.arrowFunctions.title', { defaultMessage: 'Arrow Functions' })}
          </h4>
          <div className="text-sm text-muted-foreground mb-4 rtl:text-right rtl:leading-loose">
            {t('docs.pattern.functionPatterns.arrowFunctions.description', { 
              defaultMessage: 'Preferred for utilities, event handlers, and inline functions. Excellent for maintaining lexical scope and modern JavaScript patterns.'
            })}
          </div>
          <pre className="text-xs bg-muted p-2 rounded">
            {t('docs.pattern.functionPatterns.arrowFunctions.example', { 
              defaultMessage: 'const formatPrice = (amount: number) => {\n  return new Intl.NumberFormat(\'en-US\', {\n    style: \'currency\',\n    currency: \'USD\'\n  }).format(amount)\n}'
            })}
          </pre>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.pattern.functionPatterns.functionDeclarations.title', { defaultMessage: 'Function Declarations' })}
          </h4>
          <div className="text-sm text-muted-foreground mb-4 rtl:text-right rtl:leading-loose">
            {t('docs.pattern.functionPatterns.functionDeclarations.description', { 
              defaultMessage: 'Used for React components, API route handlers, and exported functions. Better for hoisting and debugging stack traces.'
            })}
          </div>
          <pre className="text-xs bg-muted p-2 rounded">
            {t('docs.pattern.functionPatterns.functionDeclarations.example', { 
              defaultMessage: 'export function UserProfile({ userId }: Props) {\n  const { user, loading } = useUser(userId)\n  \n  if (loading) return <Skeleton />\n  return <div>{user.name}</div>\n}'
            })}
          </pre>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.pattern.serverActions.title', { defaultMessage: 'Server Actions & Data Fetching' })}
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.serverActions.pattern.title', { defaultMessage: 'Server Actions Pattern' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.pattern.serverActions.pattern.description', { 
          defaultMessage: 'We use Next.js server actions for form submissions and data mutations, following the "use server" directive pattern:'
        })}
      </p>

      <pre className="text-xs bg-muted p-4 rounded mb-6">
        {t('docs.pattern.serverActions.pattern.example', { 
          defaultMessage: '\'use server\'\n\nimport { revalidatePath } from \'next/cache\'\nimport { redirect } from \'next/navigation\'\n\nexport async function createUser(formData: FormData) {\n  const userData = {\n    name: formData.get(\'name\') as string,\n    email: formData.get(\'email\') as string,\n  }\n  \n  try {\n    await db.user.create({ data: userData })\n    revalidatePath(\'/users\')\n    redirect(\'/users\')\n  } catch (error) {\n    throw new Error(\'Failed to create user\')\n  }\n}'
        })}
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.serverActions.dataFetching.title', { defaultMessage: 'Data Fetching Hierarchy' })}
      </h3>
      <ul className="list-disc pl-6 rtl:pr-6 rtl:pl-0 space-y-2 mb-6 rtl:text-right rtl:leading-loose">
        <li>
          {t('docs.pattern.serverActions.dataFetching.serverComponents', { 
            defaultMessage: '**Server Components**: Direct database queries for initial data'
          })}
        </li>
        <li>
          {t('docs.pattern.serverActions.dataFetching.clientComponents', { 
            defaultMessage: '**Client Components**: React Query/SWR for interactive data'
          })}
        </li>
        <li>
          {t('docs.pattern.serverActions.dataFetching.serverActions', { 
            defaultMessage: '**Server Actions**: Form submissions and mutations'
          })}
        </li>
        <li>
          {t('docs.pattern.serverActions.dataFetching.apiRoutes', { 
            defaultMessage: '**API Routes**: External integrations and webhooks'
          })}
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.pattern.componentArchitecture.title', { defaultMessage: 'Component Architecture' })}
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.componentArchitecture.atomicDesign.title', { defaultMessage: 'Atomic Design Structure' })}
      </h3>
      <pre className="text-xs bg-muted p-4 rounded mb-6">
        {t('docs.pattern.componentArchitecture.atomicDesign.example', { 
          defaultMessage: 'components/\n├── atom/           # Basic elements (Button, Input, Icon)\n├── molecule/       # Simple combinations (SearchBox, FormField)\n├── organism/       # Complex components (Header, UserTable)\n├── template/       # Page layouts and structures\n└── page/          # Complete page compositions'
        })}
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.componentArchitecture.composition.title', { defaultMessage: 'Component Composition Pattern' })}
      </h3>
      <pre className="text-xs bg-muted p-4 rounded mb-6">
        {t('docs.pattern.componentArchitecture.composition.example', { 
          defaultMessage: '// Compound component pattern\nexport function Card({ children, className, ...props }: CardProps) {\n  return (\n    <div className={cn("rounded-lg border bg-card", className)} {...props}>\n      {children}\n    </div>\n  )\n}\n\nCard.Header = CardHeader\nCard.Content = CardContent\nCard.Footer = CardFooter'
        })}
      </pre>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.pattern.typescript.title', { defaultMessage: 'TypeScript Patterns' })}
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.typescript.typeDefinition.title', { defaultMessage: 'Type Definition Strategy' })}
      </h3>
      <ul className="list-disc pl-6 rtl:pr-6 rtl:pl-0 space-y-2 mb-6 rtl:text-right rtl:leading-loose">
        <li>
          {t('docs.pattern.typescript.typeDefinition.props', { 
            defaultMessage: '**Props**: Inline for simple components, separate interfaces for complex ones'
          })}
        </li>
        <li>
          {t('docs.pattern.typescript.typeDefinition.api', { 
            defaultMessage: '**API Types**: Generated from schema or OpenAPI specs'
          })}
        </li>
        <li>
          {t('docs.pattern.typescript.typeDefinition.utility', { 
            defaultMessage: '**Utility Types**: Leverage TypeScript\'s built-in utility types'
          })}
        </li>
        <li>
          {t('docs.pattern.typescript.typeDefinition.strict', { 
            defaultMessage: '**Strict Mode**: Always enabled with `strict: true` in tsconfig'
          })}
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.typescript.generic.title', { defaultMessage: 'Generic Patterns' })}
      </h3>
      <pre className="text-xs bg-muted p-4 rounded mb-6">
        {t('docs.pattern.typescript.generic.example', { 
          defaultMessage: '// Generic hook pattern\nfunction useApi<T>(endpoint: string): {\n  data: T | null\n  loading: boolean\n  error: Error | null\n} {\n  // Implementation\n}\n\n// Generic component pattern\ninterface TableProps<T> {\n  data: T[]\n  columns: Column<T>[]\n  onRowClick?: (row: T) => void\n}'
        })}
      </pre>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.pattern.fileOrganization.title', { defaultMessage: 'File Organization' })}
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.fileOrganization.structure.title', { defaultMessage: 'Project Structure' })}
      </h3>
      <pre className="text-xs bg-muted p-4 rounded mb-6">
        {t('docs.pattern.fileOrganization.structure.example', { 
          defaultMessage: 'src/\n├── app/                    # Next.js app router\n│   ├── (auth)/            # Route groups\n│   ├── api/               # API routes\n│   └── globals.css        # Global styles\n├── components/            # Reusable components\n├── lib/                   # Utilities and configurations\n├── hooks/                 # Custom React hooks\n├── types/                 # TypeScript type definitions\n└── constants/             # Application constants'
        })}
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.fileOrganization.imports.title', { defaultMessage: 'Import Organization' })}
      </h3>
      <pre className="text-xs bg-muted p-4 rounded mb-6">
        {t('docs.pattern.fileOrganization.imports.example', { 
          defaultMessage: '// 1. React and Next.js imports\nimport { useState } from \'react\'\nimport { redirect } from \'next/navigation\'\n\n// 2. Third-party libraries\nimport { clsx } from \'clsx\'\nimport { z } from \'zod\'\n\n// 3. Internal utilities and types\nimport { cn } from \'@/lib/utils\'\nimport type { User } from \'@/types\'\n\n// 4. Internal components\nimport { Button } from \'@/components/atom/button\'\nimport { UserCard } from \'@/components/molecule/user-card\''
        })}
      </pre>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.pattern.styling.title', { defaultMessage: 'Styling Patterns' })}
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.styling.tailwind.title', { defaultMessage: 'Tailwind CSS Organization' })}
      </h3>
      <ul className="list-disc pl-6 rtl:pr-6 rtl:pl-0 space-y-2 mb-6 rtl:text-right rtl:leading-loose">
        <li>
          {t('docs.pattern.styling.tailwind.component', { 
            defaultMessage: '**Component styles**: Compose utilities with `cn()` helper'
          })}
        </li>
        <li>
          {t('docs.pattern.styling.tailwind.spacing', { 
            defaultMessage: '**Consistent spacing**: Use Tailwind\'s spacing scale'
          })}
        </li>
        <li>
          {t('docs.pattern.styling.tailwind.responsive', { 
            defaultMessage: '**Responsive design**: Mobile-first responsive patterns'
          })}
        </li>
        <li>
          {t('docs.pattern.styling.tailwind.darkMode', { 
            defaultMessage: '**Dark mode**: CSS variables with Tailwind\'s dark mode'
          })}
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.styling.shadcn.title', { defaultMessage: 'shadcn/ui Integration' })}
      </h3>
      <pre className="text-xs bg-muted p-4 rounded mb-6">
        {t('docs.pattern.styling.shadcn.example', { 
          defaultMessage: '// Extend base components\nconst buttonVariants = cva(\n  "inline-flex items-center justify-center rounded-md text-sm font-medium",\n  {\n    variants: {\n      variant: {\n        default: "bg-primary text-primary-foreground hover:bg-primary/90",\n        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",\n      },\n      size: {\n        default: "h-10 px-4 py-2",\n        sm: "h-9 rounded-md px-3",\n        lg: "h-11 rounded-md px-8",\n      },\n    },\n  }\n)'
        })}
      </pre>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.pattern.errorHandling.title', { defaultMessage: 'Error Handling' })}
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.errorHandling.boundaries.title', { defaultMessage: 'Graceful Error Boundaries' })}
      </h3>
      <pre className="text-xs bg-muted p-4 rounded mb-6">
        {t('docs.pattern.errorHandling.boundaries.example', { 
          defaultMessage: '// Error boundary pattern\nexport function ErrorBoundary({ children }: { children: React.ReactNode }) {\n  return (\n    <ErrorBoundaryProvider fallback={<ErrorFallback />}>\n      {children}\n    </ErrorBoundaryProvider>\n  )\n}\n\n// Form error handling\nexport function ContactForm() {\n  const [errors, setErrors] = useState<Record<string, string>>({})\n  \n  const handleSubmit = async (formData: FormData) => {\n    try {\n      await submitContact(formData)\n    } catch (error) {\n      if (error instanceof ValidationError) {\n        setErrors(error.fieldErrors)\n      }\n    }\n  }\n}'
        })}
      </pre>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.pattern.performance.title', { defaultMessage: 'Performance Patterns' })}
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.performance.optimization.title', { defaultMessage: 'Optimization Strategies' })}
      </h3>
      <ul className="list-disc pl-6 rtl:pr-6 rtl:pl-0 space-y-2 mb-6 rtl:text-right rtl:leading-loose">
        <li>
          {t('docs.pattern.performance.optimization.codeSplitting', { 
            defaultMessage: '**Code splitting**: Dynamic imports for large components'
          })}
        </li>
        <li>
          {t('docs.pattern.performance.optimization.image', { 
            defaultMessage: '**Image optimization**: Next.js Image component with proper sizing'
          })}
        </li>
        <li>
          {t('docs.pattern.performance.optimization.bundle', { 
            defaultMessage: '**Bundle analysis**: Regular bundle size monitoring'
          })}
        </li>
        <li>
          {t('docs.pattern.performance.optimization.caching', { 
            defaultMessage: '**Caching**: Strategic use of React Server Components caching'
          })}
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4 rtl:text-right">
        {t('docs.pattern.performance.loading.title', { defaultMessage: 'Loading States' })}
      </h3>
      <pre className="text-xs bg-muted p-4 rounded mb-6">
        {t('docs.pattern.performance.loading.example', { 
          defaultMessage: '// Consistent loading pattern\nexport function UserProfile({ userId }: { userId: string }) {\n  const { data: user, isLoading } = useUser(userId)\n  \n  if (isLoading) return <UserProfileSkeleton />\n  if (!user) return <UserNotFound />\n  \n  return <UserProfileContent user={user} />\n}'
        })}
      </pre>

      <hr className="my-8 border-t border-border" />

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.pattern.adoption.title', { defaultMessage: 'Pattern Adoption' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.pattern.adoption.livingGuidelines', { 
          defaultMessage: 'These patterns are **living guidelines** that evolve with our codebase. They\'re documented in our [contributing guide](/docs/contributing) and enforced through ESLint rules, Prettier configuration, and code review processes.'
        })}
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.pattern.adoption.consistency', { 
          defaultMessage: 'When in doubt, prioritize **consistency** over personal preference. Our patterns serve the community, ensuring that any developer can jump into any part of the codebase and immediately understand the structure and conventions.'
        })}
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.pattern.adoption.battleTested', { 
          defaultMessage: 'Every pattern has been battle-tested across multiple projects and reflects real-world usage patterns from our [open source repositories](https://github.com/abdout/databayt). They balance developer experience with maintainability, type safety with flexibility.'
        })}
      </p>
    </div>
  );
}
