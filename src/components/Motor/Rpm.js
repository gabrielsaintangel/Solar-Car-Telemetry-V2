import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import * as GiIcons from "react-icons/gi";


var rpm = '420 RPM'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));


const Rpm = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              RPM
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {rpm}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <GiIcons.GiGears />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
         
          <Typography
            color="textSecondary"
            variant="caption"
          >
            
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Rpm.propTypes = {
  className: PropTypes.string
};

export default Rpm;