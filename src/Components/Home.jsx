import React from "react";
import "../Style/Home.css";
import vg from "../Images/2.webp";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillAmazonCircle,
} from "react-icons/ai";
function Home() {
  return (
    <>
      <div className="home-main" id="home">
        <div className="main">
          <h1>MMMUT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
      </div>

      <div className="home2">
        <img src={vg} alt="" className="img" />
        <div>
          <p className="home2-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod
            exercitationem dicta optio explicabo molestiae iure at
            necessitatibus asperiores hic facilis odio inventore aspernatur nemo
            dolorenda neque. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Facere laborum quidem ex dolore quasi praesentium. Commodi
            voluptate voluptates consequatur quia, repellendus officia, ducimus
            eaque possimus odit neque soluta quis distinctio laboriosam! Odio
            tenetur illo vel eligendi quam atque quis, ipsam hic id deleniti
            magni, doloribus voluptates vitae perspiciatis officia! Beatae.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <h2>Who we are?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          aliquid fuga repudiandae blanditiis reiciendis repellendus sapiente
          alias sed nobis quidem obcaecati numquam itaque veritatis omnis
          officiis, ipsa porro ut quaea culpa hic in, eius asperiores quod
          assumenda eligendi ex cupiditate placeat aut obcaecati mollitia nemo
          voluptatem! Quia ex, est atque nulla ut dolorem quidem commodi
          suscipit pariatur animi hic dolorum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorum ab explicabo nihil harum
          voluptatem ad!
        </p>
      </div>

      <div className="home4-main" id="brands">
        <div className="home4">
          <h1>Brands</h1>

          <div className="icon">
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
