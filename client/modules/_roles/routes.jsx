import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault
} from '/client/configs/theme.jsx';

import RolesList from './components/roles/collection.jsx';
import RolesView from './components/roles/single.jsx';
import RolesAdd from './components/roles/add.jsx';
import RolesEdit from './components/roles/edit.jsx';

export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/roles', {
    name: '_roles.rolesList',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<RolesList />)
      });
    }
  });

  FlowRouter.route('/roles/add', {
    name: '_roles.rolesAdd',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<RolesAdd />)
      });
    }
  });

  FlowRouter.route('/roles/:_id', {
    name: '_roles.rolesView',
    action({_id}) {
      mount(LayoutDefaultCtx, {
        content: () => (<RolesView _id={_id}/>)
      });
    }
  });

  FlowRouter.route('/roles/:_id/edit', {
    name: '_roles.rolesEdit',
    action({_id}) {
      mount(LayoutDefaultCtx, {
        content: () => (<RolesEdit _id={_id}/>)
      });
    }
  });

}
