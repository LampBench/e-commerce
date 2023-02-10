import React, { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
} from '@mui/material';

import { tableCellClasses } from '@mui/material/TableCell';

import { MainCard } from "../../../components/shared";

import GroupService from "../../../services/group.service";

const columns = [
    {
        title: 'Group name',
        dataIndex: 'name',
        type: 'text',
        columnAlign: 'center',
        contentAlign: 'left',
    },
    {
        title: 'Group description',
        dataIndex: 'description',
        type: 'text',
        columnAlign: 'center',
        contentAlign: 'left',
    },
    {
        title: 'Actions',
        dataIndex: 'action',
        type: 'action',
        columnAlign: 'center',
        contentAlign: 'center',
        options: [
            {
                title: 'Edit',
                sx: {
                    backgroundColor: 'green',
                    color: 'white',
                },
                onClick: () => {
                    console.log('Edit');
                },
            },
            {
                title: 'Delete',
                sx: {
                    backgroundColor: 'red',
                    color: 'white',
                },
                onClick: () => {
                    console.log('Delete');
                },
            },
        ]
    },
];

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

const GroupTable = (columns, dataSource) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <StyledTableCell
                                key={column.title}
                                align={column.columnAlign || 'left'}
                                sx={{ fontWeight: 'bold' }}
                            >
                                {column.title}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataSource.map((row) => (
                        <StyledTableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {columns.map((column) => {
                                const value = row[column.dataIndex];
                                if (column.type === 'action') {
                                    return (
                                        <StyledTableCell key={column.title} align={column.contentAlign || 'left'}>
                                            {column.options.map((option) => (
                                                <Button
                                                    key={option.title}
                                                    sx={option.sx}
                                                    onClick={option.onClick}
                                                >
                                                    {option.title}
                                                </Button>
                                            ))}
                                        </StyledTableCell>
                                    );
                                } else {
                                    return (
                                        <StyledTableCell key={column.title} align={column.contentAlign || 'left'}>
                                            {value}
                                        </StyledTableCell>
                                    );
                                }
                            })}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


function GroupList() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        GroupService.getGroups().then((response) => {
            setGroups(response.data.data);
        });
    }, []);
    return (
        <MainCard title="Group List">
            {GroupTable(columns, groups)}
        </MainCard>
    );
}

export default GroupList;