import React, { useRef } from 'react';

const File = ({ handleFile }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };
  const Btn = "Upload A File"
  const handleChange = async (e) => {
    const fileUploaded = e.target.files[0];

    try {

      await uploadFileAsync(fileUploaded);
      handleFile(fileUploaded);
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  const uploadFileAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        reject(new Error('File upload failed'));
      }, 1500);
    });
  };

  return (
    <div className='flex lg:justify-center'>
      <button
        className="bg-white border-2 border-black md:w-[360px] w-[250px] mx-0.5 py-2 lg:w-72 lg:mx-3 rounded-lg my-2 md:mx-2"
        onClick={handleClick}>
        {Btn}
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default File;

