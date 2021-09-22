import React, { useState } from "react"
import {
    Button,
    Container,
    Fab,
    FormControlLabel,
    FormLabel,
    makeStyles,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Snackbar,
    TextField,
    Tooltip,
} from "@material-ui/core"
import { Add as AddIcon } from "@material-ui/icons"
import MuiAlert from "@material-ui/lab/Alert"

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "#fff",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        },
    },
    form: {
        padding: theme.spacing(2)
    },
    item: {
        marginBottom: theme.spacing(3)
    }
}))

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Add() {
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const [age, setAge] = useState('')
    const classes = useStyles()

    const handleChange = (e) => {
        setAge(e.target.value)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    const handleCreate = () => {
        setOpen(false)
        setOpenAlert(true)
    }
    

    return (
        <>
            <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form autoComplete="off" className={classes.form}>
                        <div className={classes.item}>
                            <TextField
                                id="standard-basic"
                                label="Title"
                                size="small"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="standard-multiline-static"
                                multiline
                                rows={4}
                                label="Description"
                                size="small"
                                style={{ width: "100%" }}
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="Status" style={{ minWidth: 80 }} onChange={handleChange} value={age}>
                                <MenuItem value="public">Public</MenuItem>
                                <MenuItem value="private">Private</MenuItem>
                                <MenuItem value="unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend">Who can comment?</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" />
                                <FormControlLabel value="My Friends" control={<Radio size="small" />} label="My Friends" />
                                <FormControlLabel value="NoBody" control={<Radio size="small" />} label="NoBody" />
                                <FormControlLabel
                                    value="custom"
                                    disabled
                                    control={<Radio size="small" />}
                                    label="Custom (Premium)"
                                />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button variant="outlined" color="primary" style={{ marginRight: 20 }} onClick={handleCreate}>Create</Button>
                            <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    )
}

export default Add
