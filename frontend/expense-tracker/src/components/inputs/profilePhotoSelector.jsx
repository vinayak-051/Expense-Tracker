import React, { useRef, useState } from 'react';
import { LuUser, LuTrash, LuCamera } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseImage = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center mb-5 -mt-10">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />
      <div className="relative w-20 h-20">
        <div
          className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={onChooseImage}
        >
          {previewUrl ? (
            <img src={previewUrl} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <LuUser className="text-3xl text-gray-500" />
          )}
        </div>
        <div
          className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer"
          onClick={onChooseImage}
        >
          <LuCamera className="text-gray-700 text-sm" />
        </div>
      </div>

      {previewUrl ? (
        <button
          type="button"
          onClick={handleRemoveImage}
          className="mt-2 text-red-500 text-sm flex items-center gap-1"
        >
          <LuTrash /> Remove
        </button>
      ) : (
        <p className="mt-2 text-sm text-gray-500 cursor-pointer" onClick={onChooseImage}>
          Choose a profile photo
        </p>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;


