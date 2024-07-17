import { FaFan } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { IoBarChartOutline } from "react-icons/io5";
import { LuWorkflow } from "react-icons/lu";
import { BsPlug } from "react-icons/bs";
import { PiChartBarHorizontalLight } from "react-icons/pi";

const items = [
  { text: "Dashboard", icon: <MdDashboard /> },
  { text: "Campaigns", icon: <IoBarChartOutline /> },
  { text: "Flows", icon: <LuWorkflow /> },
  { text: "Integrations", icon: <BsPlug /> },
  { text: "Customers", icon: <PiChartBarHorizontalLight /> },
];

const Sidebar = () => {
  return (
    <div className="hidden  bg-gray-100 h-screen md:flex flex-col items-center justify-between">
      <div className="flex items-center text-2xl text-slate-800 gap-3 mt-10 -ml-1 font-medium ">
        <FaFan />
        Salesway
      </div>

      <div className="-mt-[200px] text-xl text-slate-600 flex flex-col gap-4 ">
        <div className="flex items-center gap-4 ">
          <CiSettings />
          Settings
        </div>

        <div className="flex items-center gap-4 ">
          <RxPerson />
          Team
        </div>

        <div className="text-sm mt-2">
          <p className="text-slate-600">MENU</p>

          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 mt-4 text-xl">
              {item.icon}
              <span className="text-sm lg:text-xl">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 pb-5"></div>
    </div>
  );
};

export default Sidebar;
