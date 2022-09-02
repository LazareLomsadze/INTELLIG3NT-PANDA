
const OneTeam = ({
    Fullname,
    work,
    image,
    imgwidth,
    logo,
    logo2,
    logowidth,
    link1,
    link2,
    logos,
    Target
  }) => {
    return (
      <div className="lg:w-[23%] lg:mr-0 md:mr-6 mr-5">
        <img src={image} alt="panda img" className={` ${imgwidth} ' md:mt-6 mt-3 max-w-none lg:max-w-full rounded-roundd ' `} />
        <h3 className="md:text-xl lg:text-base xl:text-xl text-base md:mt-3 mt-2 md:w-[105%] w-[102%]">{Fullname}</h3>
        <h4 className="md:text-base text-xs opacity-[0.5]  md:mt-2 mt-1 md:w-[105%] w-[102%] small:text-[0.65rem]">{work}</h4>
        <div className={logos ? "flex flex-wrap md:mt-4 mt-2 opacity-[0.5] " : "hidden"}>
          <a href={link1} target='blank'><img
            src={logo}
            alt="logos"
            className={` ${logowidth} '  mr-4 ' `}
          /></a>
          <a href={link2} target={Target}><img
            src={logo2}
            alt="logos"
            className="w-[28px] h-[28px] "
          /></a>
        </div>
        <div className={logos ? "hidden" : "flex flex-wrap md:mt-4 mt-2 opacity-[0.5] " }>
          <a href={link1} onClick={e => e.preventDefault()}><img
            src={logo}
            alt="logos"
            className={` ${logowidth} '  mr-4 ' `}
          /></a>
          <a href={link2} onClick={e => e.preventDefault()} ><img
            src={logo2}
            alt="logos"
            className="w-[28px] h-[28px] "
          /></a>
        </div>
      </div>
    );
  };
  
  export default OneTeam;