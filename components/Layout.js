import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Header />
        <main>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <Sidebar />
            </Grid>
            <Grid item xs={12} md={9}>
              {props.children}
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  )
}
