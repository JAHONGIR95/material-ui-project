import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    logoLg: {
        display: 'none',
        [theme.breakpoints.up("sm")]: {
            display: 'block',
        },
    }
}))



function Navbar() {
  const classes = useStyles()

  return (
    <AppBar>
        <Toolbar>
            <Typography variant='h6' className={classes.logoLg}>
                Jahin Dev
            </Typography>
            <Typography variant='h6' className={classes.logoSm}>
                JAHIN
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar

