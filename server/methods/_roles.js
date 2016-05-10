import {_roles} from '/lib/collections';
// import {_role} from '/lib/role.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// import _ from 'lodash';
export default function () {
  Meteor.methods({

    '_roles.add'(data, _id) {
      check(data, {
        title: String,
        content: String
      });
      check(_id, String);

      // console.log('_roles.add data', data);

      // XXX: Do some user authorization

      data._id = _id;
      data.createAt = new Date();
      // const object = {_id, data.title, data.content, createdAt};
      _roles.insert(data);
    },

    '_roles.update'(data, _id) {
      check(data, {
        title: String,
        content: String
      });
      check(_id, String);

      // console.log ('_roles.update _id', _id);
      // console.log ('_roles.update data', data);

      // XXX: Do some user authorization

      let record = _roles.findOne(_id);
      const allowedFields = [ 'title','content' ];
      allowedFields.forEach(key => record.set(key,data[key]) );
      record.save(allowedFields);

      // console.log ('_roles.update record', record);

    },

    '_roles.delete'(_id) {
      check(_id, String);
      //  console.log('_roles.delete _id', _id);
      let record = _roles.findOne(_id);
      record.remove();
    }
  });
}
