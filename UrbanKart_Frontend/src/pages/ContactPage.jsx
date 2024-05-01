import React from "react";
import { Footer } from "../components";
import {toast} from 'react-toastify';
import {  useNavigate } from "react-router-dom";
import contact from "../images/contact.svg"

const ContactPage = () => {
  const navigate = useNavigate();
 const handleSubmit =(e)=>{
  e.preventDefault();
  toast.success("You will here back from us Soon");
  navigate("/product")
}
   

  return (
    <>

           <section className="section-contact">
                <div className="headingContainer">
                    <p className="main-heading">CONTACT US</p>
                    <h1>We Are Here For You</h1>
                </div>
                <div className="main-contact">
                  <div>
                    <img src={contact} alt="We are always ready to help" width="500px" />
                  </div>
                  <div>
                    <div className="headingContainer">
                      <p className="main-heading">CONTACT US</p>
                      <h1>Get In Touch</h1>
                      <p>We'd love to hear from you. Take five minutes to fill out our form so that we can get to know you.</p>
                    </div>
                  </div>
                </div>
                <div class="container my-5 py-5">
                  <div class="row">
                    <div class="col-md-6 mx-auto bg-dark p-5 contactDiv" >
                      <h1 class="text-center mb-4 text-light">Contact Us</h1>
                      <hr class="my-4" />
                      <form class="my-5" onSubmit={handleSubmit}>
                        <div class="form-group my-3 ">
                          <label for="Name " class="text-light">Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="Name"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div class="form-group my-3">
                          <label for="Email" class="text-light">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="Email"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div class="form-group my-3">
                          <label for="Password" class="text-light">Message</label>
                          <textarea
                            rows={5}
                            class="form-control"
                            id="Password"
                            placeholder="Enter your message"
                          ></textarea>
                        </div>
                        <div class="text-center">
                          <button
                            class="my-2 px-4 mx-auto btn btn-primary"
                            type="submit"
                          >
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
            </section>

      <Footer />
    </>
  );
};

export default ContactPage;