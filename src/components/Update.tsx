import React, { useState, useEffect } from "react";
import Header from "./Header";

import axios from "axios";
import dataTypes from "../data";

import { useLocation, Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  // success message
  const [message, setMessage] = useState<boolean>(false);

  const params = useParams();

  const navigate = useNavigate();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [image, setImage] = useState<string>();
  const [lat, setLat] = useState<string>();
  const [long, setLong] = useState<string>();

  //---- submitting item input function
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const newData = {
      title,
      content,
      image,
    };
    try {
      const saveData = async () => {
        const res = await axios.put(
          `http://localhost:3000/api/v1/posts/${params.id}`,
          newData
        );
      };

      saveData();
      setMessage(true);
      console.log(newData);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  // --------fetch for individual info
  const [minData, setMiniData] = useState<dataTypes>();

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:3000/api/v1/posts/${params.id}`
    );

    setMiniData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="container update-section">
      <Header imgSource={"../images/whatt.jpeg"} />
      <Link to="/">
        <button
          className="update-button container"
          style={{ marginTop: "10px", width: "80px" }}
        >
          Back
        </button>
      </Link>
      <form action="" className="update-form" onSubmit={onSubmit}>
        {message && (
          <p className="message">your information have been updated!</p>
        )}

        <h3 className="headings">Update Info</h3>
        <div className="update-input">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Content"
            name="content"
            value={content}
            onChange={(e: any) => setContent(e.target.value)}
          />
          <input
            type="number"
            name="lat"
            placeholder="Latitude"
            id=""
            value={lat}
            onChange={(e: any) => setLat(e.target.value)}
          />
          <input
            type="number"
            name="long"
            id=""
            placeholder="Longitude"
            value={long}
            onChange={(e: any) => setLong(e.target.value)}
          />

          <input
            type="file"
            name="image"
            id=""
            value={image}
            onChange={(e: any) => setImage(e.target.value)}
          />

          <input type="submit" value="Update" className="show-button" />
          {/* <textarea name="content" id="" cols={30} rows={10}></textarea> */}
        </div>
      </form>
    </section>
  );
};

export default Update;
