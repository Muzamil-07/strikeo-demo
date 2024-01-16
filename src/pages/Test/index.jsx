import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/images/strikeo.svg";
import emailBox from "../../assets/images/email-box.svg";

const Test = () => {
  const socials = {
    backgroundColor: "#848484",
    color: "#3C3C3C",
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isJoinUsModalOpen, setIsJoinUsModalOpen] = useState(false);

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  const openLoginModal = () => {
    console.log("openLoginModal");
    setIsLoginModalOpen(true);
  };
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };
  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };
  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };
  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };
  const openJoinUsModal = () => {
    setIsJoinUsModalOpen(true);
  };
  const closeJoinUsModal = () => {
    setIsJoinUsModalOpen(false);
  };
  const onSubmit = () => {
    setIsCartModalOpen(false);
    setIsLoginModalOpen(true);
  };
  return currentPage === 1 ? (
    <div>
      {/* <h1>Page 1</h1>
      <button onClick={() => setCurrentPage(2)}>Go to Page 2</button> */}
      <div className="px-10 py-2">
        <button
          className="bg-theme_primary text-white px-4 py-2 rounded-md"
          onClick={openLoginModal}
        >
          Open Login Modal
        </button>
      </div>
      <div className="px-10 py-2">
        <button
          className="bg-theme_primary text-white px-4 py-2 rounded-md"
          onClick={openCartModal}
        >
          Open Cart Modal
        </button>
      </div>
      <div className="px-10 py-2">
        <button
          className="bg-theme_primary text-white px-4 py-2 rounded-md"
          onClick={openSignUpModal}
        >
          Open Sign Up Modal
        </button>
      </div>
      <div className="px-10 py-2">
        <button
          className="bg-theme_primary text-white px-4 py-2 rounded-md"
          onClick={openJoinUsModal}
        >
          Open Join Us Modal
        </button>
      </div>
      {/* Sign Up Modal Component */}
      <Modal
        show={isSignUpModalOpen}
        onClose={closeSignUpModal}
        size={"5xl"}
        className="bg-black bg-opacity-80"
      >
        <Modal.Body className="bg-theme_quaternary rounded-lg">
          <div className="pb-4">
            <h3 className="text-theme_primary text-center font-bold text-3xl">
              Sign up
            </h3>
          </div>
          <div className="space-y-6 px-72">
            <form className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password*"
                  className="border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1 text-theme_secondary"
                >
                  <FaEyeSlash size="1.5rem" />
                </button>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Repeat Password*"
                  className="border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1 text-theme_secondary"
                >
                  <FaEyeSlash size="1.5rem" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="rounded bg-theme_secondary focus:ring-0"
                />
                <span className="text-theme_primary text-sm">
                  I agree to the{" "}
                  <button type="button" className="underline font-semibold">
                    Terms and Conditions
                  </button>
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  type="button"
                  className="bg-theme_primary text-white px-4 py-2 rounded-md"
                >
                  Sign up
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center gap-2">
              <span>Already have an account?</span>
              <button
                type="button"
                onClick={onSubmit}
                className="underline font-semibold"
              >
                Login in!
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Login Modal Component */}
      <Modal
        show={isLoginModalOpen}
        onClose={closeLoginModal}
        size={"5xl"}
        className="bg-black bg-opacity-80"
      >
        <Modal.Body className="bg-theme_quaternary rounded-lg">
          <div className="pb-4">
            <h3 className="text-theme_primary text-center font-bold text-3xl">
              Log In
            </h3>
          </div>
          <div className="space-y-2 px-72">
            <form className="flex flex-col gap-6">
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password*"
                  className="border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1 text-theme_secondary"
                >
                  <FaEyeSlash size="1.5rem" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="rounded bg-theme_secondary focus:ring-0"
                />
                <span className="text-theme_primary text-sm">
                  Keep me Signed in
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  type="button"
                  className="bg-theme_primary text-white px-4 py-2 rounded-md"
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="py-2">
              <button>Forgot Password?</button>
            </div>
            <div className="flex items-center gap-4 mx-auto">
              <hr className="w-40 border-transparent bg-theme_primary" />
              <span>Or</span>
              <hr className="w-40 border-transparent bg-theme_primary" />
              {/* <hr className="w-28 border-transparent bg-theme_primary" />
              <span>Or continue With</span>
              <hr className="w-24 border-transparent bg-theme_primary" /> */}
            </div>
            <div className="flex items-center justify-center gap-4 py-2">
              {/* <span>Continue With</span> */}
              <div className="flex gap-2">
                <button
                  onClick={(e) => continueWithGoogle(e)}
                  className={`self-start flex items-center justify-center bg-[#848484] border border-gray-300 rounded-full shadow-md px-2 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-10 h-10 font-bold text-3xl`}
                >
                  G
                </button>
                <button
                  onClick={(e) => continueWithFacebook(e)}
                  className={`self-start flex items-center bg-[#848484] justify-center border border-gray-300 rounded-full shadow-md px-2 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-10 h-10 font-bold text-3xl`}
                >
                  f
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <span>Don't have an account?</span>
              <button type="button" className="underline font-semibold">
                Sign up!
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Cart Modal Component */}
      <Modal
        show={isCartModalOpen}
        onClose={closeCartModal}
        size={"5xl"}
        className="bg-black bg-opacity-80"
      >
        <Modal.Body className="bg-theme_quaternary rounded-lg">
          <div className="px-52 pb-4 flex justify-center">
            <div>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="pb-4">
            <h3 className="text-theme_primary text-center font-bold text-3xl">
              Log in to Save Your Cart
            </h3>
          </div>
          <div className="space-y-6 px-52">
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              quidem aspernatur eligendi, maiores id accusantium placeat
              sapiente, est necessitatibus rem et aut natus enim aliquid sunt
              inventore ipsum error perferendis? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Animi optio facere, assumenda
              libero quia minima, ad nobis iusto modi, quaerat illum explicabo
              officia maxime aspernatur. Eius ex eos quos fugit!
            </p>
            <div className="text-center">
              <button
                type="button"
                onClick={onSubmit}
                className="bg-theme_primary text-white px-24 py-2 rounded-md"
              >
                Log in
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Join Us Modal Component */}
      <Modal
        show={isJoinUsModalOpen}
        onClose={closeJoinUsModal}
        size={"5xl"}
        className="bg-black bg-opacity-80"
      >
        <Modal.Body className="bg-theme_quaternary rounded-lg">
          <div className="px-52 pb-4 flex justify-center">
            <div>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="space-y-6 px-40">
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <img src={emailBox} alt="email_box" />
              </div>
              <div className="col-span-6 flex flex-col justify-center gap-4">
                <h3 className="font-bold text-3xl text-theme_primary">
                  Join Us
                </h3>
                <p>
                  Subscribe to our Newsletter and stay updated about our
                  company.
                </p>
              </div>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email*"
                className="border-0 border-b border-theme_primary py-1 bg-transparent w-full focus:ring-0 pr-56 pl-0"
              />
              <button
                type="button"
                className="bg-theme_primary text-white px-16 py-1 absolute right-0 top-0"
              >
                Subscribe
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  ) : (
    <div>
      <h1>Page 2</h1>
      <button onClick={() => setCurrentPage(1)}>Go to Page 1</button>
    </div>
  );
};

export default Test;
