import { FaArrowTrendUp } from "react-icons/fa6";

type Props = {
  title: string;
  value: any;
};

function formatNumber(number: number) {
  // Check if the number is greater than or equal to 1000
  if (number >= 1000) {
    // Divide the number by 1000 to get the magnitude
    const magnitude = Math.floor(Math.log10(number) / 3);

    // Format the number to include one decimal place if it's greater than 10000
    if (magnitude >= 1) {
      const formatted = (number / Math.pow(1000, magnitude)).toFixed(1);
      // Remove the decimal point and trailing zero if the number is whole
      const cleanNumber = formatted.replace(/\.0$/, "");
      return `${cleanNumber}${"k".repeat(magnitude)}`;
    }
  }

  // Return the original number as string if it's less than 1000
  return String(number);
}

const Pricecard = (props: Props) => {
  return (
    <div className="border px-4 py-4 rounded-2xl max-w-[290px]">
      <div>{props.title}</div>
      <div className="flex items-center gap-3">
        <div className="font-semibold text-2xl text-slate-700">${formatNumber(props.value)}</div>
        <div className="bg-green-200 px-4 rounded-xl flex items-center gap-2 text-green-800">
          32%{" "}
          <span>
            <FaArrowTrendUp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pricecard;
