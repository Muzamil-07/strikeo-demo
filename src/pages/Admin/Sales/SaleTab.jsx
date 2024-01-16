/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import http from "../../../api";

const saleSchema = yup.object({
  productCost: yup.number().required("mandatory"),
  dutiesFrieght: yup.number().required("mandatory"),
  pickPackMaterial: yup.number().required("mandatory"),
  lpChanges: yup.number().required("mandatory"),
  shipping: yup.number().required("mandatory"),
  merchantFee: yup.number().required("mandatory"),
  personnel: yup.number().required("mandatory"),
  adspend: yup.number().required("mandatory"),
  miscMarketing: yup.number().required("mandatory"),
  consultants: yup.number().required("mandatory"),
  depreciation: yup.number().required("mandatory"),
  insurance: yup.number().required("mandatory"),
  officeRent: yup.number().required("mandatory"),
  software: yup.number().required("mandatory"),
  miscellaneous: yup.number().required("mandatory"),
  interest: yup.number().required("mandatory"),
  cash: yup.number().required("mandatory"),
  inventoryCurrentAssets: yup.number().required("mandatory"),
  accountsReceivableCurrentAssets: yup.number().required("mandatory"),
  otherCurrentAssets: yup.number().required("mandatory"),
  softwarePlatform: yup.number().required("mandatory"),
  accountsPayableLiabilities: yup.number().required("mandatory"),
  otherCurrentLiabilities: yup.number().required("mandatory"),
  lineofCredit: yup.number().required("mandatory"),
  retainedEarnings: yup.number().required("mandatory"),
  accountsPayableCashFlow: yup.number().required("mandatory"),
  depreciationCashFlow: yup.number().required("mandatory"),
  accountsReceivableCashFlow: yup.number().required("mandatory"),
  inventoryCashFlow: yup.number().required("mandatory"),
  taxPaid: yup.number().required("mandatory"),
  otherCurrentLiabilitiesCashFlow: yup.number().required("mandatory"),
  otherCurrentAssetsCashFlow: yup.number().required("mandatory"),
});

