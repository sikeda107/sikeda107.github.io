import React from 'react'
import Typography from '@material-ui/core/Typography'
import Copyright from '@material-ui/icons/Copyright'

function CopyrightNotation() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'COPYRIGHT '}
      <Copyright fontSize="inherit" />
      {` 2020-${new Date().getFullYear()} sikeda107 ALL RIGHTS RESERVED.`}
    </Typography>
  )
}

export default function Footer(props) {
  return (
    <footer>
      <CopyrightNotation />
    </footer>
  )
}
