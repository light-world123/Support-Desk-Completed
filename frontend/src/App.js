import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/components/Header';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTicket from './pages/NewTicket';
import PrivateRoute from './pages/components/PrivateRoute';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route path='/new-ticket' element={<PrivateRoute/>}>
            <Route path='/new-ticket' element={<NewTicket/>}/>
            </Route>

            <Route path='/tickets' element={<PrivateRoute/>}>
            <Route path='/tickets' element={<Tickets/>}/>
            </Route>

            <Route path='/ticket/:ticketId' element={<PrivateRoute/>}>
            <Route path='/ticket/:ticketId' element={<Ticket/>}/>
            </Route>


          </Routes>
        </div>
      </Router>

      <ToastContainer/>
    </>
  );
}

export default App;

















// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}