
import { Mongo } from 'meteor/mongo';

export const Players = new Mongo.Collection('players');
export const Trainers = new Mongo.Collection('trainers');
export const Trainings = new Mongo.Collection('trainings');
export const TrainingAnalytics = new Mongo.Collection('trainAnalytics');






export const Images = new  FS.Collection("images", {
  stores: [
      new FS.Store.FileSystem('uploads',{path:'/Meteordata/uploads/'})
  ]
});

