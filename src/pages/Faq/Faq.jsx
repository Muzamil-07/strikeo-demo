import React from 'react'
import { NavLink } from "react-router-dom"

const Faq = () => {
  return (
    <div className="bg-[url('/strikeo.png')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
        <div
            className="fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          ></div>
            <div className="fixed inset-0 z-[1065] h-full py-10">
                <div className="h-full w-3/5 mx-auto rounded-2xl bg-primary bg-opacity-70 pl-8 pr-6 py-8">
                    <div className="text-2xl font-semibold flex justify-center items-start relative">
                        <NavLink to="/">
                            <svg className="w-6 h-6 text-white absolute left-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                            </svg>
                        </NavLink>
                        <h3 className="text-3xl">Frequently Asked Questions</h3>
                    </div>
                    <div className="mt-8 pb-12 flex flex-col gap-4 text-justify overflow-y-auto max-h-[90%] pr-6 info-scroll text-secondary">
                        <section>
                            <h3 className="text-lg font-semibold text-white opacity-80">How does StrikeO ensure the timely tracking of deliveries?</h3>
                            <p>StrikeO employs a sophisticated tracking system that allows customers to monitor their orders in real-time. Upon dispatch, customers receive a tracking number via email, which can be used on our website to check the current status of their delivery. This system ensures transparency and provides customers with up-to-date information on their orders, from dispatch to delivery.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-semibold text-white opacity-80">What is StrikeO's policy on internet-based advertising and user privacy?</h3>
                            <p>At StrikeO, we are committed to respecting user privacy while providing personalized internet-based advertisements. Our ads are designed to enhance the user experience by being relevant to their interests. We strictly adhere to privacy laws and ensure that user data is handled securely and responsibly. Users have the option to opt-out of personalized advertising if they choose.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-semibold text-white opacity-80">How does StrikeO use cookies on its website?</h3>
                            <p>Cookies on the StrikeO website are used to improve user experience by remembering user preferences, facilitating smoother transactions, and providing customized content. Our cookie policy complies with legal standards, and users are notified about cookie usage upon their first visit. Users can choose to accept or decline cookies, though declining may affect the functionality of our website.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-semibold text-white opacity-80">What is StrikeO's returns policy for online purchases?</h3>
                            <p>StrikeO offers a customer-friendly returns policy. If you are not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange. The items must be in their original condition and packaging. Return shipping costs are the responsibility of the customer, unless the return is due to a fault on our part.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-semibold text-white opacity-80">How does joining the StrikeO marketplace benefit sellers?</h3>
                            <p>Joining the StrikeO marketplace offers sellers a platform to reach a wide audience of sports enthusiasts. Our marketplace is known for high-quality sports gear, providing an excellent opportunity for sellers to showcase their products. We offer competitive commission rates, marketing support, and a community of like-minded sellers and customers.</p>
                        </section>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Faq