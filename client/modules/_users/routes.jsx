import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';


import Login from './components/login/wrapper.jsx';
import Register from './components/register/wrapper.jsx';
import Password from './components/password/wrapper.jsx';

import Account from './components/account/wrapper.jsx';
import Profile from './components/profile/wrapper.jsx';

import UsersCollection from './components/users/collection.jsx';
import UsersAdd from './components/users/add.jsx';
import UsersSingle from './components/users/single.jsx';
import UsersEdit from './components/users/edit.jsx';

export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);
  
  const privateRoutes = FlowRouter.group({
    name: 'privateroute',
    triggersEnter: [function (context, redirect) {
      var route;
        if (!Meteor.userId()) {
            return FlowRouter.go('/login');
        }
    }]
  });

  FlowRouter.route('/register', {
    name: 'users.register',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Register />)
      });

    }
  });

  FlowRouter.route('/password', {
    name: 'users.password',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Password />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Login />)
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      // Accounts.logout();
      Meteor.logout(() => {
        FlowRouter.go('/login');
      });
    }
  });

  privateRoutes.route('/account', {
    name: 'users.account',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<Account />)
      });
    }
  });

  privateRoutes.route('/profile', {
    name: 'users.profile',
    action() {

      mount(LayoutDefaultCtx, {
        content: () => (<Profile name='users.profile'/>)
      });
    }
  });

  privateRoutes.route('/users', {
    name: 'users.collection',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<UsersCollection />)
      });
    }
  });

  privateRoutes.route('/users/add', {
    name: 'users.add',
    action() {

      mount(LayoutDefaultCtx, {
        content: () => (<UsersAdd />)
      });
    }
  });

  privateRoutes.route('/users/:_id', {
    name: '_users.usersSingle',
    action({_id}) {

      mount(LayoutDefaultCtx, {
        content: () => (<UsersSingle _id={_id}/>),
      });
    }
  });

  privateRoutes.route('/users/:_id/edit', {
    name: '_users.usersEdit',
    action({_id}) {

      mount(LayoutDefaultCtx, {
        content: () => (<UsersEdit _id={_id}/>)
      });
    }
  });

}
