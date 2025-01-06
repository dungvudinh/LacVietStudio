import './App.css';
import {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './layouts/LayoutComponents/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountSetting from './pages/AccountSetting';
import Account from './pages/Account';
import Footer from './layouts/LayoutComponents/Footer';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import { publicRoutes, privateRoutes } from './routes';
import { MainLayout } from './layouts';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


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
      <ScrollToTop />
      {/* <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="App"> */}
        <Routes>
          {/* <Route path='/'  element={<Home />}/>
          <Route path='/store' element={<Store />}/>
          <Route path='/product-detail/:id' element={<ProductDetail />} />
          <Route path='/account' >
            <Route index element={<Account />}/>
            <Route path='account-setting' element={<AccountSetting />}/>  
          </Route> */}
          {
            publicRoutes.map((route, index)=>{
              const Page = route.component;
              const Layout = route.layout || MainLayout;
              return <Route key={index} path={route.path} element={<Layout><Page /></Layout>}/>
            })
          }
        </Routes>
      {/* </div> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
