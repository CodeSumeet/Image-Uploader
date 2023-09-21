import React from "react";
import { useImage } from "../context/ImageContext";
import ImageUpload from "./ImageUpload";
import Loader from "./Loader";
import UploadSuccessfull from "./UploadSuccessfull";

const Main = () => {
  const { isLoading, uploadSuccessfull } = useImage();
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <div className="w-[400px] h-auto bg-white rounded-lg shadow-xl px-8 py-9">
        {uploadSuccessfull ? (
          <UploadSuccessfull />
        ) : !isLoading ? (
          <ImageUpload />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Main;
