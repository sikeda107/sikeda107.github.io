import React from 'react'
import Grid from '@material-ui/core/Grid'
import NextLink from 'next/link'

const paths = [
  {
    title: 'はじめのブログ',
    url: '/posts/20200108',
  },
  {
    title: 'はじめのブログ',
    url: '/posts/20200108',
  },
  {
    title: 'はじめのブログ',
    url: '/posts/20200108',
  },
  {
    title: 'はじめのブログ',
    url: '/posts/20200108',
  },
]

export default function Post(props) {
  return (
    <React.Fragment>
      <h1> ブログ一覧 </h1>
      <Grid container direction="column" spacing={1}>
        {paths.map((path) => (
          <Grid item key={path.title}>
            <NextLink key={path.title} href={path.url}>
              {path.title}
            </NextLink>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}
