import ReactDOM from 'react-dom'
import React ,{ Component, PropTypes } from 'react';
import { render  } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";


import ReactTable from 'react-table'
import ContentHeader from '../content_header';
import "react-table/react-table.css";
import TrainerComp from './trainer';
import TrainingComp from './training';
import { createContainer } from 'meteor/react-meteor-data';
import { Players, Trainers, Trainings , TrainingAnalytics} from '/imports/api/tasks.js';
import ReactModal from 'react-modal'


  class Home1 extends Component {



  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
 
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let fullname = ReactDOM.findDOMNode(this.refs['FullName']).value;
    let    empID = ReactDOM.findDOMNode(this.refs['EMPID']).value;
    let   status = ReactDOM.findDOMNode(this.refs['STATUS']).value;
    let   Visits = ReactDOM.findDOMNode(this.refs['Visits']).value;
    // this.props.leaveData(review);
    console.log(fullname)
    console.log(empID)
    console.log(status)
    console.log(Visits)
    Trainers.insert({
        fullname: fullname,
        empl : empID,
        status : status ,
        visits : Visits,
      createdAt: new Date(), // current time

    })
  }  
  userDisplayName() {
    console.log(this.this.props.user)
    const currentUser = this.props.user;
    let name = 'Hamza Khan';

    if (currentUser) {
      name = currentUser.emails[0].address;
    }

    return name;
  }

  render() {
    return (
      <div>
     
     <TrainingComp pla={this.props.trainings1}/>
     <TrainerComp pla2={this.props.trainers1}/>
    </div>
    );
  }
}

export default createContainer(() => {
  /**
   * Add subscription here
   */
  Meteor.subscribe('players');
   Meteor.subscribe('trainers');
   Meteor.subscribe('trainings');
   Meteor.subscribe('trainAnalytics');



  return {
    
    trainers1: Trainers.find().fetch(),trainings1: Trainings.find().fetch(),
  };
}, Home1);
