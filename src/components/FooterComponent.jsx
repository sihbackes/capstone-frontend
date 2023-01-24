import logo from '../img/logo.png'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BsPinterest, BsFacebook} from 'react-icons/bs'


const Footer = () => {
  return(
    <>
    <footer>
      <div className='logo-footer'>
       <img className="logo mb-3" src={logo} alt="pixabay logo"/>
       <p className='phrase-footer'>Over 3 million+ high quality stock images, videos and music shared by our talented community.</p>
       <div className='mb-3'>
         <AiOutlineInstagram size={30} className='icons-footer'/>
         <BsPinterest size={25} className='icons-footer'/>
         <AiOutlineTwitter size={27} className='icons-footer'/>
         <BsFacebook size={25} className='icons-footer'/>
       </div>
      </div>
      <div className='info-footer'>
        <div className='links-footer'>
          <p><strong>Discover</strong></p>
          <p>Editor's Choice</p>
          <p> Curated Collections</p>
          <p>Popular Images</p>
          <p>Popular Videos</p>
          <p>Popular Music</p>
          <p>Popular Searchs</p>
        </div>
        <div className='links-footer'>
          <p><strong>Community</strong></p>
          <p>Blog</p>
          <p>Forum</p>
          <p>Creators</p>
          <p>Cameras</p>
        </div>
        <div className='links-footer'>
          <p><strong>About</strong></p>
          <p>About Us</p>
          <p>FAQ</p>
          <p>License</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies Policy</p>
          <p>API</p>
        </div>
      </div>

    </footer>
    </>
  )
}

export default Footer