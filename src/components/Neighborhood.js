import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import neighborhoodImage from '../images/neighborhoodImage.png'

const useStyles = makeStyles(() => ({
  neighborhoodContainer: {
    padding: '10px 20px',
    border: '1px hidden blue',
    marginTop: '50px',
  },
  neighborhoodTitle: {
    fontSize: '24px',
    border: '1px hidden blue',
  },
  neighborhoodMapImage: {
    width: '70%',
  }
}));

const Neighborhood = () => {
  const classes = useStyles();

  return (
    <div className={classes.neighborhoodContainer}>
      <div className={classes.neighborhoodTitle}>
        The neighborhood
      </div>

      <div className={classes.neighborhoodMap}>
        <img
          src={neighborhoodImage}
          alt="neighborhoodMap"
          className={classes.neighborhoodMapImage}
        />
      </div>
    </div>
  );
}

export default Neighborhood;