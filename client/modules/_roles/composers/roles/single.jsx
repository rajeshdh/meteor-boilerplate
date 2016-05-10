import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const singleComposer = ({context, _id, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('_roles.DELETE_ERROR');
  if (Meteor.subscribe('_roles.single', _id).ready()) {
    const record = Collections._roles.findOne(_id);
    if (record) {
      onData(null, {record, error});
    } else {
      // FlowRouter.go('/roles');
    }
  }
  // clearErrors when unmounting the component
  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  deleteAction: actions._roles.delete,
  clearErrors: actions._roles.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    useDeps(depsMapper)
  )(component);
