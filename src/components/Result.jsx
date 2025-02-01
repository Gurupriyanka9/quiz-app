import React, { useEffect, useState } from "react";

const Result = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      const response = await fetch("/api/result/:userId");
      const data = await response.json();
      setResult(data);
    };
    fetchResult();
  }, []);

  if (!result) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Results</h1>
      <p>You answered {result.correct} out of {result.total} questions correctly.</p>
    </div>
  );
};

export default Result;
