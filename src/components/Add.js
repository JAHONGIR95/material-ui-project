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
    TextField,
    Tooltip,
} from "@material-ui/core"
import { Add as AddIcon } from "@material-ui/icons"

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
}))

function Add() {
    const [open, setOpen] = useState(false)
    const [age, setAge] = useState('')
    const classes = useStyles()

    const handleChange = (e) => {
        setAge(e.target.value)
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
                                variant="standard"
                                label="Description"
                                size="small"
                                style={{ width: "100%" }}
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="Status" style={{minWidth: 80}} onChange={handleChange} value={age}>
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
                            <Button variant="outlined" color="primary" style={{marginRight: 20}}>Create</Button>
                            <Button variant="outlined" color="secondary" onClick={ () => setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
        </>
    )
}

export default Add
