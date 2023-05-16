export function Signup() {
  return (
    <div id="signup">
      <h1>Signup</h1>
      <form action="http://localhost:3000/users.json" method="POST">
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="text" />
        </div>
        <div>
          Password: <input name="password" type="text" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="text" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}