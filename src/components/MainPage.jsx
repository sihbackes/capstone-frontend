import Banner from './BannerComponent';
import Footer from './FooterComponent';
import NavbarComponent from './NavBarComponent';

const MainPage = () => {
 return (
   <>
     <NavbarComponent/>
     <Banner/>
     <div className='footer-up'>
     <Footer/>
     </div>
   </>
 )
}

export default MainPage