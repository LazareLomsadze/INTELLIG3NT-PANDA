import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";


const FaqText = ({ text, margin, header, answer }) => {
  const [isShown, setIsShown] = useState(false);

  const changer = () => {
    setIsShown(!isShown);
  };
  return (
    <>
      <div className="md:mt-8 mt-5">
        <div className="flex  cursor-pointer" onClick={changer}>
          <AiOutlinePlus
            className={
              isShown
                ? "hidden"
                : "block md:w-[28px] md:h-[28px] w-5 h-5 mt-1"
            }
          />
          <AiOutlineMinus
            className={
              isShown
                ? "block md:w-[28px] md:h-[28px] w-5 h-5 mt-1"
                : "hidden"
            }
          />
          <h1 className="text-base md:text-2xl md:ml-4 ml-2 md:leading-[36px] leading-[23px]  w-[92%]">{header}</h1>
        </div>

        <div
          className={` ${
            isShown
              ? "   mt-4 opacity-[5] ease-cubic-bezier(0.9,0.63,0.14,0.73) transition-all duration-[700ms] "
              : "  -mt-6 invisible absolute opacity-[-25] h-[0] w-0 top-[-8861px] "
          } `}
        >
            <div className="lg:text-base md:text-sm mt-4 text-xs leading-6 w-[98%] font-termina whitespace-pre-wrap">
          {answer}
          </div>
        </div>
        <hr className={`${text ? "w-[95%] border-t-[2px] " : "hidden"} ${margin}`}/>
      </div>
    </>
  );
};

export default FaqText;
