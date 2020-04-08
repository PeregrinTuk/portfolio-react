import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
});

export function AirBnb() {
	const classes = useStyles();
	return (
		<div>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField id="outlined-basic" label="Outlined" variant="outlined" />
			</form>
			<Button variant="outlined" color="primary">
				Primary
			</Button>
			<Button variant="outlined" color="primary">
				Primary
			</Button>
			<div>
				<Button variant="outlined">Default</Button>
			</div>
		</div>
	);
}
