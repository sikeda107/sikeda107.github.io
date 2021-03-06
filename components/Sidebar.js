import React from 'react'
import NextLink from 'next/link'
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Typography from '@material-ui/core/Typography'
import styles from '../styles/Home.module.css'

export default function Sidebar(props) {
  const linkList = [
    { title: 'HOME', url: '/' },
    { title: 'PROFILE', url: '/profile' },
    { title: 'POSTS', url: '/posts' },
    { title: 'PROJECTS', url: '/projects' },
  ]
  const socialList = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/sikeda107' },
    {
      name: 'Twitter',
      icon: TwitterIcon,
      url: 'https://twitter.com/BumpOFBear',
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      url: 'https://www.facebook.com/sho.ikeda.353',
    },
  ]
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item>
          <img
            src="/icon.jpg"
            className={styles.logo}
            alt="アイコン"
            width={200}
            height={200}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            MENU
          </Typography>
          <Grid container direction="column" spacing={1}>
            {linkList.map((link) => (
              <Grid item key={link.title}>
                <NextLink key={link.title} href={link.url}>
                  {link.title}
                </NextLink>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            SNS
          </Typography>
          {socialList.map((social) => (
            <NextLink key={social.name} href={social.url}>
              <a target="_blank" rel="noopener noreferrer">
                <Grid container direction="row" spacing={1} alignItems="center">
                  <Grid item>
                    <social.icon />
                  </Grid>
                  <Grid item>{social.name}</Grid>
                </Grid>
              </a>
            </NextLink>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
