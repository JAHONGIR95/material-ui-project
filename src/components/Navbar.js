import React, {useState} from 'react'
import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? 'flex' : 'none'),
            width: '70%',
        }
    },
    searchIcon: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
        },
        marginRight: theme.spacing(2)
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        }
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1),
        width: '100%'

    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up("sm")]: {
            display: 'block',
        },
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        },
    },
    icons: {
        alignItems: 'center',
        display: (props) => (props.open ? 'none' : 'flex')
    },
    badge: {
        marginRight: theme.spacing(2)
    }
}))



function Navbar() {
  const [open, setOpen] = useState(false)
  const classes = useStyles( {open} )

  return (
    <AppBar>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h6' className={classes.logoLg}>
                Jahin Dev
            </Typography>
            <Typography variant='h6' className={classes.logoSm}>
                JAHIN
            </Typography>
            <div className={classes.search}>
                <Search />
                <InputBase placeholder="Search..." className={classes.input} />
                <Cancel className={classes.cancel} onClick={ () => setOpen(false)} />
            </div>
            <div className={classes.icons}>
            <Search className={classes.searchIcon} onClick={() => setOpen(true)} />
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
                <Mail />
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
                <Notifications />
            </Badge>
            <Avatar src="https://img-cdn.inc.com/image/upload/images/panoramic/GettyImages-1227966268_440589_uk1uxf.jpg" />
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar

