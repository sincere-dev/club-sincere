import React, { useRef, useState } from 'react';

import Webcam from 'react-webcam';

import { CLOUD_NAME } from '../../constants/cloudinary';

export const WebcamUpload = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [webcamError, setWebcamError] = useState<boolean>(false);

  const captureAndUpload = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();

    if (!imageSrc) return;

    const blob = await (await fetch(imageSrc)).blob();
    const file = new File([blob], `${Date.now()}.jpg`, { type: 'image/jpeg' });

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'default');

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error(`Upload failed: ${res.statusText}`);
      }

      const data = await res.json();
      setImageUrl(data.secure_url);
    } catch (err) {
      console.error('Error uploading image:', err);
    }
  };

  const handleError = (err: string | DOMException) => {
    console.error('Webcam error', err);
    setWebcamError(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Webcam
        mirrored
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        onUserMedia={() => console.log('Webcam ready')}
        onUserMediaError={handleError}
        width={320}
        height={240}
      />
      <button
        onClick={captureAndUpload}
        disabled={webcamError}
      >
        { webcamError ? 'no webcam? :(' : 'capture & upload' }
      </button>
      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded webcam" width={320} />
        </div>
      )}
    </div>
  );
};
