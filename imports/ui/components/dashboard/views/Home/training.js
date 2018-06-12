
import ReactDOM from 'react-dom'
import React , { Component, PropTypes } from 'react';
import { render } from "react-dom";
import { makeData2, Logo, Tips } from "./Utils";
import { createContainer } from 'meteor/react-meteor-data';

import ReactTable from 'react-table'
import ContentHeader from '../content_header';
import "react-table/react-table.css";
import { Players ,Trainers ,Trainings,Images} from '/imports/api/tasks.js';
import ReactModal from 'react-modal'
import Dropzone from 'react-dropzone'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertFromRaw,convertToRaw, ContentState } from 'draft-js';
import Modal from 'react-responsive-modal';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

    this.state = {
      data: makeData2()
    };
   const { data } = this.state;

   console.log(makeData2())

let hamza = "";

   const style = {
      height:'150',
      width:'200px',
      overflow:'auto',


    }


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


 const styleTbox = {
                maxHeight:'350px',
                minHeight:'38px',
                  resize:'none',
                  padding:'9px',
                  boxSizing:'border-box',
                  fontSize:'15px',
                 width: '500px',
                 height:'150px'};


class TrainingComp extends Component {
  getContentView() {
    return this.props.children ;
  }



componentDidUpdate(prevProps, prevState) {
  
 
 
  console.log(prevProps, prevState)
}


   constructor () {
    super();
     const contentState = convertFromRaw(content);

        const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);

this.state = {
  editorState,
}
}

    this.state = {
      showModal: false,
       files: [],
     editorState: EditorState.createEmpty(),
        open: false,
         contentState,
         Update :false,
       options: [],
       options2: []
    };
    
    // this.handleOpenModal = this.handleOpenModal.bind(this);
    // this.handleCloseModal = this.handleCloseModal.bind(this);
    //  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   // this.handleInputChange = this.handleInputChange.bind(this);

 
  }

