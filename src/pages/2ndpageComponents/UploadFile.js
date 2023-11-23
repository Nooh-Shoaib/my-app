import React, { useRef } from 'react';

function FileUploadButton() {
  // Create a ref for the file input element
  const fileInputRef = useRef(null);

  // Function to handle file selection
  const handleFileSelect = () => {
    fileInputRef.current.click(); // Trigger the file input element
  };

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // You can perform actions with the selected file here
      console.log('Selected File:', selectedFile);
    }
  };

  return (
    <div>
      {/* Hidden file input element */}
      <input
        type="file"
        accept=".pdf, .doc, .docx, .png, .jpg" // Specify allowed file types
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />

      {/* Button to trigger file selection */}
      <button
        onClick={handleFileSelect}
        className="bg-white  px-4 border-2 border-black md:w-48 w-64 mx-5 py-2 lg:w-96 lg:mx-3 rounded-lg my-2 md:mx-2"
      >
        Upload File
      </button>
    </div>
  );
}

export default FileUploadButton;
