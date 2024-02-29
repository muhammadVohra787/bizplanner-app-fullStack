import React from "react";
import FeatureCard from "../components/feature-card";
import Question1 from "../components/question1";
import "./home.css";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Empower Your Business Ideas
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>Take control of your entrepreneurial journey</span>
            </span>
            <div className="home-btn-group">
              <Link className="buttonFilled" to="/createnew">
                Get Started
              </Link>
              <a className="buttonFlat" href="#home-features">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="home-features"
        id="home-features"
        style={{
          backgroundColor: "#f1ddd9",
          maxWidth: "100% !important",
        }}
      >
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Powerful Features to Boost Your Business
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover how our platform can help you effectively manage
                      and grow your business
                    </span>
                  </span>
                </span>
              </span>
            </div>

            <div className="home-container03">
              <FeatureCard
                heading="Business Idea Management"
                subHeading="Easily organize and track all your business ideas in one place"
              ></FeatureCard>
              <FeatureCard
                heading="Expense Tracking"
                subHeading="Effortlessly monitor and manage your expenses to stay within budget"
              ></FeatureCard>
              <FeatureCard
                heading="Goal Setting"
                subHeading="Set achievable goals for your business and track your progress"
              ></FeatureCard>
              <FeatureCard
                heading="Challenges Analysis"
                subHeading="Identify and address challenges that may hinder your business growth"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>

      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">
              Choose the Right Plan for Your Business
            </h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock the power of effective business management with our
                  flexible pricing options.
                </span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container06">
                <span className="home-text36 heading3">Free</span>
                <span className="bodySmall">
                  Ideal for solopreneurs just starting out
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text40">✔</span>
                  <span className="bodySmall">Expense tracking</span>
                </div>
                <div className="home-container10">
                  <span className="home-text41">✔</span>
                  <span className="bodySmall">Goal setting</span>
                </div>
                <div className="home-container11">
                  <span className="home-text42">✔</span>
                  <span className="bodySmall">Basic budgeting tools</span>
                </div>
                <div className="home-container12">
                  <span className="home-text43">✔</span>
                  <span className="bodySmall">Limited access to resources</span>
                </div>
              </div>
              <button className="home-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container13">
                <span className="home-text44 heading3">BASIC</span>
                <span className="bodySmall">
                  Perfect for small businesses looking to grow
                </span>
              </div>
              <div className="home-container14">
                <span className="home-text45">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">9.99</span>
                <span className="home-text48">/ month</span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <span className="home-text49">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home-container17">
                  <span className="home-text51">✔</span>
                  <span className="bodySmall">Expense tracking</span>
                </div>
                <div className="home-container18">
                  <span className="home-text52">✔</span>
                  <span className="bodySmall">Goal setting</span>
                </div>
                <div className="home-container19">
                  <span className="home-text53">✔</span>
                  <span className="bodySmall">Advanced budgeting tools</span>
                </div>
                <div className="home-container20">
                  <span className="home-text54">✔</span>
                  <span className="bodySmall">
                    Access to exclusive webinars
                  </span>
                </div>
              </div>
              <button className="home-button1 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container21">
                <span className="home-text55 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Tailored for established entrepreneurs scaling their ventures
                </span>
              </div>
              <div className="home-container22">
                <span className="home-text58">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">19.99</span>
                <span className="home-text61">/ month</span>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <span className="home-text62">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home-container25">
                  <span className="home-text64">✔</span>
                  <span className="bodySmall">Expense tracking</span>
                </div>
                <div className="home-container26">
                  <span className="home-text65">✔</span>
                  <span className="bodySmall">Goal setting</span>
                </div>
                <div className="home-container27">
                  <span className="home-text66">✔</span>
                  <span className="bodySmall">Advanced budgeting tools</span>
                </div>
                <div className="home-container28">
                  <span className="home-text67">✔</span>
                  <span className="bodySmall">
                    Unlimited access to resources and support
                  </span>
                </div>
              </div>
              <button className="home-button2 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Welcome to BizPlanner
          </h1>
          
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Our platform is designed to help entrepreneurs like you manage
                  your business ideas, track expenses, overcome budget
                  challenges, and set achievable goals. With our user-friendly
                  tools, you can turn your visions into reality.
                </span>
              </span>
            </span>
          </span>
          <Link className="buttonFilled" to="/createnew">
            Get Started
          </Link>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container29">
              <span className="overline">
                <Typography variant="h1" color="secondary">
                  FAQ
                </Typography>
                <br></br>
              </span>
              <h2 className="home-text85 heading2">Common questions</h2>
              <span className="home-text86 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container30">
              <Question1
                answer="Our project provides tools and features to organize and track business ideas effectively."
                question="How can this project help entrepreneurs manage their business ideas?"
              ></Question1>
              <Question1
                answer="Entrepreneurs can track expenses, set budgets, and analyze financial data to overcome budget challenges."
                question="What budget challenges can entrepreneurs address using this project?"
              ></Question1>
              <Question1
                answer="Our project allows entrepreneurs to set specific, measurable, achievable, relevant, and time-bound goals to drive business success."
                question="How can entrepreneurs set goals using this project?"
              ></Question1>
              <Question1
                answer="Yes, our project is designed with a user-friendly interface to simplify business task management for entrepreneurs."
                question="Is it easy to use this project for managing business tasks?"
              ></Question1>
              <Question1
                answer="Entrepreneurs can access detailed insights and analytics to evaluate their business performance and make informed decisions."
                question="Can entrepreneurs get insights and analytics on their business performance?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