removeCommaSplit( list)
{

  var fieldName = ""
     $.each( list , function (i, name) {     

    fieldName = fieldName + name + "\n"

      });

     return fieldName;
}

  onOpenModal = (Modalstate , trainObject) => {


    console.log(Modalstate)

    // In Training Mode
    if(Modalstate === "Edit"){
      this.setState({
        Modalstate,
        TrainId : trainObject.original._id
      })
   setTimeout(function() {
     
          ReactDOM.findDOMNode(this.refs['Tname']).value = trainObject.original.trainingName;
    ReactDOM.findDOMNode(this.refs['Tcode']).value  =         trainObject.original.trainingCode;
     ReactDOM.findDOMNode(this.refs['STATUS']).value  =  trainObject.original.status;
    ReactDOM.findDOMNode(this.refs['stDate']).value =  trainObject.original.stDate;
    ReactDOM.findDOMNode(this.refs['enDate']).value  =  trainObject.original.enDate;
    //ReactDOM.findDOMNode(this.refs['PContent']).value =  trainObject.original.PContent;

    console.log(this.state.options2)


var depId = this.removeCommaSplit(trainObject.original.Dept) 
var jobId = this.removeCommaSplit(trainObject.original.Job) 
var empId = this.removeCommaSplit(trainObject.original.tagempID)    


ReactDOM.findDOMNode(this.refs['tagdepID']).value  =  depId
ReactDOM.findDOMNode(this.refs['tagjobID']).value  =  jobId
ReactDOM.findDOMNode(this.refs['tagempID']).value  =  empId
     ReactDOM.findDOMNode(this.refs['stDate']).value  =  trainObject.original.stDateFormatted;
    ReactDOM.findDOMNode(this.refs['enDate']).value =  trainObject.original.enDateFormatted;

hamza = trainObject.original.AttachId;
//this.state.files[0].name = trainObject.original.AttachId;



 const blocksFromHTML = htmlToDraft(trainObject.original.PContent);
      const content = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );

this.setState({
      editorState: EditorState.createWithContent(content)
    });

    }.bind(this), 0);

 }

 else {

   this.setState({
        Modalstate : "New"
      })
 }

 //////
    this.setState({ open: true , Update: true });


  };

  onCloseModal = () => {
    this.setState({ 
      open: false,
      editorState: EditorState.createEmpty(),
       options: [],
       options2: [],
       files: [],
       });
  };



   onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });

    console.log(this.state.editorState)
  };

   onContentStateChange: Function = (contentState) => {
    this.setState({
      contentState,
    });

    console.log(this.state.contentState)
  };
  
  // handleOpenModal () {
  //   this.setState({ showModal: true });
  // }
  
  // handleCloseModal () {
  //   this.setState({ showModal: false });
  // }
 
  
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

 //    handleInputChange(event) {

 //        // current array of options
 //    const options = this.state.options
 //     let index;

 //      if (event.target.checked) {
 //      // add the numerical value of the checkbox to options array
 //      options.push(+event.target.checked)
 //    } else {
 //      // or remove the value from the unchecked checkbox from the array
 //      index = options.indexOf(+event.target.checked)
 //      options.splice(index, 1)
 //    }

 //    const target = event.target;
 //    const value = target.type === 'checkbox' ? target.checked : target.value;
 //   // value.push()
 //    const name = target.name;

 //    console.log(value  , name , options);

 // this.setState({ options: options })
 //  }

   onChange(e) {
    // current array of options
    const options = this.state.options
    let index

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(e.target.value)
      console.log(e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }

    // update the state with the new array of options
    console.log(this.state.options)
    this.setState({ options: options })
  }

     onChange2(e) {
    // current array of options
    const options2 = this.state.options2
    let index2

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options2.push(e.target.value)
      console.log(e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options2.indexOf(e.target.value)
      options2.splice(index, 1)
    }

    // update the state with the new array of options
    console.log(this.state.options2)
    this.setState({ options2: options2 })
  }

  onDrop(files) { //this function is called whenever a file was dropped in your dropzone

        this.setState({
      files
    });

        console.log(files)
        _.each(files, function(file) {
            file.owner = Meteor.userId(); //before upload also save the owner of that file
            Images.insert(file, function(err, fileObj) {
                if (err) {
                    console.log(err); //in case there is an error, log it to the console
                } else {

                  console.log(fileObj._id)
                  hamza = fileObj._id;
                    //the image upload is done successfully.
                    //you can use this callback to add the id of your file into another collection
                    //for this you can use fileObj._id to get the id of the file
                }
            });
        });
      }




 commaSplit(nl)
{

     var userlist = []; 
  $.each(nl.split(/\n/), function (i, name) {     
//console.log(someArray);
      // empty string check
      if(name != ""){

          userlist.push(name);

      }   
      });

return userlist;
}

  handleSubmit(event) {
    event.preventDefault();
    let trainingName = ReactDOM.findDOMNode(this.refs['Tname']).value;
    let    trainingCode = ReactDOM.findDOMNode(this.refs['Tcode']).value;
    let   status = ReactDOM.findDOMNode(this.refs['STATUS']).value;
    let   stdate = new Date(ReactDOM.findDOMNode(this.refs['stDate']).value);
    let   endate = new Date(ReactDOM.findDOMNode(this.refs['enDate']).value);
      let   PContent = ReactDOM.findDOMNode(this.refs['PContent']).value;
    
    let   stdateformatted = ReactDOM.findDOMNode(this.refs['stDate']).value;
    let   endateformatted = ReactDOM.findDOMNode(this.refs['enDate']).value;
     let   testMand = ReactDOM.findDOMNode(this.refs['testMand']).checked;
    
     let   tagempID = ReactDOM.findDOMNode(this.refs['tagempID']).value;


     
   var deptList = ReactDOM.findDOMNode(this.refs['tagdepID']).value;
  var jobList = ReactDOM.findDOMNode(this.refs['tagjobID']).value;
  var nameList = ReactDOM.findDOMNode(this.refs['tagempID']).value;
  

 var deptList2 = this.commaSplit(deptList)
   var jobList2 = this.commaSplit(jobList)
 var userlist =  this.commaSplit(nameList)



//let   department = ReactDOM.findDOMNode(this.refs['position2']).value;

    // this.props.leaveData(review);
    // console.log(fullname)
    // console.log(empID)
    // console.log(status)
    // console.log(Visits)

// if(this.state.Update === true)
// {
// Trainings.update({


//         trainingName: trainingName,
//         trainingCode : trainingCode,
//         status : status ,
//         stDate : stdate,
//         enDate : endate,

//         stDateFormatted : stdateformatted,
//         enDateFormatted : stdateformatted,
//         AttachId: hamza,
//         PContent:PContent,
//       createdAt: new Date(), // current time

//     })
// }

// else
// {
  let Component2 = this;
  console.log(Component2)

  if (this.state.Modalstate === "New" )
    Trainings.insert({


        trainingName: trainingName,
        trainingCode : trainingCode,
        status : status ,
        stDate : stdate,
        enDate : endate,
        title: trainingName,
        stDateFormatted : stdateformatted,
        enDateFormatted : endateformatted,
        AttachId: hamza,
        PContent:PContent,
       // Dept : department,
      createdAt: new Date(), // current time
      Dept: deptList2,
      Job:jobList2,
      testMand : testMand, 
      tagempID : userlist,

    }

     , function( error, result) { 
    if ( error ) console.log ( error ); //info about what went wrong
    if ( result ) {console.log ( result , Component2);Component2.setState({ showModal: false ,open : false});} //the _id of new object if successful
  })

  else if (this.state.Modalstate === "Edit" )
  {

  Trainings.update({ _id : this.state.TrainId }  , {$set:{


        trainingName: trainingName,
        trainingCode : trainingCode,
        status : status ,
        stDate : stdate,
        enDate : endate,
        title: trainingName,
        stDateFormatted : stdateformatted,
        enDateFormatted : endateformatted,
        AttachId: hamza,
        PContent:PContent,
       // Dept : department,
      createdAt: new Date(), // current time
      Dept: deptList2,
      Job:jobList2,
      testMand : testMand, 
      tagempID : userlist,

    }
}
     , function( error, result) { 
    if ( error ) console.log ( error ); //info about what went wrong
    if ( result ) {console.log ( result , Component2);Component2.setState({ showModal: false ,open : false});} //the _id of new object if successful
  })


  }

    // }

    // this.setState({ showModal: false });

  }  



  render() {
     const { preview } = this.state
    const { currentUser } = this.props;
    const { editorState } = this.state;
      const { open } = this.state;


    const contentMinHeight = {
      minHeight: `${window.innerHeight - 101}px`,
    };

    console.log(this.state.Modalstate)
    let button = null;
    if (this.state.Modalstate === "Edit" ) {
      button = <input type="submit" value="Update" />
    } else {
      button = <input type="submit" value="Submit" />
    }

    return (
     
  <div className="Trainings-content">
    <ContentHeader
      name="Trainings"
      description="Trainings"
      breadcrumb="Trainings"
      breadcrumbIcon="fa fa-dashboard"
    />
    <section className="content">


 <div className="container-fluid">
       {/* <button onClick={this.handleOpenModal}>Add Trainings</button>*/}

          <div>
        <button type="button" className=" btn btn-primary" onClick={this.onOpenModal}>Add Trainings</button>
        <Modal  open={open} onClose={this.onCloseModal} >
         <p>Training Details</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Training Name:
           <input placeholder="Training Name" ref="Tname" type="text"  required/>

        </label><br></br>
        <label>
          Training Code:

          <input placeholder="Training Code" ref="Tcode" type="text" required/>
        
        </label><br></br>
        <label>
          Status:
          <input placeholder="Status" ref="STATUS" type="text"required />
         
        </label><br></br>
        <label>
         Start Date
          <input placeholder="stDate" ref="stDate" type="date" required/>
         </label><br></br>

          <label>
         End Date
          <input placeholder="enDate" ref="enDate" type="date" required/>
         </label><br></br>

         <label>
         Quiz Mandatory : 
          <input type="checkbox" ref="testMand"  />
         </label><br></br>

         {/*<label>Department Specific Section</label>
  <select className="browser-default" ref="position2" id="position2">
    <option value="" disabled selected>Choose your option</option>
    <option value="PRODUCT DEVELOPMENT & SHARIAH COMPLIANCE">PRODUCT DEVELOPMENT & SHARIAH COMPLIANCE</option>
    <option value="DCEO Office">DCEO Office</option>
    <option value="FINANCE">FINANCE</option>
    <option value="COMPANY SECRETARIAT & CORPORATE AFFAIRS">COMPANY SECRETARIAT & CORPORATE AFFAIRS</option>
    <option value="CONSUMER FINANCE">CONSUMER FINANCE</option>
    <option value="INFORMATION TECHNOLOGY">INFORMATION TECHNOLOGY</option>
    <option value="SHARIAH AUDIT & ADVISORY">SHARIAH AUDIT & ADVISORY</option>
    <option value="Commercial Banking">Commercial Banking</option>
    <option value="OPERATIONS">OPERATIONS</option>
    <option value="ADMINISTRATION & BRANCH EXPANSION">ADMINISTRATION & BRANCH EXPANSION</option>
    <option value="RISK MANAGEMENT">RISK MANAGEMENT</option>
    <option value="CEO OFFICE">CEO OFFICE</option>
    <option value="CORPORATE & INVESTMENT BANKING">CORPORATE & INVESTMENT BANKING</option>
    <option value="ALTERNATE DISTRIBUTION CHANNEL (ADC)">ALTERNATE DISTRIBUTION CHANNEL (ADC)</option>
    <option value="COMMERCIAL & SME">COMMERCIAL & SME</option>
    <option value="INTERNAL AUDIT & BRR">INTERNAL AUDIT & BRR</option>
    <option value="LEGAL">LEGAL</option>
    <option value="TREASURY AND FINANCIAL INSTITUTION">TREASURY AND FINANCIAL INSTITUTION</option>
    <option value="FRAUD RISK MANAGEMENT">FRAUD RISK MANAGEMENT</option>
    <option value="ADMINISTRATION">ADMINISTRATION</option>
    <option value="MARKETING">MARKETING</option>
    <option value="COMPLIANCE">COMPLIANCE</option>
    <option value="Remedial Assets Management">Remedial Assets Management</option>
    <option value="SERVICE QUALITY DEPARTMENT">SERVICE QUALITY DEPARTMENT</option>
    <option value="HUMAN RESOURCE">HUMAN RESOURCE</option>
    <option value="LEARNING & DEVELOPMENT">LEARNING & DEVELOPMENT</option>
    <option value="SECURITY">SECURITY</option>
    <option value="INFORMATION SECURITY">INFORMATION SECURITY</option>
    <option value="BRANCHLESS BANKING">BRANCHLESS BANKING</option>
    <option value="CONSUMER BANKING & MARKETING">CONSUMER BANKING & MARKETING</option>
    <option value="BRANCH BANKING, COMMERCIAL, SME & AGRICULTURE FINANCE">BRANCH BANKING, COMMERCIAL, SME & AGRICULTURE FINANCE</option>
    <option value="PMO & IT Governance">PMO & IT Governance</option>
    <option value="PAYMENT SERVICES">PAYMENT SERVICES</option>
    <option value="CUSTOMER SUPPORT DEPARTMENT">CUSTOMER SUPPORT DEPARTMENT</option>
    <option value="LEARNING & DEVELOPMENT,CORPORATE COMMUNICATIONS & INNOVATION">LEARNING & DEVELOPMENT,CORPORATE COMMUNICATIONS & INNOVATION</option>
    <option value="Corporate">Corporate</option>
   <option value="All">Other</option>

  </select>*/}

            
{/*<div className="row">
           <div id="ScrollCB" style={style} className="col-sm-4"> 
 {/*<input type="checkbox" id="scb1" name="scb1" value="1"/>As Seen On Tv
 <label>
          
          Department:
   </label>
   <br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="PRODUCT DEVELOPMENT & SHARIAH COMPLIANCE"/>PRODUCT DEVELOPMENT & SHARIAH COMPLIANCE<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="DCEO Office"/>DCEO Office<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="FINANCE"/>FINANCE<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="COMPANY SECRETARIAT & CORPORATE AFFAIRS"/>COMPANY SECRETARIAT & CORPORATE AFFAIRS<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="CONSUMER FINANCE"/>CONSUMER FINANCE<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="INFORMATION TECHNOLOGY"/>INFORMATION TECHNOLOGY<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="SHARIAH AUDIT & ADVISORY"/>SHARIAH AUDIT & ADVISORY<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="Commercial Banking"/>Commercial Banking<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="OPERATIONS"/>OPERATIONS<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="ADMINISTRATION & BRANCH EXPANSION"/>ADMINISTRATION & BRANCH EXPANSION<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="RISK MANAGEMENT"/>RISK MANAGEMENT<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="CEO OFFICE"/>CEO OFFICE<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="CORPORATE & INVESTMENT BANKING"/>CORPORATE & INVESTMENT BANKING<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="ALTERNATE DISTRIBUTION CHANNEL (ADC)"/>ALTERNATE DISTRIBUTION CHANNEL (ADC)<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="COMMERCIAL & SME"/>COMMERCIAL & SME<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="INTERNAL AUDIT & BRR"/>INTERNAL AUDIT & BRR<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="LEGAL"/>LEGAL<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="TREASURY AND FINANCIAL INSTITUTION"/>TREASURY AND FINANCIAL INSTITUTION<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="FRAUD RISK MANAGEMENT"/>FRAUD RISK MANAGEMENT<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="ADMINISTRATION"/>ADMINISTRATION<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="MARKETING"/>MARKETING<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="COMPLIANCE"/>COMPLIANCE<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="Remedial Assets Management"/>Remedial Assets Management<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="SERVICE QUALITY DEPARTMENT"/>SERVICE QUALITY DEPARTMENT<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="HUMAN RESOURCE"/>HUMAN RESOURCE<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="LEARNING & DEVELOPMENT"/>LEARNING & DEVELOPMENT<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="SECURITY"/>SECURITY<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="INFORMATION SECURITY"/>INFORMATION SECURITY<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="BRANCHLESS BANKING"/>BRANCHLESS BANKING<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="CONSUMER BANKING & MARKETING"/>CONSUMER BANKING & MARKETING<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="BRANCH BANKING, COMMERCIAL, SME & AGRICULTURE FINANCE"/>BRANCH BANKING, COMMERCIAL, SME & AGRICULTURE FINANCE<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="PMO & IT Governance"/>PMO & IT Governance<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="PAYMENT SERVICES"/>PAYMENT SERVICES<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="CUSTOMER SUPPORT DEPARTMENT"/>CUSTOMER SUPPORT DEPARTMENT<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="LEARNING & DEVELOPMENT,CORPORATE COMMUNICATIONS & INNOVATION"/>LEARNING & DEVELOPMENT,CORPORATE COMMUNICATIONS & INNOVATION<br></br>
    <input type="checkbox" onChange={this.onChange2.bind(this)} value="Corporate"/>Corporate<br></br>
{/*    <input type="checkbox" onChange={this.onChange2.bind(this)} value="All"/>All<br></br>

</div>

 <div id="ScrollCB" style={style} className="row" className="col-sm-4"> 
 {/*<input type="checkbox" id="scb1" name="scb1" value="1"/>As Seen On Tv

 <label>
          
          Job:
   </label>
 <br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Shariah Advisor"/>Shariah Advisor<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="DCEO"/>DCEO<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Manager"/>Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Department Head"/>Department Head<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Officer"/>Officer<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Regional Manager"/>Regional Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Deputy Manager"/>Deputy Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Operation Manager"/>Operation Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Branch Services Officer"/>Branch Services Officer<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Regional Coordinator"/>Regional Coordinator<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Telephone Operator"/>Telephone Operator<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Area Manager"/>Area Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Branch Manager"/>Branch Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Executive Secretary"/>Executive Secretary<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Supervisor"/>Supervisor<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Personal Banking Officer"/>Personal Banking Officer<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Trade Finance Officer"/>Trade Finance Officer<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Relationship Manager"/>Relationship Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Personal Banking Manager"/>Personal Banking Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Relationship Officer"/>Relationship Officer<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Trade Finance Manager"/>Trade Finance Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Advisor"/>Advisor<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Business Development Officer"/>Business Development Officer<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Area Coordinator"/>Area Coordinator<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Credit Manager"/>Credit Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="President & CEO"/>President & CEO<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Regional Credit Manager"/>Regional Credit Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Credit Officer"/>Credit Officer<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Area Service Quality Manager"/>Area Service Quality Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Sorter"/>Sorter<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Regional Operations Coordinator"/>Regional Operations Coordinator<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Office Executive"/>Office Executive<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Premium Relationship Manager"/>Premium Relationship Manager<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Universal Teller"/>Universal Teller<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Premium Relationship Officer"/>Premium Relationship Officer<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Regional HR Coordinator"/>Regional HR Coordinator<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Customer Relationship Officer"/>Customer Relationship Officer<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="ACCA Traniee"/>ACCA Traniee<br></br>
    <input type="checkbox" onChange={this.onChange.bind(this)} value="Team Leader"/>Team Leader<br></br>





</div>


<div>

<textarea ref="tagdepID"></textarea>


</div>


<div>

<textarea ref="tagjobID"></textarea>


</div>


<div>

<textarea ref="tagempID"></textarea>


</div>
</div>*/}

{/*  <div className="selected-items">
          {this.state.options.map(number => 
             <p key={number}>item: {number}</p>
          )}
        </div>*/}
     



    {/* </div>*/}


<div>
 <label>
          
          Department:
   </label>
    <br></br>
<textarea style={styleTbox} ref="tagdepID"></textarea>


</div>


<div>
 <label>
          
          Job:
   </label>
    <br></br>
<textarea  style={styleTbox} 
 ref="tagjobID"></textarea>


</div>


<div>
 <label>
          
          Employee Id Tagging:
   </label>
    <br></br>
<textarea  style={styleTbox} ref="tagempID"></textarea>


</div>
        <label>
         Page Content
          
          {/*<textarea placeholder="PContent" ref="PContent" cols="40" rows="5"></textarea>*/}

          <Editor
         
  editorState={editorState}
  toolbarClassName="home-toolbar"
  wrapperClassName="home-wrapper"
  editorClassName="rdw-storybook-editor"
  onEditorStateChange={this.onEditorStateChange}
   onContentStateChange={this.onContentStateChange}
/>




 <textarea hidden
 ref="PContent"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />

         </label><br></br>

         <Dropzone onDrop={this.onDrop.bind(this)} >
                    <div>Try dropping some files here, or click to select files to upload.</div>
                      <ul>
            {
              this.state.files.map(f => 
                
                <li  key={f.name}>{f.name}</li>
                
          
            )
            }

      {/*      { preview &&
        <img src={ preview } alt="image preview" />
        }*/}
    </ul>
                </Dropzone>


   {button}
        
          </form>
            <button onClick={this.onCloseModal}>Close Modal</button>
        </Modal>
      </div>
        
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
        this.onOpenModal("Edit",rowInfo);
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
                  Header: "Training Name",
                  accessor: "trainingName"
                },
               
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Training Code",
                  accessor: "trainingCode"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Dates',
              columns: [
                {
                  Header: "From",
                  accessor: "stDateFormatted"
                },
                {
                  Header: "To",
                  accessor: "enDateFormatted"
                }
              ]
            },

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
}, TrainingComp);





