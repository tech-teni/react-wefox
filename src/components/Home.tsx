import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Header />
      <section className="list-section">
        <form action="">
          <h3>Create a new item</h3>
          <div className="">
            <input type="text" />
            <input type="text" />
            <input type="file" name="contentImage" id="" />
            <input type="submit" value="Create" />
            {/* <textarea name="content" id="" cols={30} rows={10}></textarea> */}
          </div>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <img src="./images/wefox.png" alt="" />
              </th>
              <td>Madrid</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>
                <button>
                  <Link to="/show">show</Link>{" "}
                </button>
                <button>
                  <Link to="/update">update</Link>{" "}
                </button>
                <button>
                  <Link to="/remove">remove</Link>{" "}
                </button>
              </td>
            </tr>

            {/* another row */}
            <tr>
              <th>
                <img src="./images/wefox.png" alt="" />
              </th>
              <td>Madrid</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>
                <button>
                  <Link to="/show">show</Link>{" "}
                </button>
                <button>
                  <Link to="/update">update</Link>{" "}
                </button>
                <button>
                  <Link to="/remove">remove</Link>{" "}
                </button>
              </td>
            </tr>

            {/* another row */}
            <tr>
              <th>
                <img src="./images/wefox.png" alt="" />
              </th>
              <td>Madrid</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>
                <button>
                  <Link to="/show">show</Link>{" "}
                </button>
                <button>
                  <Link to="/update">update</Link>{" "}
                </button>
                <button>
                  <Link to="/remove">remove</Link>{" "}
                </button>
              </td>
            </tr>
            {/* end of row */}
          </tbody>
        </table>{" "}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
