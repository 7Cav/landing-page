import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GameCard from './GameCard';
import game from './game';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    }
}));

export default function () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GameCard game={game[0]}/>
            <GameCard game={game[1]}/>
            <GameCard game={game[2]}/>
        </div>
    )
}