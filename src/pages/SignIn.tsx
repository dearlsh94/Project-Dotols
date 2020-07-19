import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import MyButton from '../elements/MyButton';

const useStyles = makeStyles((theme) => ({
	title: {
		marginTop: 10,
	},
	form: {
		marginTop: 20,
	},
	signin: {
		marginTop: 20,
	}
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <React.Fragment>
			<Container component="main" maxWidth="xs">
				<Typography 
					className={classes.title}
					component="h1" 
					variant="h5">
						Sign in
				</Typography>
				<form
					noValidate 
					className={classes.form}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
									variant="outlined"
									required
									fullWidth
									id="id"
									name="id"
									label="User ID"
									autoComplete="id"
									value=""
									onChange={() => {}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value=""
								onChange={() => {}}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox 
										value="allowExtraEmails" 
										color="primary" 
										checked
										onChange={() => {}}/>
								}
								label="Remember Me"
							/>
						</Grid>
					</Grid>
					<Grid 
						container 
						justify="flex-end"
						className={classes.signin}>
							<MyButton
								color="red"
								text="SIGN IN"
								onClick={() => {
									console.log("onClick");
								}}/>
							<Grid item>
								<Link href="/signin" variant="body2">
									Sign up?
								</Link>
							</Grid>
					</Grid>
				</form>
			</Container>
    </React.Fragment>
  );
}