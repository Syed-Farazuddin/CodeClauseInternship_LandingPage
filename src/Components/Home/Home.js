import React, { useState } from "react";
import "../common/common.css";
import goodOne from "../../assets/goodone.jpg";
import chairOne from "../../assets/chair1.jpg";
import chairTwo from "../../assets/chari2.jpg";
import chairThree from "../../assets/chair3.png";
import interior5 from "../../assets//interior5.jpg";
import background1 from "../../assets//background1.jpg";
import background2 from "../../assets//background2.jpg";
import background3 from "../../assets//background3.jpg";
import hd from "../../assets//hd.jpg";
import hd1 from "../../assets//hd1.jpg";
import hd2 from "../../assets//hd2.jpg";
import hd3 from "../../assets//hd3.jpg";
import hd4 from "../../assets//hd4.jpg";
import hd5 from "../../assets//hd5.jpg";
import hd6 from "../../assets//hd6.jpg";
import hd7 from "../../assets//hd7.png";
import hd8 from "../../assets//hd8.jpg";
import hd9 from "../../assets//hd9.jpg";
import hd10 from "../../assets//hd10.jpg";
import hd11 from "../../assets//hd11.jpg";

<script
  src="https://kit.fontawesome.com/34e52d2b48.js"
  crossorigin="anonymous"
></script>;

const Home = () => {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <section>
        <div className="page">
          <header class="header">
            <nav class="flexbox" id="nav_bar">
              <div class="logo">
                <h1>SJB INTERIORS</h1>
              </div>
              <div className="responsive_nav_bar">
                <a
                  href="#menu"
                  id="menu-bar"
                  onClick={() => {
                    setMenu(!menu);
                    console.log("The menu bar is clicked");
                    document
                      .getElementById("nav_items")
                      .classList.toggle("pop_sidebar");
                  }}
                >
                  {menu ? (
                    <i class="fa-solid fa-bars"></i>
                  ) : (
                    <i class="fa-solid fa-xmark"></i>
                  )}
                </a>
                <div class="nav-items flexbox" id="nav_items">
                  <ul>
                    <a href="#designs">
                      <li>Top Designs</li>
                    </a>
                    <a href="#aboutUs">
                      <li>About us</li>
                    </a>
                    <a href="#contact">
                      <li>Contact</li>
                    </a>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          {/*............... Section 2 ................ */}

          <div className="section2 flexbox" id="home">
            <div className="Page_title">
              <h1 className="h1">Let's Build your dreams together. </h1>
            </div>
            <div className="page_image">
              <img alt="img" src={goodOne} />
            </div>
          </div>
        </div>

        {/* ....................Section 3 ................ */}

        <div className="section3" id="aboutUs">
          <div className="info">
            <h1 className="heading">Crafted With Excellent Material</h1>
            <p>
              Luxury is in each detail with these exquisite pieces. Sit with
              comfort, sit with luxury, Create your perfect room with our
              perfect furniture created with brilliance
            </p>
          </div>
          <div className="images">
            <img alt="" src={chairOne} />
            <img alt="" src={chairThree} />
            <img alt="" src={chairTwo} />
          </div>
        </div>
      </section>

      {/*............ Testinomials section............ */}

      <section id="testimonials">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <h1 className="Why">Why Choose Us ?</h1>

            {/* <!-- First Testimonial --> */}

            <div class="carousel-item active">
              <h2>
                Easy To Shop and Contact.We are always there to support and
                reach you as soon as possible
              </h2>
              <em></em>
            </div>

            {/* <!-- Second Testimonial --> */}

            <div class="carousel-item">
              <h2 class="testimonial-text">
                24/7 support.The employees and staff of SJB interiors are
                available at any time you want to reach
              </h2>
              <em></em>
            </div>

            <div class="carousel-item">
              <h2 class="testimonial-text">
                Best Quality Products. The products of SJB interiors are made by
                choosing the material carefully and the design is made by the
                top designers
              </h2>
              <em></em>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* .......Section 4 ............. */}

      <section id="section4">
        <div className="interior_design">
          <div className="photo">
            <div>
              <img className="photos interior1" alt="img" src={interior5} />
            </div>
          </div>
        </div>
        <div className="info" id="info2">
          <h1>We help you to make modern interior design</h1>
          <p>
            Let our interior design ideas be the stepping stone towards your
            dream home. From modular kitchens to stunning full home interiors,
            we've got it all! With our modern designs we can turn your home into
            an extraordinary place to live. Your just a step behind of making
            your dream true. Contact us lets make your dream true!
          </p>
        </div>
      </section>

      {/* .................. Testinomials for images ............ */}

      <section id="testimonials">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div class="carousel-inner" id="designs">
            <div class="carousel-item active">
              <h2>Some of the top designs</h2>
              <img
                className="testimonial-image"
                src={background1}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={background2}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={background3}
                alt="sample design"
              />
            </div>
            <div class="carousel-item">
              <h2>Some of the top designs</h2>
              <img
                className="testimonial-image"
                src={hd3}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd4}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd5}
                alt="sample design"
              />
            </div>
            <div class="carousel-item">
              <h2>Some of the top designs</h2>
              <img className="testimonial-image" src={hd} alt="sample design" />
              <img
                className="testimonial-image"
                src={hd2}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd1}
                alt="sample design"
              />
            </div>
            <div class="carousel-item">
              <h2>Some of the top designs</h2>
              <img
                className="testimonial-image"
                src={hd6}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd7}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd8}
                alt="sample design"
              />
            </div>
            <div class="carousel-item">
              <h2>Some of the top designs</h2>
              <img
                className="testimonial-image"
                src={hd9}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd10}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd11}
                alt="sample design"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <footer id="contact">
        <div className="contact">
          <h1>
            Thank you for contacting SJB Interior Designs! Please let us know
            how we can help you.
          </h1>
          <div id="social">
            <div className="socials">
              <a
                href="https://instagram.com/sjb_designz?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="socials">
              <a href="tel:+917013292693" target="_blank" rel="noreferrer">
                <i class="fa-sharp fa-solid fa-phone"></i>
              </a>
            </div>
            <div className="socials">
              <a
                href="https://wa.me/917013292693"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <section id="testimonials2" className="testinomials developer">
        <div className="devloper">
          <h3 className="">Contact Developer</h3>
        </div>
        <div className="dev">
          <div className="whts dev_items">
            <a
              href="https://wa.me/916305945730"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon">
                <i class="fa-brands fa-whatsapp"></i>
                <p>Whatsapp</p>
              </div>
            </a>
          </div>
          <div className="dev_items">
            <a
              href="mailto:syedfaizuddin506@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div class="icon">
                <i class="fa fa-envelope"></i>
                <p>Email</p>
              </div>
            </a>
          </div>
          <div className="dev_items">
            <a
              href="https://bespoke-elf-214ab1.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div class="icon">
                <i class="fa-solid fa-globe"></i>
                <p>Visit Website</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
