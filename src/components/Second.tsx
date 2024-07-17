import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { createClient } from "@supabase/supabase-js";

// const data = [
//   { id: 53, Month: "Jan", Last_year: 5000, This_year: 6000 },
//   { id: 54, Month: "Feb", Last_year: 10000, This_year: 2000 },
//   { id: 55, Month: "Mar", Last_year: 20000, This_year: 40000 },
//   { id: 56, Month: "Apr", Last_year: 32000, This_year: 21000 },
//   { id: 57, Month: "May", Last_year: 12000, This_year: 9200 },
//   { id: 58, Month: "Jun", Last_year: 13000, This_year: 8700 },
// ];

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

type ComparisonItem = {
  id: number;
  Month: string;
  Last_year: number;
  This_year: number;
};

const Second = () => {
  const [comparisonItems, setComparisonItems] = useState<ComparisonItem[]>([]);

  const fetchData = async () => {
    let { data: comparison_items, error: comparison_items_error } = await supabase
      .from("comparison")
      .select("*");
    console.log("DATA", comparison_items);
    if (comparison_items_error) console.error("Error fetching data:");
    else {
      setComparisonItems(comparison_items || []);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full pl-6 bg-white pt-1">
      <div>
        <div className="text-2xl font-medium text-slate-800 pl-5 my-2 pt-4">Comparison</div>
        <div></div>
      </div>

      <div className="hidden lg:block">
        <BarChart
          width={900}
          height={340}
          data={comparisonItems}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="Month" />
          <YAxis />
          <Tooltip shared={false} trigger="click" />
          <Legend />
          <Bar dataKey="Last_year" fill="#69e0f2" />
          <Bar dataKey="This_year" fill="#0a74ff" />
        </BarChart>
      </div>

      <div className="block lg:hidden">
        <ResponsiveContainer width="100%" height={340}>
          <BarChart
            data={comparisonItems}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="Month" />
            <YAxis />
            <Tooltip shared={false} trigger="click" />
            <Legend />
            <Bar dataKey="Last_year" fill="#69e0f2" />
            <Bar dataKey="This_year" fill="#0a74ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Second;
