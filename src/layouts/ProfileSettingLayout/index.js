import Contact from "../../components/Contact";
import { HomeFooter } from "../LayoutComponents/Footer";
import Navbar from "../LayoutComponents/Navbar";
function ProfileSettingLayout({children}) {
    return ( 
        <div className=''>
            <Navbar belongTo={'profile-setting'}/>
            <div className=''>
                {children}
            </div>
            {/* <HomeFooter /> */}
            <Contact />
        </div>
     );
}

export default ProfileSettingLayout;