function SaleTabs({ selectedSale, setSelectedSale, getUsers, currentPage }) {
  const [mode, setMode] = useState("view");
  const [openIndex, setOpenIndex] = useState(-1);
  const [user, setUser] = useState(selectedSale);
  const [actionLoader, setActionLoader] = useState({
    profile: false,
  });
  const getUser = async () => {
    try {
      const res = await http.get("user/" + selectedSale?.id);
      setSelectedSale(res.data.data);
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  //   const filterUpdateUser = (user) => {
  //     const newUser = { id: selectedUser?.id };

  //     if (
  //       user?.firstName?.trim() &&
  //       user?.firstName?.trim() !== selectedUser?.firstName
  //     )
  //       newUser.firstName = user?.firstName;
  //     if (
  //       user?.lastName?.trim() &&
  //       user?.lastName?.trim() !== selectedUser?.lastName
  //     )
  //       newUser.lastName = user?.lastName;
  //     if (
  //       user?.username?.trim() &&
  //       user?.username?.trim() !== selectedUser?.username
  //     )
  //       newUser.username = user?.username;
  //     if (user?.email?.trim() && user?.email?.trim() !== selectedUser?.email)
  //       newUser.email = user?.email;
  //     if (user?.password?.trim()) newUser.password = user?.password;
  //     if (user?.file && user?.profileImage !== selectedUser?.profileImage)
  //       newUser.profileImage = user?.profileImage;

  //     // Billing Details
  //     if (user?.billing) {
  //       const {
  //         firstName,
  //         lastName,
  //         email,
  //         phone,
  //         address,
  //         country,
  //         state,
  //         city,
  //         zipCode,
  //       } = user.billing;

  //       if (
  //         firstName?.trim() &&
  //         firstName?.trim() !== selectedUser?.billing?.firstName
  //       )
  //         newUser.billing = { ...newUser.billing, firstName };
  //       if (
  //         lastName?.trim() &&
  //         lastName?.trim() !== selectedUser?.billing?.lastName
  //       )
  //         newUser.billing = { ...newUser.billing, lastName };
  //       if (email?.trim() && email?.trim() !== selectedUser?.billing?.email)
  //         newUser.billing = { ...newUser.billing, email };
  //       if (phone?.trim() && phone?.trim() !== selectedUser?.billing?.phone)
  //         newUser.billing = { ...newUser.billing, phone };
  //       if (address?.trim() && address?.trim() !== selectedUser?.billing?.address)
  //         newUser.billing = { ...newUser.billing, address };
  //       if (country?.trim() && country?.trim() !== selectedUser?.billing?.country)
  //         newUser.billing = { ...newUser.billing, country };
  //       if (state?.trim() && state?.trim() !== selectedUser?.billing?.state)
  //         newUser.billing = { ...newUser.billing, state };
  //       if (city?.trim() && city?.trim() !== selectedUser?.billing?.city)
  //         newUser.billing = { ...newUser.billing, city };
  //       if (zipCode?.trim() && zipCode?.trim() !== selectedUser?.billing?.zipCode)
  //         newUser.billing = { ...newUser.billing, zipCode };
  //     }

  //     return newUser;
  //   };
  const updateUser = async () => {
    setActionLoader({ ...actionLoader, profile: true });
    try {
      let file = user.file;
      let formData = new FormData();
      formData.append("file", file);

      //   let imgData;
      if (user.profileImage !== selectedSale?.profileImage) {
        // const res = await http.post(
        //   environment.file_url + "/upload",
        //   formData,
        //   {
        //     headers: { "Content-Type": "multipart/form-data" },
        //   }
        // );
        // imgData = res.data;
      }

      // console.log("imgData: ", imgData[0]?.[user?.file?.name]);

      //   const res = await http.put(
      //     "user/update-profile",
      //     filterUpdateUser({
      //       ...user,
      //       profileImage: imgData
      //         ? imgData[0]?.[user?.file?.name]
      //         : user?.profileImage,
      //     })
      //   );

      toast.success("User updated successfully!");
      setMode("view");
      getUsers(currentPage);
      getUser();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update user!");
    }
    setActionLoader({ ...actionLoader, profile: false });
  };
  const initialValues = {
    productCost: 0,
    dutiesFrieght: 0,
    pickPackMaterial: 0,
    lpChanges: 0,
    shipping: 0,
    merchantFee: 0,
    personnel: 0,
    adspend: 0,
    miscMarketing: 0,
    consultants: 0,
    depreciation: 0,
    insurance: 0,
    officeRent: 0,
    software: 0,
    miscellaneous: 0,
    interest: 0,
    cash: 0,
    inventoryCurrentAssets: 0,
    accountsReceivableCurrentAssets: 0,
    otherCurrentAssets: 0,
    softwarePlatform: 0,
    accountsPayableLiabilities: 0,
    otherCurrentLiabilities: 0,
    lineofCredit: 0,
    retainedEarnings: 0,
    accountsPayableCashFlow: 0,
    depreciationCashFlow: 0,
    accountsReceivableCashFlow: 0,
    inventoryCashFlow: 0,
    taxPaid: 0,
    otherCurrentLiabilitiesCashFlow: 0,
    otherCurrentAssetsCashFlow: 0,
  };
  const formik = useFormik({
    validationSchema: saleSchema,
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      //
    },
  });
  const calculateTotalCOGS = () => {
    const {
      productCost = 0,
      lpChanges = 0,
      dutiesFrieght = 0,
      pickPackMaterial = 0,
      shipping = 0,
      merchantFee = 0,
    } = formik.values;

    return (
      Number(productCost) +
      Number(lpChanges) +
      Number(dutiesFrieght) +
      Number(pickPackMaterial) +
      Number(shipping) +
      Number(merchantFee)
    );
  };
  const grossMargin = 456000 - calculateTotalCOGS();
  const calculateTotalCurrentAssets = () => {
    const {
      cash = 0,
      inventoryCurrentAssets = 0,
      accountsReceivableCurrentAssets = 0,
      otherCurrentAssets = 0,
    } = formik.values;

    return (
      Number(cash) +
      Number(inventoryCurrentAssets) +
      Number(accountsReceivableCurrentAssets) +
      Number(otherCurrentAssets)
    );
  };
  const calculateTotalOPEX = () => {
    const {
      personnel = 0,
      adspend = 0,
      miscMarketing = 0,
      consultants = 0,
      depreciation = 0,
      insurance = 0,
      officeRent = 0,
      software = 0,
      miscellaneous = 0,
    } = formik.values;

    return (
      Number(personnel) +
      Number(adspend) +
      Number(miscMarketing) +
      Number(consultants) +
      Number(depreciation) +
      Number(officeRent) +
      Number(insurance) +
      Number(miscellaneous) +
      Number(software)
    );
  };
  const operatingIncome = calculateTotalOPEX() - grossMargin;
  const taxes = (operatingIncome * 0.25).toFixed(1);
  const totalNetIncome =
    operatingIncome - Number(formik.values.interest || 0) - taxes;
  const netCashFlow = 50000;
  const cash = formik.values.cash || 0 + netCashFlow;
  const calculateTotalFixedAsset = () => {
    const { softwarePlatform = 0, depreciation = 0 } = formik.values;
    return Number(softwarePlatform) + Number(depreciation);
  };
  const calculateTotalLiabilities = () => {
    const {
      accountsPayableLiabilities = 0,
      taxes = 0,
      otherCurrentLiabilities = 0,
      lineofCredit = 0,
    } = formik.values;
    return (
      Number(accountsPayableLiabilities) +
      Number(taxes) +
      Number(otherCurrentLiabilities) +
      Number(lineofCredit)
    );
  };
  const totalShareholdersEquity =
    Number(formik.values.retainedEarnings) + totalNetIncome;
  const totalLiabilititesShareholdersEquity =
    calculateTotalLiabilities() + totalShareholdersEquity;
  const balance =
    calculateTotalCurrentAssets() +
    calculateTotalFixedAsset() -
    calculateTotalLiabilities() -
    totalShareholdersEquity;
  return (
    <>
      <div className="text-black mb-4">
        {
          <div className="p-3 rounded flex flex-col gap-5">
            <div className="mb-3 flex justify-between items-center">
              <div>
                <span className="text-xl font-semibold">Sale Details</span>
                <p>Update sale details from here (monthly)</p>
              </div>
              <div className="flex items-center">
                {mode === "view" ? (
                  <button
                    className="text-white bg-primary text-sm px-6 py-2 rounded-md"
                    onClick={() => {
                      setMode("edit");
                      if (openIndex < 0) setOpenIndex(1);
                    }}
                  >
                    EDIT
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      className="text-white bg-secondary text-sm px-6 py-2 rounded-md"
                      onClick={() => {
                        setMode("view");
                        setUser({ ...selectedSale, password: "" });
                      }}
                    >
                      CANCEL
                    </button>
                    <button
                      disabled={!actionLoader || actionLoader.profile}
                      className="flex items-center justify-center gap-4 px-6 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
                      onClick={() => updateUser()}
                    >
                      {actionLoader.profile && (
                        <ClipLoader size={20} color="#201F20" />
                      )}
                      SAVE
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div
              className="text-center rounded-md  bg-primary text-white py-2 cursor-pointer"
              onClick={() => setOpenIndex(1)}
            >
              <span className="text-lg font-medium">Income Statement</span>
            </div>
            {openIndex === 1 && (
              <>
                <div className="flex gap-4">
                  <span className="font-semibold">Total Orders</span>
                  <span className="">1,200</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold">Net Revenue</span>
                  <span className="">456000$</span>
                </div>
                <div className="flex align-middle gap-4">
                  <span className="font-semibold">Gross Margin</span>
                  <span className="">{grossMargin}$</span>
                  <span>
                    as{" "}
                    <span className="font-semibold">
                      {((grossMargin / 456000) * 100).toFixed(1)}
                    </span>
                    % of total rev
                  </span>
                </div>
                <div
                  className="bg-sky-200 py-2 text-center mt-3"
                  style={{ width: "13%" }}
                >
                  <span className="font-semibold">Cost of Goods Sold</span>
                </div>
                <div>
                  <div className="flex justify-between mt-3">
                    <div className="flex gap-4 items-center">
                      <span className="font-medium text-sm w-36">
                        Product Cost
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="productCost"
                          value={formik.values.productCost}
                          onChange={formik.handleChange}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="text-sm font-medium w-36">
                        Import duties & freight
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="dutiesFrieght"
                          value={formik.values.dutiesFrieght}
                          onChange={formik.handleChange}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="font-medium text-sm w-36">
                        Pick & pack, materials
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="pickPackMaterial"
                          value={formik.values.pickPackMaterial}
                          disabled={mode === "view"}
                          onChange={formik.handleChange}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className="flex gap-4 items-center">
                      <span className="font-medium text-sm w-36">
                        Other 3PL changes
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="lpChanges"
                          onChange={formik.handleChange}
                          value={formik.values.lpChanges}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="font-medium text-sm w-36">Shipping</span>
                      <div className="relative">
                        <input
                          type="text"
                          name="shipping"
                          onChange={formik.handleChange}
                          value={formik.values.shipping}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="font-medium text-sm w-36">
                        Merchant fees
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="merchantFee"
                          onChange={formik.handleChange}
                          value={formik.values.merchantFee}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 flex justify-center bg-gray-100">
                  <span className="font-medium text-sm  p-2">
                    Total COGS = {calculateTotalCOGS()}$
                  </span>
                </div>
                <div
                  className="bg-sky-200 py-2 text-center mt-3"
                  style={{ width: "13%" }}
                >
                  <span className="font-semibold">Operating Expenses</span>
                </div>
                <div>
                  <div className="flex justify-between mt-3">
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-sm w-36">
                        Personnel
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="personnel"
                          onChange={formik.handleChange}
                          value={formik.values.personnel}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm font-medium w-36">Ad spend</span>
                      <div className="relative">
                        <input
                          type="text"
                          name="adspend"
                          onChange={formik.handleChange}
                          value={formik.values.adspend}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-sm w-36">
                        Other Misc Marketing
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="miscMarketing"
                          onChange={formik.handleChange}
                          value={formik.values.miscMarketing}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-sm w-36">
                        Consultants
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="consultants"
                          onChange={formik.handleChange}
                          value={formik.values.consultants}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-sm w-36">
                        Depreciation
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="depreciation"
                          onChange={formik.handleChange}
                          value={formik.values.depreciation}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-sm w-36">
                        Insurance
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="insurance"
                          onChange={formik.handleChange}
                          value={formik.values.insurance}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-sm w-36">
                        Office rent
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="officeRent"
                          onChange={formik.handleChange}
                          value={formik.values.officeRent}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-sm w-36">Software</span>
                      <div className="relative">
                        <input
                          type="text"
                          name="software"
                          onChange={formik.handleChange}
                          value={formik.values.software}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-sm w-36">
                        Miscellaneous
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          name="miscellaneous"
                          onChange={formik.handleChange}
                          value={formik.values.miscellaneous}
                          disabled={mode === "view"}
                          className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          $
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 flex justify-center bg-gray-100">
                  <span className="font-medium text-sm  p-2">
                    Total OPEX = {calculateTotalOPEX()}$
                  </span>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="flex gap-3 items-center">
                    <span className="font-medium text-sm w-36">
                      Operating Income
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        value={grossMargin - calculateTotalOPEX()}
                        disabled={true}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-sm w-36">Interest</span>
                    <div className="relative">
                      <input
                        type="text"
                        name="interest"
                        onChange={formik.handleChange}
                        value={formik.values.interest}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-sm w-36">Taxes</span>
                    <div className="relative">
                      <input
                        type="text"
                        value={taxes}
                        disabled={true}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 flex justify-center bg-gray-100">
                  <span className="font-medium text-sm p-2">
                    Total Net Income = {totalNetIncome}$
                  </span>
                </div>
              </>
            )}
            <div
              className="text-center rounded-md bg-primary text-white py-2 cursor-pointer"
              onClick={() => setOpenIndex(2)}
            >
              <span className="text-lg font-medium">Balance Sheet</span>
            </div>
            {openIndex === 2 && (
              <>
                <div
                  className="bg-sky-200 py-2 text-center mt-3"
                  style={{ width: "13%" }}
                >
                  <span className="font-semibold">Current Assets</span>
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex gap-3 items-center">
                    <span className="font-medium text-sm w-35">Cash</span>
                    <div className="relative">
                      <input
                        name="cash"
                        onChange={formik.handleChange}
                        value={cash}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="font-medium text-sm w-35">Inventory</span>
                    <div className="relative">
                      <input
                        type="text"
                        name="inventoryCurrentAssets"
                        onChange={formik.handleChange}
                        value={formik.values.inventoryCurrentAssets}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="font-medium text-sm w-35">
                      Accounts Receivable
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        name="accountsReceivableCurrentAssets"
                        onChange={formik.handleChange}
                        value={formik.values.accountsReceivableCurrentAssets}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="font-medium text-sm w-35">
                      Other Current Assets
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        name="otherCurrentAssets"
                        onChange={formik.handleChange}
                        value={formik.values.otherCurrentAssets}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 flex justify-center bg-gray-100">
                  <span className="font-medium text-sm  p-2">
                    Total Current Assest = {calculateTotalCurrentAssets()}$
                  </span>
                </div>
                <div
                  className="bg-sky-200 py-2 text-center mt-3"
                  style={{ width: "13%" }}
                >
                  <span className="font-semibold">Fixed Assets</span>
                </div>
                <div className="flex mt-3">
                  <div className="flex gap-6 items-center mr-5">
                    <span className="font-medium text-sm w-36">
                      Software Platform
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        name="softwarePlatform"
                        onChange={formik.handleChange}
                        value={formik.values.softwarePlatform}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <span className="font-medium text-sm w-66">
                      Accumulated Depreciation
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        value={formik.values.depreciation}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 flex justify-center bg-gray-100">
                  <span className="font-medium text-sm  p-2">
                    Total Net Fixed Assets = {calculateTotalFixedAsset()}$
                  </span>
                </div>
                <div
                  className="bg-sky-200 py-2 text-center mt-3"
                  style={{ width: "13%" }}
                >
                  <span className="font-semibold">Liabilities</span>
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex gap-3 items-center">
                    <span className="font-medium text-sm w-35">
                      Accounts Payable
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        name="accountsPayableLiabilities"
                        onChange={formik.handleChange}
                        value={formik.values.accountsPayableLiabilities}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="font-medium text-sm w-35">
                      Tax Liability
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        value={taxes}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="font-medium text-sm w-35">
                      Other Current Liabilities
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        name="otherCurrentLiabilities"
                        onChange={formik.handleChange}
                        value={formik.values.otherCurrentLiabilities}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="font-medium text-sm w-35">
                      Line of credit
                    </span>
                    <div className="relative">
                      <input
                        name="lineofCredit"
                        value={formik.values.lineofCredit}
                        onChange={formik.handleChange}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 flex justify-center bg-gray-100">
                  <span className="font-medium text-sm  p-2">
                    Total Liabilities = {calculateTotalLiabilities()}$
                  </span>
                </div>
                <div
                  className="bg-sky-200 py-2 text-center mt-3"
                  style={{ width: "13%" }}
                >
                  <span className="font-semibold">Equity</span>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="flex gap-4 items-center">
                    <span className="font-medium text-sm w-36">
                      Retained Earnings
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        name="retainedEarnings"
                        onChange={formik.handleChange}
                        value={formik.values.retainedEarnings}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="text-sm font-medium w-36">Net Income</span>
                    <div className="relative">
                      <input
                        type="text"
                        value={totalNetIncome}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="font-medium text-sm w-36">
                      Total Shareholders Equity
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        value={totalShareholdersEquity}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center bg-gray-100">
                  <span className="font-medium text-sm  p-2">
                    Total Liabilities + Shareholder ={" "}
                    {totalLiabilititesShareholdersEquity}$
                  </span>
                </div>
                <div className="mb-5 flex justify-center bg-gray-100">
                  <span className="font-medium text-sm  p-2">
                    Balance = {balance}$
                  </span>
                </div>
              </>
            )}
            <div
              className="text-center rounded-md bg-primary text-white py-2 cursor-pointer"
              onClick={() => setOpenIndex(3)}
            >
              <span className="text-lg font-medium">Cash Flow Statement</span>
            </div>
            {openIndex === 3 && (
              <>
                <div
                  className="bg-sky-200 py-2 text-center mt-3"
                  style={{ width: "13%" }}
                >
                  <span className="font-semibold">Operating Cash Flow</span>
                </div>
                <div className="grid grid-cols-4 mt-5">
                  <div className="relative">
                    <span className="font-medium text-sm">Net Income</span>
                    <div className="">
                      <input
                        type="text"
                        value={totalNetIncome}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-16 top-6 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="font-medium text-sm w-35">
                      Accounts Payable
                    </span>
                    <div className="">
                      <input
                        type="text"
                        name="accountsPayableCashFlow"
                        onChange={formik.handleChange}
                        value={formik.values.accountsPayableCashFlow}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-16 top-6 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="font-medium text-sm">Depreciation</span>
                    <div className="">
                      <input
                        type="text"
                        name="depreciationCashFlow"
                        onChange={formik.handleChange}
                        value={formik.values.depreciationCashFlow}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-16 top-6 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="font-medium text-sm">
                      Accounts Receivable
                    </span>
                    <div className="">
                      <input
                        type="text"
                        name="accountsReceivableCashFlow"
                        onChange={formik.handleChange}
                        value={formik.values.accountsReceivableCashFlow}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-16 top-6 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4">
                  <div className="relative">
                    <span className="font-medium text-sm">Inventory</span>
                    <div className="">
                      <input
                        type="text"
                        name="inventoryCashFlow"
                        onChange={formik.handleChange}
                        value={formik.values.inventoryCashFlow}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-16 top-6 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="font-medium text-sm w-35">Tax Paid</span>
                    <div className="">
                      <input
                        type="text"
                        name="taxPaid"
                        onChange={formik.handleChange}
                        value={formik.values.taxPaid}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-16 top-6 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="font-medium text-sm">
                      Other Current Liabilities
                    </span>
                    <div className="">
                      <input
                        type="text"
                        name="otherCurrentLiabilitiesCashFlow"
                        onChange={formik.handleChange}
                        value={formik.values.otherCurrentLiabilitiesCashFlow}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-16 top-6 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="font-medium text-sm">
                      Other Current Assets
                    </span>
                    <div className="">
                      <input
                        type="text"
                        name="otherCurrentAssetsCashFlow"
                        onChange={formik.handleChange}
                        value={formik.values.otherCurrentAssetsCashFlow}
                        disabled={mode === "view"}
                        className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-6"
                      />
                      <div className="absolute inset-y-0 right-16 top-6 flex items-center pr-3 pointer-events-none">
                        $
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 flex justify-center bg-gray-100">
                  <span className="font-medium text-sm  p-2">
                    Total Operating Cash Flow = 3000$
                  </span>
                </div>
                <div
                  className="bg-sky-200 py-2 text-center mt-3"
                  style={{ width: "16%" }}
                >
                  <span className="font-semibold">
                    Cash Flow from Investing
                  </span>
                </div>
                <div>
                  <span className="font-medium text-sm">
                    Capex (Asset Purchases) 3000$
                  </span>
                </div>
                <div className="flex justify-center bg-gray-100">
                  <span className="font-medium text-sm  p-2">
                    Investing Cash Flow = 3000$
                  </span>
                </div>
                <div className="mb-5 flex justify-center bg-gray-100">
                  <span className="font-medium text-sm  p-2">
                    Free Cash Flow = 3000$
                  </span>
                </div>
              </>
            )}
          </div>
        }
      </div>
    </>
  );
}

export default SaleTabs;
