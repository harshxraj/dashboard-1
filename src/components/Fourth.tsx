import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

type Sale = {
  id: number;
  date: string;
  web_sales: number;
  offline_sales: number;
};

const Fourth = () => {
  const [allSales, setAllSales] = useState<Sale[]>([]);

  const fetchData = async () => {
    let { data: sales, error: sales_err } = await supabase.from("sales").select("*");
    if (sales_err) {
      console.error("Error fetching data:", sales_err);
    } else if (sales) {
      console.log(sales);
      setAllSales(sales);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white my-2 rounded-2xl pb-3 pr-3">
      <h1 className="text-xl ml-6 py-4 font-semibold text-slate-700">Customers by device</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={allSales}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="web_sales" stroke="#8884d8" strokeWidth={0.5} dot={false} />
          <Line type="monotone" dataKey="offline_sales" stroke="#82ca9d" strokeWidth={1} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Fourth;
