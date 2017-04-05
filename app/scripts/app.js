import { createStore } from 'redux'
import loginView from './login.js';
import taskView from './login.js';
export default function app() {

  console.log(createStore(function (state = [], action) {
    return state;
  }));

  const initialState = {
    currentUser: null,
    view: loginView
  }

  const reducer = function ( currentState, action ) {

    if ( currentState === undefined ) {
      currentState = initialState;
    }

    switch( action.type ) {
      // case "LOGIN":
      //   var newState =
      //     Object.assign({}, currentState, {view: loginView});
      //   console.log('Login case works!');
      //   return newState;

      default:
        console.log('This is the switch default');
        return currentState;
    }
  }

  const store = createStore( reducer );

  const render = function () {
    let state = store.getState();
    $('#app').html(state.view(store));
  }

  store.subscribe( render );
  store.dispatch( { type: "LOGIN" } );

}
