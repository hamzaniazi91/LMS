
import React, { Component, PropTypes } from 'react';
import { makeClientData } from "./ClientUtils";
import { Players ,Trainers ,Trainings,Images , TrainingAnalytics} from '/imports/api/tasks.js';
import { createContainer } from 'meteor/react-meteor-data';

import Dropzone from 'react-dropzone'
import { Link } from 'react-router';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Loading from '../../../layouts/loading/loading';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


this.state = {
      data: makeClientData(new Date())
    };
   const { data } = this.state;

   console.log(makeClientData(new Date()).fetch())

 function fileUpload(){


};

//let style = 


const numbers = data;
const listItems = numbers.map(() =>
 <div className="btn  box box-solid box-primary">
              <div className="box-header">
                <h3 className="box-title">Default Solid Box Example</h3>
              </div>
              <div className="box-body">
                The body of the box
              </div>
            </div>
);


class clientHome1 extends Component {
    static propTypes = {
        className: PropTypes.string,
    };
   

     componentWillMount() {
      console.log('Component WILL MOUNT!')
      fileUpload()
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
       console.log(newProps)
       console.log(makeClientData().fetch())

   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')

   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
  
activateTraining(id,e){

   console.log( this)
   console.log( id)
   console.log( e)

   TrainingAnalytics.insert(
   {

    TrainingModule : id,
    user : Meteor.user(),
    date: new Date().toString(),
   }

)
}

    constructor(props) {
        super(props);
        this.state = { disabled: true, files: [] }
    }

       onDrop(files) { //this function is called whenever a file was dropped in your dropzone

        this.setState({
      files
    });
        _.each(files, function(file) {
            file.owner = Meteor.userId(); //before upload also save the owner of that file
            Images.insert(file, function(err, fileObj) {
                if (err) {
                    console.log(err); //in case there is an error, log it to the console
                } else {
                    //the image upload is done successfully.
                    //you can use this callback to add the id of your file into another collection
                    //for this you can use fileObj._id to get the id of the file
                }
            });
        });
      }

      handleSelectEvent(event) {
     console.log(event)
 }

    render() {

       let  trainings1 = this.props.trainings1;
     
       console.log( trainings1 )
       const hamza= this.props.trainings1
       this.state
console.log(hamza)
       if (this.props.loading) {
            return <Loading />
        } 
        else 
        {
            

        return (
             <div  >
    
   {/* <section className="content"><span>Trainings</span></section>*/}

 <ul>{listItems}</ul>


 

  {
                    trainings1.map(training => {
                        return  <div className="container-fluid" key={training._id}>
                        
                        <Link to={`/client-dash/${training._id}`}   onClick={(e) => this.activateTraining(training ,e)}>
                        <div className="btn  box box-solid box-primary"  key={training._id}>
                        <div className="box-header">
                            <h3 className="box-title">{training.trainingName}</h3>
                             </div>
                              <div className="box-body">
                                Module ID : {training._id}<br></br>
                                Start Date : {training.stDateFormatted}<br></br>
                                End Date : {training.enDateFormatted}<br></br>

                             </div>
                           </div>
                           </Link>
                           </div>
                    })
                }



{/* <Dropzone onDrop={this.onDrop.bind(this)}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                      <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
    </ul>
                </Dropzone>*/}



<div style={{ height: '600px' ,  width: '90%' , marginLeft: 'auto', marginRight: 'auto' }}>
    <BigCalendar
      events={hamza}
      onSelectEvent={(e) => {this.activateTraining(e,e._id);this.props.router.push({pathname:`/client-dash/${e._id}`})}}
      startAccessor='stDate'
      endAccessor='enDate'
     style={{ height: '600px'}}
      defaultDate={new Date()}
    />
  </div>

            
  </div>
        );
      }
    }
}

export default createContainer(() => {
  /**
   * Add subscription here
   */
  Meteor.subscribe('players');
   Meteor.subscribe('trainers');
  const sub1 =  Meteor.subscribe('trainings');
   Meteor.subscribe('images');
   

console.log(sub1)

let loading = !sub1.ready()

var tag = "/.*"+Meteor.user().username+"*/"
console.log(tag)

  return {
    loading : loading,
    
    trainers1: Trainers.find().fetch(),trainings1: Trainings.find({ $and:[{ 
    
        $or:[
    {Dept : {$in: [Meteor.user().profile.Department]  }},
    {Job : {$in: [Meteor.user().profile.Job]  }},
     {tagempID : {$in: [Meteor.user().username]  } },
    ]
    },
    
    {stDate:{$lte: new Date()}},
    {enDate:{$gte: new Date()}}
    
    
    
    ]}).fetch(),
  };
}, clientHome1);



