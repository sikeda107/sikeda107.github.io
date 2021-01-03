import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

export default function Layout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <header> Header </header>
        <main>
          <Grid container spacing={5}>
            <h1> Side </h1>
            {props.children}
          </Grid>
        </main>
      </Container>
      <footer> Footer </footer>
    </React.Fragment>
  )
}
