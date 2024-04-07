import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import {useState} from 'react'
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';


function App() {

  const [isLogin, setIsLogin] = useState(false) 
  return (

    <>
    <Notifications displayDrawer={false}/>
    <div className="App">
      <Header/>
     
      
      <div className="App-body">

        {isLogin == true ?
         (<Login/>): <CourseList/>
        }

      </div>
      
     <Footer/>
    </div>
    </>
  );
}

export default App;