// const LeaderBorad = () => (




//   <div className="Home1-content">
//     <ContentHeader
//       name="Trainers"
//       description="Trainers"
//       breadcrumb="Trainers"
//       breadcrumbIcon="fa fa-dashboard"
//     />
//     <section className="content">




// <div>
//         <ReactTable
//           data={data}
//           columns={[
//             {
//               Header: "Name",
//               columns: [
//                 {
//                   Header: "Name",
//                   accessor: "fullname"
//                 },
               
//               ]
//             },
//             {
//               Header: "Info",
//               columns: [
//                 {
//                   Header: "Employee ID",
//                   accessor: "empl"
//                 },
//                 {
//                   Header: "Status",
//                   accessor: "status"
//                 }
//               ]
//             },
//             {
//               Header: 'Stats',
//               columns: [
//                 {
//                   Header: "Visits",
//                   accessor: "visits"
//                 }
//               ]
//             }
//           ]}
//           defaultPageSize={10}
//           className="-striped -highlight"

//         />
//         <br />
//         <Tips />
//      {/*   <Logo />*/}
//       </div>







//     </section>


//   </div>
// );

// export default LeaderBorad;




// <ReactModal 
//            isOpen={this.state.showModal}
//            contentLabel="onRequestClose Example"
//            onRequestClose={this.handleCloseModal}
//            shouldCloseOnOverlayClick={true}
//             style={customStyles}
//         >
//           <p>Training Details</p>
//           <form onSubmit={this.handleSubmit.bind(this)}>
//         <label>
//           Training Name:
//            <input placeholder="Training Name" ref="Tname" type="text" />

