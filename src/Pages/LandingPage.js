import axios from "axios";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import { useNavigate } from "react-router";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import "./LandingPage.css";

const LandingPage = () => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: null || 0,
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactUs = (e) => {
      setLoading(true);
      axios
        .post("http://zeals.id/apiv1/maildemo", {
          fullName: form.fullName,
          email: form.email,
          companyName: form.companyName,
          phoneNumber: form.phoneNumber,
          notes: form.notes,
        })
        .then((res) => {
          const result = res.data;
          console.log("ini hasilnya", result);
        })
        .catch((err) => {
          console.log(err);
        });
        setTimeout(() =>{
          setLoading(false);
        },2000)
  };

  return (
    <div className="container-fluid gx-0" id="home">
      <Navbar />
      <Carousel>
        <Carousel.Item>
          <div className="row">
            <div className="col-12 col-sm-6 text-end">
              <img
                className="mt-3 img-fluid img-slide mr-3"
                src="/img/products/banner_dmp.webp"
                alt="First slide"
              />
            </div>
            <div className="col-12 col-sm-6">
              <div className="">
                <h3 className="txt-join">Join Us Now!</h3>
                <h1 className="txt-slide">
                  #1 <br /> Digital Marketing <br /> Platform
                </h1>
                <a
                  href="https://app.zeals.asia/register"
                  className="btn-join mt-3"
                >
                  Join Our Affiliator
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="container mt-5" id="products">
        <div className="our-product py-5">
          <h2>Our Product</h2>
          <p className="mx-xl-5 px-xl-5 mx-2 px-2">
            Integrated Digital Marketing Ecosystem that helps you connect with
            your audience.
          </p>
        </div>
        <div className="features mb-5 d-lg-block d-xl-block">
          <div className="features-item px-5">
            <h5 className="mb-5 ms-5">Affiliate Marketing Platform</h5>
            <div className="row">
              <div className="col-xs-12 col-sm-5 text-center">
                <img
                  src="/img/products/affiliate_marketing.jpg"
                  alt=""
                  width={480}
                  className="img-fluid me-4 pull-right"
                />
              </div>
              <div className="col-xs-12 col-sm-7">
                <p>
                  With this program, you can use an affiliate marketer that are
                  socially active and connected to your targeted real-person to
                  promote your digital activation. They will share their ‘unique
                  link’ to enhance exposure and conversion at the same time.
                </p>
                <p>
                  You will get the provision of an affiliate marketing platform
                  along with a unique link and tracker, creative content
                  development, affiliate marketers from a various types of
                  market segmentation, and a campaign report based on data
                  analysis perspective.
                </p>
              </div>
            </div>
          </div>

          <div className="features-item px-5 my-5">
            <h5 className="mb-5 ms-3">Online to Offline</h5>
            <div className="row">
              <div className="col-xs-12 col-sm-7">
                <p>
                  Our online-to-offline system enables you to create an
                  actionable and measurable campaign at the same time, in one
                  single platform through specifically generated QR for your
                  campaign.
                </p>
                <p>
                  In O2O program, we generate strategy that will gives your
                  online audiences a trigger to take action and finally brings
                  crowd to your offline store!
                </p>
              </div>
              <div className="col-xs-12 col-sm-5 text-center">
                <img
                  src="/img/products/online_to_offline.jpg"
                  alt=""
                  width={480}
                  className="img-fluid ms-4"
                />
              </div>
            </div>
          </div>

          <div className="features-item px-5">
            <h5 className="mb-5 ms-5">Social Media Listening</h5>
            <div className="row">
              <div className="col-xs-12 col-sm-5 text-center">
                <img
                  src="/img/products/social_media_listening.jpg"
                  alt=""
                  width={480}
                  className="img-fluid me-4"
                />
              </div>
              <div className="col-xs-12 col-sm-7">
                <p>
                  With Social Media Listening you will get hearing ability and
                  strategic action by tracking online conversations related to
                  your brand and industry to help you develop an effective
                  solution that perfectly fits into your customer needs.
                </p>
                <p>
                  Our tools are capable to analyze local language even slang
                  words and processing the context correctly to make you able to
                  understand the right response to give. You’ll know what’s
                  everybody saying out there about you and keep your finger on
                  the pulse!
                </p>
              </div>
            </div>
          </div>

          <div className="features-item px-5 my-5">
            <h5 className="mb-5 ms-3">Digital Marketing Consultant</h5>
            <div className="row">
              <div className="col-xs-12 col-sm-7">
                <p>
                  Our Digital Marketing Consultant will assist designing digital
                  strategies and providing solutions to help you achieve
                  business goals through the implementation of Digital
                  Marketing.
                </p>
                <p>
                  We also can tailor your digital marketing needs such as Social
                  Media Management, Digital Advertising, measuring and reporting
                  on social media performance, and even SEO/SEM to help your
                  brand get a bigger reach and conversion as you expected!
                </p>
              </div>
              <div className="col-xs-12 col-sm-5 text-center">
                <img
                  src="/img/products/digital_marketing_consultant.jpg"
                  alt=""
                  width={480}
                  className="img-fluid ms-4"
                />
              </div>
            </div>
          </div>

          <div className="features-item px-5">
            <h5 className="mb-5 ps-5">Social Media Scoring</h5>
            <div className="row">
              <div className="col-xs-12 col-sm-5 text-center">
                <img
                  src="/img/products/social_media_scoring.jpg"
                  alt=""
                  width={480}
                  className="img-fluid me-4"
                />
              </div>
              <div className="col-xs-12 col-sm-7">
                <p>
                  Know where you stand with our Social Media Scoring! We analyze
                  your followers, posting frequency, engagement, clicks,
                  audience activity, and more, to see how well your strategy is
                  performing on social channels.
                </p>
                <p>
                  We also give you personalized recommendations to help you
                  improve and strengthen your social media presence.
                </p>
              </div>
            </div>
          </div>

          <div className="features-item px-5 my-5">
            <h5 className="mb-5 me-5">Marketplace for influencer and buzzer</h5>
            <div className="row">
              <div className="col-xs-12 col-sm-7">
                <p>
                  Did you know that 70% consumers trust a brand because of their
                  closest friend’s recommendation, and 46% of consumers trusted
                  it based on reviews from other people? So everyone is an
                  influencer!
                </p>
                <p>
                  With this services, you will get our hand-picked influencer
                  with a strong engagement rate that will take your digital
                  campaign to the next level.
                </p>
              </div>
              <div className="col-xs-12 col-sm-5 text-center">
                <img
                  src="/img/products/influencer_marketing.jpg"
                  alt=""
                  width={480}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="features-item px-5">
            <h5 className="mb-5 award">Awarding</h5>
            <div className="row">
              <div className="col-xs-12 col-sm-5 text-center">
                <img
                  src="/img/products/awarding.jpg"
                  alt=""
                  width={480}
                  className="img-fluid me-4"
                />
              </div>
              <div className="col-xs-12 col-sm-7">
                <p>
                  Awarding is given to brands that successfully carry out
                  digital marketing so that they have a positive impact on the
                  performance of a brand, both by increasing awareness, market
                  share, and increasing customer loyalty.
                </p>
                <p>
                  Brands that have won a Digital Brand Award can purchase a logo
                  license and a Digital Brand Award certificate, where this logo
                  license will be valid for 1 year from the purchase of the
                  license.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="testimony">
        <div className="testimony d-lg-block d-xl-block pt-5 mb-5">
          <h2>Testimonials</h2>
          <p>We are happy to share some of our thousands Affiliator</p>
        </div>
        <div className="ratings py-5 my-5">
          <div className="rating">
            <p className="txt-rating">
              "Good to see that our campaign strategic better than what we did
              before!"
            </p>
            <div className="profile">
              <div className="Name text-center">
                <p className="name">Pandu Wiguna</p>
                <p className="profesi">Campaign Specialist</p>
              </div>
              <img className="" src="/img/testimony/pandu.png" alt="" />
            </div>
          </div>
          <div className="rating">
            <p className="txt-rating">
              "Affilate Marketer? Why not?! They offer us a great opportunity to
              get money from our daily activities in social media."
            </p>
            <div className="profile">
              <img
                className="img-fluid"
                src="/img/testimony/syahrul.png"
                alt=""
              />
              <div className="Name text-center">
                <p className="name">Syahrul</p>
                <p className="profesi">Content Creator & Design Grapic</p>
              </div>
            </div>
          </div>
          <div className="rating">
            <p className="txt-rating">
              "We are in a good time to manage our work using Digital marketing
              platform, Zeals makes it easier to get known by the public"
            </p>
            <div className="profile">
              <img className="img-fluid" src="/img/testimony/dara.png" alt="" />
              <div className="Name text-center">
                <p className="name">Dara</p>
                <p className="profesi">Content Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clients my-5 px-xl-0 px-2">
        <h2>Our Partners & Clients</h2>
        <p>
          Several big company already integrated with our Products & Services
        </p>

        <div className="img-clients mb-5 pt-3 pb-5">
          <img
            className="img-fluid"
            src="/img/Screen Shot 2022-07-19 at 12.16 1.svg"
            alt=""
          />
          <img
            className="mx-5 mx-xl-5 img-fluid"
            src="/img/Screen Shot 2022-07-19 at 10.59 1.svg"
            alt=""
          />
          <img className="img-fluid" src="/img/unnamed 2.svg" alt="" />
          <img
            className="img-fluid"
            src="/img/yqsxkpbgszuqbjqfsryz 1.svg"
            alt=""
          />
          <img
            className="img-fluid"
            src="/img/Screen Shot 2022-07-19 at 10.54 1.svg"
            alt=""
          />
        </div>
      </div>

      <div className="contacts" id="contacts">
        <h2 className="mt-5">Contact Us</h2>
        <p>Get your free personalized demo</p>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8">
              <div className="row mt-5">
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group mt-1">
                    <label className="txt-label">Full Name</label>
                    <Input
                      className="form-control"
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group mt-1">
                    <label className="txt-label">Email </label>
                    <Input
                      className="form-control"
                      type="email"
                      onChange={handleChange}
                      name="email"
                      value={form.email}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group mt-1">
                    <label className="txt-label">Company Name</label>
                    <Input
                      className="form-control"
                      type="text"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group mt-1">
                    <label className="txt-label">Phone Number</label>
                    <Input
                      className="form-control"
                      type="number"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <label className="txt-label">Notes</label>
              <div className="d-flex flex-direction-column">
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <Button
                disabled={!form}
                onClick={handleContactUs}
                className="btn-send"
                type="submit"
              >
                {loading ? "loading..." : "Send"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="logo-WA float- d-xl-none">
        <a href="">
        <img className="img-fluid fixed-bottom logo-WA" src="/img/WhatsApp-Logo.svg" alt="" width={100} height={100}/>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
