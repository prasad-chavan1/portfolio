import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Link from 'next/link'
import Head from 'next/head'

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) {
    const clean = DOMPurify.sanitize(content)
    return (
        <>
            <div className='pt-28 pl-4 pr-4 md:pr-72 md:pl-72 pb-28 shadow-xl'>
                <Head>
                    <title>{title} | Prasad Chavan</title>
                </Head>
                <Link href='/blog'>
                    <a className='inline-flex px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow sm:w-auto active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'>Go Back</a>
                </Link>
                <div>
                    <h1 className='text-2xl font-bold pt-4'>{title}</h1>
                    <div className='pb-4'>Posted on {date}</div>
                    <img src={cover_image} alt='' />
                    <div className='prose pt-4'>
                        <div dangerouslySetInnerHTML={{ __html: marked(clean) }}></div>
                    </div>
                </div>
            </div>
            </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
