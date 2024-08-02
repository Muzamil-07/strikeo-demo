import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Box, Typography } from "@mui/material";

export default function NestedList({ subOpen = [] }) {
  const [open, setOpen] = React.useState(Array(subOpen.length).fill(false));

  // const handleClick = () => {
  //   setOpen(!open);
  // };
  const handleToggle = (index) => {
    const newOpenState = [...open];
    newOpenState[index] = !newOpenState[index];
    setOpen(newOpenState);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        // maxWidth: "200px",
        // minWidth: "200px",
        p: 0,
        borderRadius: "8px",
        background: "white",
        boxShadow: 1,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      //   subheader={
      //     <ListSubheader component="div" id="nested-list-subheader">
      //       Nested List Items
      //     </ListSubheader>
      //   }
    >
      {subOpen.map((category, index) => (
        <React.Fragment key={index}>
          <ListItemButton
            sx={{ p: 1, py: 0.5 }}
            onClick={() => {
              if (category?.subcategories && category?.subcategories.length > 0)
                handleToggle(index);
            }}
            key={index}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {category?.name}
            </Typography>
            {category?.subcategories && category?.subcategories.length > 0 ? (
              open[index] ? (
                <MdArrowDropUp style={{ marginLeft: "6px" }} />
              ) : (
                <MdArrowDropDown style={{ marginLeft: "6px" }} />
              )
            ) : null}
          </ListItemButton>
          {category?.subcategories && category?.subcategories.length > 0 && (
            <Collapse
              in={open[index]}
              timeout="auto"
              unmountOnExit
              key={`collapse-${index}`}
            >
              {/* <div style={{ width: "100%" }}>
                <Box
                  sx={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    display: "flex",
                    // gridTemplateColumns: "repeat(3, 1fr)",
                    width: "100%",
                    p: 0,
                  }}
                >
                  {category.subcategories.map((subCategory, subIndex) => (
                    <Box
                      key={subIndex}
                      sx={{
                        p: 1,
                        m: 1,
                        borderRadius: 2,
                        background: "White",
                        height: "50px",
                        minWidth: "50px",
                        border: "1px solid gray",
                      }}
                    ></Box>
                  ))}
                </Box>
              </div> */}
              <List component="div" sx={{ p: 0 }}>
                {category.subcategories.map((subCategory, subIndex) => (
                  <ListItemButton sx={{ pl: 2, py: 0.5 }} key={subIndex}>
                    <Typography sx={{ fontSize: "13px" }}>
                      {subCategory.name}
                    </Typography>
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
