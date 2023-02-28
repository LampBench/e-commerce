import { Link } from 'react-router-dom';

import { ButtonBase, Typography } from '@mui/material';

import config from '../../../config';

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <Typography variant="h2" component="h1" sx={{ display: 'flex', alignItems: 'center' }}>
            eCommerce
        </Typography>
    </ButtonBase>
);

export default LogoSection;