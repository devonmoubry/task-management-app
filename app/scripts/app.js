import { createStore } from 'redux'
import loginView from './login.js';
import taskView from './task.js';
export default function app() {

  console.log(createStore(function (state = [], action) {
    return state;
  }));

  const initialState = {
    username: null,
    view: loginView
  }

  const reducer = function ( currentState, action ) {

    if ( currentState === undefined ) {
      currentState = initialState;
    }

    switch( action.type ) {
      case "TASK_VIEW":
        var newState =
          Object.assign({}, currentState, {view: taskView});
        console.log('Task case works!');
        return newState;

      case "LOGGING_IN":
        $.ajax({
           type: 'POST',
           url: 'https://api.backendless.com/v1/users/login',
           headers: {
             "application-id": "24B65924-C870-5359-FF6E-4A5396B35700",
             "secret-key": "BFBB0F72-782B-9CF9-FF71-D0C15271A900",
             "application-type": "REST",
             "Content-Type": "application/json"
           },
           data: JSON.stringify({
             "login": action.username,
             "password": action.password
           }),
           success: function(data, status, xhr) {
             console.log(data);
             var userTOKEN = data['user-token'];
             store.dispatch({ type: "LOGGED_IN", usertoken: userTOKEN})
           },
           error: function(data, status, xhr) {
             console.log(data);
           }
        });
        return currentState;

      case "LOGGED_IN":
        var newState = {
          usertoken: action.usertoken,
          view: taskView
        };
        return Object.assign({}, currentState, newState);

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
