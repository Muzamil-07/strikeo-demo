import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
            </NavLink>
            <h3 className="text-2xl">About Us</h3>
          </div>
          <div className="mt-8 pb-12 flex flex-col gap-4 text-justify overflow-y-auto max-h-[90%] pr-6 info-scroll">
            <h3 className="text-md font-semibold opacity-80 my-2">
              Welcome to StrikeO: Your Ultimate Destination for Next-Gen
              E-Commerce Experiences!
            </h3>
            <section>
              <h3 className="text-md font-semibold opacity-80">Who We Are</h3>
              <p className="text-secondary">
                At StrikeO, we're not just another e-commerce platform – we're a
                vibrant community of trendsetters, innovators, and
                game-changers, redefining the rules of online shopping. From the
                visionary minds behind sports and automotive excellence, we've
                transformed into the world's most advanced 3D e-commerce hub,
                offering an eclectic mix of products and services that cater to
                every lifestyle.
              </p>
            </section>
            <section>
              <h3 className="text-md font-semibold  opacity-80">
                Our Roots, Our Vision
              </h3>
              <p className="text-secondary">
                From farmers to producers, designers to tech wizards, we hail
                from diverse backgrounds with one common thread: a relentless
                passion for innovation and creativity. Our journey began with a
                simple idea – to revolutionize the way people shop, connect, and
                experience life. Today, that idea has blossomed into a dynamic
                ecosystem where imagination knows no bounds.
              </p>
            </section>
            <section>
              <h3 className="text-md font-semibold opacity-80">
                Pioneering the Future
              </h3>
              <p className="text-secondary">
                At StrikeO, we're not just keeping up with the trends – we're
                setting them. Our commitment to innovation drives everything we
                do, from our cutting-edge 3D technology to our seamless user
                experiences. We're not satisfied with the status quo; we're
                constantly pushing the boundaries of what's possible in the
                world of e-commerce.
              </p>
            </section>
            <section>
              <h3 className="text-md font-semibold  opacity-80">
                Beyond Products: Services Redefined
              </h3>
              <p className="text-secondary">
                But we're more than just a platform for buying and selling.
                We're a one-stop destination for all your needs, offering a
                curated selection of services that elevate your shopping
                experience to new heights. Whether you're seeking automotive
                solutions, sports gear, or the latest in lifestyle trends, we've
                got you covered.
              </p>
            </section>
            <section>
              <h3 className="text-md font-semibold  opacity-80">
                Immerse Yourself in the Future of Shopping
              </h3>
              <p className="text-secondary">
                Experience online shopping like never before with StrikeO. Say
                goodbye to traditional sorting and browsing – with our immersive
                3D environment, you can explore products in a whole new way.
                From interactive displays to virtual try-ons, we're redefining
                the shopping experience one click at a time.
              </p>
            </section>
            <section>
              <h3 className="text-md font-semibold  opacity-80">
                Community at Our Core
              </h3>
              <p className="text-secondary">
                At the heart of StrikeO lies a thriving community of like-minded
                individuals who share our passion for innovation and
                exploration. We believe in the power of diversity, inclusion,
                and collaboration, and we're committed to building a space where
                every voice is heard and every idea is celebrated. Together,
                we're not just shaping the future of e-commerce – we're
                redefining it.
              </p>
            </section>
            <section>
              <h3 className="text-md font-semibold  opacity-80">
                Join the Revolution
              </h3>
              <p className="text-secondary">
                So come on board and join us as we embark on this exhilarating
                journey into the future of online shopping. Whether you're a
                trendsetter, a trailblazer, or just someone looking to
                experience something new, there's a place for you at StrikeO.
                Experience the future of e-commerce today – because here, the
                possibilities are endless.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
