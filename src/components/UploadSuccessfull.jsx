import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useImage } from "../context/ImageContext";
import { useFileActions } from "../utils/fileActions";
import { toast } from "react-toastify";

const UploadSuccessfull = () => {
  const { uploadedImageUrl, isCopied } = useImage();
  const { truncateUrl, copyToClipboard } = useFileActions();

  if (isCopied) {
    toast.success("Link Copied to Clipboard!");
  }

  const displayUrl = truncateUrl(uploadedImageUrl);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <FaCircleCheck
        size={28}
        className="fill-green"
      />

      <h1 className="font-medium text-lg text-gray-2">
        Uploaded Successfully!
      </h1>

      {uploadedImageUrl ? (
        <img
          src={uploadedImageUrl}
          alt="uploaded file"
          className="w-full h-auto rounded-md"
        />
      ) : null}

      <div className="w-full px-0.5 py-1 rounded-lg flex items-center border bg-gray-5 border-l-gray-7">
        <input
          type="url"
          value={displayUrl}
          readOnly
          className="w-full px-2 bg-transparent text-[10px] border-none outline-none"
        />

        <button
          onClick={() => {
            copyToClipboard(uploadedImageUrl);
          }}
          className="w-28 h-9 rounded-lg bg-blue text-white text-[10px]"
        >
          {isCopied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
};

export default UploadSuccessfull;
