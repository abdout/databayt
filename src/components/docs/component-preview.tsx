"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  extractClassname?: boolean
  extractedClassNames?: string
  align?: "center" | "start" | "end"
}

export function ComponentPreview({
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = "center",
  name,
  ...props
}: ComponentPreviewProps) {
  const [isOpened, setIsOpened] = React.useState(false)

  const Preview = React.useMemo(() => {
    const Component = React.Children.only(children) as React.ReactElement & {
      type: { render?: Function; __docgenInfo?: any }
    }

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          No preview available.
        </p>
      )
    }

    return Component
  }, [children])

  const codeToString = React.useMemo(() => {
    if (
      typeof children === "object" &&
      "type" in children! &&
      "props" in children!
    ) {
      const { children: childrenProp, ...restProps } = children.props

      // Remove unwanted props.
      const cleanedProps = Object.fromEntries(
        Object.entries(restProps).filter(([key]) =>
          !["__reactInternalInstance", "__reactInternalMemoizedUnmaskedChildContext", "__reactInternalMemoizedMaskedChildContext"].includes(key)
        )
      )

      const jsx = React.createElement(children.type, cleanedProps, childrenProp)
      return jsx
    }

    return null
  }, [children])

  return (
    <div
      className={cn("relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md border">
          <div
            className={cn("flex min-h-[350px] w-full justify-center p-10", {
              "items-center": align === "center",
              "items-start": align === "start",
              "items-end": align === "end",
            })}
          >
            {Preview}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {codeToString ? (
                <pre className="language-tsx">
                  <code>{JSON.stringify(codeToString, null, 2)}</code>
                </pre>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Code not available.
                </p>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 