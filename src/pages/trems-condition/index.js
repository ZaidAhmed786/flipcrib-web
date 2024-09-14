import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import featureData from "@/data/service"

function Trems() {
  const services = getProducts(featureData, "buying", "featured", 6);
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="Trems & Condition"
          sectionPace=""
          currentSlug="Trems & Condition"
        />


<div className="container mb-5 pb-5">
  <div>
    <h2>Terms & Conditions:</h2>
    <p>By accessing and using our real estate website, you agree to adhere to our Terms & Conditions. These terms outline the rules and guidelines for using our site and services, and any violation may result in suspension or termination of access.</p>
    <p>You are required to provide accurate, up-to-date information when registering or using our services. It is your responsibility to maintain the confidentiality of your account details, and you will be held accountable for any activity under your account.</p>
  </div>
  
  <div>
    <h2>Service Eligibility:</h2>
    <p>Our real estate services are intended for individuals and entities who are legally permitted to engage in property transactions. To use our platform, you must:</p>
    <p>- Be 18 years of age or older.</p>
    <p>- Provide truthful and accurate information about yourself. Any false information may lead to the suspension of your access to our services.</p>
    <p>We reserve the right to refuse service to anyone who does not meet these requirements or violates our terms.</p>
  </div>

  <div>
    <h2>Property Listings:</h2>
    <p>We strive to provide accurate and current property listings, but cannot guarantee the completeness or accuracy of all details due to reliance on third-party data sources. Property information such as availability, pricing, and features may change without notice.</p>
    <p>It is essential for you to verify all details and conduct your own research before making any decisions or commitments regarding properties listed on our site.</p>
  </div>

  <div>
    <h2>Payment Terms:</h2>
    <p>Payments for services or property transactions must be completed through our designated payment methods. All transactions are conducted in the accepted currency and must adhere to our payment policies.</p>
    <p>Refunds and cancellations are subject to our specific policies, which will be communicated at the time of the transaction. We reserve the right to modify payment terms as needed.</p>
  </div>

  <div>
    <h2>Communication:</h2>
    <p>For any questions or concerns regarding our Terms & Conditions or services, you can contact us during business hours. We are available to provide timely responses to your inquiries.</p>
    <p>By submitting your information on our site, you consent to receive communication related to our services and offers. You can opt-out of marketing communications at any time.</p>
  </div>

  <div>
    <h2>Security:</h2>
    <p>We implement robust security measures to safeguard your personal information, including encryption, firewalls, and secure access controls. Despite our efforts, no method of data transmission over the Internet can be guaranteed to be completely secure.</p>
    <p>We continuously review and improve our security practices to protect your data, but any transmission of information is at your own risk. Our policies do not cover issues inherent to Internet operations and beyond our control.</p>
  </div>

  <div className="pt-5">
    <p>Write Us: <a href="mailto:Jt@flip-crib.com">Jt@flip-crib.com</a></p>
  </div>
</div>

   


       
        {/* <!-- BLOG AREA END --> */}

        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default Trems;
