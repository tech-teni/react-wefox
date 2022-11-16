import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, Link } from "react-router-dom";

const Update = () => {
  return (
    <div className="">
      <Header />
      <button>
        <Link to="/">Back</Link>
      </button>
      <form action="">
        <h3>update item</h3>
        <div className="">
          <input type="text" />
          <input type="text" />
          <input type="file" name="contentImage" id="" />
          <input type="submit" value="Create" />
          {/* <textarea name="content" id="" cols={30} rows={10}></textarea> */}
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Update;
