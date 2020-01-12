import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import HostProfile from './components/HostProfile';

const useStyles = makeStyles(() => ({
  root: {
    border: '1px solid red',
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <HostProfile />
    </Container>
  );
}

export default App;
