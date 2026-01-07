import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
    title: 'Blog Surly | Actualités Banque & Assurance',
    description: 'Découvrez nos articles sur les tendances du secteur bancaire et assurantiel : réglementations, IA, recrutement, freelance et bien plus.',
    openGraph: {
        title: 'Blog Surly | Actualités Banque & Assurance',
        description: 'Découvrez nos articles sur les tendances du secteur bancaire et assurantiel : réglementations, IA, recrutement, freelance et bien plus.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://surly.fr/blog',
    },
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return <BlogPageClient posts={posts} />;
}
