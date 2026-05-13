import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
        
        <article className="max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ ...props }) => <h1 className="text-4xl font-bold mb-8 text-foreground" {...props} />,
              h2: ({ ...props }) => <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground border-b pb-2" {...props} />,
              h3: ({ ...props }) => <h3 className="text-xl font-bold mt-8 mb-3 text-foreground" {...props} />,
              p: ({ ...props }) => <p className="text-muted-foreground leading-relaxed mb-4" {...props} />,
              ul: ({ ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground" {...props} />,
              ol: ({ ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-muted-foreground" {...props} />,
              li: ({ ...props }) => <li {...props} />,
              blockquote: ({ ...props }) => <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground" {...props} />,
              code: ({ ...props }) => <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />,
              a: ({ ...props }) => <a className="text-primary hover:underline" {...props} />,
              table: ({ ...props }) => <div className="overflow-x-auto my-6"><table className="w-full border-collapse border border-border" {...props} /></div>,
              th: ({ ...props }) => <th className="border border-border p-2 bg-muted font-bold text-left" {...props} />,
              td: ({ ...props }) => <td className="border border-border p-2 text-left" {...props} />,
            }}
          >
            {siteConfig.legal.deleteAccount?.content || "# Delete Account\n\nContent not available."}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
