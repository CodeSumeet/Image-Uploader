import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <h1 className="font-medium text-lg text-gray-2">Uploading...</h1>
      <div className="w-full h-1.5 relative bg-gray-6 rounded overflow-hidden">
        <div className="h-full absolute left-0 rounded bg-blue animate-loading"></div>
      </div>
    </div>
  );
};

export default Loader;
