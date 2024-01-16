import React from 'react'
import { NavLink } from "react-router-dom";

const About = () => {
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
                        <h3 className="text-4xl">About Us</h3>
                    </div>
                    <div className="mt-8 pb-12 flex flex-col gap-4 text-justify overflow-y-auto max-h-[90%] pr-6 info-scroll">
                        <section>
                            <h3 className="text-lg font-semibold opacity-80">Who We Are</h3>
                            <p className="text-secondary">At our core, StrikeO is a community of sports enthusiast, passionate riders and mavericks who live for adventures. We are riders of all backgrounds who share a lust for the freedom of the open road. We are designers, craftsmen and engineers driven to reinvent sports, leisure and riding gears that fuses safety with self-expression. We are advocates calling for responsibility and mindfulness across the global sports and automotive community.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-semibold  opacity-80">We Are Riders</h3>
                            <p className="text-secondary">United by our riding spirit rather than stereotypes, we ride many types of bikes, tackle diverse terrains and pursue personal journeys. We dream big, take risks, sometimes even push limits. What anchors our daring attitudes is a collective commitment to safety and supporting fellow riders. When we ride, we feel most alive. When we ride with StrikeO, we ride protected.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-semibold opacity-80">We Are Innovators</h3>
                            <p className="text-secondary">Inside our sleek apparel lines lies a dedication to constant innovation. We are committed to integrating safety technology into gear you’re proud to wear. Our team of designers and engineers use state-of-the-art yet sustainable materials to create protection that moves with you and enhances your natural confidence on a bike or the kind of sports you’re playing. Safety informs our every innovation so that you can progress as a sportsman without compromise.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-semibold  opacity-80">We Are Community</h3>
                            <p className="text-secondary">Our origins trace back to friendships forged on the open roads across countries. Enthusiastic riders coming together with a vision to build the safest and best riding gear. Since then, we’ve grown into a tribe that shares this passion for the ride, respects the risk and invests in each other's journeys. We support new riders, sportsmen and passionate thrill-seekers. We coach safe habits and we champion inclusion. Our community is strengthened when we embrace diverse voices. After all, freedom on the road means freedom for all.</p>
                        </section>
                        <p className="text-secondary">At StrikeO, we are more than a brand offering products. We fuel the endless pursuit of what’s possible not only on two wheels but also in all sports and adventure. We build confidence and resilience as riders challenge their own boundaries. We nurture obsession with progression, where fresh personal bests are unlocked through commitment to safety. Join our pack of free spirits, and let’s revolutionize the ride - together.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About