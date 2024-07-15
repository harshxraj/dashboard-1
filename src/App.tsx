import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define the types for your data
type ComparisonItem = {
  id: number;
  Month: string;
  Last_year: number;
  This_year: number;
};

type TopProduct = {
  id: number;
  Product: string;
  sold_amount: number;
  unit_price: number;
  revenue: number;
  rating: number;
};

type Sale = {
  id: number;
  date: string;
  web_sales: number;
  offline_sales: number;
};

const App = () => {
  const [comparisonItems, setComparisonItems] = useState<ComparisonItem[]>([]);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);

  const fetchData = async () => {
    let { data: comparison_items, error: comparison_items_error } = await supabase
      .from("comparison")
      .select("*");
    let { data: top_products, error: top_products_err } = await supabase.from("topProducts").select("*");
    let { data: sales, error: sales_err } = await supabase.from("sales").select("*");
    console.log("DATA", comparison_items);
    console.log("DATA", top_products);
    console.log(sales);

    if (comparison_items_error || top_products_err || sales_err) console.error("Error fetching data:");
    else {
      setComparisonItems(comparison_items || []);
      setTopProducts(top_products || []);
      setSales(sales || []);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Supabase Data</h1>
      <ul>
        {comparisonItems.map((item) => (
          <li key={item.id}>{item.Month}</li>
        ))}
      </ul>

      <ul>
        {topProducts.map((item) => (
          <li key={item.id}>{item.Product}</li>
        ))}
      </ul>

      <ul>
        {sales.map((item) => (
          <li key={item.id}>{item.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
