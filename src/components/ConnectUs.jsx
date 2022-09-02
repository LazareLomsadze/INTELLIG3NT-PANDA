import insta from '../images/instagram.png'
import twitter from "../images/twiter.png"
import discord from "../images/discord.png"


const ConnectUs =()=>{

    return(
        <>
        <div className="mt-[9.5rem] absolute -left-full w-[578px] right-0 ml-auto mr-auto 
        hidden lg:block">
            <div>
            <div className="text-[40px] uppercase ">connect with us</div>
            </div>
            
            <div className="mt-5 mb-28">
                <div className="flex flex-wrap items-center opacity-[0.5] justify-center">
          <a href="https://discord.gg/SHVFuczz" target='blank' >         <img src={discord} alt="discord" className="w-10 h-[32px]"/></a> 
        <a href='https://twitter.com/GENTPANDAS' target='blank' >    <img src={twitter} alt="twitter" className='w-[40px] h-[40px] mx-10'/> </a>
        <a href='https://www.instagram.com/g3ntpanda/' target='blank' >  <img src={insta} alt="instagram" className='w-[38px] h-[38px] '/></a></div></div>
            </div>

            <div className="md:mt-24 mt-20 lg:hidden flex flex-col justify-center items-center md:mb-24 mb-20">
            <div>
            <div className="md:text-[32px] uppercase text-xl small:text-base">connect with us</div>
            </div>
            
            <div className="md:mt-6 mt-4">
                <div className="flex flex-wrap items-center opacity-[0.5] justify-center">
                <a href="https://discord.gg/SHVFuczz" target='blank'>        <img src={discord} alt="discord" className="w-[40px] small:w-7 small:h-6 h-[32px]"/>   </a>
                <a href='https://twitter.com/GENTPANDAS' target='blank' >  <img src={twitter} alt="twitter" className='w-[40px] small:w-8 small:h-8 h-[40px] mx-10'/> </a>
            <a href='https://www.instagram.com/g3ntpanda/' target='blank' >  <img src={insta} alt="instagram" className='w-[38px] small:w-[30px] small:h-[30px] h-[38px] '/></a></div></div>
            </div>
            
            </>
    )
}

export default ConnectUs