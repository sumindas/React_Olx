/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useHistory, Link } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Logged in');
        history.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState,useContext } from 'react';
// import { FirebaseContext } from '../../store/FirebaseContext';
// import { useHistory,Link } from 'react-router-dom/cjs/react-router-dom';
// import Logo from '../../olx-logo.png';
// import './Login.css';

// function Login() {
//   const history = useHistory()
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')
//   const {firebase} = useContext(FirebaseContext)
//   const handleLogin = (e)=>{
//     e.preventDefault()
//     if (!email || !password) {
//       alert('Please enter both email and password');
//       return;
//     }
//     firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
//       alert('Logged in')
//     }).then(()=>{
//       history.push("/")
//     }).catch((error)=>{
//       alert(error.message)
//       return
//     })

//   }

//   return (
//     <div>
//       <div className="loginParentDiv">
//         <img width="200px" height="200px" src={Logo}></img>
//         <form onSubmit={handleLogin}>
//           <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             id="fname"
//             name="email"
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//             defaultValue="John"
//           />
//           <br />
//           <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             id="lname"
//             name="password"
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             defaultValue="Doe"
//           />
//           <br />
//           <br />
//           <button>Login</button>
//         </form>
//         <Link to="/signup">Signup</Link>
//       </div>
//     </div>
//   );
// }

// export default Login;
