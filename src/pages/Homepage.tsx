import Sidebar from "../components/Sidebar";
import First from "../components/First";
import Second from "../components/Second";
import Sixth from "../components/Sixth";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";

const Homepage = () => {
  return (
    <div className="flex bg-gray-100 w-full">
      <div className="md:w-[300px]">
        <Sidebar />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="">
          <First />
          <Second />
          <Sixth />
        </div>

        <div className="mx-2">
          <Third />
          <Fourth />
          <Fifth />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
