import OneTeam from "./Oneteam";
import p1 from "../../images/pandas/1.png";
import p2 from "../../images/pandas/2.png";
import p3 from "../../images/pandas/3.png";
import p4 from "../../images/pandas/4.png";
import p5 from "../../images/pandas/5.png";
import p6 from "../../images/pandas/6.png";
import p7 from "../../images/pandas/7.png";
import p8 from "../../images/pandas/8.png";
import linkdin from "../../images/linkdin.png";
import instagram from "../../images/instagram.png";
import twiter from "../../images/twiter.png";

const Team = () => {
  return (
    <>
      <div className="lg:mt-32 md:mt-24 mt-20 flex flex-col font-termina">
        <div className="md:text-[32px] text-xl lg:text-[40px] font-optivenus">
          Our team
        </div>
        <div className="flex lg:flex-row lg:flex-wrap lg:justify-between 1xl:flex-nowrap 1xl:overflow-x-scroll 1xl:overflow-y-hidden 1xl:w-full 1xl:h-full 1xl:scrollbar ">
          <OneTeam
            work="Founder, Vision Officer"
            Fullname="Zaur Tsakadze"
            image={p1}
            imgwidth="1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
            logo={linkdin}
            logo2={twiter}
            logowidth="w-[24px] h-[24px]"
            link1="https://www.linkedin.com/in/tsaak"
            link2="https://twitter.com/zakotsakadze"
            logos= {true}
            Target="blank"
          />
          <OneTeam
            work="3D Artist"
            Fullname="Tako Gelenidze"
            image={p2}
            imgwidth="1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
            logo={instagram}
            logo2={twiter}
            logowidth="w-[28px] h-[28px]"
            link1="https://www.instagram.com/tgartstation"
            link2="javascript:void(0)"
            logos= {true}
            Target=""
          />
          <OneTeam
            work="Product Manager"
            Fullname="Brett Carnell"
            image={p3}
            imgwidth="1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
            logo={linkdin}
            logo2={twiter}
            logowidth="w-[24px] h-[24px]"
            link1="#"
            link2="#"
            logos= {false}
            Target=""
          />
          <OneTeam
            work="Web3 Developer"
            Fullname="Lazare Lomsadze"
            image={p4}
            imgwidth="1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
            logo={linkdin}
            logo2={twiter}
            logowidth="w-[24px] h-[24px]"
            link1="https://www.linkedin.com/in/lazare-lomsadze-b43102228/"
            link2="https://twitter.com/Blockchain_001"
            logos= {true}
            Target="blank"

          />
          <OneTeam
            work="Advisor"
            Fullname="David Valor"
            image={p5}
            imgwidth="lg:mt-10 1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
            logo={linkdin}
            logo2={twiter}
            logowidth="w-[24px] h-[24px]"
            link1="#"
            link2="#"
            logos= {false}
            Target=""

          />
          <OneTeam
            work="Art Director"
            Fullname="Liza Flammia"
            image={p6}
            imgwidth="lg:mt-10 1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
            logo={linkdin}
            logo2={twiter}
            logowidth="w-[24px] h-[24px]"
            link1="#"
            link2="#"
            logos= {false}
            Target=""
          />
          <OneTeam
            work="Web3 Marketer"
            Fullname="Luka Dylan"
            image={p7}
            imgwidth="lg:mt-10 1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
            logo={linkdin}
            logo2={twiter}
            logowidth="w-[24px] h-[24px] "
            link1="#"
            link2="#"
            logos= {false}
            Target=""
          />
          <OneTeam
            work="CTO"
            Fullname="Elene Moss"
            image={p8}
            imgwidth="lg:mt-10 1xl:w-[336px] 1xl:h-[251px] 0xl:w-[249px] 0xl:h-[186px] small:w-[214px] small:h-[174px]"
            logo={linkdin}
            logo2={twiter}
            logowidth="w-[24px] h-[24px]"
            link1="#"
            link2="#"
            logos= {false}
            Target=""
          />
        </div>
      </div>
    </>
  );
};

export default Team;
