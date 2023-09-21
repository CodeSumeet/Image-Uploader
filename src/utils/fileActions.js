import { useRef } from "react";
import { useImage } from "../context/ImageContext";
import supabase from "../config/supabaseClient";
import { toast } from "react-toastify";

export const useFileActions = () => {
  const fileInputRef = useRef(null);
  const { isCopied, setIsCopied } = useImage();
  const {
    setIsLoading,
    setUploadedFile,
    setUploadSuccessfull,
    setUploadedImageUrl,
  } = useImage();

  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    console.log("handleFileChange triggered!");
    const selectedFile = e.target.files[0];
    // Check file MIME type
    if (!["image/jpeg", "image/png"].includes(selectedFile.type)) {
      toast.error("Invalid file type. Only JPEG and PNG files are allowed.");
      return; // Exit the function if file type is invalid
    }

    setUploadedFile(selectedFile);

    if (selectedFile) {
      await uploadFile(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    setUploadedFile(file);
    fileInputRef.current.files = e.dataTransfer.files;

    if (file) {
      await uploadFile(file);
    }
  };

  const uploadFile = async (file) => {
    setIsLoading(true);

    try {
      const filePath = `uploads/${file.name}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("Images")
        .upload(filePath, file);

      if (uploadError) {
        toast.error(uploadError);
      }

      //Get The Uploaded File URL
      const urlData = await supabase.storage
        .from("Images")
        .getPublicUrl(filePath);

      setUploadedImageUrl(urlData.data.publicUrl);
    } catch (error) {
      if (error) {
        toast.error("Error uploading image:", error);
      }
    } finally {
      setIsLoading(false);
      setUploadSuccessfull(true);
    }
  };

  const copyToClipboard = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast.error(error);
    }
  };

  const truncateUrl = (url, length = 40) => {
    if (url.length <= length) return url;
    return url.substring(0, length) + "...";
  };

  return {
    handleFileChange,
    handleButtonClick,
    handleDragOver,
    handleDrop,
    truncateUrl,
    copyToClipboard,
    fileInputRef,
  };
};
