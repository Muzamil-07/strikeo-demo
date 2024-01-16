/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineTag } from "react-icons/ai";
import { FaRuler } from "react-icons/fa";
import { toast } from "react-toastify";
import http from "../../../api";

const Product = ({
  updateView,
  categories,
  getProducts,
  selectedProduct,
  setSelectedProduct,
}) => {
  const [product, setProduct] = useState(selectedProduct);
  const errorsBody = {
    salePrice: null,
  };
  const [errors, setErrors] = useState(errorsBody);
  const [isPublishing, setIsPublishing] = useState(false);

  const publishProduct = async () => {
    if (!product.salePrice) {
      setErrors({ ...errors, salePrice: "Sale price is required" });
      return;
    }
    setErrors(errorsBody);
    try {
      setIsPublishing(true);
      const res = await http.put(`/product/approve/${product.id}`, product);
      updateView("list");
      getProducts();
      setSelectedProduct();
      toast.success("Product published successfully");
    } catch (error) {
      console.log(error);
    }
    setIsPublishing(false);
  };

  return (
    <div className="px-10">
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-4">
          <HiArrowNarrowLeft
            className="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-4xl"
            onClick={() => updateView("list")}
          />
          {selectedProduct?.name}
        </div>
      </div>

      <div className="flex gap-4 py-4 my-2 bg-sky-100 border border-blue-400 rounded-lg px-4">
        <div className="w-6 h-6 rounded-full bg-blue-600 text-white self-start flex items-center justify-center">
          i
        </div>
        <div className="flex flex-col text-primary">
          <div className="font-medium">Note</div>
          <div className="text-sm">
            Enter Sale Price and Discount to publish product.
          </div>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="pt-4">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-primary">
                General Information
              </h3>
              <div className="p-4 border border-gray-200 rounded-lg flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label>Category</label>

                  <select
                    required
                    disabled
                    value={product?.category?.id || product?.category}
                    className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    aria-label="Default select example"
                  >
                    <option value="">Select Category</option>
                    {categories &&
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label>Product Name</label>
                  <input
                    required
                    disabled
                    type="text"
                    value={product?.name}
                    className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Brand Name</label>
                  <input
                    required
                    disabled
                    type="text"
                    value={product?.brand}
                    className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Description</label>
                  <textarea
                    required
                    disabled
                    rows={4}
                    value={product?.description}
                    className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                  <label>Sizes</label>
                  {product?.sizes?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {product?.sizes.map((size, index) => (
                        <span
                          key={index + size}
                          className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex gap-1 items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 relative"
                        >
                          <FaRuler />
                          {size}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {product?.tags?.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <label>Tags</label>
                    <div className="flex gap-2 flex-wrap">
                      {product?.tags.map((tag, index) => (
                        <span
                          key={index + tag}
                          className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex gap-1 items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 relative"
                        >
                          <AiOutlineTag />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  {product?.colors?.length > 0 && (
                    <div className="flex items-center gap-4 flex-wrap">
                      {product?.colors.map((color, index) => (
                        <div className="relative" key={index + color}>
                          <div
                            style={{
                              backgroundColor: color,
                            }}
                            className="w-[50px] h-[50px] p-[2px] border-none rounded-[15px] invert"
                          >
                            <input
                              type="color"
                              defaultValue={color}
                              id="colorPicker"
                              className="w-full h-full bg-transparent color-input cursor-pointer"
                              name="colorPicker"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Product Images
                </h3>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg grid grid-cols-8 gap-4 h-64">
                {product.image ? (
                  <div className="col-span-4 rounded-lg relative overflow-hidden">
                    <img
                      src={product.image}
                      className="w-full h-full object-contain"
                      alt="main-image"
                    />
                  </div>
                ) : (
                  <></>
                )}
                <div className="col-span-4 grid grid-cols-2 grid-rows-2 gap-4">
                  {product.subImages.map((subImage, index) =>
                    subImage?.image ||
                    (typeof subImage === "string" && subImage) ? (
                      <div
                        key={index}
                        className="rounded-lg relative overflow-hidden"
                      >
                        <div className="h-[100px] w-full">
                          <img
                            src={
                              typeof subImage === "string"
                                ? subImage
                                : subImage?.image
                            }
                            className="h-full w-full object-contain"
                            alt="main-image"
                          />
                        </div>
                      </div>
                    ) : (
                      <></>
                    )
                  )}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary">Pricing</h3>
              <div className="p-4 border border-gray-200 rounded-lg flex flex-col gap-4">
                <div className="flex flex-col self-start gap-2">
                  <label>Cost Price</label>
                  <input
                    required
                    disabled
                    type="number"
                    value={product?.costPrice === 0 ? "" : product?.costPrice}
                    className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <div>
                    <label className="inline-block mb-2">Sale Price</label>
                    <input
                      type="number"
                      placeholder="By default 0"
                      value={product?.salePrice === 0 ? "" : product?.salePrice}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          salePrice:
                            e.target.value === "" ? 0 : Number(e.target.value),
                        })
                      }
                      onKeyDown={(e) => {
                        if (
                          e.key === "-" ||
                          e.key === "e" ||
                          e.key === "E" ||
                          parseInt(e.key) < 0
                        ) {
                          e.preventDefault();
                        }
                      }}
                      className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {errors.salePrice && (
                      <span className="text-red-500 text-xs">
                        {errors.salePrice}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="inline-block mb-2">
                      Discount (Optional)
                    </label>
                    <input
                      type="number"
                      placeholder="By default 0"
                      value={product?.discount === 0 ? "" : product?.discount}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          discount:
                            e.target.value === "" ? 0 : Number(e.target.value),
                        })
                      }
                      onKeyDown={(e) => {
                        if (
                          e.key === "-" ||
                          e.key === "e" ||
                          e.key === "E" ||
                          parseInt(e.key) < 0
                        ) {
                          e.preventDefault();
                        }
                      }}
                      className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary">Inventory</h3>
              <div className="p-4 border border-gray-200 rounded-lg flex justify-center gap-4">
                <div className="flex flex-col gap-2">
                  <label>Amount</label>
                  <input
                    required
                    disabled
                    type="number"
                    value={product?.amount}
                    className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>SKU (Optional)</label>
                  <input
                    disabled
                    type="text"
                    value={product?.sku}
                    className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  disabled={isPublishing}
                  className="flex items-center justify-center gap-4 px-6 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
                  onClick={() => publishProduct()}
                >
                  {isPublishing && <ClipLoader size={20} color="#201F20" />}
                  Publish Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Product;
