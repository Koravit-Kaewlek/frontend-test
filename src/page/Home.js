import { Box, Button, Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}));
export default function Home() {
  const classes = useStyles();
  const 
  return (
    <div className={classes.root}>
      <Container>
        <Button>Random</Button>
      </Container>
    </div>
  );
}
