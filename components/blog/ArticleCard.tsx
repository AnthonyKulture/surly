import Link from 'next/link';
import { BlogPostMetadata } from '@/lib/blog';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
    post: BlogPostMetadata;
    featured?: boolean;
}

export default function ArticleCard({ post, featured = false }: ArticleCardProps) {
    const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    if (featured) {
        return (
            <Link
                href={`/blog/${post.slug}`}
                className="group block col-span-full"
            >
                <article className="relative h-full bg-background border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
                    <div className="grid grid-cols-1 tablet:grid-cols-2 h-full min-h-[400px]">

                        {/* Image Column */}
                        {post.image && (
                            <div className="relative h-64 tablet:h-full overflow-hidden bg-background-subtle">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Category Badge */}
                                {post.category && (
                                    <div className="absolute z-20 top-6 left-6">
                                        <span className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-lg backdrop-blur-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                )}

                                {/* Featured Badge */}
                                <div className="absolute z-20 top-6 right-6">
                                    <span className="inline-flex items-center px-4 py-2 bg-accent text-foreground text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
                                        À la Une
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Content Column */}
                        <div className="p-8 tablet:p-10 flex flex-col justify-between">
                            <div>
                                {/* Title */}
                                <h2 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {post.title}
                                </h2>

                                {/* Description */}
                                <p className="text-lg text-foreground-muted mb-6 leading-relaxed line-clamp-3">
                                    {post.description}
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="space-y-4">
                                {/* Meta */}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <time dateTime={post.date}>{formattedDate}</time>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{post.readingTime}</span>
                                    </div>
                                </div>

                                {/* Read More Link */}
                                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                                    <span>Lire l'article</span>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        );
    }

    // Regular card
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block h-full"
        >
            <article className="h-full bg-background border border-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 flex flex-col">
                {/* Image */}
                {post.image && (
                    <div className="relative h-56 w-full overflow-hidden bg-background-subtle">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {post.category && (
                            <div className="absolute z-20 top-4 left-4">
                                <span className="inline-flex items-center px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                                    {post.category}
                                </span>
                            </div>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-foreground-muted mb-4 flex-grow line-clamp-3 leading-relaxed">
                        {post.description}
                    </p>

                    {/* Meta information */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>{formattedDate}</time>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{post.readingTime}</span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
