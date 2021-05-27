import React, { useState } from 'react';
import { makeStyles, Button, Container, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
        }
});

export default function Create() {

    const classes = useStyles();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos');

    const handleSubmit = e => {
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if (title === '') {
            setTitleError(true);
        } 
        if (details === '') {
            setDetailsError(true);
        }
        if (title && details) {
            console.log(title, details, category);
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title, details, category
                })
            }).then(() => {
                history.push('/');
            });
        }
    };

    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={ handleSubmit }>
                <TextField 
                    className={ classes.field }
                    label="Note Title"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    onChange={ e => setTitle(e.target.value) }
                    error={ titleError }
                />
                <TextField
                    className={ classes.field }
                    label="Details"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={ 4 }
                    fullWidth
                    required
                    onChange={ e => setDetails(e.target.value) }
                    error={ detailsError }
                />

                <FormControl className={ classes.field }>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup
                        value={ category }
                        onChange={ e => setCategory(e.target.value) }
                    >
                        <FormControlLabel 
                            control={ <Radio /> }
                            label="Money"
                            value="money"
                        />
                        <FormControlLabel
                            control={ <Radio /> }
                            label="Todos"
                            value="todos"
                        />
                        <FormControlLabel
                            control={ <Radio /> }
                            label="Reminders"
                            value="reminders"
                        />
                        <FormControlLabel
                            control={ <Radio /> }
                            label="Work"
                            value="work"
                        />
                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={ <KeyboardArrowRightIcon /> }
                >
                    Submit
                </Button>
            </form>
        </Container>
    )
}
