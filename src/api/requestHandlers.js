import { toast } from "react-toastify";

export const ErrorMessages = (error) => {
  let mesg = "";
  if (error?.response) {
    mesg =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "Error in server response!";

    // toast.error(mesg);a
    // The request was made, but the server responded with a status code that falls out of the range of 2xx
    // throw {
    //   message: mesg,
    // };
  } else if (error?.request) {
    mesg = "Server not responding!";
    // toast.error("Server not responding!");
    // The request was made but no response was received
    // throw { message: "Server not responding!" };
  } else {
    mesg = "Error in making the request";
    // toast.error("Error in making the request");
    // Something happened in setting up the request that triggered an error
    // throw { message: "Error in making the request" };
  }
  toast.error(mesg);
  console.error(error);
  return { message: mesg };
};
export const successMessages = ({ data = null }) => {
  let mesg = "";
  if (data?.status === 200 || data?.status === 201) {
    const { data: resp = null } = data;
    if (typeof resp === "string") {
      mesg = resp;
    } else {
      mesg = "Action Successfull!";
    }
  } else if (data) {
    mesg = typeof data === "string" ? data : "Action Successfull!";
  } else {
    mesg = "Empty response from server!";
    console.log(data);
  }
  toast.success(mesg);
  return { message: mesg };
};
