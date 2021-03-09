
// 
// Copyright (c) 2020, 2021, John Grundback
// All rights reserved.
// 

import React, {Component} from 'react';
import PropTypes from 'prop-types'

import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from 'reactstrap';

import {
    InputGroup,
    InputGroupAddon,
    Input,
} from 'reactstrap';


const hour = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
];

const min = [
    "00",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50"
];

const amPm = [
    "am",
    "pm"
];

const TimelineDefault = (props) => (
    <React.Fragment>
        { /* START TIMELINE Default */}
        <div className="timeline timeline-datetime">
            {
                props.showPillDate && (
                    <React.Fragment>
                        { /* START PILL Date */}
                        <div className="timeline-date">
                            <span className="badge badge-pill badge-secondary">
                                { props.pillDate }
                            </span>
                        </div>
                        { /* END PILL Date */}
                    </React.Fragment>
                    )
            }
            <div className="timeline-item pr-3">
                { /* START Small ICON  */}
                <div className="timeline-icon">
                    <i className={` fa fa-circle-o text-${ props.smallIconColor }`}></i>
                </div>
                { /* END Small ICON  */}
                <div className="timeline-item-inner pb-0">
                    { /* START HOUR  */}
                    <span className="timeline-item-time">
                        
                    </span>
                    { /* START HOUR  */}
                    <div className="timeline-item-head pb-0">
                        { /* START ICON Circle  */}
                        <div className="pull-left mr-2">
                            <span className="fa-stack fa-lg">
                                <i className={` fa fa-circle fa-stack-2x text-${ props.iconCircleColor }`}></i> 
                                <i className={` fa fa-stack-1x text-white fa-${ props.iconCircle }`}></i>
                            </span>
                        </div>
                        { /* END ICON Circle  */}
                        <div className="user-detail">
                            { /* START TITLE  */}
                            <h6 className="mb-0">
                                
                            </h6>
                            { /* END TITLE  */}
                            { /* START SUB-TITLE  */}
                            <p>
                                
                            </p>
                            { /* END SUB-TITLE  */}
                        </div>
                    </div>
                    { /* START CONTENT  */}
                    <div className="timeline-item-content">
                        <p>
                            
                        </p>
                    </div>
                    { /* END CONTENT  */}
                </div>
            </div>
        </div>
        { /* END TIMELINE Default */}
    </React.Fragment>
)

TimelineDefault.propTypes = {
    showPillDate: PropTypes.bool,
        pillDate: PropTypes.string,
    smallIconColor: PropTypes.string,
    iconCircleColor: PropTypes.string,
        iconCircle: PropTypes.string,
    badgeTitle: PropTypes.string
};

TimelineDefault.defaultProps = {
    showPillDate: false,
        pillDate: "Waiting",
    smallIconColor: "secondary",
    iconCircleColor: "secondary",
        iconCircle: "question"
};



const TimelineMini = (props) => (
    <React.Fragment>
        { /* START TIMELINE Position */}
        <div className="timeline">
            {
                props.showPillDate && (
                    <React.Fragment>
                        { /* START PILL Date */}
                        <div className="timeline-date">
                            <Badge pill>
                                { props.pillDate }
                            </Badge>
                        </div>
                        { /* END PILL Date */}
                    </React.Fragment>
                    )
            }
            { /* START POST Timeline */}
            <div className="timeline-item">
                { /* Icon */}    
                <div className="timeline-icon">
                    <i className={` fa fa-fw fa-${ props.icon } ${ props.iconClassName }`}></i>
                </div>
                <div className="timeline-item-head clearfix mb-0 pl-3">
                    { /* Badge */}
                    <div className="mb-2">
                        <span className={`badge badge-${ props.badgeColor } `}>
                            { props.badgeTitle }
                        </span>
                    </div>
                    { /* Content */}
                    <p className="text-inverse mb-1">
                        { props.content }
                    </p>
                    { /* Date */}
                    <p>
                        { props.date }
                    </p>
                </div>
            </div>
            { /* END POST Timeline */}
        </div>
        { /* END Timeline Position */}
    </React.Fragment>
)

TimelineMini.propTypes = {
    showPillDate: PropTypes.bool,
        pillDate: PropTypes.string,
    icon: PropTypes.string,
    iconClassName: PropTypes.string,
    badgeColor: PropTypes.string,
    badgeTitle: PropTypes.string
};

TimelineMini.defaultProps = {
    showPillDate: false,
        pillDate: "Waiting",
    icon: "question-circle",
    iconClassName: "text-secondary",
    badgeColor: "secondary",
    badgeTitle: "Waiting"
};





const ProjectsList = (props) => (
    <React.Fragment>
        <div className="d-flex flex-column">
            <div className="mb-3 d-flex justify-content-between">
                <span className="mb-0 text-inverse">
                     
                </span>
                <Badge color={ `${ props.badgeColor }` } pill className="align-self-center">
                    
                </Badge>
            </div>
			<LinearProgress />
            <div className="d-flex justify-content-between">
                <div className="text-center">
                    <h5 className="mb-1">
                        
                    </h5>
                    <span>
                        Complete
                    </span>
                </div>
                <div className="text-center">
                    <h5 className="mb-1">
                        { props.myTasksValue }
                    </h5>
                    <span>
                        My Tasks
                    </span>
                </div>
                <div className="text-center">
                    <h5 className="mb-1">
                        { props.daysDueValue }
                    </h5>
                    <span>
                        Days Due
                    </span>
                </div>  
            </div>
        </div>
    </React.Fragment>
)




