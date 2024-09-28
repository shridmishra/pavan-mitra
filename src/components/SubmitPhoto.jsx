"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export function SubmitPhoto() {
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
  };

  return (
    (<div
      className="w-full max-w-4xl mx-auto min-h-full border border-dashed bg-black border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
      
    </div>)
  );
}
