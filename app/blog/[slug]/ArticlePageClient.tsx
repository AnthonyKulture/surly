'use client';

import { Calendar, Clock, ArrowLeft, Tag as TagIcon, Share2, User, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { ReactNode } from 'react';

interface ArticlePageClientProps {
    post: BlogPost;
    children: ReactNode;
    formattedDate: string;
    jsonLd: object;
}

export default function ArticlePageClient({ post, children, formattedDate, jsonLd }: ArticlePageClientProps) {
    return (
        <>
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="min-h-screen bg-background">
                {/* Compact Navigation Bar */}
                <div className="sticky top-[120px] z-40 bg-background/80 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="font-medium">Tous les articles</span>
                            </Link>

                            <div className="flex items-center gap-3">
                                <button
                                    className="p-2 hover:bg-background-subtle rounded-lg transition-colors"
                                    aria-label="Partager l'article"
                                >
                                    <Share2 className="w-4 h-4 text-foreground-muted" />
                                </button>
                                <button
                                    className="p-2 hover:bg-background-subtle rounded-lg transition-colors"
                                    aria-label="Sauvegarder l'article"
                                >
                                    <Bookmark className="w-4 h-4 text-foreground-muted" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Header - Clean & Modern */}
                <header className="relative pt-16 pb-12 tablet:pt-20 tablet:pb-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Category Badge */}
                        {post.category && (
                            <div className="mb-6">
                                <span className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                                    {post.category}
                                </span>
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-4xl tablet:text-5xl laptop:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
                            {post.title}
                        </h1>

                        {/* Description */}
                        <p className="text-xl tablet:text-2xl text-foreground-muted mb-8 leading-relaxed font-light">
                            {post.description}
                        </p>

                        {/* Meta Info Bar */}
                        <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-100">
                            {post.author && (
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <User className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">{post.author}</p>
                                        <p className="text-xs text-foreground-muted">Auteur</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-2 text-sm text-foreground-muted">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={post.date}>{formattedDate}</time>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-foreground-muted">
                                <Clock className="w-4 h-4" />
                                <span>{post.readingTime}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image - Full Width */}
                {post.image && (
                    <div className="relative w-full h-[400px] tablet:h-[500px] laptop:h-[600px] mb-16 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Content Container */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    {/* Main Article Content */}
                    <div className="blog-post-content max-w-none mb-16">
                        {children}
                    </div>

                    {/* Tags Section */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <TagIcon className="w-5 h-5 text-primary" />
                                <h3 className="text-lg font-semibold text-foreground">Tags</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center px-4 py-2 bg-background-subtle hover:bg-primary/10 text-foreground-muted hover:text-primary text-sm font-medium rounded-lg transition-all cursor-pointer border border-transparent hover:border-primary/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <div className="bg-background-subtle rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                Cet article vous a été utile ?
                            </h3>
                            <p className="text-foreground-muted mb-6">
                                Partagez-le avec votre réseau professionnel
                            </p>
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg font-medium">
                                <Share2 className="w-4 h-4" />
                                Partager l&apos;article
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA - Premium Style */}
                <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(236,255,115,0.15),transparent_50%)]" />

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                            <span className="text-sm font-medium">Rejoignez Surly</span>
                        </div>

                        <h2 className="text-3xl tablet:text-4xl laptop:text-5xl font-bold mb-6 tracking-tight">
                            Prêt à passer à l&apos;action ?
                        </h2>

                        <p className="text-lg tablet:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Découvrez notre plateforme dédiée aux professionnels de la banque et de l&apos;assurance
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/devenir-consultant"
                                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground font-bold rounded-lg hover:bg-accent-dim transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
                            >
                                Trouver des missions
                            </Link>
                            <Link
                                href="/sourcing-expert"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border-2 border-white/30"
                            >
                                Trouver un expert
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}
