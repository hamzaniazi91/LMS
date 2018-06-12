import React from "react";
import { Players ,Trainers , Trainings} from '/imports/api/tasks.js';
import { createContainer ,withTracker  } from 'meteor/react-meteor-data';



Meteor.subscribe('players')


export function makeClientData(date) {


	console.log(date)

  console.log(Trainings.find( {$and:[{stDate:{$lte: new Date() }},{enDate:{$gte: new Date()  }}]}).fetch())
 return Trainings.find({$and:[{stDate:{$lte: new Date()}},{enDate:{$gte: new Date() }}]})
} 





