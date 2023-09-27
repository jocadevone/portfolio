import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { Nav, Button } from '../../components'

const components = { Nav, Button, SyntaxHighlighter }

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <div className="my-5 max-w-4xl mx-auto">
      <h1 className="text-white text-3xl mb-4 mt-5 font-semibold">{title}</h1>
      <div className="text-white">
      <MDXRemote {...mdxSource} components={components}/>
      </div>
    </div>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('articles'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('articles',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage