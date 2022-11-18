import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useLocation, Link, useParams } from "react-router-dom";
import dataTypes from "../data";
import axios from "axios";
import defaultImage from "./landscape.jpg";
import GoogleMap from "./GoogleMap";

const Show = () => {
  const param = useParams();
  const [minData, setMiniData] = useState<dataTypes>();
  // const [lat, setLat] = useState<string>();
  // const [long, setLong] = useState<string>();

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:3000/api/v1/posts/${param.id}`
    );

    setMiniData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(minData);
  return (
    <div className="container">
      <Header imgSource={"../images/whatt.jpeg"} />
      <Link to="/">
        <button
          className="update-button container"
          style={{ marginTop: "50px", width: "80px" }}
        >
          Back
        </button>
      </Link>

      <section className="show-section container">
        <img
          src={minData?.image_url ? minData.image_url : defaultImage}
          alt=""
        />
        <div className="content-info">
          <h3>{minData?.title}</h3>
          <p>{minData?.content}</p>
          <div className="long-lat">
            <div className="">
              {" "}
              <span>
                <b>Lat: </b>
              </span>
              <span> {minData?.lat ? minData?.lat : "0"}</span>
            </div>

            <div className="">
              {" "}
              <span>
                <b>Long: </b>
              </span>
              <span> {minData?.long ? minData?.long : "0"}</span>
            </div>
          </div>
          {/* MAP */}
          <GoogleMap
            lat={minData?.lat ? parseInt(minData?.lat) : 0}
            long={minData?.long ? parseInt(minData?.long) : 0}
          />
        </div>
      </section>
    </div>
  );
};

export default Show;
