import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import Slider from "react-slick";
import {
  MdArrowBack,
  MdCategory,
  MdClose,
  MdKeyboardArrowRight,
  MdPerson,
} from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import NestedList from "./Sub";
import { Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import http from "../../../api";

export default function CategoryDrawer() {
  const user = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [categoryTree, setCategoryTree] = useState([]);

  // const [activeCat, setctiveCat] = useState("");
  const [subOpen, setSubOpen] = useState([]);
  const [subOpen1, setSubOpen1] = useState(Array(subOpen.length).fill(false));
  const [selectedParent, setSelectedParent] = useState("");
  // const [subOpen2, setSubOpen2] = useState([]);

  const toggleDrawer = (newOpen) => () => {
    setActiveStep(0);
    setSubOpen([]);
    setSubOpen1([]);
    // setSubOpen1([]);
    setOpen(newOpen);
  };
  const [activeStep, setActiveStep] = useState(0);
  const sliderRef = useRef();
  const handleNext = () => {
    setActiveStep(1);
    sliderRef.current.slickGoTo(1);
    return 1;
  };
  const handleBack = () => {
    setSelectedParent("");
    setSubOpen([]);
    setSubOpen1([]);
    setActiveStep(0);
    sliderRef.current.slickGoTo(0);
    return 0;
  };

  useEffect(() => {
    const getCategories = () => {
      http
        .get("/category/all")
        .then((res) => {
          setCategoryTree(res.data.data);
        })
        .catch(() => {
          toast.error("Something went wrong.");
        });
    };
    getCategories();
  }, []);

  const steps = [
    {
      list: (
        <List
          sx={{
            width: "100%",
            // maxWidth: "200px",
            // minWidth: "200px",
            // p: 0,
            // borderRadius: "8px",
            // background: "white",
            // boxShadow: 3,
            // marginRight: "5px",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     <MdKeyboardArrowLeft
          //       onClick={() => {
          //         setOpen(false);
          //       }}
          //     />
          //   </ListSubheader>
          // }
        >
          {categoryTree?.map((category, index) => (
            <>
              <ListItemButton
                sx={
                  {
                    py: 1.3,
                    px: 2,
                    display: "flex",
                    justifyContent: "space-between",
                  }
                  // subOpen.length === category?.subCategories?.length &&
                  // subOpen[0]?.name === category?.subCategories[0]?.name
                  //   ? { color: "orange", background: "#F6F5F5", p: 1, py: 0.5 }
                  //   : { p: 1, py: 0.5 }
                }
                key={index}
                onClick={() => {
                  toggleDrawer(true);
                  if (
                    category?.subCategories &&
                    category?.subCategories?.length > 0
                  ) {
                    setSelectedParent(category?.name);
                    setSubOpen(category?.subCategories);
                    handleNext();
                  } else {
                    setSubOpen([]);
                  }
                  // setSubOpen1([]);
                }}
              >
                {/* <MdCategory style={{ marginRight: "6px" }} /> */}
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  {category?.name}
                </Typography>
                {category?.subCategories &&
                  category?.subCategories?.length > 0 && (
                    <MdKeyboardArrowRight style={{ marginLeft: "6px" }} />
                  )}
              </ListItemButton>
            </>
          ))}
        </List>
      ),
    },
    {
      list: (
        <>
          {activeStep === 1 && (
            <>
              <Paper
                onClick={handleBack}
                square
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 1.5,
                  pl: 2,
                  borderBottom: "0.5px solid lightgray",
                  cursor: "pointer",
                }}
              >
                <MdArrowBack size={18} />
                <Typography sx={{ pl: 1, fontWeight: "bold" }}>
                  Main Menu
                </Typography>
              </Paper>
              {selectedParent && (
                <Paper
                  square
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 1.5,
                    pl: 2,
                    borderBottom: "0.5px solid lightgray",
                    cursor: "pointer",
                  }}
                >
                  <Typography sx={{ fontWeight: "bolder" }}>
                    {selectedParent}
                  </Typography>
                </Paper>
              )}
            </>
          )}
          <NestedList open={subOpen1} setOpen={setSubOpen1} subOpen={subOpen} />
          ,
        </>
      ),
    },
  ];
  const options = {
    dots: false,
    arrows: false,
    fade: false,
    className: "center",
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 200,
    autoplay: false,
  };
  const DrawerList = (
    <>
      <Slider
        {...options}
        ref={sliderRef}
        style={{
          background: "white",
          maxWidth: "320px",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {steps.map((o, i) => (
          <Box sx={{ height: "92vh", overflow: "auto" }} key={i + 1}>
            {o?.list}
          </Box>
        ))}
      </Slider>

      {/* <Box
        sx={{
          maxWidth: 250,
          width: 250,
          height: "100%",
          flexGrow: 1,
          overflow: "hidden",
          // background: "gray",
          // display: "felx",
          // flexDirection: "column",
        }}
      >
        {activeStep === 1 && (
          <Paper
            onClick={activeStep === 0 ? handleNext : handleBack}
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              py: 1.5,
              pl: 2,
              borderBottom: "0.5px solid lightgray",
              cursor: "pointer",
            }}
          >
            <MdArrowBack />
            <Typography sx={{ pl: 1 }}>Main Menu</Typography>
          </Paper>
        )}
        <Box
          sx={{
            pb: 2,
            height: "100%",
            // background: "white",
            maxWidth: 250,
            width: 250,
            overflow: "auto",
            // background: "gray",
          }}
        >
          {steps[activeStep].list}
        </Box>
      </Box> */}
    </>
  );

  return (
    <>
      {categoryTree.length > 0 && !open && (
        <div
          onClick={toggleDrawer(true)}
          className="model"
          style={{
            position: "absolute",
            zIndex: 300000,
            top: "50%",
            left: "5%",
            transform: "translate(-50%, -50%)",
            background: "rgba(39, 39, 39, 0.992)",
            borderRadius: "50%",
            padding: "0.5rem",
            cursor: "pointer",
          }}
        >
          <MdCategory color="white" size={28} />
        </div>
      )}
      {/* <SlideFromContainer /> */}
      <Drawer
        onClose={toggleDrawer(false)}
        sx={{ height: "100%", maxWidth: "320px" }}
        open={open}
        anchor={"left"}
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            py: 1.5,
            pl: 1,
            background: "#111",
            color: "white",
          }}
        >
          <Typography sx={{ ml: 1,fontWeight:'bold' }}>Categories</Typography>
        </Paper>

        {DrawerList}
      </Drawer>
    </>
  );
}
