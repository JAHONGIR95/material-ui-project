import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    },
    media: {
        height: '300px',
        [theme.breakpoints.down('sm')]: {
            height: 150,
        },
    },
    card: {
        marginBottom: theme.spacing(5)
    }
}))



function Post() {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://previews.123rf.com/images/leventegyori/leventegyori1506/leventegyori150600524/41664216-group-of-fruits-isolated.jpg"
                    title="My post"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">My first post</Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, illo? Eius reprehenderit dolorem optio laborum sit quas cum illum blanditiis aliquam tempora nobis nisi praesentium explicabo, rerum voluptatum possimus tempore sunt quae consequatur sint accusantium temporibus aperiam consequuntur exercitationem. Deleniti, saepe. Illo, ducimus architecto mollitia dicta eos laudantium quos nostrum unde, et sequi modi! Officiis, accusantium. Error minima, facilis id, delectus ab dolorum distinctio expedita voluptatibus, molestiae dolore autem. Quasi, harum nesciunt amet eveniet molestiae ratione voluptate quidem excepturi? Ipsa!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn more</Button>
            </CardActions>
        </Card>
    )
}

export default Post

