import { useParams } from "next/navigation";
import { useAutomatedI18n } from "./use-automated-i18n";

export function ReviewPage() {
  const { id } = useParams();
  const automatedProjects = useAutomatedI18n();
  const project = automatedProjects.find((p) => p.id === id);

  if (!project) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="">
        <div className="max-w-4xl  ">
          <h2 className="text-3xl md:text-5xl font-signifier font-black mb-6 rtl:font-black rtl:leading-tight">
            {/* {project.name}<br/>Automation */}
            Automate the boaring 
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl rtl:text-base rtl:leading-relaxed rtl:text-justify rtl:font-medium">
            {project.body}
          </p>

          <div className="mt-10 relative aspect-video w-full max-w-5xl mx-auto rounded-sm overflow-hidden bg-black/5">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/story.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-4 right-4 rtl:right-auto rtl:left-4 text-background text-sm rtl:text-base">
              {project.id}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
