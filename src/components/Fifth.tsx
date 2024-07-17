import { useEffect, useState } from "react";

const username = "trial";
const password = "assignment123";

const url = "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_5/";

const headers = new Headers();
headers.set("Authorization", "Basic " + btoa(username + ":" + password));

interface ValueInterface {
  negative: number;
  positive: number;
  neutral: number;
}

const Fifth = () => {
  const [data, setData] = useState<ValueInterface | null>({
    negative: 67,
    positive: 13,
    neutral: 10,
  });

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!data) return null;

  const total = data.negative + data.positive + data.neutral;
  const negativeWidth = (data.negative / total) * 100 + "%";
  const positiveWidth = (data.positive / total) * 100 + "%";
  const neutralWidth = (data.neutral / total) * 100 + "%";

  return (
    <div className="bg-white rounded-2xl my-2 px-6 py-6">
      <p className="text-slate-600">Community feedback</p>
      <p className="text-2xl mb-4 mt-1">Mostly positive</p>

      <div style={{ display: "flex", width: "100%", height: "12px", gap: "5px" }}>
        <div style={{ width: negativeWidth }} className="bg-red-400 rounded-lg"></div>
        <div style={{ width: neutralWidth }} className="bg-yellow-300 rounded-lg"></div>
        <div style={{ width: positiveWidth }} className="bg-green-300 rounded-lg"></div>
      </div>

      <div className="flex gap-6 py-5">
        <div>
          <p className="text-slate-600">Negative</p>
          <p className="font-semibold">{data.negative}</p>
        </div>
        <div>
          <p className="text-slate-600">Neutral</p>
          <p className="font-semibold">{data.neutral}</p>
        </div>
        <div>
          <p className="text-slate-600">Positive</p>
          <p className="font-semibold">{data.positive}</p>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
