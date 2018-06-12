
import ReactDOM from 'react-dom'
import React , { Component, PropTypes } from 'react';
import { render } from "react-dom";
import { makeData2, Logo, Tips } from "./Utils";
import { createContainer } from 'meteor/react-meteor-data';

import ReactTable from 'react-table'
import ContentHeader from '../content_header';
import "react-table/react-table.css";
import { Players ,Trainers ,Trainings,Images, TrainingAnalytics} from '/imports/api/tasks.js';
import ReactModal from 'react-modal'
import Dropzone from 'react-dropzone'

    this.state = {
   
    };


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



class TrainingAnalysis2 extends Component {
  getContentView() {
    return this.props.children ;
  }


  getTrainingAnalysis(){
    console.log(TrainingAnalytics.find().fetch());

    this.state = {

      TrainingAnalysis2 : TrainingAnalytics.find().fetch()
    }

  }


   constructor () {
    super();

    this.state = {
      showModal: false,
       files: [] 
    };
    
   
  }
  


  render() {
     const { preview } = this.state
    const { currentUser } = this.props;
     const { TrainingAnalytics22} = this.props;

 
    const contentMinHeight = {
      minHeight: `${window.innerHeight - 101}px`,
    };

    return (
     
  <div className="TrainingAnalysis-content">
    <ContentHeader
      name="TrainingAnalysis"
      description="TrainingAnalysis"
      breadcrumb="TrainingAnalysis"
      breadcrumbIcon="fa fa-dashboard"
    />
    <section className="content">

<h1 >Training Analytics</h1>


{/*<h3 onClick={this.getTrainingAnalysis()} >User Base </h3>
*/}

 

                           <ReactTable

        filterable= "true"
          data={TrainingAnalytics22}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Employee Name",
                  accessor: "user.profile.EmployeeName"
                },
               
              ]
            },
             {
              Header: "Info",
              columns: [
                {
                  Header: "Department",
                  accessor: "user.profile.Department"
                },
               
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Training",
                  accessor: "TrainingModule.trainingName"
                },
                {
                  Header: "Employee Id",
                  accessor: "user.username"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Date",
                  accessor: "date".toString(),
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"

        />
        <br />
        
     {/*   <Logo />
    
                        
                       
                        <div className="btn  box box-solid box-primary"  key={training._id}>
                        <div className="box-header">
                                                       <h3 className="box-title">{training.user.profile.EmployeeName}</h3>
                             </div>
                              
                              <div className="box-body">
                                Module ID : {training.TrainingModule.trainingName}<br></br>
                                

                             </div>

                           </div>
                           */}
                        

    </section>


  </div>
    );
  }
}

// LeaderBorad.propTypes = {
//   children: PropTypes.object,
//   currentUser: PropTypes.object,
//   users: PropTypes.arrayOf(PropTypes.object),
// };

export default createContainer(() => {
  /**
   * Add subscription here
   */
  Meteor.subscribe('users');
  Meteor.subscribe('trainAnalytics');

  return {
    currentUser: Meteor.user(),
    users: Meteor.users.find().fetch(),
    TrainingAnalytics22 : TrainingAnalytics.find().fetch()
  };
}, TrainingAnalysis2);

