import React from "react";
import image from "../assets/image.svg";
import { useFileActions } from "../utils/fileActions";

const ImageUpload = () => {
  const {
    handleFileChange,
    handleButtonClick,
    handleDragOver,
    handleDrop,
    fileInputRef,
  } = useFileActions();

  return (
    <>
      <form
        action=""
        className="flex flex-col gap-3 items-center text-center"
      >
        <h1 className="font-medium text-lg text-gray-2">Upload your image</h1>

        <p className="font-medium text-xs text-gray-3 mb-3">
          File should be Jpeg, Png,...
        </p>

        <div
          className="w-full h-auto py-10 rounded-md outline-2 outline-dashed outline-lightBlue bg-gray-5 cursor-pointer flex flex-col gap-8 items-center justify-center select-none"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <img
            src={image}
            alt="Drag and Drop Here"
          />
          <p className="font-medium text-sm text-gray-4">
            Drag & Drop your image here
          </p>
        </div>

        <p className="font-medium text-sm text-gray-4 my-4">Or</p>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue font-medium text-sm text-white rounded-md hover:bg-lightBlue transition-colors"
        >
          Choose a file
        </button>
      </form>
    </>
  );
};

export default ImageUpload;
