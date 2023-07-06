import {IoIosArrowDown} from 'react-icons/io'
import { BsBarChartLine, BsArrowUpRight } from "react-icons/bs";
import {HiOutlineBriefcase} from 'react-icons/hi'
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";


const cards = [
  {
    id: 1,
    icon: (
      <BsBarChartLine
        style={{
          backgroundColor: "#D398E7",
          color: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          padding: "10px",
        }}
      />
    ),
    header: "Total revenue",
    result: " $5,300,989",
    aggre: "12% increase from last month",
  },
  {
    id: 2,
    icon: (
      <HiOutlineBriefcase
        style={{
          backgroundColor: "#E89271,",
          color: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          padding: "10px",
        }}
      />
    ),
    header: "Projects",
    result: "95/100 ",
    aggre: "10% decrease from last month",
  },
  {
    id: 3,
    icon: (
      <AiOutlineClockCircle
        style={{
          backgroundColor: "#70A1E5",
          color: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          padding: "10px",
        }}
      />
    ),
    header: "Time spent",
    result: "1022/1300 Hrs",
    aggre: "8% increase from last month",
  },
  {
    id: 4,
    icon: (
      <AiOutlineUser
        style={{
          backgroundColor: "#F0C274",
          color: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          padding: "10px",
        }}
      />
    ),
    header: "Resources",
    result: "101/120",
    aggre: "2% increase from last month",
  },
];

const TopChart = () => {
  return (
    <>
      <section className="py-5 px-7">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Overview</h1>
          <div className="flex items-center bg-white px-2 py-1 rounded-full text-xs">
            <p className='hidden md:block'>Last 30 days</p>
            <IoIosArrowDown className="ml-2 text-[#292D32]" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-5 pt-6">
          {cards.map((card) => {
            const { id, icon, header, result, aggre } = card;
            return (
              <div
                key={id}
                className="bg-[#fff] bg-opacity-30 rounded-lg p-3 flex flex-col"
              >
                <span className="">{icon}</span>
                <span className="text-xs text-[#797979] pt-4">{header}</span>
                <span className="text-lg font-semi-bold pt-1">{result}</span>
                <div className="flex items-center pt-1">
                  <BsArrowUpRight className="text-[#EE201C] text-xs" />
                  <span className="text-[10px] text-[#797979] ml-1">
                    {aggre}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default TopChart
