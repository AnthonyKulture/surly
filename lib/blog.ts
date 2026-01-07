import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author?: string;
    category?: string;
    tags?: string[];
    image?: string;
    readingTime: string;
    content: string;
}

export interface BlogPostMetadata {
    slug: string;
    title: string;
    description: string;
    date: string;
    author?: string;
    category?: string;
    tags?: string[];
    image?: string;
    readingTime: string;
}

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
    try {
        if (!fs.existsSync(postsDirectory)) {
            return [];
        }
        const fileNames = fs.readdirSync(postsDirectory);
        return fileNames
            .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
            .map((fileName) => fileName.replace(/\.(md|mdx)$/, ''));
    } catch (error) {
        console.error('Error reading posts directory:', error);
        return [];
    }
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const { text: readingTimeText } = readingTime(content);

        return {
            slug,
            title: data.title || '',
            description: data.description || '',
            date: data.date || '',
            author: data.author,
            category: data.category,
            tags: data.tags || [],
            image: data.image,
            readingTime: readingTimeText,
            content,
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}

/**
 * Get all blog posts metadata (sorted by date, most recent first)
 */
export async function getAllPosts(): Promise<BlogPostMetadata[]> {
    const slugs = getAllPostSlugs();
    const posts = await Promise.all(
        slugs.map(async (slug) => {
            const post = await getPostBySlug(slug);
            if (!post) return null;

            // Return only metadata, not content
            const { content, ...metadata } = post;
            return metadata;
        })
    );

    // Filter null values and sort by date (most recent first)
    return posts
        .filter((post): post is BlogPostMetadata => post !== null)
        .sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
        });
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: string): Promise<BlogPostMetadata[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter((post) => post.category === category);
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<BlogPostMetadata[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter((post) => post.tags?.includes(tag));
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
    const allPosts = await getAllPosts();
    const categories = new Set<string>();

    allPosts.forEach((post) => {
        if (post.category) {
            categories.add(post.category);
        }
    });

    return Array.from(categories);
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
    const allPosts = await getAllPosts();
    const tags = new Set<string>();

    allPosts.forEach((post) => {
        post.tags?.forEach((tag) => tags.add(tag));
    });

    return Array.from(tags);
}
