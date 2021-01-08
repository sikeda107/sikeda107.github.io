import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'

function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <ReactMarkdown source={content} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const fs = require('fs')
  const path = require('path')
  const mdfiles = fs
    .readdirSync(`${process.cwd()}/content`, 'utf-8')
    .filter((f) => f.endsWith('.md'))
  const paths = mdfiles.map(
    (f) => `/posts/${path.basename(f, path.extname(f))}`
  )
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  const content = await import(`../../content/${slug}.md`)
  const data = matter(content.default)
  return { props: { content: data.content, data: data.data } }
}

export default PostTemplate
