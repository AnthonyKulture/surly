import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogPageClient from './BlogPageClient';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'blogPage' });

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
        openGraph: {
            title: t('metadata.title'),
            description: t('metadata.description'),
            type: 'website',
        },
    };
}

export default async function BlogPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const posts = await getAllPosts();

    return <BlogPageClient posts={posts} />;
}
