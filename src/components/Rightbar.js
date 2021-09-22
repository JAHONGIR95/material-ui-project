import React from 'react'
import { Avatar, Container, ImageList, ImageListItem, makeStyles, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10)
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#555',
  }
}))



function Rightbar() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>Online Friends</Typography>
      <AvatarGroup max={6}>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
      </AvatarGroup>

      <Typography className={classes.title} gutterBottom>Gallery</Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format&dpr=2" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format&dpr=2" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format&dpr=2" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format&dpr=2" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format&dpr=2" alt="" />
        </ImageListItem>
      </ImageList>
    </Container>
  )
}

export default Rightbar

