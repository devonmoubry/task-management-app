export default function ( store ) {

  console.log('You are seeing the Task View');

  let $html = (`
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
        <form id="submit_task" action="" method="post">
          <tr>
            <td><input type="submit" value="add new task"></td>
            <td><input id="name" placeholder="name" value="connor@example.com"></td>
            <td><input id="description" placeholder="description" value="check the mail"></td>
            <td><input id="state" placeholder="state" value="false"></td>
            <td><input id="important" placeholder="important" value="yes"></td>
            <td><input id="due_date" placeholder="due_date" value="04/05/2017 5:35pm"></td>
          </tr>
        </form>
      </table>
    </section>
  `);

  return $html;
}
