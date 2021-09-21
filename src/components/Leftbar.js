import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import { Home } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        color: '#fff'
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            cursor: 'pointer',
            marginBottom: theme.spacing(3)
        }
    },
    text: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))



function Leftbar() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
        <div className={classes.item}>
            <Home className={classes.icon} />
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon} />
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon} />
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon} />
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon} />
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon} />
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon} />
            <Typography className={classes.text}>Homepage</Typography>
        </div>
    </Container>
  )
}

export default Leftbar

