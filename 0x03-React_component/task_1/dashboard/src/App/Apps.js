import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import {useState} from 'react'
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';


function App() {

  const [isLogin, setIsLogin] = useState(false);
  const listCourses = [
    {
      id: 1, 
      name: "ES6",
      credit: 60

    },
    {
      id: 2, 
      name: "Webpack",
      credit: 20
    },
    {
      id: 3,
      name: "React",
      credit: 40

    }
  ]
  return (

    <>
    <Notifications displayDrawer={false}/>
    <div className="App">
      <Header/>
     
      
      <div className="App-body">

        {isLogin === true ?
         (<Login/>): <CourseList listCourses={listCourses}/>
        }

      </div>
      
     <Footer/>
    </div>
    </>
  );
}

export default App;
