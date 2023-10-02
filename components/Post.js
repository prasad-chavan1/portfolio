import Link from 'next/link'

export default function Post({ post }) {
    return (
        <div className='block overflow-hidden rounded-2xl bg-gray-100 pr-9 pl-9 py-14 shadow-xl'>
            <h3 className='text-xl font-bold'>{post.frontmatter.title}</h3>
            <img className='pb-4' src={post.frontmatter.cover_image} alt='' />
            <div className='pb-4'>Posted on {post.frontmatter.date}</div>
            <p className='pb-4'>{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
                <a className='inline-flex px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow sm:w-auto active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'>Read More</a>
            </Link>
        </div>
    )
}
