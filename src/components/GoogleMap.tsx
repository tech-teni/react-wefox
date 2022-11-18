import React, { useEffect, useState } from "react";

interface mapProps {
  lat: number;
  long: number;
}
const GoogleMap = ({ lat, long }: mapProps) => {
  const [source, setSource] = useState<string>();

  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    setSource(
      `https://maps.google.com/maps?q=${lat},${long}&hl=es;&output=embed`
    );
  });
  return (
    <div>
      <iframe src={source} id="iframeId" height="500px" width="100%"></iframe>
    </div>
  );
};

export default GoogleMap;
