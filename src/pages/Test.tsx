import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    window.location.href = "https://buy.polar.sh/polar_cl_0LJRAGcsx87uS34PB3T23hQRVm2XdNdh0oppd2YbSI1";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-lg text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
};

export default Test;
