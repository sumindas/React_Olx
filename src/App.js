import React,{useEffect,useContext} from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/FirebaseContext'
import Post from './store/PostContext';



function App() {
  const {firebase} = useContext(FirebaseContext)
  const {setUser} = useContext(AuthContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
  return (
    <div>

      <Post>
      <Router>

        <Route exact path = '/'>
          <Home />
        </Route>

        <Route path = '/signup'>
          <Signup />
        </Route>

        <Route path = '/login'>
           <Login />
        </Route>

        <Route path = '/Create'>
           <Create />
        </Route>

        <Route path = '/viewpost'>
           <ViewPost />
        </Route>

      </Router>
      </Post>
    </div>
  );
}

export default App;
