import './App.css';
import myImage from './header.jpg';

function App() {
  return (
    <div className="app_container">
      <div className="app_header">
        <img src={myImage} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="app_body">
        <p>Login to access the full dashboard</p>
        <form className='AddUser'>
          <div className="form_group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form_group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">OK</button>
        </form>
      </div>

      <div className="app_footer">
        <p>Copyright 2020 - Holberton School</p>
      </div>
    </div>
  );
}

export default App;
