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
    Button,
    Grid,
    Typography,
    CircularProgress,
    Box
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { MainCard } from "../../../components/shared";
import GroupService from "../../../services/group.service";
import withPermission from "../../../routes/hocs/WithPermission";
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {
    AddModerator,
    Policy,
    Delete
} from "@mui/icons-material";

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
                                width={column.width || 'auto'}
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
                                        <StyledTableCell 
                                            key={column.title} 
                                            align={column.contentAlign || 'left'}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                '& > :not(style) + :not(style)': {
                                                    ml: 1
                                                }
                                            }}
                                        >
                                            {column.options.map((option) => (
                                                <Button
                                                    key={option.title}
                                                    sx={option.sx}
                                                    onClick={
                                                        () => option.onClick(row.id)
                                                    }
                                                    startIcon={option.startIcon}
                                                >
                                                    <Typography variant="body1">
                                                        {option.title}
                                                    </Typography>
                                                </Button>
                                            ))}
                                        </StyledTableCell>
                                    );
                                } else {
                                    return (
                                        <StyledTableCell key={column.title} align={column.contentAlign || 'left'}>
                                            <Typography 
                                                variant="body1"
                                                sx={{
                                                    fontWeight: column.fontWeight || 'normal'
                                                }}
                                            >
                                                {value}
                                            </Typography>
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
    const [isLoading, setIsLoading] = useState(true);
    const theme = useTheme();
    const navigate = useNavigate();
    useEffect(() => {
        GroupService.getGroups()
            .then((response) => {
                setGroups(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    const columns = [
        {
            title: 'Group name',
            dataIndex: 'name',
            type: 'text',
            columnAlign: 'left',
            contentAlign: 'left',
        },
        {
            title: 'Group description',
            dataIndex: 'description',
            type: 'text',
            columnAlign: 'left',
            contentAlign: 'left',
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            type: 'action',
            columnAlign: 'center',
            contentAlign: 'center',
            width: '300px',
            options: [
                {
                    title: 'Permissions',
                    sx: {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                        }
                    },
                    onClick: (id) => {
                        navigate(`/admin/groups/${id}`);
                    },
                    startIcon: <Policy />,
                },
                {
                    title: 'Delete',
                    sx: {
                        backgroundColor: theme.palette.error.main,
                        color: 'white',
                        '&:hover': {
                            backgroundColor: theme.palette.error.dark,
                        }
                    },
                    onClick: (id) => {
                        console.log("Debug id: ", id);
                    },
                    startIcon: <Delete />,
                },
            ]
        },
    ];
    return (
        <MainCard 
            title="Group List" 
            secondary={
                <Button
                    variant="contained"
                    startIcon={<AddModerator />}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                    }}
                    onClick={() => navigate('/admin/groups/create')}
                >
                    Add Group
                </Button>
            }
        >
            {
                isLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {GroupTable(columns, groups)}
                        </Grid>
                    </Grid>
                )
            }
        </MainCard>
    );
}

export default withPermission('groups', 'view')(GroupList);