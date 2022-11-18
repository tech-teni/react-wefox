import React, { ReactEventHandler, useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import dataTypes from "../data";
import defaultImage from "./landscape.jpg";

import { useLocation, Link, useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();

  const [message, setMessage] = useState<boolean>(false);
  const [lat, setLat] = useState<string>();
  const [long, setLong] = useState<string>();

  const navigate = useNavigate();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [image, setImage] = useState<any>();
  const [deleteMessage, setDeleteMessage] = useState<boolean>(false);

  //---- submitting item input function

  const handleImageChange = async (e: any) => {
    const currentImage = e.target.files[0];
    console.log(currentImage);
    console.log(URL.createObjectURL(currentImage));
    setImage(image);
    return;
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const newData = {
      title,
      content,
      image,
      lat,
      long,
    };
    const saveData = async () => {
      const res = await axios.post(
        "http://localhost:3000/api/v1/posts",
        newData
      );
    };

    saveData();
    setMessage(true);
    console.log(newData);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // ----- listing data item from the server
  const [data, setData] = useState<dataTypes[]>();

  // fetch data
  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:3000/api/v1/posts");
    setData(res.data);
  };

  useEffect(() => {
    fetchAllUser();
    console.log(data);
  }, []);

  // -------- delete function
  //get the item ID

  const onDelete = async (e: any) => {
    e.preventDefault();
    const toNumber = parseInt(e.target.id);
    console.log(typeof toNumber);
    // navigate(`/${id}`);
    const res = await axios.delete(
      `http://localhost:3000/api/v1/posts/${toNumber}`
    );
    setDeleteMessage(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="">
      <Header imgSource={"./images/whatt.jpeg"} />
      <section className="list-section container">
        <form action="" onSubmit={onSubmit}>
          {message && (
            <p className="message">your information have been saved!</p>
          )}
          <h3 className="headings">Create new </h3>
          <div className="input-container">
            <input
              type="text"
              required
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e?.target?.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Content"
              name="content"
              value={content}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setContent(e?.target?.value);
              }}
            />

            <input
              type="number"
              name="lat"
              id=""
              placeholder="Latitude"
              value={lat}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLat(e?.target?.value);
              }}
            />
            <input
              type="number"
              name="long"
              id=""
              placeholder="Longitude"
              value={long}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLong(e?.target?.value);
              }}
            />
            <input
              type="file"
              name="image_url"
              id=""
              value={image}
              onChange={handleImageChange}
            />

            <input type="submit" value="Create" />
            {/* <textarea name="content" id="" cols={30} rows={10}></textarea> */}
          </div>
        </form>
        {deleteMessage && <p className="delete">Item have been deleted!</p>}
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d) => (
              <tr key={d.id}>
                <th>
                  <img src={d.image_url ? d.image_url : defaultImage} alt="" />
                </th>
                <td>{d.title}</td>
                <td>{d.content}</td>
                <td>
                  <Link to={`/show/${d.id}`}>
                    <button className="show-button">show </button>
                  </Link>
                  {/* <Link to={`/${d.id}`}> */}
                </td>
                <td>
                  {" "}
                  <Link to={`/update/${d.id}`}>
                    <button className="update-button">update</button>
                  </Link>
                </td>
                <td>
                  {" "}
                  <input
                    type="button"
                    className="delete-button"
                    onClick={onDelete}
                    value="delete"
                    id={"" + d.id}
                  />
                </td>
              </tr>
            ))}
            {/* end of row */}
          </tbody>
        </table>{" "}
      </section>
    </div>
  );
};

export default Home;
