import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setContentVisibilty } from "../../../redux/slices/ContentVisibility";
import { useDispatch } from "react-redux";

export default function NestedList({ subOpen = [], open, setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [open, setOpen] = React.useState(Array(subOpen.length).fill(false));

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
        // height: "100%",

        // maxWidth: "200px",
        // minWidth: "200px",
        // p: 0,
        // borderRadius: "8px",
        // background: "white",
        // boxShadow: 1,
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
            sx={{
              justifyContent: "space-between",
              display: "flex",
              py: 1.3,
              px: 2,
              // borderBottom:
              //   category?.subSubCategories && category?.subSubCategories.length > 0
              //     ? "0.5px solid lightgray"
              //     : "none",
            }}
            onClick={() => {
              if (
                category?.subSubCategories &&
                category?.subSubCategories.length > 0
              )
                handleToggle(index);
            }}
            key={index}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {category?.name}
            </Typography>
            {category?.subSubCategories &&
            category?.subSubCategories.length > 0 ? (
              open[index] ? (
                <MdArrowDropUp style={{ marginLeft: "6px" }} />
              ) : (
                <MdArrowDropDown style={{ marginLeft: "6px" }} />
              )
            ) : null}
          </ListItemButton>
          {category?.subSubCategories &&
            category?.subSubCategories.length > 0 && (
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
                  {category.subSubCategories.map((subCategory, subIndex) => (
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
                  {category.subSubCategories.map((subCategory, subIndex) => (
                    <ListItemButton
                      sx={{ py: 1.3, px: 2 }}
                      key={subIndex}
                      onClick={() => {
                        if (subCategory?.name) {
                          navigate("/products/category/" + subCategory?.name, {
                            state: {
                              category: subCategory?.name,
                              item: category?.name || "laptop",
                            },
                          });
                          dispatch(setContentVisibilty(true));
                        }
                      }}
                    >
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
