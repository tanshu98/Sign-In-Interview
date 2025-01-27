import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { useState } from 'react'
import { Provider } from 'react-redux'


function App() {
  const [data,setData] = useState({
    signupName: "Tanshu",
    address: "Tanshu Address",
    signupContact: 9921139252,
    signupEmail: "tanshu@gmail.com",
    gender: "Male",
    termsAndCond: false,
    signupPassword: "Tanshu@12345",
    loginName: "Tanshu",
    loginEmail: "tanshu@gmail.com",
    loginContact: null,
    loginPassword: "Tanshu@12345",

  })

  return (
    <Provider store={store}>
   <BrowserRouter>
   <Routes >
    <Route path='/' Component={SignUp} data={data} setData={setData} />
    <Route path='/login' Component={Login} data={data} setData={setData} />
   </Routes>
   </BrowserRouter>
   </Provider>

  )
}
import store from './redux/store'

export default App
