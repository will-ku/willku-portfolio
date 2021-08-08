import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";
import Social from "./Social";

export default function Contact() {
  const [viewport, setViewport] = useState({
    latitude: 40.7411,
    longitude: -73.9897,
    zoom: 10,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fr3f18e",
        "template_q9xjgqt",
        e.target,
        "user_rVkJO0eHVKXSLnDHXJ6kd"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  };
  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              {/* <span>Contact</span> */}
              <h3>Let's Connect!</h3>
              <p
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  opacity: ".8",
                }}
              >
                I am currently looking for full-time software engineer roles,
                but my inbox is open for anything. Whether you have feedback
                about my projects or would just like to chat, feel free to shoot
                me a message or connect with me on social!
              </p>
              <Social />
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="map_wrap">
          <div className="map">
            <ReactMapGL
              mapStyle={"mapbox://style/mapbox/dark-v9"}
              mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
          </div>
        </div>
        {/* MENU WRAP */}

        <div className="fields">
          <form className="contact_form" onSubmit={sendEmail}>
            <div className="first">
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input type="email" name="user_email" placeholder="Email" />
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
}
