export default function ( store ) {

  console.log('You are seeing the Login View');

  let $html = (`
    <section class="login-view">
      <h1>Task Management App with Backendless</h1>
        <form id="login" action="" method="post">
          <label for="username">username: </label>
          <input id="username" type="text" placeholder="@example.com" value="connor@example.com">
          <label for="password">password: </label>
          <input id="password" type="password" value="password">
          <input type="submit" value="login">
        </form>
    </section>
  `);

  return $html;
}
