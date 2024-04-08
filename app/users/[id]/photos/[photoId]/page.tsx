import React from "react";

interface Props {
  params: { id: number; photoId: number; title: string; url: string };
}

const PhotoDetails = async ({ params: { id, photoId } }: Props) => {
  return (
    <>
      <div>
        PhotoDetails
        <p>User ID: {id}</p>
        <p>Photo ID: {photoId}</p>
      </div>
    </>
  );
};

export default PhotoDetails;
