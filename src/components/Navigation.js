
// 
// Copyright (c) 2020, 2021, John Grundback
// All rights reserved.
// 

import React, { useState, Fragment } from 'react';

import clsx from 'clsx';
// import { Router, Switch, Route, Link } from "react-router-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch
	} from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import GrainIcon from '@material-ui/icons/Grain';
// import ExtensionIcon from '@material-ui/icons/Extension';
// import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import InputBase from '@material-ui/core/InputBase';
import ComputerIcon from '@material-ui/icons/Computer';
import CodeIcon from '@material-ui/icons/Code';

import Dashboard from './Dashboard'

// import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';



const drawerWidth1 = 73;
const drawerWidth2 = 240;

const styles = theme => ({

	root: {
		display: 'flex',
		flexGrow: 1
	},

	flex: {
		flex: 1
	},

	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth1,
			flexShrink: 0,
		},
		[theme.breakpoints.up('md')]: {
			width: drawerWidth1,
			flexShrink: 0,
		},
	},

	drawerFull: {
		// [theme.breakpoints.up('sm')]: {
		// 	width: drawerWidth1,
		// 	flexShrink: 0,
		// },
		// [theme.breakpoints.up('md')]: {
		width: drawerWidth2,
		flexShrink: 0,
		// },
	},

	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		// [theme.breakpoints.up('sm')]: {
		// 	width: `calc(100% - ${drawerWidth1}px)`,
		// 	marginLeft: drawerWidth1,
		// },
		// [theme.breakpoints.up('md')]: {
		// 	width: `calc(100% - ${drawerWidth2}px)`,
		// 	marginLeft: drawerWidth2,
		// },
	},

	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			// display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			// display: 'none',
		},
	},

	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},

	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

	inputRoot: {
		color: 'inherit',
	},

	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
			[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},

	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		position: "relative",
		// // width: drawerWidth2,
		// [theme.breakpoints.up('sm')]: {
		// 	width: drawerWidth1,
		// },
		// [theme.breakpoints.up('md')]: {
		// 	width: drawerWidth2,
		// },
		width: drawerWidth1,
		overflowX: "hidden"
	},

	content: {
		flexGrow: 1,
		padding: 0, // theme.spacing(3),
		position: 'relative',
		top: '64px'
	},

});

const AppToolbar = withStyles(styles)(function({ classes, title, open, onMenuClick, onDrawerToggle }) {

	const handleDrawerToggle = () => {
		onDrawerToggle();
	}

	return (
		<Fragment>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton} >
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						{title}
					</Typography>

					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<ComputerIcon/>
						</div>
						<InputBase
							placeholder="Search"
							value="search"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>

				</Toolbar>
			</AppBar>
			<div className={classes.toolbarMargin} />
		</Fragment>
	);
});

const AppDrawer = withStyles(styles)(function({ classes, variant, open, onClose, onItemClick, onDrawerToggle }) {

	const handleDrawerToggle = () => {
		onDrawerToggle();
	}

	const container = undefined;

	return (
		<Router>
			<nav className={classes.drawer}>

			<Hidden smUp implementation="css">
				<Drawer
					container={container}
					variant="temporary"
					anchor='left'
					open={open}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerFull,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}} >
					<Container 
						style={{minHeight: 64}}
						>
					</Container>
					<Container>
						<h1 style={{display: 'none'}}>"Name"</h1>
						<h2 style={{display: 'none'}}>"Title"</h2>
						<p style={{display: 'none'}}>"Description"</p>
					</Container>
					<Divider />
					<List>
						<ListItem 
							button 
							component={Link} 
							to="/" 
							// onClick={onItemClick(title)}
							>
							<ListItemIcon title="Dashboard"><DashboardIcon/></ListItemIcon>
							<ListItemText>Dashboard</ListItemText>
						</ListItem>
						<ListItem 
							button 
							component={Link} 
							to="/" 
							// onClick={onItemClick(title)}
							>
							<ListItemIcon title="Dashboard"><DataUsageIcon/></ListItemIcon>
							<ListItemText>Dashboard</ListItemText>
						</ListItem>
					</List>
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant="permanent"
					open >
					<div
						className={clsx({
							[classes.toolbarMargin]: variant === 'persistent'
						})}
					/>
					<Container 
						style={{minHeight: 64}}
						>
					</Container>
					<Container>
						<h1 style={{display: 'none'}}>"Name"</h1>
						<h2 style={{display: 'none'}}>"Title"</h2>
						<p style={{display: 'none'}}>"Description"</p>
					</Container>
					<Divider />
					<List>
						<ListItem 
							button 
							component={Link} 
							to="/" 
							// onClick={onItemClick(title)}
							>
							<ListItemIcon title="Dashboard"><DashboardIcon/></ListItemIcon>
							<ListItemText>Dashboard</ListItemText>
						</ListItem>
						<ListItem 
							button 
							component={Link} 
							to="/dashboard" 
							// onClick={onItemClick(title)}
							>
							<ListItemIcon title="Dashboard"><DataUsageIcon/></ListItemIcon>
							<ListItemText>Dashboard</ListItemText>
						</ListItem>
					</List>
				</Drawer>
			</Hidden>
			</nav>
			<main className={classes.content}>
				<div class="">
				<Switch>
				<Route 
					exact 
					path="/" 
					render={
						(props) => 
							<>
							<Dashboard />
							</>
					} />
				<Route 
					exact 
					path="/dashboard" 
					render={
						(props) => 
							<>
							<Dashboard />
							</>
					} />
				</Switch>
				</div>
			</main>
		</Router>
	);

});

function AppNavigation({ classes, variant }) {

	const [drawer, setDrawer] = useState(false);

	const title = "Title";

	const toggleDrawer = () => {
		setDrawer(!drawer);
	};

	return (
		<div className={classes.root}>
			<AppToolbar 
				title={title} 
				onMenuClick={toggleDrawer}
				onDrawerToggle={toggleDrawer} />
			<AppDrawer 
				open={drawer} 
				onClose={toggleDrawer} 
				onDrawerToggle={toggleDrawer}
				// onItemClick={onItemClick} 
				variant={variant} />
		</div>
	);

}

export default withStyles(styles)(AppNavigation);
