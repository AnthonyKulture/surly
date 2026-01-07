import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import MDXContent from '@/components/blog/MDXContent';
import ArticlePageClient from './ArticlePageClient';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Article non trouvé',
        };
    }

    return {
        title: `${post.title} | Blog Surly`,
        description: post.description,
        authors: post.author ? [{ name: post.author }] : undefined,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: post.author ? [post.author] : undefined,
            images: post.image ? [post.image] : undefined,
            tags: post.tags,
        },
        alternates: {
            canonical: `https://surly.fr/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // NOTE: No manual serialization needed for RSC approach. 
    // We pass the raw content to the MDXContent server component.

    const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // JSON-LD Schema for Article
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        image: post.image,
        datePublished: post.date,
        author: {
            '@type': post.author ? 'Person' : 'Organization',
            name: post.author || 'Surly',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Surly',
            logo: {
                '@type': 'ImageObject',
                url: 'https://surly.fr/logo.png',
            },
        },
    };

    return (
        <ArticlePageClient
            post={post}
            formattedDate={formattedDate}
            jsonLd={jsonLd}
        >
            <MDXContent source={post.content} />
        </ArticlePageClient>
    );
}
