import { useEffect, useState } from "react";
import Pricecard from "./Pricecard";

const username = "trial";
const password = "assignment123";

const url = "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_1/";

const headers = new Headers();
headers.set("Authorization", "Basic " + btoa(username + ":" + password));

interface DataState {
  purchases: number;
  revenue: number;
  refunds: number;
}

const First = () => {
  const [data, setData] = useState<Partial<DataState>>({
    purchases: 4294,
    revenue: 322000,
    refunds: 8200,
  });

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="px-4 pl-10 pt-3 bg-white pb-2 rounded-tl-xl rounded-tr-xl mt-2 w-full">
      <div className="flex">
        <div className="text-3xl font-semibold my-3">Dashboard</div>
      </div>
      {/* <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="animate-pulse flex space-x-4 p-4">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mb-2">
        {Object.keys(data).map((key) => (
          <Pricecard key={key} title={key} value={data[key as keyof DataState]} />
        ))}
      </div>
    </div>
  );
};

export default First;
