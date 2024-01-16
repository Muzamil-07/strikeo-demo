/* eslint-disable react/prop-types */
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const ConfirmationModal = ({ closeModal, rejectProduct, selectedProduct }) => {
  const [isRejecting, setIsRejecting] = useState(false);

  const handleSubmit = async () => {
    setIsRejecting(true);
    try {
      const res = await rejectProduct(selectedProduct?.id);
      closeModal();
    } catch (error) {
      console.log(error);
    }
    setIsRejecting(false);
  };

  return (
    <>
      <div
        className=" fixed left-0 top-0 bg-black bg-opacity-25 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        onClick={closeModal}
      ></div>
      <div className="fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]">
        <div className="bg-white p-7 relative shadow-lg rounded-2xl shadow-primary-500/50 w-full">
          <button
            type="button"
            className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={closeModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <h3 className="text-2xl font-medium text-center text-black">
            Reject Product
          </h3>
          <div className="mt-4 pb-4 text-gray-400">
            Are you sure you want to reject this product?
          </div>

          <div className="flex justify-center gap-3 items-center">
            <button
              disabled={isRejecting}
              onClick={handleSubmit}
              className="flex items-center justify-center gap-4 px-4 py-2 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
            >
              {isRejecting && <ClipLoader size={20} color="#fff" />}
              Yes, I'm sure
            </button>
            <button
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={closeModal}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
