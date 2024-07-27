import { useEffect, useState } from "react";

interface SemiCircleProgressProps {
  value: number;
  maxValue: number;
}

interface Value {
  score: number;
  message: string;
  title: string;
}

const SemiCircleProgress: React.FC<SemiCircleProgressProps> = ({ value, maxValue }) => {
  const radius = 50;
  const circumference = Math.PI * radius;
  const offset = circumference - (value / maxValue) * circumference;

  return (
    <svg width="350" height="100" viewBox="0 0 120 70">
      <path d="M10,60 A50,50 0 1 1 110,60" fill="none" stroke="#e6e6e6" strokeWidth="10" />
      <path
        d="M10,60 A50,50 0 1 1 110,60"
        fill="none"
        stroke="#007bff"
        strokeWidth="10"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text x="60" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="#3c3c3c">
        {value}
      </text>
      <text x="60" y="63" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#3c3c3c">
        {"of 100 points"}
      </text>
    </svg>
  );
};

const Third = () => {
  const [value, setValue] = useState<Value>();
  const [score, setScore] = useState(0);

  const username = "trial";
  const password = "assignment123";

  const url = "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_3/";

  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValue(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    let id = setInterval(() => {
      setScore((prev) => {
        if (prev >= (value?.score || 67)) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="border flex flex-col mt-2 bg-white pt-3 rounded-2xl">
      <div className="py-4">
        <SemiCircleProgress value={score} maxValue={100} />
      </div>
      <hr className="w-[80%] m-auto" />

      <div className="pt-4 pb-10">
        <h1 className="font-semibold text-xl ml-8 text-slate-700">You're good</h1>
        <p className="ml-8 text-slate-500">Your sales performance score is better than 80% other user</p>
      </div>
    </div>
  );
};

export default Third;
