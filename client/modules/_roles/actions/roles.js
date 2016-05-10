export default {
  // create
  add({Meteor, LocalState, FlowRouter}, data) {
    const _id = Meteor.uuid();
    Meteor.call('_roles.add', data, _id, (err) => {
      if (err) {
        return LocalState.set('_roles.SAVE_ERROR', err.message);
      }
    });
    FlowRouter.go(`/roles/${_id}`);
  },
  // update
  update({Meteor, LocalState, FlowRouter}, data, _id) {
    
    Meteor.call('_roles.update', data, _id, (err) => {
      if (err) {
        return LocalState.set('_roles.SAVE_ERROR', err.message);
      }
    });
  },
  
  delete({Meteor, LocalState, FlowRouter}, _id) {
    Meteor.call('_roles.delete', _id, (err) => {
      if (err) {
        return LocalState.set('_roles.DELETE_ERROR', err.message);
      }
      FlowRouter.go(`/roles`);
    });
  },
  clearErrors({LocalState}) {
    LocalState.set('_roles.DELETE_ERROR', null);
    return LocalState.set('_roles.SAVE_ERROR', null);
  }
};
