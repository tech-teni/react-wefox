import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useLocation, Link } from "react-router-dom";

const Show = () => {
  return (
    <div className="">
      <Header />
      <button>
        <Link to="/">Back</Link>
      </button>
      <section className="show-section">
        <img src="./images/wefox.png" alt="" />
        <div className="content-info">
          <h3>Madrid</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro qui eaque molestiae amet totam
            architecto quod iste quas cupiditate ipsa obcaecati ducimus id
            libero, hic nostrum sapiente commodi ipsum eum?
          </p>
          {/* MAP */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4793853.39626353!2d8.748932882837021!3d8.618925421769486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1668555769373!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={undefined}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Show;
