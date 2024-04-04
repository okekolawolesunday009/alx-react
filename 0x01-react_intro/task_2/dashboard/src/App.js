import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>
          <img src={logo} alt='holbeton-logo' width={300} height={300}/>

        </div>
        <h1>School dashboard</h1>
      </div>
      
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <input type='email' name='email' id="email"/>
        <label for="email">Email</label>

        <input type='password' name='password' id="password"/>
        <label for="email">Password</label>

        <button>OK</button>

      </div>
      
      <div className="App-footer">
        <p> {`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>

      </div>
    </div>
  );
}

export default App;
