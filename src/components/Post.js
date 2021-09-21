import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))



function Post() {
    const classes = useStyles()

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://img-cdn.inc.com/image/upload/images/panoramic/GettyImages-1227966268_440589_uk1uxf.jpg"
                    title="My post"
                />
                <CardContent>
                    <Typography variant="h5">My first post</Typography>
                    <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa, sapiente rerum earum necessitatibus consequatur atque iure amet tempore incidunt, est placeat minus iusto hic, perferendis qui reiciendis. Ipsam, maiores.</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Post

