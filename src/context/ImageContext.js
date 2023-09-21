import React, { createContext, useState, useContext } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadSuccessfull, setUploadSuccessfull] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  return (
    <ImageContext.Provider
      value={{
        isLoading,
        setIsLoading,
        uploadedFile,
        setUploadedFile,
        uploadSuccessfull,
        setUploadSuccessfull,
        uploadedImageUrl,
        setUploadedImageUrl,
        isCopied,
        setIsCopied,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const context = useContext(ImageContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("useImage must be used within an ImageProvider");
  }
  return context;
};
