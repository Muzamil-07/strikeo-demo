import Tooltip from "@mui/material/Tooltip";

const MyTooltip = ({ children, title, isOpen }) => {
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
