import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { useQuery, gql, useMutation } from "@apollo/client";
import { ADD_MOVIES, GET_MOVIES } from '../graph/index'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PublishIcon from '@material-ui/icons/Publish'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox'

const useStyles = makeStyles((theme) => ({
  style: {
    color: "#000000",
    backgroundColor: 'transparent'
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    backgroundColor: 'transparent'

  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: '#212121'

  },
}))

export default function FormDialog({open, close}) {
  const classes = useStyles();
  const [newTag, setNewTag] = useState('')
  const [ addMovie, { data: newMovieResult} ] = useMutation(ADD_MOVIES)
  const [formData, setFormData] = useState({
    title: '',
    overview: '',
    poster_path: '',
    popularity: 0,
    tags: []})

  const submitAddMovies = (e) => {
    e.preventDefault()
    console.log(formData, 'ini dataform')
    addMovie({
      variables: { input: formData },
      refetchQueries: [{ query: GET_MOVIES }]
    })
    close()
  }

  function onChangeNewTag (e) {
    setNewTag(e.target.value)
  } 

  function addNewTag () {
    let newInput = JSON.parse(JSON.stringify(formData))
    newInput.tags.push(newTag)
    setFormData(newInput)
    setNewTag('')
  }

  function onChangeInput (e, key) {
    let input = e.target.value
    if (key === 'popularity') {
      input = +e.target.value
    }
    console.log(e)
    let newInput = {...formData}
    newInput[key] = input
    setFormData(newInput)
  }

  const handleDelete = (tagToDelete) => () => {
    let newInput = JSON.parse(JSON.stringify(formData))
    newInput.tags = newInput.tags.filter((tag) => tag !== tagToDelete)
    setFormData(newInput);
  };

  return (
    <div>
      <Dialog
        className={classes.style}
        open={open} onClose={close}
        PaperProps={{
          style: {
            backgroundColor: 'Black',
            color:'grey'
          },
        }}
      >
        <DialogTitle id="form-dialog-title">Add Movie</DialogTitle>
        <DialogContent>
          <TextField label="Title"
            color="secondary"
            size="small"
            style={{ margin: 8 }}
            defaultValue={formData.title}
            onChange={(e) => onChangeInput(e, "title")}
            fullWidth variant="outlined" required 
            autoComplete="off"/>

          <TextField label="Overview"
            color="secondary"
            size="small"
            style={{ margin: 8 }}
            defaultValue={formData.title}
            onChange={(e) => onChangeInput(e, "overview")}
            fullWidth variant="outlined" required 
            autoComplete="off"/>

          <TextField label="Poster URL"
            color="secondary"
            size="small"
            style={{ margin: 8 }}
            defaultValue={formData.title}
            onChange={(e) => onChangeInput(e, "poster_path")}
            fullWidth variant="outlined" required 
            autoComplete="off"/>

          <TextField label="Popularity"
            color="secondary"
            size="small"
            style={{ margin: 8 }}
            defaultValue={formData.popularity}
            onChange={(e) => onChangeInput(e, "popularity")}
            fullWidth variant="outlined" required 
            autoComplete="off"/>

          <TextField label="Tags"
            color="secondary"
            style={{ margin: 8 }}
            size="small"
            defaultValue=''
            onChange={onChangeNewTag}
            variant="outlined" required 
            autoComplete="off"/>
            <Button
              size="medium"
              style={{ margin: 8, color: "grey" }}
              variant="outlined"
              onClick={addNewTag}
              startIcon={< AddBoxIcon/>}
            >Add Tag</Button>

            <Paper component="ul" className={classes.chipContainer}>
              {formData.tags.map((data, index) => {
                return (
                  <li key={index}>
                    <Chip
                      label={data}
                      onDelete={handleDelete(data)}
                      className={classes.chip}
                    />
                  </li>
                );
              })}
            </Paper>

        </DialogContent>
        <DialogActions>
          <Button
          size="large"
          style={{ margin: 8 }}
          variant="contained"
          color="secondary"
          onClick={submitAddMovies}
          startIcon={<PublishIcon />}
        >SUBMIT</Button>
        <Button
          size="large"
          style={{ margin: 8 }}
          variant="outlined"
          color="secondary"
          onClick={close}
          startIcon={<ClearIcon />}
        >CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}