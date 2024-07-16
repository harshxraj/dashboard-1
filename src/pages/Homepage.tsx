import Sidebar from "../components/Sidebar";
import First from "../components/First";
import Second from "../components/Second";
import Sixth from "../components/Sixth";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";

const Homepage = () => {
  return (
    <div className="flex bg-gray-200">
      <div className="w-1/3">
        <Sidebar />
      </div>
      <div className="w-2/3">
        <First />
        <Second />
        <Sixth />
      </div>

      <div className="mx-2 w-1/3">
        <Third />
        <Fourth />
        <Fifth />
      </div>
    </div>
  );
};

export default Homepage;
