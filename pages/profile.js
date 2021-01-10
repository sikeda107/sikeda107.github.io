import React from 'react'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import profile from '../content/profile.md'

export default function App() {
  return (
    <Layout>
      <Markdown>{profile}</Markdown>
    </Layout>
  )
}
