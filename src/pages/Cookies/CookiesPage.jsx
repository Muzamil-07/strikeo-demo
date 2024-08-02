import React from "react";
import { NavLink } from "react-router-dom";

const CookiesPage = () => {
  return (
    <div className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
      <div className="fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"></div>
      <div className="fixed inset-0 z-[1065] h-full py-10">
        <div className="h-full w-3/5 mx-auto rounded-2xl bg-primary bg-opacity-70 pl-8 pr-6 py-8">
          <div className="text-2xl font-semibold flex justify-center items-start relative">
            <NavLink to="/">
              <svg
                className="w-6 h-6 text-white absolute left-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
            </NavLink>
            <h3 className="text-3xl">
              StrikeO's Use of Cookies and Technologies
            </h3>
          </div>
          <div className="mt-8 pb-12 flex flex-col gap-4 text-justify overflow-y-auto max-h-[90%] pr-6 info-scroll">
            <p className="text-secondary">
              At StrikeO, we employ an array of technologies, including cookies,
              pixels, and others collectively referred to as "cookies," to
              enhance your browsing experience, understand your interests, and
              provide essential features and services. Here's how these
              technologies contribute to your interaction with our platform:
            </p>
            <section className="text-secondary">
              <h3 className="text-lg font-semibold text-white opacity-80 mb-2">
                Key Functions of Cookies:
              </h3>
              <ol className="cookies-list">
                <li>
                  <span className="text-white opacity-80">
                    User Recognition:
                  </span>{" "}
                  <p>
                    Cookies recognize your browser or device when you sign in,
                    enabling us to offer personalized features such as product
                    recommendations, customized content, and acknowledgment of
                    your membership status. Features like 1-Click purchasing are
                    made possible through this recognition.
                  </p>
                </li>
                <li>
                  <span className="text-white opacity-80">
                    Preferences Tracking:
                  </span>{" "}
                  <p>
                    Your specified preferences, like the choice to view
                    interest-based ads, are tracked through cookies. Manage your
                    preferences conveniently through Your Account.
                  </p>
                </li>
                <li>
                  <span className="text-white opacity-80">
                    Shopping Basket Management:
                  </span>{" "}
                  <p>
                    Cookies keep track of items stored in your shopping basket,
                    streamlining your shopping experience.
                  </p>
                </li>
                <li>
                  <span className="text-white opacity-80">
                    Research and Diagnostics:
                  </span>{" "}
                  <p>
                    We utilize cookies for research and diagnostics, constantly
                    striving to enhance the content, products, and services
                    offered on StrikeO.
                  </p>
                </li>
                <li>
                  <span className="text-white opacity-80">
                    Fraud Prevention and Security:
                  </span>{" "}
                  <p>
                    Cookies play a crucial role in preventing fraudulent
                    activity and improving the overall security of our platform.
                  </p>
                </li>
                <li>
                  <span className="text-white opacity-80">
                    Content Delivery and Reporting:
                  </span>{" "}
                  <p>
                    Cookies enable the delivery of content, including ads
                    tailored to your interests, both on StrikeO and third-party
                    sites. Detailed performance measurement and analysis are
                    conducted through reporting mechanisms.
                  </p>
                </li>
              </ol>
            </section>
            <section className="text-secondary">
              <h3 className="text-lg font-semibold text-white opacity-80">
                The Importance of StrikeO’s Cookies
              </h3>
              <p className="my-2">
                StrikeO’s cookies are integral to unlocking essential features.
                Blocking or rejecting these cookies may impact your ability to
                add items to your Shopping Cart, proceed to Checkout, or use
                other services requiring sign-in.
              </p>
            </section>
            <section className="text-secondary">
              <h3 className="text-lg font-semibold text-white opacity-80">
                Third-Party Involvement
              </h3>
              <p className="my-2">
                Approved third parties may also utilize cookies when you engage
                with StrikeO services. These parties, including search engines,
                analytics providers, social media networks, and advertising
                companies, leverage cookies to deliver content and ads aligned
                with your interests. The effectiveness of their ads is measured
                through these cookies, and they may perform services on behalf
                of StrikeO.
              </p>
            </section>
            <section className="text-secondary">
              <h3 className="text-lg font-semibold text-white opacity-80">
                Managing Your Cookies
              </h3>
              <p className="my-2">
                You have control over browser cookies through your browser
                settings. Most browsers offer a 'Help' feature guiding you on
                how to prevent new cookies, receive notifications about new
                cookies, block cookies, and understand when cookies expire.
                Blocking all cookies may require manual adjustment of
                preferences during each site visit, and certain features may not
                function as intended.
              </p>
            </section>
            <p className="text-secondary">
              Refer to our Privacy Notice for a comprehensive understanding of
              the information gathered through these technologies. At StrikeO,
              we prioritize transparency and your ability to tailor your
              browsing experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
