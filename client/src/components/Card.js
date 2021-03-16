import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import Rating  from '@material-ui/lab/Rating'
import { useHistory } from 'react-router';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
  root: {
    width: 380,
    flexWrap: 'nowrap',
    // width: 100%,
    // objectFit: "contain",
    marginRight: 0,
    '&:hover': {
      transform: "scale(1.05)",
      transitionDuration: 300,
      zIndex: 100
    },
  },
  media: {
    height: 400,
  },
});

export default function CardFilm (props) {
  const history = useHistory()
  let datum = props.datum
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    // nanti dipakai untuk bookmarknya
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function goToEdit() {
    history.push('/add')
  }

  return (
  <>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={datum.poster_path}
        title={datum.title}
      />
      <CardContent>
        <Typography >
          {datum.title.toUpperCase()}
        </Typography>

    <CardActions>
      <Typography>{datum.popularity}</Typography>
      <Rating name="read-only" 
        precision={0.1}
        value={datum.popularity / 2}
        readOnly
        size="small"
        />
      <Button size="small" onClick={goToEdit}>
        Edit
      </Button>
    </CardActions>
      </CardContent>
      </CardActionArea>
    </Card>
  </>
  )
} 