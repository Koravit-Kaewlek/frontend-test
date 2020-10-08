import React, { useContext } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { AppContext } from '../store/app-context';
import {
  ExpandMore,
  Favorite,
  FavoriteBorder,
  Refresh,
} from '@material-ui/icons';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import { green, grey, orange } from '@material-ui/core/colors';
import RecordDialog from './RecordDialog';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: '#dfd',
  },
  container: {
    padding: theme.spacing(2),
  },
  list: {
    position: 'relative',
    height: '80vh',
    overflowY: 'auto',
  },
  listItem: {
    '&:hover': {
      background: grey[200],
    },
  },
  loading: {
    color: theme.palette.info.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonRefresh: {
    marginRight: theme.spacing(1),
    color: green[500],
    borderColor: green[500],
    '&:hover': {
      color: green[700],
      borderColor: green[700],
    },
  },
  buttonRandom: {
    color: orange[500],
    borderColor: orange[500],
    '&:hover': {
      color: orange[700],
      borderColor: orange[700],
    },
  },
  buttonLength: {
    marginRight: theme.spacing(1),
  },
}));
export default function Home() {
  const classes = useStyles();
  const {
    jokes,
    handleRefresh,
    handleRandom,
    handleOpenRecordDialog,
    handleAddFavorite,
  } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Paper>
          <Box p={2} display="flex" alignItems="center" alignContent="center">
            <Box flexGrow={1}>
              <Box display="flex" alignItems="center">
                <Box mr={1}>
                  <SentimentVerySatisfiedOutlinedIcon
                    fontSize="large"
                    htmlColor="#fcc21b"
                  />
                </Box>
                <Box>
                  <Typography component="span" color="primary" variant="h5">
                    Chuck Norris
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Button
                onClick={handleOpenRecordDialog}
                className={classes.buttonLength}
                variant="outlined"
                endIcon={<ExpandMore />}
                size="small"
                color="primary"
              >
                {jokes.length}
              </Button>
              <Button
                className={classes.buttonRefresh}
                onClick={handleRefresh}
                variant="outlined"
                startIcon={<Refresh />}
                size="small"
              >
                Refresh
              </Button>
              <Button
                className={classes.buttonRandom}
                onClick={handleRandom}
                variant="outlined"
                startIcon={<ShuffleOutlinedIcon />}
                size="small"
              >
                Random
              </Button>
            </Box>
          </Box>
          <List className={classes.list} dense={true}>
            {jokes?.data.map((item, index) => (
              <React.Fragment key={item.id}>
                <ListItem className={classes.listItem}>
                  <ListItemText primary={`${index + 1}.  ${item.joke}`} />
                  <IconButton onClick={() => handleAddFavorite(item)}>
                    {item?.isFavorite ? (
                      <Favorite htmlColor="red" />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>
                </ListItem>
                <Divider key={index} />
              </React.Fragment>
            ))}
            {jokes.isLoading && (
              <CircularProgress size={32} className={classes.loading} />
            )}
          </List>
        </Paper>
      </Container>
      <RecordDialog />
    </div>
  );
}
