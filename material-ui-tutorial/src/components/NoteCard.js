import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import { blue, green, pink, yellow } from '@material-ui/core/colors';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react'

const useStyles = makeStyles(theme => ({
    card: {
        border: (note) => {
            if (note.category === 'work') return `1px solid ${yellow[700]}`;
            else if (note.category === 'money') return `1px solid ${green[500]}`;
            else if (note.category === 'todos') return `1px solid ${pink[500]}`;
            else return `1px solid ${blue[500]}`;
        }
    },
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'work') return yellow[700];
            else if (note.category === 'money') return green[500];
            else if (note.category === 'todos') return pink[500];
            else return blue[500];
        }
    }
}));

export default function NoteCard({ note, handleDelete }) {

    const classes = useStyles(note);
    return (
        <Card elevation={ 1 } className={ classes.card }>
            <CardHeader
                avatar={
                    <Avatar className={ classes.avatar }>{ note.category[0].toUpperCase() }</Avatar>
                }
                title={ note.title }
                subheader={ note.category }
                action={
                    <IconButton onClick={ () => handleDelete(note.id) }>
                        <DeleteOutlined />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography 
                    variant="body2"
                    color="textSecondary"
                >
                    { note.details }
                </Typography>
            </CardContent>
            
        </Card>
    );
}
