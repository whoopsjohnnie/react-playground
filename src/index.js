
// 
// Copyright (c) 2020, 2021, John Grundback
// All rights reserved.
// 

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Navigation from './components/Navigation.js';

require('./index.css');
// require('../node_modules/dist/style.min.css');



// const loggerMiddleware = createLogger()

class App extends Component {

	// constructor(props) {
	// 	super(props);
	// }

	render() {
		// const { classes } = this.props;
		return (
			<>
			<React.Fragment>
			<CssBaseline />
			<Navigation />
			</React.Fragment>
			</>
		);
	}

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
