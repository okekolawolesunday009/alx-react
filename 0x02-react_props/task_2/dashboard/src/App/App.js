import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


function App() {
  return (

    <>
    <Notifications/>
    <div className="App">
     
      
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <Login/>

        

      </div>
      
     <Footer/>
    </div>
    </>
  );
}

export default App;
