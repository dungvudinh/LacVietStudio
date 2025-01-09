import {MainLayout, StoreLayout, ProductLayout} from '../layouts';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail'; 
import Store from '../pages/Store';
import routes from '../config/routes';
import Account from '../pages/Account';
import AccountSetting from '../pages/AccountSetting';
import News from '../pages/News';
import NewsLayout from '../layouts/NewsLayout';
import NewsDetail from '../pages/NewsDetail';
import ArchitectureModel from '../pages/ArchitectureModel';
import ProfileSettingLayout from '../layouts/ProfileSettingLayout';
import ContactUs from '../pages/ContactUs';
import Service from '../pages/Service';
import ServiceLayout from '../layouts/ServiceLayout';
import SaleStore from '../pages/SaleStore';
import LogIn from '../pages/LogIn';
const publicRoutes = [
    {path:routes.home, component:Home}, 
    {path:routes.store, component:Store, layout:StoreLayout}, 
    {path:routes.productDetail, component:ProductDetail, layout:ProductLayout}, 
    {path:routes.account, component:Account}, 
    {path:routes.accountSetting, component:AccountSetting, layout:ProfileSettingLayout}, 
    {path:routes.news, component:News, layout:NewsLayout},
    {path:routes.newsDetail, component:NewsDetail, layout:NewsLayout},
    {path:routes.architectureModel, component:ArchitectureModel}, 
    {path:routes.contactUs, component:ContactUs, layout:ProfileSettingLayout}, 
    {path:routes.service, component:Service, layout:ServiceLayout}, 
    {path:routes.sale, component:SaleStore, layout:StoreLayout}, 
    {path:routes.login, component:LogIn, layout:ProfileSettingLayout}
]

const privateRoutes =[]

export {publicRoutes, privateRoutes}