//import Model from 'model';

export default function ( store ) {

  // let tasks = model.getTasks()
  // tasks ==> [{}, {}, {}]

  console.log('You are seeing the Task View');

  let $html = $(`
    <section class="task-view">
      <h2>
        Hi, ${name}! Thank you for logging in. Here are your tasks.
      </h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>name</th>
            <th>description</th>
            <th>complete</th>
            <th>important</th>
            <th>due date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>pull weeds</td>
            <td>gloves, trash can</td>
            <td>false</td>
            <td>yes</td>
            <td>04/06/2015 5:35pm</td>
          </tr>
        </tbody>
      </table>
    </section>
  `);

  let $form = $(`
    <form id="submit_task" action="" method="post">
      <tr>
        <td><button type="submit" value="add new task">add new task</button></td>
        <td><input id="name" placeholder="name" value="check the mail"/></td>
        <td><input id="description" placeholder="description" value="bring key and tractor"/></td>
        <td><input id="state" type="checkbox" /></td>
        <td><input id="important" type="checkbox" /></td>
        <td><input id="due_date" placeholder="due_date" value="04/05/2017 5:35pm"/></td>
      </tr>
    </form>`);

  $form.on('submit', (event) => {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var description = event.target.elements.description.value;
    var state = event.target.elements.state.checked;
    var important = event.target.elements.important.checked;
    var due_date = event.target.elements.due_date.value;
    console.log('The add new task button works', name, description);
    store.dispatch( {type: "NEW_TASK",
                     name: name,
                     description: description,
                     state: state,
                     important: important,
                     due_date: due_date
                   });
  });

  $html.append($form);

  // let allTasks = store.getState().tasks //=> [{}, {}, {}]
  // allTasks.forEach(function(task) {

  // })

  return $html;
}
