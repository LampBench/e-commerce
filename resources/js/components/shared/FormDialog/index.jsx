import React from "react";
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,   

    Switch,
    Typography
} from "@mui/material";

export default function FormDialog(props) {
    const {
        title,
        open,
        onClose,
        onSave,
        isLoading,
        children
    } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent
                sx={{
                    width: "500px",
                    paddingTop: "10px!important",
                    paddingBottom: "0px!important",
                }}
            >
                {isLoading ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100px",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    children
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}
