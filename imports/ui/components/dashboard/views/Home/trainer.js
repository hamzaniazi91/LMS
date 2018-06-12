
import ReactDOM from 'react-dom'
import React , { Component, PropTypes } from 'react';
import { render } from "react-dom";
import { makeData3, Logo, Tips } from "./Utils";
import { createContainer } from 'meteor/react-meteor-data';

import ReactTable from 'react-table'
import ContentHeader from '../content_header';
import "react-table/react-table.css";
import { Players ,Trainers ,Trainings} from '/imports/api/tasks.js';
import ReactModal from 'react-modal'

    this.state = {
      data: makeData3()
    };
   const { data } = this.state;

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



class TrainerComp extends Component {
  getContentView() {
    return this.props.children ;
  }



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

  render() {
    const { currentUser } = this.props;

    const contentMinHeight = {
      minHeight: `${window.innerHeight - 101}px`,
    };

    return (
     
  <div className="Trainers-content">
    <ContentHeader
      name="Trainers"
      description="Trainers"
      breadcrumb="Trainers"
      breadcrumbIcon="fa fa-dashboard"
    />
    <section className="content">


<div className="container-fluid">
        <button type="button" className=" btn btn-primary" onClick={this.handleOpenModal}>Add Trainers</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={true}
            style={customStyles}
        >
          <p>Modal text!</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
           Name:
           <input placeholder="Name" ref="FullName" type="text" />

        </label><br></br>
        <label>
          Employee Id:

          <input placeholder="empid" ref="EMPID" type="text" />
        
        </label><br></br>
        <label>
          Status:
          <input placeholder="Status" ref="STATUS" type="text" />
         
        </label><br></br>
        <label>
          Visits:
          <input placeholder="visists" ref="Visits" type="text" />
         </label><br></br>
        <input type="submit" value="Submit" />

          <button onClick={this.handleCloseModal}>Close Modal</button>
          </form>
        </ReactModal>
      </div>



<div>
        <ReactTable

          getTdProps={(state, rowInfo, column, instance) => {
    return {
      onClick: (e, handleOriginal) => {
        console.log('A Td Element was clicked!')
        console.log('it produced this event:', e)
        console.log('It was in this column:', column)
        console.log('It was in this row:', rowInfo)
        console.log('It was in this table instance:', instance)

          // IMPORTANT! React-Table uses onClick internally to trigger
        // events like expanding SubComponents and pivots.
        // By default a custom 'onClick' handler will override this functionality.
        // If you want to fire the original onClick handler, call the
        // 'handleOriginal' function.
        if (handleOriginal) {
          handleOriginal()
        }
      }
    }
  }}

          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Name",
                  accessor: "fullname"
                },
               
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Employee ID",
                  accessor: "empl"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"

        />
        <br />
        <Tips />
     {/*   <Logo />*/}
      </div>







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

  return {
    currentUser: Meteor.user(),
    users: Meteor.users.find().fetch(),
  };
}, TrainerComp);


