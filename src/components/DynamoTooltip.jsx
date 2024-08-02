import Tooltip from "@mui/material/Tooltip";

const MyTooltip = ({ children, title, isOpen }) => {
//   console.log({title})
  return (
    <>
      {
        <Tooltip title={title} placement="top" arrow>
          {children}
        </Tooltip>
      }
    </>
  );
};

export default MyTooltip;
