import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import avatar from "../assets/avatar.jpg";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-7 py-5 border-b border-b-white">
        <h1 className="text-lg md:text-3xl font-bold">Dashboard</h1>
        <div className="flex">
          <div className="lg:flex items-center bg-white px-2 py-1 rounded-full hidden">
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Search for anything"
              className="bg-transparent outline-none border-none ml-1 text-xs"
            />
          </div>
          <div className="bg-white p-2 rounded-full md:flex items-center justify-center mx-5 hidden">
            <IoIosNotificationsOutline />
          </div>
          <div className="flex items-center bg-white px-3 md:px-2 py-2 md:py-1 rounded-full">
            <div>
              <img
                src={avatar}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="md:flex flex-col mx-2 hidden">
              <span className="font-semibold text-xs">ALvin Kurumi</span>
              <span className=" text-xs">Product Manager</span>
            </div>
            <IoIosArrowDown />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
