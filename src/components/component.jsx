import panda from "../images/standpanda.png"

const Component = () => {
    return(
        <>
        <div className="flex xl:flex-row flex-col items-center justify-between  mt-20">
        <div className="xl:text-7xl xl:leading-[100px] lg:text-[66px] md:text-6xl md:leading-[84px] xl:text-left text-center text-[28px] small:text-[22px] small:leading-[35px] leading-[42px] changer2"></div>
        <img src={panda} alt="panda" className="xl:w-[304px] xl:h-[723px] md:w-[336px] md:h-[799px] xl:mr-20 lg:mt-10 md:mt-20 xl:mt-0 w-[162px] h-[384px] mt-8"/>
        </div>
        </>
    )
}

export default Component