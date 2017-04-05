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
        <tr>
          <th></th>
          <th>name</th>
          <th>description</th>
          <th>complete</th>
          <th>important</th>
          <th>due date</th>
        </tr>
        <tr id="form"></tr>
      </table>
    </section>
  `);

  let $form = $(`
    <form id="submit_task" action="" method="post">
      <tr>
        <td><button type="submit" value="add new task">add new task</button></td>
        <td><input id="name" placeholder="name" value="check the mail"/></td>
        <td><input id="description" placeholder="description" value="bring key and tractor"/></td>
        <td><input id="state" placeholder="state" value="false"/></td>
        <td><input id="important" placeholder="important" value="yes"/></td>
        <td><input id="due_date" placeholder="due_date" value="04/05/2017 5:35pm"/></td>
      </tr>
    </form>`);

  $form.on('submit', (event) => {
    event.preventDefault();
    console.log('The add new task button works');

  })

  $html.append($form);

  // let allTasks = store.getState().tasks //=> [{}, {}, {}]
  // allTasks.forEach(function(task) {

  // })

  return $html;
}