const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};

class DraggableProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    id: "1",
                    title: "1",
                    badgeColor: "success",
                    badgeTitle: "Active",
                    progressValue: "76",
                    completeValue: "13",
                    myTasksValue: "35",
                    daysDueValue: "6"
                }, {
                    id: "2",
                    title: "2",
                    badgeColor: "danger",
                    badgeTitle: "Suspended",
                    progressValue: "23",
                    completeValue: "6",
                    myTasksValue: "87",
                    daysDueValue: "15"
                }, {
                    id: "3",
                    title: "3",
                    badgeColor: "secondary",
                    badgeTitle: "Archived",
                    progressValue: "4",
                    completeValue: "98",
                    myTasksValue: "21",
                    daysDueValue: "7"
                }, {
                    id: "4",
                    title: "4",
                    badgeColor: "warning",
                    badgeTitle: "Paused",
                    progressValue: "63",
                    completeValue: "98",
                    myTasksValue: "21",
                    daysDueValue: "7"
                }
            ]
        };

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
      
        const projects = reorder(
            this.state.projects,
            result.source.index,
            result.destination.index
        );
      
        this.setState({
            projects,
        });
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            className="list-group list-group-flush"
                            ref={provided.innerRef}
                        >
                            {_.map(this.state.projects, ({id, ...project}, index) => (
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided, snapshot) => (
                                        <div 
                                            className="list-group-item"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                ...provided.draggableProps.style,
                                                borderLeft: snapshot.isDragging && '1px solid rgba(0, 0, 0, 0.125)',
                                                borderRight: snapshot.isDragging && '1px solid rgba(0, 0, 0, 0.125)'
                                            }}
                                        >
                                            <ProjectsList 
                                                { ...project }
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}




const styles = theme => ({

});

class Timeline extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	state = {
		
	};

	// componentWillUpdate(nextProps, nextState) {
	// }

	componentDidUpdate(prevProps, prevState) {
	}

	componentDidMount() {
	}

	/*
	 * 
	 */

	render() {
		return (
			<>
			<Container maxWidth="lg">
			<h1 className="mt-5 mb-4">Builds</h1>
			<Grid container spacing={3}>

                <Grid 
					item 
					xs={8}
					>
                    <Card className="">
					    <CardContent>
                            <h6>
                                Timeline Mini
                            </h6>
                            <TimelineMini 
                                showPillDate
                                pillDate="2 Days ago"
                                icon="times-circle"
                                iconClassName="text-danger"
                                badgeTitle="Alert"
                                badgeColor="danger"
                                content="Public-key secondary encryption"
                                date="Thu Jan 21 2021 22:56:25 GMT-0800 (PST)"
                            />
                            <TimelineMini 
                                icon="question-circle"
                                iconClassName="text-warning"
                                badgeTitle="Warning"
                                badgeColor="warning"
                                content="Public-key secondary encryption"
                                date="Thu Jan 21 2021 22:56:25 GMT-0800 (PST)"
                            />
                            <TimelineMini 
                                icon="info-circle"
                                iconClassName="text-info"
                                badgeTitle="Info"
                                badgeColor="info"
                                content="Public-key secondary encryption"
                                date="Thu Jan 21 2021 22:56:25 GMT-0800 (PST)"
                            />
                            <TimelineMini 
                                showPillDate
                                pillDate="Yesterday"
                                icon="plus-circle"
                                iconClassName="text-primary"
                                badgeTitle="Message"
                                badgeColor="primary"
                                content="Public-key secondary encryption"
                                date="Thu Jan 21 2021 22:56:25 GMT-0800 (PST)"
                            />
                            <TimelineMini 
                                icon="check-circle"
                                iconClassName="text-success"
                                badgeTitle="Success"
                                badgeColor="success"
                                content="Public-key secondary encryption"
                                date="Thu Jan 21 2021 22:56:25 GMT-0800 (PST)"
                        />
                            <TimelineMini 
                                icon="circle"
                                badgeTitle="Obsolete"
                            />
                        </CardContent>
                        <ListGroup flush>
                            <ListGroupItem action tag={ Link } to="/pages/timeline" className="text-center">
                                Timeline Details
                                <i className="fa fa-angle-right ml-2"></i>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Grid>

                <Grid 
					item 
					xs={4}
					>
                    <Card className="">
                        <CardContent>
                            <h6>
                                Projects
                            </h6>
                            <InputGroup>
                                <Input placeholder="Search Projects..." />
                                <InputGroupAddon addonType="append">
                                    <Button color="secondary" outline tag={ Link } to="/apps/projects/list">
                                        <i className="fa fa-search"></i>
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </CardContent>
                        <DraggableProjects />
                    </Card>
                </Grid>

			</Grid>
			</Container>
			</>
		);
	}

}

export default withStyles(styles)(Timeline);
