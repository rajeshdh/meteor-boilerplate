import {Mongo} from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');
export const Comments = new Mongo.Collection('comments');
export const _colors = new Mongo.Collection('_colors');
export const _roles = new Mongo.Collection('_roles');
