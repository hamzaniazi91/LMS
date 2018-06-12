import { DDPRateLimiter } from 'meteor/ddp-rate-limiter'
import ReactDOM from 'react-dom'
import React ,{ Component, PropTypes } from 'react';
import { render  } from "react-dom";


import Dropzone from 'react-dropzone'
import ReactTable from 'react-table'
import ContentHeader from '../content_header';
import "react-table/react-table.css";

import { createContainer } from 'meteor/react-meteor-data';
import { Players, Trainers, Trainings } from '/imports/api/tasks.js';
import ReactModal from 'react-modal'


   this.state = {
      data: Meteor.users.find()
    };





    const { data } = this.state;

console.log(data);
console.log(Meteor.users.find().fetch())

class UserList extends Component {


     componentWillMount() {
      console.log('Component WILL MOUNT!')
      
   }
      componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);

        //Accounts.removeDefaultRateLimit()


    }


     onDrop(files) { //this function is called whenever a file was dropped in your dropzone

        this.setState({
      files
    });

        console.log(files)
        _.each(files, function(file) {
            file.owner = Meteor.userId(); //before upload also save the owner of that file


            Papa.parse(file, {
          header: true,


 step: function(results, handle) {
            console.log(data, handle);
 //handle.pause()
 _.each(results.data, function(csvData) {
  Meteor.call('AddUsers', csvData, function( error, result)
{
   console.log(error, result);
});
           });
            // handle gives access to pause(), resume(), jqxhr, etc.
        },

//           complete: function(results) {


//                _.each(results.data, function(csvData) {
//                 //console.log(csvData)
//                 var arrayOptions = []
//                    console.log(csvData.EmployeeNumber + ' , ' 
//                     + csvData.EmployeeName + ' , ' 
//                     + csvData.Region + ' , ' 
//                     + csvData.ContactNo + ' , '
//                      + csvData.EmployeeEmail + ' , '
//                      + csvData.JoinDate + ' , ' 
//                      + csvData.Job
// );               


// Accounts.createUser({
//                             username: csvData.EmployeeName,
//                             emails : csvData.EmployeeEmail,
//                             password : 'lms@1234',
//                             ID : csvData.EmployeeNumber,
//                             profile  : {

//                               Area : csvData.EmployeeNumber,
//                               ContactNo   :  csvData.ContactNo,
//                               Department : csvData.Department,
//                               EmployeeEmail :  csvData.EmployeeEmail,
//                               EmployeeName : csvData.EmployeeName,
//                               EmployeeNumber : csvData.EmployeeNumber,
//                               Grade : csvData.Grade,
//                               Job : csvData.Job,
//                               JoinDate : csvData.JoinDate,
//                               Organization : csvData.Organization,
//                               Region : csvData.Region,
//                               SupervisorName : csvData.SupervisorName,
//                                 //publicly visible fields like firstname goes here
//                             }

//     }
//     , function(err) {
//   if (err)
//     console.log(err);
//   else
//     console.log('success!');
// });




//                    // arrayOptions.push(csvData.option0)
//                    // arrayOptions.push(csvData.option1)
//                    // arrayOptions.push(csvData.option2)
//                    // arrayOptions.push(csvData.option3)

//                    // console.log(arrayOptions)

//                    // var Qnumber= Questions.find({section : csvData.section}).count() + 1 ;

//                    // Questions.insert({no : Qnumber , options : arrayOptions , section: csvData.section, question: csvData.question , answer : parseInt(csvData.answer) , createdAt : new Date()   })


//                });
//           },
          skipEmptyLines: true
      });



            // Images.insert(file, function(err, fileObj) {
            //     if (err) {
            //         console.log(err); //in case there is an error, log it to the console
            //     } else {

            //       console.log(fileObj._id)
            //       hamza = fileObj._id;
            //         //the image upload is done successfully.
            //         //you can use this callback to add the id of your file into another collection
            //         //for this you can use fileObj._id to get the id of the file
            //     }
            // });
        });
      }



 



 
      



    



    render() {
        return (
           <div  >
           <h>Hamza</h>

           <div>
        <ReactTable

        filterable= "true"
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Employee ID",
                  accessor: "username"
                },
               
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Username",
                  accessor: "profile.EmployeeName"
                },
                {
                  Header: "Department",
                  accessor: "profile.Department"
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
        
     {/*   <Logo />*/}
      </div>


<h1> Users Add </h1>
<Dropzone  onDrop={this.onDrop.bind(this)} >
                    <div>Try dropping some files here, or click to select files to upload.</div>
              
                </Dropzone>


           </div> 
        );
    }
}


export default createContainer(() => {
  /**
   * Add subscription here
   */

 Meteor.subscribe('users');

  return {
    
  currentUser: Meteor.user(),
    users: Meteor.users.find().fetch(),
  };
}, UserList);

