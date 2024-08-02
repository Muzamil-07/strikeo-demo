import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Tooltip } from "@mui/material";
import { TbFilterFilled } from "react-icons/tb";

const ITEM_HEIGHT = 48;

export default function LongMenu({
  selectedCategory = null,
  setSelectedCategory,
}) {
  const [element, setElement] = React.useState(null);
  const open = Boolean(element);

  const handleClick = (event) => {
    setElement(true);
  };

  const handleClose = () => {
    setSelectedCategory(false);
  };

  return (
    <div>
      <Tooltip title="Filter list">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={"true"}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <TbFilterFilled />
        </IconButton>
      </Tooltip>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        open={open}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "auto",
            maxWidth: "50%",
            overflow: "auto",
          },
        }}
      ></Menu>
    </div>
  );
}
