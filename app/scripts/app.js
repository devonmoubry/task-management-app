import { createStore } from 'redux'
import loginView from './login.js';
import taskView from './task.js';
export default function app() {

  console.log(createStore(function (state = [], action) {
    return state;
  }));

  const initialState = {
    username: null,
    view: loginView,
    tasks: [],
    usertoken: null
  }

  const reducer = function ( currentState, action ) {

    if ( currentState === undefined ) {
      currentState = initialState;
    }

    switch( action.type ) {

      case "LOGIN_VIEW":
        console.log('hi there');
        return initialState;

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
             store.dispatch({ type: "LOGGED_IN", usertoken: userTOKEN});
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

      case "TASK_VIEW":
        var newState =
          Object.assign({}, currentState, {view: taskView});
        console.log('Task case works!');
        return newState;

      case "NEW_TASK":
        $.ajax({
          type: 'POST',
          url: 'https://api.backendless.com/v1/data/taskManagementApp',
          headers: {
            "application-id": "24B65924-C870-5359-FF6E-4A5396B35700",
            "secret-key": "BFBB0F72-782B-9CF9-FF71-D0C15271A900",
            "user-token": store.getState().usertoken,
            "application-type": "REST",
            "Content-Type": "application/json"
          },
          data: JSON.stringify({
            "name": action.name,
            "description": action.description,
            "state": action.state,
            "important": action.important,
            "due_date": action.due_date
          }),
          success: function(data, status, xhr) {
            console.log(data);
            store.dispatch({ type: "RELOAD_TASK_VIEW" });
          },
          error: function(data, status, xhr) {
            console.log(data);
          }
        });
        return currentState;

      case "RELOAD_TASK_VIEW":
        //1. aja grt all tasks
          //1b. dispatch ...
        //2. return current state


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
  store.dispatch( { type: "LOGIN_VIEW" } );

}
