import insta from '../images/instagram.png'
import opensea from "../images/opensea.png"
import twitter from "../images/twiter.png"
// import vector from "../images/vector.png"
import logo from "../images/logo.png"
import App from './App'


const Header = () => {
  return (
    <>
      <div className="flex md:flex-row md:items-center flex-col-reverse font-optivenus md:mt-[51px]  mt-6">

        <div className='flex flex-row items-center opacity-[0.5] md:mt-0 mt-6 justify-center'>
        {/* <img src={vector} alt="opensea" className='md:w-[36px] md:h-[22px] w-[41px] h-[27px] md:mr-6 mr-10 small:mr-7 small:w-[36px] small:h-[22px]' />         */}
        <a href="https://opensea.io/collection/intellig3nt-panda " target='blank'><img src={opensea} alt="opensea" className='md:w-[28px] md:h-[28px] w-[38px] h-[38px] small:w-8 small:h-8' />     </a>  
       <a href='https://twitter.com/GENTPANDAS'  target='blank'>  <img src={twitter} alt="twitter" className='md:w-[28px] md:h-[28px] w-[38px] h-[38px] md:mx-6 mx-10 small:mx-7 small:w-8 small:h-8'/> </a> 
         <a href='https://www.instagram.com/g3ntpanda/ ' target='blank' > <img src={insta} alt="instagram" className='md:w-[28px] md:h-[28px] w-[38px] h-[38px] small:w-8 small:h-8'/>  </a> 
          
        </div>
        <div className='md:contents flex flex-row justify-between items-center'>
        <div className=' md:absolute left-0 right-0 md:ml-auto md:mr-auto md:w-[100px] w-20 small:w-16 md:top-8'>
        <img src={logo} alt="logo" className='md:text-center'/>
        </div>
       
        <div className='md:ml-auto'>
          <div className='font-termina md:text-sm text-xs medium:text-[11px] text-white'>
            <App/>
        </div>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;