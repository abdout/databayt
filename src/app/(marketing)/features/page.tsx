import { Input } from "@/components/ui/input"
import FeatureHeader from "@/components/features/feature-header"
import BlocksPage from "@/components/features/content"

export default function FeaturesPage() {
  return (
    <div className="py-8">
      <div className="flex flex-col items-center space-y-8">
        <FeatureHeader />
        
        <div className="w-full max-w-xs">
          <Input 
            type="search"
            placeholder="Search features..."
            className="w-full"
          />
        </div>
        
        <BlocksPage />
      </div>
    </div>
  )
}
