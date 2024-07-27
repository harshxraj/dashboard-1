import { useState } from "react";
// import { createClient } from "@supabase/supabase-js";

const data = [
  {
    id: 1,
    Product: "Camera Mi 360",
    sold_amount: 432,
    unit_price: 120,
    revenue: 51320,
    rating: 4.81,
  },
  {
    id: 2,
    Product: "Message Gun",
    sold_amount: 120,
    unit_price: 60,
    revenue: 23901,
    rating: 3.44,
  },
  {
    id: 3,
    Product: "Redmi Note 9",
    sold_amount: 190,
    unit_price: 87.6,
    revenue: 87211,
    rating: 2.5,
  },
  {
    id: 4,
    Product: "One Plus Nord CE Lite 2",
    sold_amount: 140,
    unit_price: 24.1,
    revenue: 29809,
    rating: 4.65,
  },
];

type TopProduct = {
  id: number;
  Product: string;
  sold_amount: number;
  unit_price: number;
  revenue: number;
  rating: number;
};

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Sixth = () => {
  const [topProducts] = useState<TopProduct[]>(data);
  // const fetchData = async () => {
  //   let { data: top_products, error: top_products_err } = await supabase.from("topProducts").select("*");
  //   console.log("DATA", top_products);
  //   if (top_products_err) console.error("Error fetching data:");
  //   else {
  //     setTopProducts(top_products || []);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    // <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
        <div>
          <h1 className="ml-12 text-2xl font-medium text-slate-800">Top Products</h1>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Full results"
          />
        </div>
      </div>
      <div className="overflow-x-auto w-[400px] md:w-full">
        <table className="w-[200px] md:w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-600 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Sold amount
              </th>
              <th scope="col" className="px-6 py-3">
                Unit price
              </th>
              <th scope="col" className="px-6 py-3">
                Revenue
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((item) => (
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4"></td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/e/r/j/-original-imagz7g7nshumnqz.jpeg?q=70&crop=false"
                    alt="Jese image"
                  />
                  <div className="ps-3 text-slate-600">
                    <div className="text-base font-semibold">{item.Product}</div>
                  </div>
                </th>
                <td className="px-6 py-4 font-medium">{item.sold_amount}</td>
                <td className="px-6 py-4 font-medium">{`$${item.unit_price}`}</td>
                <td className="px-6 py-4 font-medium">{`$${item.revenue}`}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center font-medium">
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 me-2"></div> {item.rating}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sixth;
