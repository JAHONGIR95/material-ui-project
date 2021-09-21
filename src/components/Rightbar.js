import React from 'react'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))



function Rightbar() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
        <h1>hello world!</h1>
    </Container>
  )
}

export default Rightbar

