import './App.css';
import {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountSetting from './pages/AccountSetting';
import Account from './pages/Account';
function App() {
  useEffect(()=>{
    const storeLocale = localStorage.getItem('locale');
    if(!storeLocale) 
    {
      const userLocale = navigator.language.split('-')[0] || 'en';
      localStorage.setItem('locale', userLocale);
    }
  }, [])
 

  return (
    <Router>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="App" style={{marginTop:'75px'}}>
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/account' >
            <Route index element={<Account />}/>
            <Route path='account-setting' element={<AccountSetting />}/>  
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
