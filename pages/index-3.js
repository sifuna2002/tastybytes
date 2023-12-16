import Link from "next/link";
import Slider from "react-slick";
import Partners from "../src/components/Partners";
import QichenCounter from "../src/components/QichenCounter";
import ReservationsFrom from "../src/components/ReservationsFrom";
import Hero3Slider from "../src/components/slider/Hero3Slider";
import MenuSliderOne from "../src/components/slider/MenuSliderOne";
import Layout from "../src/layout/Layout";
import { testimonialSliderOne } from "../src/sliderProps";
const Index3 = () => {
  return (
    <Layout header={3}>
      <section className="banner-three p-r">
        <Hero3Slider />
      </section>
      {/*=== End Banner Section ===*/}
      {/*=== Start About Section ===*/}
      <section className="about-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-two_image-box text-md-end mb-20 p-r z-1">
                <div className="shape shape-one">
                  <span />
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-6">
                    <img
                      src="assets/images/about/image-3.jpg"
                      className="about-img-one mb-30 wow fadeInLeft"
                      alt="About Image"
                    />
                    <img
                      src="assets/images/about/image-4.jpg"
                      className="about-img-two mb-30 wow fadeInDown"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <img
                      src="assets/images/about/image-5.jpg"
                      className="about-img-three mb-30 wow fadeInRight"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-content-box content-box-gap pl-lg-40">
                <div className="section-title mb-30 wow fadeInDown">
                  <span className="sub-title">About Qichen</span>
                  <h2>We Provide Yamee Testy Seafoods Based USA</h2>
                </div>
                <p className="wow fadeInUp">
                Offering delectable seafood dishes sourced from the finest produce in the USA, we pride ourselves on delivering a delectable array of flavorsome and high-quality ocean delights
                </p>
                <div className="about-button mb-45 wow fadeInDown">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-red">
                      learn more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <a href="tel:000(123)45689" className="call-button">
                    <div className="icon">
                      <i className="fas fa-headset" />
                    </div>
                    <div className="text">
                      <span>Call For Order</span>
                      <h5>000 (123) 456 89</h5>
                    </div>
                  </a>
                </div>
                <ul className="check-style-one check-style-50 wow fadeInUp">
                  <li>Chicken Hamburger</li>
                  <li>Italian Coffee</li>
                  <li>Seafoods</li>
                  <li>Professional Chefs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End About Section ===*/}
      {/*=== Start Features Section ===*/}
      <section className="features-section pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-features-item animate-hover-icon mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-shrimp-1" />
                </div>
                <div className="text">
                  <h3 className="title">Grilled Sea Bass</h3>
                  <p>
                  Tender, expertly seasoned Grilled Sea Bass.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="btn-link">
                      Read more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-features-item animate-hover-icon mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-coffee-beans" />
                </div>
                <div className="text">
                  <h3 className="title">Italian Coffee</h3>
                  <p>
                  Rich, authentic Italian Coffee
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="btn-link">
                      Read more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-features-item mb-40 animate-hover-icon wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-crab-1" />
                </div>
                <div className="text">
                  <h3 className="title">Crab Oyster Sauce</h3>
                  <p>
                  
                  Exquisite Crab Oyster Sauce
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="btn-link">
                      Read more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Features Section ===*/}
      {/*=== Start Fact Section ===*/}
      <section
        className="fact-section fact-bg-image dark-red-bg bg_cover pt-75 pb-35"
        style={{ backgroundImage: "url(assets/images/bg/fact-bg-one.jpg)" }}
      >
        <div className="container">
          <QichenCounter />
        </div>
      </section>
      {/*=== End Fact Section ===*/}
      {/*=== Start Menu Section ===*/}
      <section className="menu-section pt-130 pb-130">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Best food menu</span>
                <h2>Choose Your Best Menus</h2>
              </div>
            </div>
          </div>
          <MenuSliderOne />
        </div>
      </section>
      {/*=== End Menu Section ===*/}
      {/*=== Start Gallery Section ===*/}
      <section className="masonry-gallery-section">
        <div className="container-fluid">
          <div className="row masonry-row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <img
                    src="assets/images/gallery/masonry-1.jpg"
                    alt="Gallery Image"
                  />
                  <div className="gallery-overlay">
                    <div className="hover-content">
                      <p className="cat-btn">Seafoods</p>
                      <h3 className="title">Shrimp Food Prawns</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <img
                    src="assets/images/gallery/masonry-2.jpg"
                    alt="Gallery Image"
                  />
                  <div className="gallery-overlay">
                    <div className="hover-content">
                      <p className="cat-btn">Seafoods</p>
                      <h3 className="title">Shrimp Food Prawns</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <img
                    src="assets/images/gallery/masonry-3.jpg"
                    alt="Gallery Image"
                  />
                  <div className="gallery-overlay">
                    <div className="hover-content">
                      <p className="cat-btn">Seafoods</p>
                      <h3 className="title">Shrimp Food Prawns</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <img
                    src="assets/images/gallery/masonry-4.jpg"
                    alt="Gallery Image"
                  />
                  <div className="gallery-overlay">
                    <div className="hover-content">
                      <p className="cat-btn">Seafoods</p>
                      <h3 className="title">Shrimp Food Prawns</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <img
                    src="assets/images/gallery/masonry-5.jpg"
                    alt="Gallery Image"
                  />
                  <div className="gallery-overlay">
                    <div className="hover-content">
                      <p className="cat-btn">Seafoods</p>
                      <h3 className="title">Shrimp Food Prawns</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <img
                    src="assets/images/gallery/masonry-6.jpg"
                    alt="Gallery Image"
                  />
                  <div className="gallery-overlay">
                    <div className="hover-content">
                      <p className="cat-btn">Seafoods</p>
                      <h3 className="title">Shrimp Food Prawns</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Gallery Section ===*/}
      {/*=== Start Menu Section ===*/}
      <section className="menu-section pt-130 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Best food menu</span>
                <h2>Our Popular Food Menus</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="single-menu-item-two mb-40 wow fadeInUp">
                <div className="thumb">
                  <img src="assets/images/menu/thumb-9.png" alt="Menu Image" />
                </div>
                <div className="text">
                  <h3 className="item-title-price">
                    <Link legacyBehavior href="/menu-fastfood">
                      <a className="item-title">Red king Crab</a>
                    </Link>
                    <span className="dot-border" />
                    <span className="price">$25</span>
                  </h3>
                  <p>Roasted langoustine, consommé</p>
                  <ul className="ratings">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(5k Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-menu-item-two mb-40 wow fadeInUp">
                <div className="thumb">
                  <img src="assets/images/menu/thumb-13.png" alt="Menu Image" />
                </div>
                <div className="text">
                  <h3 className="item-title-price">
                    <Link legacyBehavior href="/menu-fastfood">
                      <a className="item-title">Flat-lay Delicious</a>
                    </Link>
                    <span className="dot-border" />
                    <span className="price">$25</span>
                  </h3>
                  <p>Roasted langoustine, consommé</p>
                  <ul className="ratings">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(5k Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-menu-item-two mb-40 wow fadeInUp">
                <div className="thumb">
                  <img src="assets/images/menu/thumb-10.png" alt="Menu Image" />
                </div>
                <div className="text">
                  <h3 className="item-title-price">
                    <Link legacyBehavior href="/menu-fastfood">
                      <a className="item-title">Alaskan king Crab</a>
                    </Link>
                    <span className="dot-border" />
                    <span className="price">$25</span>
                  </h3>
                  <p>Roasted langoustine, consommé</p>
                  <ul className="ratings">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(5k Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-menu-item-two mb-40 wow fadeInUp">
                <div className="thumb">
                  <img src="assets/images/menu/thumb-14.png" alt="Menu Image" />
                </div>
                <div className="text">
                  <h3 className="item-title-price">
                    <Link legacyBehavior href="/menu-fastfood">
                      <a className="item-title">Shrimp Food Prawns</a>
                    </Link>
                    <span className="dot-border" />
                    <span className="price">$25</span>
                  </h3>
                  <p>Roasted langoustine, consommé</p>
                  <ul className="ratings">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(5k Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-menu-item-two mb-40 wow fadeInUp">
                <div className="thumb">
                  <img src="assets/images/menu/thumb-11.png" alt="Menu Image" />
                </div>
                <div className="text">
                  <h3 className="item-title-price">
                    <Link legacyBehavior href="/menu-fastfood">
                      <a className="item-title">Boston Lobster</a>
                    </Link>
                    <span className="dot-border" />
                    <span className="price">$25</span>
                  </h3>
                  <p>Roasted langoustine, consommé</p>
                  <ul className="ratings">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(5k Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-menu-item-two mb-40 wow fadeInUp">
                <div className="thumb">
                  <img src="assets/images/menu/thumb-15.png" alt="Menu Image" />
                </div>
                <div className="text">
                  <h3 className="item-title-price">
                    <Link legacyBehavior href="/menu-fastfood">
                      <a className="item-title">Steamed Crabs Dish</a>
                    </Link>
                    <span className="dot-border" />
                    <span className="price">$25</span>
                  </h3>
                  <p>Roasted langoustine, consommé</p>
                  <ul className="ratings">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(5k Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-menu-item-two mb-40 wow fadeInUp">
                <div className="thumb">
                  <img src="assets/images/menu/thumb-12.png" alt="Menu Image" />
                </div>
                <div className="text">
                  <h3 className="item-title-price">
                    <Link legacyBehavior href="/menu-fastfood">
                      <a className="item-title">Boston Lobster</a>
                    </Link>
                    <span className="dot-border" />
                    <span className="price">$25</span>
                  </h3>
                  <p>Roasted langoustine, consommé</p>
                  <ul className="ratings">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(5k Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-menu-item-two mb-40 wow fadeInUp">
                <div className="thumb">
                  <img src="assets/images/menu/thumb-16.png" alt="Menu Image" />
                </div>
                <div className="text">
                  <h3 className="item-title-price">
                    <Link legacyBehavior href="/menu-fastfood">
                      <a className="item-title">Steamed Crabs</a>
                    </Link>
                    <span className="dot-border" />
                    <span className="price">$25</span>
                  </h3>
                  <p>Roasted langoustine, consommé</p>
                  <ul className="ratings">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(5k Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Menu Section ===*/}
      {/*=== Start Reservation Section ===*/}
      <section className="reservation-section light-red-bg pt-100 pb-50">
        <div className="container">
          <div className="reservation-wrapper-one p-r z-1">
            <div className="reservation-after-img wow fadeInRight">
              <img
                src="assets/images/contact/contact-3.jpg"
                alt="contact image"
              />
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="reservation-two_image-box wow fadeInLeft mb-50">
                  <img
                    src="assets/images/contact/contact-2.jpg"
                    alt="Contact Image"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="reservation-content-box mb-50 wow fadeInUp">
                  <div className="section-title section-title-left mb-35">
                    <span className="sub-title">Booking table</span>
                    <h2>Make A Reservations</h2>
                  </div>
                  <div className="reservation-style-three">
                    <ReservationsFrom btnLeft />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Reservation Section ===*/}
      {/*=== Start Testimonial Section ===*/}
      <section className="testimonial-section pt-130 dark-red-bg pb-80">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-4">
              <div className="testimonial-img text-lg-center mb-50 wow fadeInLeft">
                <img
                  src="assets/images/testimonial/single-img-1.jpg"
                  alt="testimonial image"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="testimonial-content-box mb-50 wow fadeInRight">
                <Slider
                  {...testimonialSliderOne}
                  className="testimonial-slider-one"
                >
                  <div className="single-testimonial-two">
                    <div className="testimonial-inner-content">
                      <p>
                      Welcome to our world of delectable experiences. At our core, we're dedicated to crafting culinary delights that speak volumes in taste and quality. With an unwavering commitment to excellence, we strive to redefine the dining experience
                      </p>
                      <div className="author-ratings-box d-flex justify-content-between">
                        <div className="author-title-thumb d-flex">
                          <div className="author-thumb">
                            <img
                              src="assets/images/testimonial/author-thumb-1.jpg"
                              alt="Author Thumb"
                            />
                          </div>
                          <div className="author-title">
                            <h3 className="title">Brian A. Barnes</h3>
                            <p className="position">CEO &amp; Founder</p>
                          </div>
                        </div>
                        <div className="ratings-box">
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-two">
                    <div className="testimonial-inner-content">
                      <p>
                      Exquisite flavors and impeccable service! I've been a regular at this establishment for years, and each visit feels like a culinary journey. From the ambience to the delightful dishes, every detail is well-crafted and inviting
                      </p>
                      <div className="author-ratings-box d-flex justify-content-between">
                        <div className="author-title-thumb d-flex">
                          <div className="author-thumb">
                            <img
                              src="assets/images/testimonial/author-thumb-1.jpg"
                              alt="Author Thumb"
                            />
                          </div>
                          <div className="author-title">
                            <h3 className="title">Brian A. Barnes</h3>
                            <p className="position">CEO &amp; Founder</p>
                          </div>
                        </div>
                        <div className="ratings-box">
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-two">
                    <div className="testimonial-inner-content">
                      <p>
                      Absolutely love the attention to detail and freshness in every dish! The seafood here is unparalleled, and the flavors are truly authentic. It's my go-to place for indulging in the finest seafood delicacies.
                      </p>
                      <div className="author-ratings-box d-flex justify-content-between">
                        <div className="author-title-thumb d-flex">
                          <div className="author-thumb">
                            <img
                              src="assets/images/testimonial/author-thumb-1.jpg"
                              alt="Author Thumb"
                            />
                          </div>
                          <div className="author-title">
                            <h3 className="title">Brian A. Barnes</h3>
                            <p className="position">CEO &amp; Founder</p>
                          </div>
                        </div>
                        <div className="ratings-box">
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-two">
                    <div className="testimonial-inner-content">
                      <p>
                      A delightful dining experience! The variety in their menu and the way they fuse different flavors never fails to amaze me. The seafood selection is exceptional, and their commitment to quality shines through every bite
                      </p>
                      <div className="author-ratings-box d-flex justify-content-between">
                        <div className="author-title-thumb d-flex">
                          <div className="author-thumb">
                            <img
                              src="assets/images/testimonial/author-thumb-1.jpg"
                              alt="Author Thumb"
                            />
                          </div>
                          <div className="author-title">
                            <h3 className="title">Brian A. Barnes</h3>
                            <p className="position">CEO &amp; Founder</p>
                          </div>
                        </div>
                        <div className="ratings-box">
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                <div className="testimonial-dots mt-60" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Testimonial Section ===*/}
      {/*=== Start Blog Section ===*/}
      <section className="blog-section pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">News &amp; Blog</span>
                <h2>Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-item-one mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-1.jpg" alt="Post Image" />
                  <span className="post-date">
                    <a href="#">
                      25<span>Sep</span>
                    </a>
                  </span>
                </div>
                <div className="entry-content">
                  <span className="tag-btn">Fastfood</span>
                  <h3 className="title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Fast Food Uncovered: The Need for Speed in Today's Culinary Scene</a>
                    </Link>
                  </h3>
                  <p>
                  Dive into the world of fast food, exploring its evolution, impact on modern lifestyles, and how it continues to shape the way we consume meals on the go.
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">
                      Read more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-item-one mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-2.jpg" alt="Post Image" />
                  <span className="post-date">
                    <a href="#">
                      25<span>Sep</span>
                    </a>
                  </span>
                </div>
                <div className="entry-content">
                  <span className="tag-btn">Restaurant</span>
                  <h3 className="title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Beyond the Plate: The Art of Restaurant Storytelling</a>
                    </Link>
                  </h3>
                  <p>
                  Discover the hidden narratives behind your favorite eateries. This blog delves into the stories, inspirations, and unique elements that define the ambiance and character of renowned restaurants.
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">
                      Read more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-item-one mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-3.jpg" alt="Post Image" />
                  <span className="post-date">
                    <a href="#">
                      25<span>Sep</span>
                    </a>
                  </span>
                </div>
                <div className="entry-content">
                  <span className="tag-btn">Cooking</span>
                  <h3 className="title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Crafting Culinary Magic: The Journey of Cooking from Kitchen to Table</a>
                    </Link>
                  </h3>
                  <p>
                  Explore the soul-soothing journey of cooking. Uncover the secrets, tips, and tricks that turn ingredients into delectable dishes, making cooking a delightful and rewarding experience.
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">
                      Read more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Blog Section ===*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default Index3;
