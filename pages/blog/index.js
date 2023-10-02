import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../../components/Post'
import { sortByDate } from '../../utils'
import Head from 'next/head'

export default function Home({ posts }) {
    return (
        <div className='pt-28 pb-16 md:pl-20 md:pr-20'>
            <Head>
                <title>Blog | Prasad Chavan</title>
            </Head>
            <h1 className='font-bold text-2xl text-center pb-8'>Favourite Stuffs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pr-8 pl-8'>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}
