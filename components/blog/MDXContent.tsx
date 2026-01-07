import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

interface MDXContentProps {
    source: string;
}

// Custom components for MDX with premium styling
const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-4xl tablet:text-5xl font-bold text-foreground mb-8 mt-12 first:mt-0 tracking-tight leading-tight" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-3xl tablet:text-4xl font-semibold text-foreground mb-6 mt-12 pt-8 border-t border-gray-100 first:border-0 first:pt-0 group relative" {...props}>
            <span className="relative">
                {props.children}
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
        </h2>
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-2xl tablet:text-3xl font-semibold text-foreground mb-4 mt-8" {...props} />
    ),
    h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4 className="text-xl tablet:text-2xl font-semibold text-foreground mb-3 mt-6" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="text-lg text-foreground-muted mb-6 leading-[1.8]" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="space-y-3 mb-8 ml-1" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="space-y-3 mb-8 ml-1" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="text-lg text-foreground-muted leading-[1.8] pl-7 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-2 before:bg-primary before:rounded-full" {...props} />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="relative border-l-4 border-primary bg-primary/5 pl-6 pr-6 py-5 my-8 rounded-r-xl" {...props}>
            <div className="absolute top-4 left-3 text-6xl text-primary/20 leading-none">"</div>
            <div className="relative text-lg italic text-foreground-muted leading-relaxed">{props.children}</div>
        </blockquote>
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a className="text-primary hover:text-primary-dark underline underline-offset-4 decoration-2 hover:decoration-primary transition-all font-medium" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => {
        const isInline = !props.className?.includes('language-');

        if (isInline) {
            return (
                <code className="px-2 py-1 bg-primary/10 text-primary text-[0.9em] font-mono rounded-md border border-primary/20" {...props} />
            );
        }

        return <code {...props} />;
    },
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre className="bg-gray-900 text-gray-100 rounded-xl p-6 mb-8 overflow-x-auto text-sm font-mono shadow-lg border border-gray-800" {...props} />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-bold text-foreground" {...props} />
    ),
    em: (props: React.HTMLAttributes<HTMLElement>) => (
        <em className="italic text-foreground" {...props} />
    ),
    hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
        <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" {...props} />
    ),
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200" {...props} />
        </div>
    ),
    thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
        <thead className="bg-background-subtle" {...props} />
    ),
    tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
        <tbody className="bg-background divide-y divide-gray-200" {...props} />
    ),
    tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr className="hover:bg-background-subtle transition-colors" {...props} />
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wider" {...props} />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td className="px-6 py-4 text-base text-foreground-muted" {...props} />
    ),
};

export default function MDXContent({ source }: MDXContentProps) {
    return (
        <div className="prose prose-lg max-w-none">
            <MDXRemote
                source={source}
                components={components}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkGfm],
                    }
                }}
            />
        </div>
    );
}
