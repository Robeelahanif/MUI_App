import {
    Button,
    Container,
    Fab,
    FormControlLabel,
    FormLabel,
    Grid,
    Modal,
    Radio,
    RadioGroup,
    Snackbar,
    TextField,
    Tooltip,
    Alert,
    MenuItem,
  } from "@mui/material";
  import { Add as AddIcon, } from "@mui/icons-material";
  import { useState } from "react";
  
  const styles = {
    fab: {
      position: "fixed",
      bottom: 40,
      right: 20,
    },
    container: {
      width: 500,
      height: 600,
      backgroundColor: "white",
      padding:"10px",
      borderRadius: '10px',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
    },
    form: {
      padding: 1,
    },
    item: {
      marginBottom: 2,
    },
  };
  
  function Add() {
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpenAlert(false);
    };
  
    return (
      <>
        <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
          <Fab color="primary" sx={styles.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <Modal open={open}>
          <Container sx={styles.container}>
            <Grid container spacing={2} sx={styles.form}>
              <Grid item xs={12} sx={styles.item}>
                <TextField label="Title" size="small" fullWidth />
              </Grid>
              <Grid item xs={12} sx={styles.item}>
                <TextField
                  multiline
                  rows={4}
                  defaultValue="Tell your story..."
                  variant="outlined"
                  label="Description"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={styles.item}>
                <TextField select label="Visibility" value="Public" fullWidth>
                  <MenuItem value="Public">Public</MenuItem>
                  <MenuItem value="Private">Private</MenuItem>
                  <MenuItem value="Unlisted">Unlisted</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sx={styles.item}>
                <FormLabel>Who can comment?</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="Everybody"
                    control={<Radio size="small" />}
                    label="Everybody"
                  />
                  <FormControlLabel
                    value="My Friends"
                    control={<Radio size="small" />}
                    label="My Friends"
                  />
                  <FormControlLabel
                    value="Nobody"
                    control={<Radio size="small" />}
                    label="Nobody"
                  />
                  <FormControlLabel
                    value="Custom"
                    disabled
                    control={<Radio size="small" />}
                    label="Custom (Premium)"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} sx={styles.item}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ marginRight: 2 }}
                  onClick={() => setOpenAlert(true)}
                >
                  Create
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Modal>
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      </>
    );
  }
  
  export default Add;
  