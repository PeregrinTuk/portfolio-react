import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
	rot: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));
export function AirBnb() {
	const classes = useStyles();
	return (
		<div>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField
					id="outlined-basic"
					label="¿A donde vas?"
					variant="outlined"
				/>
			</form>
			<Button variant="outlined" color="primary">
				Fechas
			</Button>
			<Button variant="outlined" color="primary">
				Huespedes
			</Button>
			<div>
				<Button variant="outlined">Default</Button>
			</div>
			<Typography>Buscá opciones en Airbnb</Typography>
			<CenteredGrid />
			<Button variant="outlined">Lugares para alojarse</Button>
		</div>
	);
}

export default function CenteredGrid() {
	const classes = useStyles();
	return (
		<div className={classes.rot}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
