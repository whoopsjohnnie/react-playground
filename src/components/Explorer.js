
// 
// Copyright (c) 2020, 2021, John Grundback
// All rights reserved.
// 

import React, {Component} from 'react';
import PropTypes from 'prop-types'

import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ComputerIcon from '@material-ui/icons/Computer';



const treestruc = {
    'Open': {
        'Botsnode1 [Machine]': {

        },
        'Botsnode2 [Machine]': {

        }
    }, 
    '[namespace]': {
        'Types': {
            'Machine': {

            }
        }, 
        'Templates': {
        }, 
        'Queries': {
        }, 
        'Machines': {
            'Botsnode1': {

            },
            'Botsnode2': {
                
            }
        }
    }
};

const liststruc = [
    'Botsnode1', 
    'Botsnode2'
]

const styles = theme => ({

    treeViewGrid: {
        height: "100vh", 
        backgroundColor: "#fafafa",
    },

    mainViewGrid: {
        height: "100vh", 
        backgroundColor: "#ffffff",
    }, 

    listViewGrid: {
        height: "100vh", 
        backgroundColor: "#fdfdfd",
    }, 

    treeView: {
    }, 

    listView: { 
    }

});

// function StyledTreeItem(props) {
//     const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
//     return (
//       <TreeItem
//         label={
//           <div className="">
//             <LabelIcon color="inherit" className="" />
//             <Typography variant="body2" className="" >
//               {labelText}
//             </Typography>
//             <Typography variant="caption" color="inherit">
//               {labelInfo}
//             </Typography>
//           </div>
//         }
//       />
//     );
//   }
  
//   StyledTreeItem.propTypes = {
//     bgColor: PropTypes.string,
//     color: PropTypes.string,
//     labelIcon: PropTypes.elementType.isRequired,
//     labelInfo: PropTypes.string,
//     labelText: PropTypes.string.isRequired,
//   };


// var nodeid = 1;

// function MyTreeItems(props) {
function TreeViewItems(props) {
    var items = props.items;
    return (
        <>
        {Object.keys(items).map((key, index) => ( 
        <TreeItem 
            nodeId={key + index}
            label={key}>
            <TreeViewItems items={
                items[key]
            }/>
        </TreeItem>
        ))}
        </>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

// class Explorer extends Component {
function Explorer({ classes }) {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	}
	// }

	// state = {	
	// };

	// componentWillUpdate(nextProps, nextState) {
	// }

	// componentDidUpdate(prevProps, prevState) {
	// }

	// componentDidMount() {
	// }

	/*
	 * 
	 */

	// render() {
        // const classes = useStyles();
		return (
			<>
			<Container maxWidth="lg">
            { /* <h1 className="mt-5 mb-4">Explore</h1> */ }
			<Grid 
                container 
                xs={12} 
                spacing={1} 
            >

                <Grid 
                    className={classes.treeViewGrid} 
					item 
					xs={3} 
                    spacing={1} 
				>

                    <h3 className="mt-5 mb-4">Explore</h3>

                    <TreeView
                        className={classes.treeView}
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                    >
                        <TreeViewItems items={
                            treestruc
                        }/>
                    </TreeView>

				</Grid>

				<Grid 
                    container 
                    item 
                    xs={9} 
                    spacing={1} 
                >

                    <Grid 
                        className={classes.tabsViewGrid} 
					    item 
					    xs={12} 
                        spacing={1} 
					>

                        <Tabs
                            value="two"
                            onChange=""
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab value="one" label="Botsnode1 [Machine]" />
                            <Tab value="two" label="Botsnode2 [Machine]" />
                        </Tabs>

                    </Grid>

                    <Grid 
                        className={classes.listViewGrid} 
					    item 
					    xs={8} 
                        spacing={1} 
					>

                    </Grid>

                    <Grid 
                        className={classes.listViewGrid} 
					    item 
					    xs={4} 
                        spacing={1} 
					>

                        <h3 className="mt-5 mb-4">Machines</h3>

                        <List 
                            className={classes.listView}
                            component="nav" 
                            aria-label="">
                            {liststruc.map((row) => (
                                <ListItem button>
                                    <ListItemIcon>
                                        <ComputerIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={row} />
                                </ListItem>
                            ))}
                        </List>

				    </Grid>

				</Grid>

			</Grid>
			</Container>
			</>
		);
	// }

}

export default withStyles(styles)(Explorer);
