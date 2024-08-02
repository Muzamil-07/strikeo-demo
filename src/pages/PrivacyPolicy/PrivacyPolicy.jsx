import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import English from "./English";
import Bangali from "./Bangali";
import { StyledInput } from "../../themes/themes";

const PrivacyPolicy = () => {
  const [lang, setLang] = useState("english");
  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    // <div className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
    //   <div className='fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none'></div>
    //   <div className='fixed inset-0 z-[1065] h-full py-10'>
    //     <div className='h-full w-3/5 mx-auto rounded-2xl bg-primary bg-opacity-70 pl-8 pr-6 py-8'>
    //       <div className='text-2xl font-semibold flex justify-center items-start relative'>
    //         <NavLink to='/'>
    //           <svg
    //             className='w-6 h-6 text-white absolute left-0'
    //             aria-hidden='true'
    //             xmlns='http://www.w3.org/2000/svg'
    //             fill='white'
    //             viewBox='0 0 14 10'
    //           >
    //             <path
    //               stroke='currentColor'
    //               strokeLinecap='round'
    //               strokeLinejoin='round'
    //               strokeWidth='2'
    //               d='M13 5H1m0 0 4 4M1 5l4-4'
    //             />
    //           </svg>
    //         </NavLink>
    //         <h3 className='text-4xl'>Privacy Policy</h3>
    //       </div>
    //       <div className='mt-8 pb-12 flex flex-col gap-4 text-justify overflow-y-auto max-h-[90%] pr-6 info-scroll text-secondary'>
    //         <p>
    //           At StrikeO, we understand the importance of safeguarding your
    //           personal information, and we value the trust you place in us. This
    //           Privacy Notice outlines how StrikeO, its subsidiaries, and
    //           affiliates (collectively "StrikeO") collect and process your
    //           personal information through our websites, devices, products,
    //           services, online and physical stores, and applications referencing
    //           this Privacy Notice (referred to as "StrikeO Services").
    //         </p>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80 mb-2'>
    //             What Personal Information About Customers Does StrikeO Collect?
    //           </h3>
    //           <ul className='info-page-list'>
    //             <li>
    //               <span className='text-white opacity-80'>
    //                 Information You Provide:
    //               </span>{' '}
    //               <p>
    //                 We collect information you willingly provide to enhance our
    //                 products and services. You can choose not to provide certain
    //                 details, but this might limit your access to some features.
    //                 Examples include your name, address, and payment
    //                 information.
    //               </p>
    //             </li>
    //             <li>
    //               <span className='text-white opacity-80'>
    //                 Automatic Information:
    //               </span>{' '}
    //               <p>
    //                 StrikeO automatically collects and stores information about
    //                 your use of our services. This includes interactions with
    //                 content and services available through StrikeO Services. We
    //                 utilize technologies like cookies to enhance your
    //                 experience. Visit here to view specific examples of
    //                 collected data.
    //               </p>
    //             </li>
    //             <li>
    //               <span className='text-white opacity-80'>
    //                 Information from Other Sources:
    //               </span>{' '}
    //               <p>
    //                 We may receive additional information about you from
    //                 third-party sources, such as updated delivery details from
    //                 carriers. This information helps us maintain accurate
    //                 records and improve your shopping experience. Examples of
    //                 such information can be found here.
    //               </p>
    //             </li>
    //           </ul>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80 mb-2'>
    //             For What Purposes Does StrikeO Use Your Personal Information?
    //           </h3>
    //           <p>We use your personal information to:</p>
    //           <ul className='info-page-list my-2'>
    //             <li>
    //               <span className='text-white opacity-80'>
    //                 Purchase and Delivery:
    //               </span>{' '}
    //               Facilitate orders, handle payments, and communicate about
    //               products and services.
    //             </li>
    //             <li>
    //               <span className='text-white opacity-80'>
    //                 Service Improvement:
    //               </span>{' '}
    //               Analyze performance, troubleshoot, and enhance the usability
    //               of StrikeO Services.
    //             </li>
    //             <li>
    //               <span className='text-white opacity-80'>
    //                 Recommendations and Personalization:
    //               </span>{' '}
    //               Tailor recommendations and personalize your experience based
    //               on your preferences.
    //             </li>
    //             <li>
    //               <span className='text-white opacity-80'>
    //                 Voice, Image, and Camera Services:
    //               </span>{' '}
    //               Utilize voice input, images, and videos to respond to requests
    //               and improve our services.
    //             </li>
    //             <li>
    //               <span className='text-white opacity-80'>
    //                 Legal Compliance:
    //               </span>{' '}
    //               Collect and use information to comply with legal obligations.
    //             </li>
    //             <li>
    //               <span className='text-white opacity-80'>Advertising:</span>{' '}
    //               Display interest-based ads for features, products, and
    //               services. Your identity is not revealed in interest-based ads.
    //             </li>
    //           </ul>
    //           <p>
    //             Visit here to see more details about how your information is
    //             used.
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80'>
    //             What About Cookies and Other Identifiers?
    //           </h3>
    //           <p>
    //             StrikeO employs cookies and identifiers to recognize your
    //             browser or device, providing and improving our services. For
    //             more details, refer to our{' '}
    //             <NavLink
    //               to='/cookies'
    //               className='text-white opacity-80 underline'
    //             >
    //               Cookies Notice
    //             </NavLink>
    //             .
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80'>
    //             Does StrikeO Share Your Personal Information?
    //           </h3>
    //           <p>
    //             We prioritize the security of customer information and do not
    //             sell it to others. However, we may share information under
    //             certain circumstances, such as transactions involving third
    //             parties or using third-party service providers. Learn more here.
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80'>
    //             How Secure Is Information About Me?
    //           </h3>
    //           <p>
    //             StrikeO designs systems with your security and privacy in mind.
    //             We utilize encryption protocols, follow industry standards like
    //             PCI DSS for credit card data, and maintain safeguards for the
    //             collection, storage, and disclosure of personal information.
    //             Your devices also offer security features. Further details can
    //             be found here.
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80'>
    //             What About Advertising?
    //           </h3>
    //           <p>
    //             Third-party advertisers and links to other websites may be
    //             present on StrikeO Services. We use advertising identifiers for
    //             relevant ads, ensuring your personal information is not directly
    //             shared. Adjust your preferences here.
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80'>
    //             What Information Can I Access?
    //           </h3>
    //           <p>
    //             You can access various information, including your name,
    //             address, payment options, profile details, StrikeO membership,
    //             and purchase history in the "Your Account" section. Further
    //             details can be found here.
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80'>
    //             What Choices Do I Have?
    //           </h3>
    //           <p>
    //             StrikeO provides options for managing your information and
    //             preferences. This includes updating information, controlling
    //             communications, and adjusting advertising preferences. Explore
    //             your choices here.
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80'>
    //             Are Children Allowed to Use StrikeO Services?
    //           </h3>
    //           <p>
    //             StrikeO does not sell products for purchase by children. If
    //             under 18, use our services with parental involvement. For more
    //             details on children's privacy, refer to our Children’s Privacy
    //             Notice.
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80'>
    //             Contacts, Notices, and Revisions
    //           </h3>
    //           <p>
    //             If you have privacy concerns, contact us for resolution. Our
    //             Privacy Notice evolves with our business. Regularly check for
    //             updates. We stand by our commitments to protect customer
    //             information.
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80'>
    //             Related Practices and Information
    //           </h3>
    //           <p>
    //             Explore additional information, including Conditions of Use,
    //             Seller Program Policies, and support details, to enhance your
    //             understanding of StrikeO Services.
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className='text-lg font-semibold text-white opacity-80'>
    //             Examples of Information Collected
    //           </h3>
    //           <p>
    //             Find detailed examples of information collected in various
    //             scenarios here.
    //           </p>
    //         </section>
    //         <p className='text-secondary'>
    //           At StrikeO, your privacy is our priority. We appreciate your trust
    //           and are committed to providing a secure and enjoyable shopping
    //           experience.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
      <div className="fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"></div>
      <div className="fixed inset-0 z-[1065] h-full py-10">
        <div className="h-full w-3/5 mx-auto rounded-2xl bg-primary bg-opacity-70 pl-8 pr-6 py-8">
          <div className="text-2xl font-semibold flex justify-between items-center relative">
            <NavLink to="/">
              <svg
                className="w-6 h-6 text-white"
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
            <h3 className="text-2xl">Privacy Policy</h3>
            <FormControl variant="standard" sx={{ minWidth: 100 }} size="small">
              <StyledInput
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                value={lang}
                onChange={handleChange}
              >
                <MenuItem value={"english"}>English</MenuItem>
                <MenuItem value={"bangali"}>Bangali</MenuItem>
              </StyledInput>
            </FormControl>
          </div>
          {lang === "english" ? <English /> : <Bangali />}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
