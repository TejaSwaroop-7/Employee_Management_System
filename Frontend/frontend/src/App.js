import './App.css'
import React from 'react'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'

function App() {
  return (
    <div>
      <div className='fixed-top'>
      <HeaderComponent/>
      </div>
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path="/" Component={ListEmployeeComponents}></Route>
            <Route path="/show" Component={ListEmployeeComponents}></Route>
            <Route path="/addemployee" Component={CreateEmployeeComponent}></Route>
            <Route path="/update/:id" Component={UpdateEmployeeComponent}></Route>
          </Routes>
        </div>
      </Router>
      <FooterComponent/>
    </div>
  )
}

export default App