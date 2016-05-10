import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

import {singleComposer} from './single.jsx';

export const editComposer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('_roles.SAVING_ERROR');
  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  submitAction: actions._roles.update,
  clearErrors: actions._roles.clearErrors,
  context: () => context
});

export default (component) => composeAll(
  composeWithTracker(singleComposer),
  composeWithTracker(editComposer),
  useDeps(depsMapper)
)(component);
