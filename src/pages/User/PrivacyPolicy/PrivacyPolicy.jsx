import React from "react";
import { Modal } from "flowbite-react";
import Navbar from "../mobile/components/Navbar";

const PrivacyPolicy = () => {
  const themeOptions = {
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner:
        "relative rounded-2xl bg-black shadow dark:bg-gray-700 flex flex-col max-h-[90vh]",
    },
  };
  return (
    <div>
      <Navbar bgLight />
      <Modal
        theme={themeOptions}
        show={true}
        size={"5xl"}
        className="bg-black bg-opacity-80"
      >
        <Modal.Body className="bg-black text-white rounded-2xl px-12">
          <h3 className="font-bold text-3xl text-center">Privacy Policy</h3>
          <div className="overflow-y-auto max-h-[520px] pr-6 info-scroll">
            <p className="my-8 opacity-80">
              Welcome to STRIKE O. We are committed to protecting your personal
              information and your right to privacy. If you have any questions
              or concerns about this privacy policy, or our practices with
              regards to your personal information, please contact us at
              info@strikeo.com
            </p>
            <div>
              <ol className="flex flex-col gap-2">
                <li>
                  <span className="opacity-100 font-semibold">
                    1. Information We Collect
                  </span>
                  <div className="opacity-80">
                    <div>
                      We collect information that you provide directly to us.
                      This may include:
                    </div>
                    <ul className="info-page-list">
                      <li>
                        <span className="text-white">
                          Personal Information:
                        </span>{" "}
                        Name, email address, postal address, phone number, and
                        other similar contact data.
                      </li>
                      <li>
                        <span className="text-white">Payment Information:</span>{" "}
                        Credit card details, billing information, and other
                        payment-related information.
                      </li>
                      <li>
                        <span className="text-white">Order Information:</span>{" "}
                        Information about the products you purchase, including
                        transaction details.
                      </li>
                      <li>
                        <span className="text-white">
                          Communication Information:
                        </span>{" "}
                        When you contact us directly, we may collect information
                        such as your name, email address, phone number, and the
                        contents of your message.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="opacity-100 font-semibold">
                    2. How We Use Your Information
                  </span>
                  <div className="opacity-80">
                    <div>
                      We use the information we collect for various purposes,
                      including to:
                    </div>
                    <ul className="info-page-list">
                      <li>Process and fulfill your orders.</li>
                      <li>Provide, maintain, and improve our services.</li>
                      <li>
                        Respond to your comments, questions, and requests.
                      </li>
                      <li>
                        Send you related information, including confirmations,
                        invoices, technical notices, updates, security alerts,
                        and support and administrative messages.
                      </li>
                      <li>
                        Communicate with you about products, services, offers,
                        promotions, and events offered by us.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="opacity-100 font-semibold">
                    3. Who We Share Your Information With
                  </span>
                  <div className="opacity-80">
                    <div>We may share your information with:</div>
                    <ul className="info-page-list">
                      <li>
                        <span className="text-white">Service Providers:</span>{" "}
                        We may share your information with third-party companies
                        and individuals to facilitate our services, perform
                        services related to the operation of our business, or
                        assist us in analyzing how our services are used.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="opacity-100 font-semibold">
                    4. Cookies and Tracking Technologies
                  </span>
                  <div className="opacity-80">
                    <p>
                      We use cookies and similar tracking technologies to access
                      or store information. You can instruct your browser to
                      refuse all cookies or to indicate when a cookie is being
                      sent.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="opacity-100 font-semibold">
                    5. Your Rights and Choices
                  </span>
                  <div className="opacity-80">
                    <div>You have the right to:</div>
                    <ul className="info-page-list">
                      <li>
                        Access, update, or delete your personal information.
                      </li>
                      <li>
                        Object to processing of your personal information.
                      </li>
                      <li>Opt-out of receiving marketing communications.</li>
                      <li>Lodge a complaint with a supervisory authority.</li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PrivacyPolicy;
