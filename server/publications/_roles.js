import {_roles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('_roles.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return _roles.find(selector, options);
  });

  Meteor.publish('_roles.single', function (_id) {
    check( _id, String);
    const selector = {_id};
    const response = _roles.find(selector);
 
    return response;
  });
}
