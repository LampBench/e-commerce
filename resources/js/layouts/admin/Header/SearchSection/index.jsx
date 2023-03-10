import { useEffect, useRef, useState } from "react";

import { useTheme, styled } from "@mui/material/styles";
import {
    Avatar,
    Box,
    ButtonBase,
    Card,
    Grid,
    InputAdornment,
    OutlinedInput,
    Popper,
} from "@mui/material";
import Transitions from "../../../../components/shared/Transitions";
import { shouldForwardProp } from "@mui/system";

import { Search as IconSearch } from "@mui/icons-material";
// styles
const PopperStyle = styled(Popper, { shouldForwardProp })(({ theme }) => ({
    zIndex: 1100,
    width: "99%",
    top: "-55px !important",
    padding: "0 12px",
    [theme.breakpoints.down("sm")]: {
        padding: "0 10px",
    },
}));

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(
    ({ theme }) => ({
        width: 434,
        marginLeft: 16,
        paddingLeft: 16,
        paddingRight: 16,
        "& input": {
            background: "transparent !important",
            paddingLeft: "4px !important",
        },
        [theme.breakpoints.down("lg")]: {
            width: 250,
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            marginLeft: 4,
            background: "#fff",
        },
    })
);

const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(
    ({ theme }) => ({
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.dark,
        "&:hover": {
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.light,
        },
    })
);

const MobileSearch = ({ value, setValue, popupState }) => {
    const theme = useTheme();
    return (
        <OutlineInputStyle
            id="input-search-header"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
            startAdornment={
                <InputAdornment position="start">
                    <IconSearch
                        stroke={1.5}
                        size="1rem"
                        color={theme.palette.grey[500]}
                    />
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                    <ButtonBase sx={{ borderRadius: "12px" }}>
                        <HeaderAvatarStyle variant="rounded"></HeaderAvatarStyle>
                    </ButtonBase>
                    <Box sx={{ ml: 2 }}>
                        <ButtonBase sx={{ borderRadius: "12px" }}>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.mediumAvatar,
                                    background: theme.palette.orange.light,
                                    color: theme.palette.orange.dark,
                                    "&:hover": {
                                        background: theme.palette.orange.dark,
                                        color: theme.palette.orange.light,
                                    },
                                }}
                                {...bindToggle(popupState)}
                            ></Avatar>
                        </ButtonBase>
                    </Box>
                </InputAdornment>
            }
            aria-describedby="search-helper-text"
            inputProps={{ "aria-label": "weight" }}
        />
    );
};

const SearchSection = ({ setParams }) => {
    const theme = useTheme();
    const [value, setValue] = useState("");

    const setSearchValue = (searchValue) => {
        setValue(searchValue);
        setParams((prevValue) => {
            return {
                ...prevValue,
                search: searchValue,
                page: 1,
            };
        });
    };

    return (
        <>
            <Box sx={{ display: { xs: "block", md: "none" } }}></Box>
            <Box
                sx={{
                    display: { xs: "none", md: "block" },
                    marginBottom: "15px",
                    textAlign: "right",
                }}
            >
                <OutlineInputStyle
                    style={{ width: "35%" }}
                    id="input-search-header"
                    value={value}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search"
                    startAdornment={
                        <InputAdornment position="start">
                            <IconSearch
                                stroke={1.5}
                                size="1rem"
                                color={theme.palette.grey[500]}
                            />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <ButtonBase sx={{ borderRadius: "12px" }}>
                                <HeaderAvatarStyle variant="rounded"></HeaderAvatarStyle>
                            </ButtonBase>
                        </InputAdornment>
                    }
                    aria-describedby="search-helper-text"
                    inputProps={{ "aria-label": "weight" }}
                />
            </Box>
        </>
    );
};

export default SearchSection;
