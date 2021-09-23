import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import Post from './Post'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))



function Feed() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Post src="https://www.calgary.ca/content/dam/www/corporate-communications/locations/parks-information-locations.jpg" />
      <Post src="https://images.pexels.com/photos/5760/bench-garden-grass-evening.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Post src="https://www.visitmoretonbayregion.com.au/images/Tourism-Images-Locations/hills/Leslie_Patrick_Park/All_Abilities_Playground/_1200x675_crop_center-center_none/Leslie_Patrick_Park_All_Abilities_playground_drone_view_Accessible_Moreton_Bay_Region_Brisbane_Queensland_Australia.jpg" />
      <Post src="https://heapsestrin.com/wp-content/uploads/2019/05/toronto-high-park-nature-621x317@2x.jpg" />
      <Post src="https://images.squarespace-cdn.com/content/v1/5233160ae4b08346f3be204b/1611952053709-S8RGYX6L8O0ZV55TZFK3/DJI_0744+web.jpg?format=2500w" />
      <Post src="https://cdn.s3waas.gov.in/s3a760880003e7ddedfef56acb3b09697f/uploads/bfi_thumb/2018042139-olwbnju75ay50p65urrgw14khkj464r2ldef9b6z62.jpg" />
      <Post src="https://www.carmelclayparks.com/wp-content/uploads/2021/05/The-Waterpark-Spray-Foreground-2021-1.jpg.webp" />
    </Container>
  )
}

export default Feed

