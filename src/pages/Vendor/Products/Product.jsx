/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiArrowNarrowLeft } from "react-icons/hi";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineTag } from "react-icons/ai";
import { FaRuler } from "react-icons/fa";
import { toast } from "react-toastify";
import http from "../../../api";
import { environment } from "../../../constants";

const Product = ({
  view,
  updateView,
  categories,
  getProducts,
  selectedProduct,
  setSelectedProduct,
}) => {
  const genderOptions = [
    "male",
    "female", 
    "unisex"
  ];
  const [mode, setMode] = useState(view);
  const [product, setProduct] = useState(selectedProduct);
  const errorsBody = {
    name: null,
    gender: null,
    brand: null,
    category: null,
    subCategory: null,
    description: null,
    image: null,
    subImages: null,
    amount: null,
    costPrice: null,
    discount: null,
    sizes: null,
    colors: null,
    tags: null,
  };
  const [errors, setErrors] = useState(errorsBody);
  const [actionLoader, setActionLoader] = useState({
    add: false,
    edit: false,
  });

  const selectedCategory = useMemo(() => {
    if (!categories || !product) return;
    return categories.find((category) => category.id === product.category || category.id === product.category?.id);
  }, [categories, product]);

  const onImageChange = (e, index) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (index === undefined) {
          setProduct({ ...product, image: reader.result, file });
        } else {
          const subImages = [...product.subImages];
          subImages[index] = {
            image: reader.result,
            file,
          };
          setProduct({
            ...product,
            subImages,
          });
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleTag = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "" && !product.tags.includes(e.target.value)) {
        setProduct({
          ...product,
          tags: [...product.tags, e.target.value],
        });
        e.target.value = "";
      }
      e.preventDefault();
    }
  };

  const handleSize = (e) => {
    if (
      e.key === "-" ||
      e.key === "e" ||
      e.key === "E" ||
      parseInt(e.key) < 0 ||
      e.key === "."
    ) {
      e.preventDefault();
    }
    if (
      (e.key === "0" && e.target.value === "0") ||
      (e.key === "0" && e.target.value === "")
    ) {
      e.preventDefault();
    }
    if (e.key === "Enter") {
      if (e.target.value !== "" && !product.sizes.includes(e.target.value)) {
        setProduct({
          ...product,
          sizes: [...product.sizes, e.target.value],
        });
        e.target.value = "";
      }
      e.preventDefault();
    }
  };

  const handleRemoveSize = (size) => {
    setProduct({
      ...product,
      sizes: product.sizes.filter((s) => s !== size),
    });
  };

  const handleRemoveImage = (index) => {
    if (index === undefined) {
      setProduct({
        ...product,
        image: "",
        file: null,
      });
      return;
    }
    const subImages = [...product.subImages];
    if (mode === "add-product") {
      subImages[index] = {
        image: "",
        file: null,
      };
    } else if (mode === "edit-product") {
      subImages[index] = "";
    }
    setProduct({
      ...product,
      subImages,
    });
  };

  const handleRemoveColor = (index) => {
    setProduct({
      ...product,
      colors: product.colors.filter((s, i) => i !== index),
    });
  };

  const handleRemoveTag = (index) => {
    setProduct({
      ...product,
      tags: product.tags.filter((s, i) => i !== index),
    });
  };

  const validateProduct = () => {
    if (!product) return;

    const newErrors = {};

    if (product.name?.trim() === "") {
      newErrors.name = "Name cannot be empty.";
    }
    if(!product.gender?.trim()) {
      newErrors.gender = "Gender is required."
    }
    if (product.brand?.trim() === "") {
      newErrors.brand = "Brand cannot be empty.";
    }
    if (
      view === "add-product"
        ? product.category?.trim() === ""
        : !product.category
    ) {
      newErrors.category = "Category cannot be empty.";
    }

    if (typeof product.subCategory === "string" && product.subCategory?.trim() === "") {
      newErrors.subCategory = "Sub Category cannot be empty.";
    }
    if (product.description?.trim() === "") {
      newErrors.description = "Description cannot be empty.";
    }
    if (product.image?.trim() === "") {
      newErrors.image = "Please select a main image.";
    }
    if (product.costPrice === 0 || product.costPrice === NaN) {
      newErrors.costPrice = "Price cannot be empty.";
    } else if (product.costPrice < 0) {
      newErrors.costPrice = "Price cannot be negative.";
    }
    if (product.amount === "" || isNaN(product.amount)) {
      newErrors.amount = "Amount cannot be empty.";
    } else if (product.amount < 0) {
      newErrors.amount = "Amount cannot be negative.";
    }
    if (product.sizes?.length === 0) {
      newErrors.sizes = "Please add at least one size.";
    }
    if (product.colors?.length === 0) {
      newErrors.colors = "Please add at least one color.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    if (mode === "add-product") {
      addProduct();
    }

    if (mode === "edit-product") {
      updateProduct();
    }
  };

  const addProduct = async () => {
    try {
      let formData = new FormData();
      formData.append("file", product.file);
      product.subImages.forEach((subImage) => {
        if (subImage.file) {
          formData.append("file", subImage.file);
        }
      });

      let imgData;
      const res = await http.post(environment.file_url + "/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      imgData = res.data;

      let mainImage = imgData[0]?.[product?.file?.name];
      let subImages = [];
      imgData.forEach((image, index) => {
        if (index !== 0) {
          subImages.push(image[product?.subImages[index - 1]?.file?.name]);
        }
      });
      let productBody = {
        ...product,
        image: mainImage,
        subImages,
      };

      setActionLoader({ ...actionLoader, add: true });
      // // eslint-disable-next-line no-unused-vars
      const result = await http.post("/product", productBody);
      toast.success("Product added successfully!");
      setActionLoader({ ...actionLoader, add: false });
      updateView("list");
      getProducts();
      setSelectedProduct({});
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product!");
    }
    setActionLoader({ ...actionLoader, add: false });
  };

  const updateProduct = async () => {
    try {
      let productBody = {
        ...product,
      };
      let formData = new FormData();
      let updatedMainImage = productBody?.image !== selectedProduct?.image;
      if (updatedMainImage) {
        formData.append("file", product.file);
      }
      let changedSubImages = [];
      productBody.subImages.forEach((subImage, index) => {
        if (typeof subImage !== "string") {
          formData.append("file", subImage.file);
          changedSubImages.push(index);
        }
      });

      if (changedSubImages.length > 0 || updatedMainImage) {
        let imgData;
        const res = await http.post(
          environment.file_url + "/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        imgData = res.data;

        let mainImage = updatedMainImage
          ? imgData[0]?.[product?.file?.name]
          : productBody?.image;
        let subImages = [...product.subImages];
        if (changedSubImages.length > 0) {
          changedSubImages.forEach((index) => {
            let foundImage = imgData.find(
              (image) =>
                image[product?.subImages[index]?.file?.name] !== undefined
            );
            subImages[index] =
              foundImage[product?.subImages[index]?.file?.name];
          });
        }
        subImages = subImages.filter(
          (subImage) => typeof subImage === "string"
        );
        productBody = {
          ...productBody,
          image: mainImage,
          subImages,
        };
      }

      // eslint-disable-next-line no-unused-vars
      setActionLoader({ ...actionLoader, edit: true });
      const result = await http.put("/product/" + productBody.id, productBody);

      // console.log(result, "result.data");
      toast.success("Product updated successfully!");
      setMode("view-product");
      getProducts();
      setSelectedProduct(result.data.data);
      setProduct(result.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to update product!");
    }
    setActionLoader({ ...actionLoader, edit: false });
  };

  return (
    <div>
      {(mode === "add-product" || true) && (
        <>
          <div className="flex items-center justify-between pt-4 px-10">
            <div className="flex items-center gap-4">
              <HiArrowNarrowLeft
                className="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-4xl"
                onClick={() => updateView("list")}
              />
              {mode === "add-product" ? "Add Product" : selectedProduct?.name}
            </div>
          </div>

          {selectedProduct?.status === "Rejected" && (
            <div className="flex gap-4 py-4 my-2 bg-red-100 border border-red-300 rounded-lg mx-10 px-4">
              <div className="w-6 h-6 rounded-full bg-red-600 text-white self-start flex items-center justify-center">
                i
              </div>
              <div className="flex flex-col text-primary">
                <div className="font-medium">Note</div>
                <div className="text-sm">
                  This product has been rejected. Update details to re-apply for
                  submission.
                </div>
              </div>
            </div>
          )}

          <form onSubmit={(e) => e.preventDefault()} className="pt-4">
            <div className="px-10 grid grid-cols-12 gap-10">
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
                        disabled={mode === "view-product"}
                        value={product?.category?.id || product?.category}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            category: e.target.value,
                          })
                        }
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
                      {errors && errors.category && (
                        <div className="text-red-500 text-sm">
                          {errors.category}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Sub Category</label>

                      <select
                        required
                        disabled={mode === "view-product"}
                        value={product?.subCategory?._id || product?.subCategory}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            subCategory: e.target.value,
                          })
                        }
                        className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        aria-label="Default select example"
                      >
                        <option value="">Select Sub-Category</option>
                        {selectedCategory &&
                          selectedCategory?.subCategories?.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                      </select>
                      {errors && errors.subCategory && (
                        <div className="text-red-500 text-sm">
                          {errors.subCategory}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Gender</label>

                      <select
                        required
                        disabled={mode === "view-product"}
                        value={product.gender}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            gender: e.target.value,
                          })
                        }
                        className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize"
                        aria-label="Default select example"
                      >
                        <option value="">Select Gender</option>
                        {genderOptions.map((gender) => (
                            <option key={gender} value={gender}>
                              {gender}
                            </option>
                          ))}
                      </select>
                      {errors && errors.gender && (
                        <div className="text-red-500 text-sm">
                          {errors.gender}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Product Name</label>
                      <input
                        required
                        disabled={mode === "view-product"}
                        type="text"
                        value={product?.name}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            name: e.target.value,
                          })
                        }
                        className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      {errors && errors.name && (
                        <div className="text-red-500 text-sm">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Brand Name</label>
                      <input
                        required
                        disabled={mode === "view-product"}
                        type="text"
                        value={product?.brand}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            brand: e.target.value,
                          })
                        }
                        className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      {errors && errors.brand && (
                        <div className="text-red-500 text-sm">
                          {errors.brand}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Description</label>
                      <textarea
                        required
                        disabled={mode === "view-product"}
                        rows={4}
                        value={product?.description}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            description: e.target.value,
                          })
                        }
                        className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></textarea>
                      {errors && errors.description && (
                        <div className="text-red-500 text-sm">
                          {errors.description}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>
                        Sizes
                        {/* <span className="ms-2 text-secondary text-xs">Enter to add size</span> */}
                      </label>
                      {product?.sizes?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {product?.sizes.map((size, index) => (
                            <span
                              key={index + size}
                              className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex gap-1 items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 relative"
                            >
                              {mode !== "view-product" && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveSize(size)}
                                  className="absolute top-[-6px] right-[-6px] text-red-500 text-lg rounded-full bg-white"
                                >
                                  <RxCrossCircled />
                                </button>
                              )}
                              <FaRuler />
                              {size}
                            </span>
                          ))}
                        </div>
                      )}
                      {mode !== "view-product" && (
                        <input
                          type="number"
                          onKeyDown={(e) => handleSize(e)}
                          placeholder="Enter size & press enter"
                          className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                      {errors && errors.sizes && (
                        <div className="text-red-500 text-sm">
                          {errors.sizes}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Tags</label>
                      {product?.tags?.length > 0 && (
                        <div className="flex gap-2 flex-wrap">
                          {product?.tags.map((tag, index) => (
                            <span
                              key={index + tag}
                              className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex gap-1 items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 relative"
                            >
                              {mode !== "view-product" && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveTag(index)}
                                  className="absolute top-[-6px] right-[-6px] text-red-500 text-lg rounded-full bg-white"
                                >
                                  <RxCrossCircled />
                                </button>
                              )}
                              <AiOutlineTag />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {mode !== "view-product" && (
                        <input
                          type="text"
                          placeholder="Enter tag & press enter"
                          onKeyDown={(e) => handleTag(e)}
                          className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      {product?.colors?.length > 0 && (
                        <div className="flex items-center gap-4 flex-wrap">
                          {product?.colors.map((color, index) => (
                            <div className="relative">
                            {mode !== "view-product" && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveColor(index)}
                                  className="absolute top-[-6px] right-[-6px] text-red-500 text-lg rounded-full bg-white"
                                >
                                  <RxCrossCircled />
                                </button>
                              )}
                            <input
                              type="color"
                              disabled={mode === "view-product"}
                              key={index + color}
                              defaultValue={color}
                              onBlur={(e) => {
                                setProduct({
                                  ...product,
                                  colors: product?.colors.map((c, i) =>
                                    i === index ? e.target.value : c
                                  ),
                                });
                              }}
                              id="colorPicker"
                              className="product-color w-[50px] h-[50px] border-[1.1px] border-gray-500"
                              // className="w-[50px] h-[50px] border-[1.1px] border-gray-500 rounded-[15px] bg-transparent color-input cursor-pointer"
                              name="colorPicker"
                            />
                            </div>
                          ))}
                        </div>
                      )}
                      {mode !== "view-product" && (
                        <div
                          className="border text-white bg-primary hover:opacity-90 rounded-lg py-2 text-center cursor-pointer"
                          onClick={() =>
                            setProduct({
                              ...product,
                              colors: [...product?.colors, "#000000"],
                            })
                          }
                        >
                          Add More Colors
                        </div>
                      )}

                      {errors && errors.colors && (
                        <div className="text-red-500 text-sm">
                          {errors.colors}
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
                    {errors && errors.image && (
                      <div className="text-red-500 text-sm">{errors.image}</div>
                    )}
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg grid grid-cols-8 gap-4 h-64">
                    {product.image ? (
                      <div className="col-span-4 rounded-lg relative overflow-hidden">
                        <img
                          src={product.image}
                          className="w-full h-full object-contain"
                          alt="main-image"
                        />
                        {mode !== "view-product" && (
                          <button
                            type="button"
                            onClick={() => handleRemoveImage()}
                            className="absolute top-[2px] right-[3px] text-red-500 text-lg rounded-full bg-white"
                          >
                            <RxCrossCircled />
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="col-span-4 border-dashed border-2 rounded-lg border-gray-200">
                        <label
                          htmlFor="main-image"
                          className="h-full flex flex-col gap-2 justify-center items-center cursor-pointer text-sm"
                        >
                          <IoCloudUploadOutline className="text-2xl" />
                          <span>Click to upload image</span>
                          <input
                            type="file"
                            accept="image/*"
                            name="main-image"
                            id="main-image"
                            className="hidden"
                            onChange={(e) => onImageChange(e)}
                          />
                        </label>
                      </div>
                    )}
                    <div className="col-span-4 grid grid-cols-2 grid-rows-2 gap-4">
                      {product.subImages.map((subImage, index) =>
                        subImage?.image ||
                        (typeof subImage === "string" && subImage) ? (
                          <div
                            className="rounded-lg relative overflow-hidden"
                            key={index}
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
                            {mode !== "view-product" && (
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                                className="absolute top-[2px] right-[3px] text-red-500 text-lg rounded-full bg-white"
                              >
                                <RxCrossCircled />
                              </button>
                            )}
                          </div>
                        ) : mode === "view-product" &&
                          typeof subImage === "string" &&
                          !subImage ? (
                          <></>
                        ) : (
                          <div className="border-dashed border-2 rounded-lg border-gray-200">
                            <label
                              htmlFor="image-0"
                              className="h-full flex flex-col gap-2 justify-center items-center cursor-pointer text-xs"
                            >
                              <IoCloudUploadOutline className="text-2xl" />
                              <span>Upload image</span>
                              <input
                                type="file"
                                accept="image/*"
                                name="image-0"
                                id="image-0"
                                className="hidden"
                                onChange={(e) => onImageChange(e, index)}
                              />
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    Pricing
                  </h3>
                  <div className="p-4 border border-gray-200 rounded-lg flex w-1/2">
                    <div className="flex flex-col gap-2">
                      <label>Price</label>
                      <input
                        required
                        disabled={mode === "view-product"}
                        type="number"
                        value={
                          product?.costPrice === 0 ? "" : product?.costPrice
                        }
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            costPrice:
                              e.target.value === ""
                                ? 0
                                : Number(e.target.value),
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
                      {errors && errors.costPrice && (
                        <div className="text-red-500 text-sm">
                          {errors.costPrice}
                        </div>
                      )}
                    </div>
                    {/* <div className="flex flex-col gap-2">
											<label>Discount (Optional)</label>
											<input
												disabled={mode === "view-product"}
												type="number"
												placeholder="By default 0"
												value={product?.discount === 0 ? "" : product?.discount}
												onChange={(e) =>
													setProduct({
														...product,
														discount: e.target.value === "" ? 0 : Number(e.target.value),
													})
												}
												onKeyDown={(e) => {
													if (e.key === "-" || e.key === "e" || e.key === "E" || parseInt(e.key) < 0) {
														e.preventDefault();
													}
												}}
												className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											/>
										</div> */}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    Inventory
                  </h3>
                  <div
                    className={`p-4 border border-gray-200 rounded-lg flex justify-between gap-4 ${
                      mode !== "view-product" ? "w-2/4" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <label>Amount</label>
                      <input
                        required
                        disabled={mode === "view-product"}
                        type="number"
                        value={product?.amount}
                        onChange={(e) => {
                          // console.log(e.target.value, "e.target.value");
                          setProduct({
                            ...product,
                            amount:
                              e.target.value === ""
                                ? ""
                                : Number(e.target.value),
                          });
                        }}
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
                      {errors && errors.amount && (
                        <div className="text-red-500 text-sm">
                          {errors.amount}
                        </div>
                      )}
                    </div>
                    {mode === "view-product" && (
                      <div className="flex flex-col gap-2">
                        <label>SKU</label>
                        <input
                          disabled={true}
                          type="text"
                          value={product?.sku}
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              sku: e.target.value,
                            })
                          }
                          className="block px-4 py-2 text-sm text-primary border-[1.3px] border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end">
                    {mode === "add-product" && (
                      <button
                        disabled={!actionLoader || actionLoader.add}
                        className="flex items-center justify-center gap-4 px-6 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
                        onClick={() => validateProduct()}
                      >
                        {actionLoader.add && (
                          <ClipLoader size={20} color="#201F20" />
                        )}
                        Add Product
                      </button>
                    )}
                    {mode === "edit-product" && (
                      <div className="flex gap-2">
                        <button
                          disabled={!actionLoader || actionLoader.edit}
                          className="text-white bg-secondary text-sm px-6 py-2 rounded-md"
                          onClick={() => {
                            setMode("view-product");
                            setErrors(errorsBody);
                            setProduct(selectedProduct);
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          disabled={!actionLoader || actionLoader.edit}
                          className="flex items-center justify-center gap-4 px-6 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
                          onClick={() => validateProduct()}
                        >
                          {actionLoader.edit && (
                            <ClipLoader size={20} color="#201F20" />
                          )}
                          Save
                        </button>
                      </div>
                    )}
                    {mode === "view-product" && (
                      <button
                        className="flex items-center justify-center gap-4 px-6 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
                        onClick={() => setMode("edit-product")}
                      >
                        EDIT
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Product;
