import React from "react";
import "../Style/Contact.css";
function Contact() {
  return (
    <>
      <div className="form" id="contact">
        <div action="" className="form-input">
          <h2 className="contact-text">Contact Us</h2>
          <div className="form-group">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <input type="text" />
            </div>
          </div>
        </div>

          <div className="form-btn">
              <button className="btn">Send</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
