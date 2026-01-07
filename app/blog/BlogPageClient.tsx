'use client';

import ArticleCard from '@/components/blog/ArticleCard';
import { BookOpen, Newspaper, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { BlogPostMetadata } from '@/lib/blog';

interface BlogPageClientProps {
    posts: BlogPostMetadata[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
    const featuredPost = posts[0]; // First post as featured
    const regularPosts = posts.slice(1); // Rest of posts

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Modern & Clean */}
            <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-20 tablet:py-28 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(236,255,115,0.15),transparent_50%)]" />
                <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <Reveal delay={0} duration={600}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                                <Newspaper className="w-4 h-4" />
                                <span className="text-sm font-medium">Le Blog de Surly</span>
                            </div>
                        </Reveal>

                        {/* Title */}
                        <Reveal delay={100} duration={800}>
                            <h1 className="text-4xl tablet:text-5xl laptop:text-6xl font-bold mb-6 tracking-tight leading-tight">
                                Actualités & Insights
                                <span className="block text-accent mt-2">Banque & Assurance</span>
                            </h1>
                        </Reveal>

                        {/* Description */}
                        <Reveal delay={200} duration={800}>
                            <p className="text-lg tablet:text-xl text-white/90 max-w-2xl leading-relaxed">
                                Restez informé des dernières tendances, réglementations et opportunités dans les secteurs de la banque et de l&apos;assurance.
                                <span className="block mt-2 font-semibold text-white">Articles d&apos;experts pour professionnels et consultants.</span>
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            {featuredPost && (
                <section className="py-16 bg-background-subtle">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal delay={0} duration={800}>
                            <div className="flex items-center gap-3 mb-8">
                                <TrendingUp className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-bold text-foreground">Article à la Une</h2>
                            </div>
                        </Reveal>

                        <Reveal delay={100} duration={800}>
                            <ArticleCard post={featuredPost} featured />
                        </Reveal>
                    </div>
                </section>
            )}

            {/* Regular Articles Grid */}
            <section className="py-16 tablet:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {regularPosts.length === 0 && !featuredPost ? (
                        /* Empty State */
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-background-subtle rounded-2xl mb-6">
                                <BookOpen className="w-10 h-10 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-3">
                                Plus d&apos;articles bientôt
                            </h2>
                            <p className="text-lg text-foreground-muted max-w-md mx-auto">
                                De nouveaux articles sont en cours de préparation. Revenez bientôt pour découvrir nos insights sur la banque et l&apos;assurance.
                            </p>
                        </div>
                    ) : regularPosts.length > 0 ? (
                        <>
                            {/* Section Header */}
                            <Reveal delay={0} duration={600}>
                                <div className="flex items-center justify-between mb-10">
                                    <div>
                                        <h2 className="text-3xl font-bold text-foreground mb-2">Tous les articles</h2>
                                        <p className="text-foreground-muted">
                                            <span className="font-semibold text-foreground">{regularPosts.length}</span> article{regularPosts.length > 1 ? 's' : ''} disponible{regularPosts.length > 1 ? 's' : ''}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Articles Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {regularPosts.map((post, index) => (
                                    <Reveal key={post.slug} delay={index * 50} duration={600}>
                                        <ArticleCard post={post} />
                                    </Reveal>
                                ))}
                            </div>
                        </>
                    ) : null}
                </div>
            </section>

            {/* CTA Section - Premium */}
            <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(236,255,115,0.15),transparent_50%)]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Reveal delay={0} duration={600}>
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                            <span className="text-sm font-medium">Envie de contribuer ?</span>
                        </div>
                    </Reveal>

                    <Reveal delay={100} duration={800}>
                        <h2 className="text-3xl tablet:text-4xl laptop:text-5xl font-bold mb-6 tracking-tight">
                            Partagez votre expertise
                        </h2>
                    </Reveal>

                    <Reveal delay={200} duration={800}>
                        <p className="text-lg tablet:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Vous êtes expert dans le secteur bancaire ou assurantiel ? Contribuez au blog et partagez vos insights avec notre communauté de professionnels.
                        </p>
                    </Reveal>

                    <Reveal delay={300} duration={800}>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground font-bold rounded-lg hover:bg-accent-dim transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
                        >
                            Nous contacter
                        </a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