//         </label><br></br>
//         <label>
//           Training Code:

//           <input placeholder="Training Code" ref="Tcode" type="text" />
        
//         </label><br></br>
//         <label>
//           Status:
//           <input placeholder="Status" ref="STATUS" type="text" />
         
//         </label><br></br>
//         <label>
//          Date
//           <input placeholder="Date" ref="Date" type="date" />
//          </label><br></br>
     
//         <label>
//          Page Content
          
//           {<textarea placeholder="PContent" ref="PContent" cols="40" rows="5"></textarea>}

//           <Editor
//   editorState={editorState}
//   toolbarClassName="home-toolbar"
//   wrapperClassName="home-wrapper"
//   editorClassName="home-editor"
//   onEditorStateChange={this.onEditorStateChange}
// />

//          </label><br></br>

//          <Dropzone onDrop={this.onDrop.bind(this)} >
//                     <div>Try dropping some files here, or click to select files to upload.</div>
//                       <ul>
//             {
//               this.state.files.map(f => 
                
//                 <li  key={f.name}>{f.name}</li>
                
          
//             )
//             }

//       {/*      { preview &&
//         <img src={ preview } alt="image preview" />
//         }*/}
//     </ul>
//                 </Dropzone>


//    <input type="submit" value="Submit" />
//           <button onClick={this.handleCloseModal}>Close Modal</button>
//           </form>
//         </ReactModal>