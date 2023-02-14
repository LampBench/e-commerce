import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ open, setOpen, setIsDelete }) {
    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleAccept = () => {
        setIsDelete(true);
    };
    return (
        <Dialog
            open={open}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" sx={{ fontSize: "17px" }}>
                Are you sure you want to delete this item?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description"></DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog}>Disagree</Button>
                <Button onClick={handleAccept} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}
