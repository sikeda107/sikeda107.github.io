import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default function Layout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <header>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
          >
            sikeda107 個人サイト
          </Typography>
        </header>
        <main>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <h1>left</h1>
            </Grid>
            <Grid item xs={12} md={8}>
              {props.children}
            </Grid>
          </Grid>
        </main>
      </Container>
      <footer> Footer </footer>
    </React.Fragment>
  )
}
