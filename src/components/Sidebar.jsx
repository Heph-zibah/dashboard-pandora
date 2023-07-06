import {
  AiOutlinePlus,
  AiOutlineQuestionCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaTasks, FaProjectDiagram } from "react-icons/fa";
import { MdDashboardCustomize, MdManageAccounts } from "react-icons/md";
import {RiListSettingsLine} from 'react-icons/ri'
import {PiUsersThreeDuotone} from 'react-icons/pi'
import {BsFillRecordCircleFill} from 'react-icons/bs'

const items = [
  {
    id: 1,
    icon: <HiOutlineBriefcase/>,
    text: "Project",
  },
  {
    id: 2,
    icon: <FaTasks />,
    text: "Tasks",
  },
  {
    id: 3,
    icon: <MdDashboardCustomize />,
    text: "Dashboard",
  },
  {
    id: 4,
    icon: <AiOutlineClockCircle />,
    text: "Time log",
  },
  {
    id: 5,
    icon: <MdManageAccounts />,
    text: "Resource mngt",
  },
  {
    id: 6,
    icon: <PiUsersThreeDuotone />,
    text: "Users",
  },
  {
    id: 7,
    icon: <FaProjectDiagram />,
    text: "Project Template",
  },

  {
    id: 8,
    icon: <RiListSettingsLine />,
    text: "Menu settings",
  },
];

const Sidebar = () => {
  return (
    <>
      <aside className=" bg-[#060606] text-[#F1F1F1] flex flex-col justify-between py-5  px-5 min-h-screen">
        <div className="flex items-center md:mb-7 cursor-pointer">
          <div className="text-[#E65F2B] ">
            <BsFillRecordCircleFill className="text-2xl cursor-pointer" />
          </div>
          <h1 className="ml-4">Pandora</h1>
        </div>
        <div className="rounded-full md:bg-white p-2  lg:w-44">
          <div className="flex items-center justify-center md:justify-start cursor-pointer">
            <div className="rounded-full bg-[#E65F2B] text-white p-2">
              <AiOutlinePlus />
            </div>
            <div className="text-[#171717] text-sm ml-2">
              <span className="hidden md:block">Create new project</span>
            </div>
          </div>
        </div>

        <div className="text-white md:mt-7 ">
          <div className="rounded-full md:bg-white text-[#E65F2B] lg:w-44 p-2 mb-4">
            <div className="flex items-center justify-center md:justify-start">
              <div className="rounded-full p-2 bg-[#E65F2B] text-white md:text-[#E65F2B]  md:bg-transparent ">
                <RxDashboard />
              </div>
              <div className=" text-sm ml-2">
                <span className="hidden md:block">Dashboard</span>
              </div>
            </div>
          </div>
          {items.map((item) => {
            const { id, icon, text } = item;
            return (
              <ul
                key={id}
                className="flex items-center justify-center md:justify-start px-2 py-3 "
              >
                <li className="text-2xl md:text-lg cursor-pointer">{icon}</li>
                <li className="ml-4 hidden md:block text-sm cursor-pointer">
                  {text}
                </li>
              </ul>
            );
          })}
        </div>
        <div className="bg-[#E65F2B] p-2 text-white w-fit rounded-full md:mt-7  mx-auto md:mx-0 cursor-pointer">
          <AiOutlineQuestionCircle />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
