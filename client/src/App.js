import React, {useEffect, useState} from "react";
import Header from './components/Header';
import Auth from './components/Auth';
import CreateQuiz from './components/CreateQuiz';
import Footer from './components/Footer';
import { Redirect, Route, Switch} from 'react-router-dom';
import "./styles.css";
import QuizList from "./components/QuizList";
import Quiz from "./components/Quiz"
import Submissions from "./components/Submissions";
export const UserContext=React.createContext();
export const setUserContext=React.createContext();


export default function App() {
  const [user,setUser] = useState({
    userLogin: false, userId: ''
  })

  useEffect(()=>{
    if(!localStorage.getItem("user")){
      localStorage.setItem("user", JSON.stringify({userLogin: false, _id: "" }));
    }
    if(JSON.parse(localStorage.getItem("user")).userLogin===true){
        setUser({
          userLogin: true,
          userId: JSON.parse(localStorage.getItem("user")).user
        })
    }
  },[])
  console.log(user)
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <setUserContext.Provider value={setUser}>
        <Header/>
        </setUserContext.Provider>
      </UserContext.Provider>
      <Switch>
        <Route path='/' exact render={()=>user.userLogin===true? <CreateQuiz/>: <Redirect to='/Auth'/>}/>
        <Route path='/QuizList' exact render={()=>user.userLogin===true? <QuizList/>: <Redirect to='/Auth'/>}/>
        <Route path='/Quiz/:id'  exact component={Quiz}/>
        <Route path='/Submissions' exact render={()=>user.userLogin===true? <Submissions/>: <Redirect to='/Auth'/>}/>
        <UserContext.Provider value={setUser}>
             <Route path='/Auth'  render={()=>user.userLogin===true?<Redirect to='/'/>: <Auth/> }/>
        </UserContext.Provider>
      </Switch>
      <Footer/>
    </div>
  );
}
