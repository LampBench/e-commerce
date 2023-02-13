import React from "react";
import { styled } from "@mui/material/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Checkbox, FormControl } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

function TableGroup(props) {
    const {
        mode,
        modules,
        permissions,
        handleCheck
    } = props;

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    }));

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Modules</StyledTableCell>
                        <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>View</StyledTableCell>
                        <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Create</StyledTableCell>
                        <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Update</StyledTableCell>
                        <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {modules.map((module) => (
                        <StyledTableRow key={module.name}>
                            <StyledTableCell component="th" scope="row">
                                {module.title}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <FormControl>
                                    <Checkbox
                                        // check undefined
                                        defaultChecked={permissions[module.name] !== undefined ? permissions[module.name].view.checked : false}
                                        onChange={(e) => handleCheck(e, module.name, "view")}
                                        name={`roles[${module.name}][]`}
                                        color="primary"
                                        disabled={mode === 'view'}
                                        value="view"
                                    />
                                </FormControl>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <FormControl>
                                    <Checkbox
                                        defaultChecked={permissions[module.name] !== undefined ? permissions[module.name].create.checked : false}
                                        onChange={(e) => handleCheck(e, module.name, "create")}
                                        name={`roles[${module.name}][]`}
                                        color="primary"
                                        disabled={mode === 'view'}
                                        value="create"
                                    />
                                </FormControl>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <FormControl>
                                    <Checkbox
                                        defaultChecked={permissions[module.name] !== undefined ? permissions[module.name].update.checked : false}
                                        onChange={(e) => handleCheck(e, module.name, "update")}
                                        name={`roles[${module.name}][]`}
                                        color="primary"
                                        disabled={mode === 'view'}
                                        value="update"
                                    />
                                </FormControl>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <FormControl>
                                    <Checkbox
                                        defaultChecked={permissions[module.name] !== undefined ? permissions[module.name].delete.checked : false}
                                        onChange={(e) => handleCheck(e, module.name, "delete")}
                                        name={`roles[${module.name}][]`}
                                        color="primary"
                                        disabled={mode === 'view'}
                                        value="delete"
                                    />
                                </FormControl>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableGroup;