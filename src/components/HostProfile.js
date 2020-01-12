import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GeneralInfo from './GeneralInfo';
import HousePolicies from './HousePolicies';
import HostAdditionalInfo from './HostAdditionalInfo';
import Neighborhood from './Neighborhood';
import ButtonBar from './ButtonBar';

const useStyles = makeStyles(() => ({
  hostProfileContainer: {
    border: '1px hidden orange',
  },
}));

const HostProfile = () => {
  const classes = useStyles();

  return (
    <div className={classes.hostProfileContainer}>
      <GeneralInfo />
      <HousePolicies />
      <HostAdditionalInfo />
      <Neighborhood />
      <ButtonBar />
    </div>
  );
}

export default HostProfile;