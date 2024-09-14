import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import featureData from "@/data/service"

function Privacy() {
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
          title="Privacy & Policy"
          sectionPace=""
          currentSlug="Privacy & Policy"
        />


        <div className="container mb-5 pb-5">
          <div>
            <h2>Privacy Statement:</h2>
            <p>We have developed this Privacy Policy to inform you of the data gathering and dissemination practices applicable to our web site (Site). By visiting, registering or using services obtained through our Site, you agree to the terms of this Privacy Policy.  If you do not agree with any terms of this Policy, please do not use or submit any personal information to this Site.</p>
         
          </div>
          
          <div>
            <h2>Information We Collect:</h2>
            <p>We collect Personally Identifiable Information when you register to use this Site; when you use, participate or purchase products and services through this Site; and when you ask to be provided additional services. The type of personal information that we collect may include full name, email, telephone number, address, payment information, profession, company name, company website address, business telephone number and photo. This personal information is generally required if you wish to enroll or participate in our services. We may use, sell or distribute certain individual personal information to other companies, including related interests or vendors so as to provide you with important offers. We may keep all information collected in accordance with this Privacy Policy indefinitely.</p>
         
          </div>

          <div>
            <h2>Personally Identifiable Information:</h2>
            <p>Personally Identifiable Information refers to any information that can be used to identify you as an individual in any way. Enrollment in any Flipcrib service is contingent upon your agreeing to the Terms and Conditions of membership and providing Personally Identifiable Information as described above.</p>
         
          </div>

          <div>
            <h2>Communication:</h2>
            <p>We are available to you during normal business hours to answer any privacy-related questions or concerns you might have. Simply contact us and we will respond in a timely manner.            </p>
            <p className="p-0 m-1">You sign up for our marketing program when you submit the information on the first page of our sign-up process, and our marketing partners or we may contact you via email with offers we think you will like. We have a strict Anti-SPAM policy, and you may unsubscribe at any time while still participating in our services.</p>
            <p>We do not collect or use any information about you for marketing purposes, except for information that you have provided to us or authorize us to obtain, or is publicly available, and this information is used solely to make our programs and services more relevant to your interests.</p>
         
          </div>

          <div>
            <h2>Security:</h2>
            <p>Flipcrib has established company-wide security policies and practices designed to protect your and others information from unauthorized intrusion. These practices include, but are not limited to, firewall security, the use of appropriate encryption technology, and the use of multiple levels of password security. All Flipcrib employees are required to familiarize themselves with, and abide by, these safeguards.   However, please note that no data transmission over the Internet can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, we cannot ensure or warrant the security of any information you transmit to us or from our online products or services, and you do so at your own risk. Our policy does not extend to anything that is inherent in the operation of the Internet, and therefore beyond our control, and is not to be applied in any manner contrary to applicable law or governmental regulation.</p>
         
          </div>

          <div className="pt-5" >
           
            <p>Write Us: <a href="mailto:Jt@flip-crib.com">Jt@flip-crib.com</a> </p>
         
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

export default Privacy;
