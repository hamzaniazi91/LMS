import '../imports/startup/server/index';
import { Players, Trainers, Trainings, Images, TrainingAnalytics  } from '/imports/api/tasks.js';



if (Meteor.isServer) {


  Meteor.methods({

    AddUsers: function(csvData){
try {
          var result = Accounts.createUser({
                            username: csvData.EmployeeNumber,
                            email : csvData.EmployeeEmail,
                            password : 'lms@1234',
                            ID : csvData.EmployeeNumber,
                            profile  : {

                              Area : csvData.EmployeeNumber,
                              ContactNo   :  csvData.ContactNo,
                              Department : csvData.Department,
                              EmployeeEmail :  csvData.EmployeeEmail,
                              EmployeeName : csvData.EmployeeName,
                              EmployeeNumber : csvData.EmployeeNumber,
                              Grade : csvData.Grade,
                              Job : csvData.Job,
                              JoinDate : csvData.JoinDate,
                              Organization : csvData.Organization,
                              Region : csvData.Region,
                              SupervisorName : csvData.SupervisorName,
                                //publicly visible fields like firstname goes here
                            }

    });
           if(result){
              // are you using roles?
              // Roles.addUsersToRoles(result, doc.roles);  
              return result;
          }
        }
        catch(err){
            return err;
        }

          //CALLBACK
//     , function(err) {
//   if (err){
//     console.log(err);
//    // handle.pause()
//    //setTimeout(function() {handle.resume()}, 500); 
//  }
//   else{
//     console.log('success!');
//      //setTimeout(function() {handle.resume()}, 500); 
//   }
// });

    }



  })

var cpuCount = require('os').cpus().length;

console.log(cpuCount)
//   Meteor.methods({
//   sendEmail(to, from, subject, text) {
//     // Make sure that all arguments are strings.
//     check([to, from, subject, text], [String]);
//     // Let other method calls from the same client start running, without
//     // waiting for the email sending to complete.
//     this.unblock();
//     Email.send({ to, from, subject, text });
//   }
// });
// // Client: Asynchronously send an email.
// Meteor.call(
//   'sendEmail',
//   'Alice <hamza.niazi@meezanbank.com>',
//   'hamza.niazi@meezanbank.com',
//   'Hello from Meteor!',
//   'This is a test of Email.send.'
// );


Accounts.removeDefaultRateLimit()


  Meteor.startup(function () {
    if (Players.find().count() === 0) {
      var names = ["Ada Lovelace",
                   "Grace Hopper",
                   "Marie Curie",
                   "Carl Friedrich Gauss",
                   "Nikola Tesla",
                   "Claude Shannon"];
      for (var i = 0; i < names.length; i++) {
        Players.insert({
          name: names[i],
          score: Math.random()
        });
      }
    }
  });

  Meteor.publish("players", function() {
    return Players.find();
  });
  Meteor.publish("trainers", function() {
    return Trainers.find();
  });
  Trainers.allow({
    'insert': function () {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    }
  });


   Meteor.publish("trainings", function() {
    return Trainings.find();
  });

   Trainings.allow({
    'insert': function () {
      /* user and doc checks ,
      return true to allow insert */
      return true; 

       },
     'update': function () {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    }
  });

   Meteor.publish("trainAnalytics", function() {
    return TrainingAnalytics.find();
  });

      TrainingAnalytics.allow({
    'insert': function () {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    }
  });



     Meteor.publish("images", function() {
    return Images.find();
  });

   Images.allow({
    'insert': function() {
        // add custom authentication code here
        return true;
    },
    'update': function() {
        // add custom authentication code here
        return true;
    },
    'remove': function() {
        // add custom authentication code here
        return true;
    },
    download: function(userId, fileObj) {
        return true
    }
});

    
}