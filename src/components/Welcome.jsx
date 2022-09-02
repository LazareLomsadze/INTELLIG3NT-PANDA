import "../style/style.css";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
// import Dapp from "../scripts/react/Dapp";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import Mint from "../mint";

const Welcome = () => {

  const [isshow, setshow] = useState(false)

  const changer = () =>{
    setshow(!isshow)
  }
  return (
    <>
      <div className=" lg:mt-16 md:mt-12 mt-6">
        <div className="text-center lg:text-[55px] xl:text-[66px] font-optivenus font-bold  md:text-6xl text-[28px] small:text-[22px]">
          WELCOME TO
        </div>
        <div className="text-center lineara changer lg:text-[55px] font-optivenus font-bold  md:mt-[20px] small:text-[22px] small:leading-[36px] text-[28px] leading-[38px] lg:leading-[100px] md:text-6xl xl:text-[66px] md:leading-[140%] normal-case md:-mx-16">

        </div>
        <div className="lg:flex flex-row justify-center mt-[30px] hidden">
          <div className="desktop:w-[22%] desktop:h-auto lg:w-[330px] lg:h-auto 3xl:w-[24%] 3xl:h-auto">
            <img src={one} alt="onepanda" className="rounded-roundd"/>
          </div>
          <div className="desktop:w-[22%] desktop:h-auto lg:w-[330px] lg:h-auto lg:mx-5 3xl:w-[24%] 3xl:h-auto 2xl:mx-8 ">
            <img src={two} alt="twopanda" className="rounded-roundd"/>
          </div>
          <div className="desktop:w-[22%] desktop:h-auto lg:w-[330px] lg:h-auto 3xl:w-[24%] 3xl:h-auto">
            <img src={three} alt="threepanda" className="rounded-roundd"/>
          </div>
        </div>

        <div className="flex flex-row lg:hidden md:mt-10 mt-4 md:overflow-x-scroll overflow-y-hidden w-full h-full scrollbar ">
          <div className=" md:w-[336px] md:h-[340px] w-[220px] h-[195px] small:w-[200px] small:h-[180px]">
            <img
              src={one}
              alt="onepanda"
              className="md:w-[336px] md:h-[340px] max-w-none w-[220px] h-[195px] small:w-[200px] small:h-[180px] rounded-roundd"
            />
          </div>
          <div className=" md:mx-4 md:w-[336px] md:h-[340px] mx-3 w-[220px] h-[195px] small:w-[200px] small:h-[180px]">
            <img
              src={two}
              alt="twopanda"
              className="md:w-[336px] md:h-[340px] max-w-none w-[220px] h-[195px] small:w-[200px] small:h-[180px] rounded-roundd"
            />
          </div>
          <div className=" md:w-[336px] md:h-[340px] w-[220px] h-[195px] small:w-[200px] small:h-[180px]">
            <img
              src={three}
              alt="threepanda"
              className="md:w-[336px] md:h-[340px] max-w-none w-[220px] h-[195px] small:w-[200px] small:h-[180px] rounded-roundd"
            />
          </div>
        </div>
        <div className="">
          <div className="Minti flex flex-row m-[0px_auto] justify-center align-center p-[20px_40px] small:p-[14px_40px] lg:w-[412px] md:max-w-[1000px] h-[61px] small:h-[49px] mt-7 md:mt-[40px] rounded-rou cursor-pointer" onClick={changer}>
            <h1 className="  md:text-sm text-xs flex-none flex-grow-0 order-none leading-5 font-termina" >
             mint now
            </h1>
          </div>
          <div className="text-center font-termina md:mt-[24px] lg:text-base md:text-sm text-xs mt-4 font-semibold">
            PUBLIC MINT IS LIVE
          </div>
          
        </div>
      </div>






      <div className={isshow ? 'fixed block z-10 w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.6)] overflow-y-auto scrollbarr' : 'hidden'}>
      <div id="minting-dapp">
      <div className="md:text-[34px] text-[32px] ml-auto mt-7  cursor-pointer" onClick={changer}><AiOutlineClose className="hover:fill-error-txt"/></div>
      <h1 className='font-optivenus md:text-3xl text-2xl text-center md:-mt-7 -mt-7 mb-5 w-1/2 mx-auto' >MINT</h1>

      <Mint/>
      </div>
      </div>
    </>
  );
};

export default Welcome;
