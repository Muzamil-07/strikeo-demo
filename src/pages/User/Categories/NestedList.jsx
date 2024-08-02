import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import NestedList from "./NestedList";
// import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import Collapse from "@mui/material/Collapse";
import { MdCategory, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import NestedList from "./Sub";
import { Typography } from "@mui/material";
// import { MdExpandMore } from "react-icons/md";

export default function CategoryDrawer() {
  const [open, setOpen] = useState(false);

  // const [activeCat, setctiveCat] = useState("");
  const [subOpen, setSubOpen] = useState([]);
  // const [subOpen1, setSubOpen1] = useState([]);
  // const [subOpen2, setSubOpen2] = useState([]);

  // const handleClick = (subArr) => {
  //   setSubOpen(subArr);
  // };
  const toggleDrawer = (newOpen) => () => {
    setSubOpen([]);
    // setSubOpen1([]);
    setOpen(newOpen);
  };

  const categories = [
    {
      name: "Motorcycle",
      subcategories: [
        { name: "Electric Bikes", imageUrl: "/path/to/electric-bikes.jpg" },
        {
          name: "Standard Bikes",
          imageUrl: "/path/to/standard-bikes.jpg",
          subcategories: [
            {
              name: "Electric Bikes njfd jngdf jdfbg  jfgd",
              imageUrl: "/path/to/electric-bikes.jpg",
            },
            {
              name: "Standard Bikes",
              imageUrl: "/path/to/standard-bikes.jpg",
            },
            {
              name: "Standard Bikes",
              imageUrl: "/path/to/standard-bikes.jpg",
            },
            {
              name: "Standard Bikes",
              imageUrl: "/path/to/standard-bikes.jpg",
            },
          ],
        },
        {
          name: "Standard Bikes",
          imageUrl: "/path/to/standard-bikes.jpg",
          subcategories: [
            {
              name: "Electric Bikes njfd jngdf jdfbg  jfgd",
              imageUrl: "/path/to/electric-bikes.jpg",
            },
            {
              name: "Standard Bikes",
              imageUrl: "/path/to/standard-bikes.jpg",
            },
            {
              name: "Standard Bikes",
              imageUrl: "/path/to/standard-bikes.jpg",
            },
            {
              name: "Standard Bikes",
              imageUrl: "/path/to/standard-bikes.jpg",
            },
          ],
        },
        {
          name: "Standard Bikes",
          imageUrl: "/path/to/standard-bikes.jpg",
          subcategories: [
            {
              name: "Electric Bikes njfd jngdf jdfbg  jfgd",
              imageUrl: "/path/to/electric-bikes.jpg",
            },
            {
              name: "Standard Bikes",
              imageUrl: "/path/to/standard-bikes.jpg",
            },
            {
              name: "Standard Bikes",
              imageUrl: "/path/to/standard-bikes.jpg",
            },
            {
              name: "Standard Bikes",
              imageUrl: "/path/to/standard-bikes.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Car",
      subcategories: [
        {
          name: "Electric Cars",
          imageUrl: "/path/to/electric-cars.jpg",
        },
        {
          name: "Gasoline Cars",
          imageUrl: "/path/to/gasoline-cars.jpg",
          subcategories: [
            {
              name: "Compact Cars",
              imageUrl: "/path/to/compact-cars.jpg",
            },
            {
              name: "SUVs",
              imageUrl: "/path/to/suvs.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Vehicle",
      subcategories: [
        {
          name: "Hybrid Cars",
          imageUrl: "/path/to/hybrid-cars.jpg",
        },
        {
          name: "Diesel Cars",
          imageUrl: "/path/to/diesel-cars.jpg",
          subcategories: [
            {
              name: "Sedans",
              imageUrl: "/path/to/sedans.jpg",
            },
            {
              name: "Trucks",
              imageUrl: "/path/to/trucks.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Automobile",
      subcategories: [
        {
          name: "Hydrogen Cars",
          imageUrl: "/path/to/hydrogen-cars.jpg",
        },
        {
          name: "Flex-fuel Vehicles",
          imageUrl: "/path/to/flex-fuel-vehicles.jpg",
          subcategories: [
            {
              name: "Coupes",
              imageUrl: "/path/to/coupes.jpg",
            },
            {
              name: "Vans",
              imageUrl: "/path/to/vans.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Automotive",
      subcategories: [
        {
          name: "Plug-in Hybrid Cars",
          imageUrl: "/path/to/plugin-hybrid-cars.jpg",
        },
        {
          name: "Biofuel Cars",
          imageUrl: "/path/to/biofuel-cars.jpg",
          subcategories: [
            {
              name: "Hatchbacks",
              imageUrl: "/path/to/hatchbacks.jpg",
            },
            {
              name: "Crossovers",
              imageUrl: "/path/to/crossovers.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Transport",
      subcategories: [
        {
          name: "Natural Gas Vehicles",
          imageUrl: "/path/to/natural-gas-vehicles.jpg",
        },
        {
          name: "Ethanol Cars",
          imageUrl: "/path/to/ethanol-cars.jpg",
          subcategories: [
            {
              name: "Convertibles",
              imageUrl: "/path/to/convertibles.jpg",
            },
            {
              name: "Minivans",
              imageUrl: "/path/to/minivans.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Auto",
      subcategories: [
        {
          name: "Propane Vehicles",
          imageUrl: "/path/to/propane-vehicles.jpg",
        },
        {
          name: "Electric Scooters",
          imageUrl: "/path/to/electric-scooters.jpg",
          subcategories: [
            {
              name: "Roadsters",
              imageUrl: "/path/to/roadsters.jpg",
            },
            {
              name: "ATVs",
              imageUrl: "/path/to/atvs.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Truck",
      subcategories: [
        {
          name: "CNG Cars",
          imageUrl: "/path/to/cng-cars.jpg",
        },
        {
          name: "Biodiesel Cars",
          imageUrl: "/path/to/biodiesel-cars.jpg",
          subcategories: [
            {
              name: "SUV Coupes",
              imageUrl: "/path/to/suv-coupes.jpg",
            },
            {
              name: "Pickup Trucks",
              imageUrl: "/path/to/pickup-trucks.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Vehicle",
      subcategories: [
        {
          name: "LPG Vehicles",
          imageUrl: "/path/to/lpg-vehicles.jpg",
        },
        {
          name: "Electric Bicycles",
          imageUrl: "/path/to/electric-bicycles.jpg",
          subcategories: [
            {
              name: "Minibuses",
              imageUrl: "/path/to/minibuses.jpg",
            },
            {
              name: "Cargo Vans",
              imageUrl: "/path/to/cargo-vans.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Automobile",
      subcategories: [
        {
          name: "Flex-fuel Cars",
          imageUrl: "/path/to/flex-fuel-cars.jpg",
        },
        {
          name: "Autonomous Vehicles",
          imageUrl: "/path/to/autonomous-vehicles.jpg",
          subcategories: [
            {
              name: "Sports Cars",
              imageUrl: "/path/to/sports-cars.jpg",
            },
            {
              name: "Hovercrafts",
              imageUrl: "/path/to/hovercrafts.jpg",
            },
          ],
        },
      ],
    },
    {
      name: "Transportation",
      subcategories: [
        {
          name: "LNG Vehicles",
          imageUrl: "/path/to/lng-vehicles.jpg",
        },
        {
          name: "Electric Skateboards",
          imageUrl: "/path/to/electric-skateboards.jpg",
          subcategories: [
            {
              name: "Limousines",
              imageUrl: "/path/to/limousines.jpg",
            },
            {
              name: "Utility Vans",
              imageUrl: "/path/to/utility-vans.jpg",
            },
          ],
        },
      ],
    },
  ];

  const DrawerList = (
    <Box
      sx={{
        overFlow: "auto",
        height: "100%",
        display: "flex",
        background: "#F6F5F5",
        color: "gray",
        fontWeight: "bold",
        padding: "8px",
        alignItems: "start",
        // flexWrap: "wrap",
      }}
      role="presentation"
      onMouseLeave={() => {
        setSubOpen([]);
        // setSubOpen1([]);
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "start",

          gap: "0px 2px",
          width: "100%",
          maxWidth: "60%",
          // flexWrap: "wrap",
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: "200px",
            minWidth: "200px",
            p: 0,
            borderRadius: "8px",
            background: "white",
            boxShadow: 3,
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
          {categories.map((category, index) => (
            <>
              <ListItemButton
                sx={
                  subOpen.length === category?.subcategories?.length &&
                  subOpen[0]?.name === category?.subcategories[0]?.name
                    ? { color: "orange", background: "#F6F5F5", p: 1, py: 0.5 }
                    : { p: 1, py: 0.5 }
                }
                key={index}
                onMouseEnter={() => {
                  toggleDrawer(true);
                  if (
                    category?.subcategories &&
                    category?.subcategories?.length > 0
                  ) {
                    setSubOpen(category?.subcategories);
                  } else {
                    setSubOpen([]);
                  }
                  // setSubOpen1([]);
                }}
              >
                <MdCategory style={{ marginRight: "6px" }} />
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  {category?.name}
                </Typography>
                {category?.subcategories &&
                  category?.subcategories?.length > 0 && (
                    <MdKeyboardArrowRight />
                  )}
              </ListItemButton>
            </>
          ))}
        </List>
        {subOpen?.length > 0 && (
          <Box sx={{ width: "100%", maxWidth: "40%" }}>
            <NestedList subOpen={subOpen} />
          </Box>
          // <List
          //   component="div"
          //   sx={{
          //     width: "100%",
          //     maxWidth: "200px",
          //     minWidth: "200px",
          //     borderRadius: "8px",
          //     background: "white",
          //     boxShadow: 2,
          //     p: 0,
          //   }}
          // >
          //   {subOpen.map((category, index) => (
          //     <>
          //       <ListItemButton
          //         sx={
          //           subOpen1.length === category?.subcategories?.length &&
          //           subOpen1[0]?.name === category?.subcategories[0]?.name
          //             ? {
          //                 color: "orange",
          //                 background: "#F6F5F5",
          //                 p: 1,
          //                 py: 0.5,
          //               }
          //             : { p: 1, py: 0.5 }
          //         }
          //         key={index}
          //         onMouseEnter={() => {
          //           toggleDrawer(true);
          //           if (
          //             category?.subcategories &&
          //             category?.subcategories?.length > 0
          //           ) {
          //             setSubOpen1(category?.subcategories);
          //           } else {
          //             setSubOpen1([]);
          //           }
          //         }}
          //       >
          //         <ListItemText primary={category?.name} />
          //         {category?.subcategories &&
          //           category?.subcategories?.length > 0 && (
          //             <MdKeyboardArrowRight />
          //           )}
          //       </ListItemButton>
          //     </>
          //   ))}
          // </List>
        )}
        {/* {subOpen1?.length > 0 && (
          <List
            component="div"
            sx={{
              width: "100%",
              maxWidth: "200px",
              minWidth: "200px",
              borderRadius: "8px",
              background: "white",
              boxShadow: 2,
              p: 0,
            }}
          >
            {subOpen1.map((category, index) => (
              <>
                <ListItemButton
                  sx={
                    subOpen1.length === category?.subcategories?.length &&
                    subOpen1[0]?.name === category?.subcategories[0]?.name
                      ? {
                          color: "orange",
                          background: "#F6F5F5",
                          p: 1,
                          py: 0.5,
                        }
                      : { p: 1, py: 0.5 }
                  }
                  key={index}
                  onMouseEnter={() => {
                    toggleDrawer(true);
                    if (
                      category?.subcategories &&
                      category?.subcategories?.length > 0
                    ) {
                    } else {
                    }
                  }}
                >
                  <ListItemText primary={category?.name} />
                  {category?.subcategories &&
                    category?.subcategories?.length > 0 && (
                      <MdKeyboardArrowRight />
                    )}
                </ListItemButton>
              </>
            ))}
          </List>
        )} */}
      </div>

      {/* <div style={{ width: "100%", maxWidth: "40%" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[...subOpen, ...subOpen1].map((o, i) => (
            <Box
              key={i + 1}
              sx={{
                p: 1,
                m: 1,
                borderRadius: 2,
                fontSize: "0.875rem",
                fontWeight: "700",
                background: "White",
                display: "flex",
                height: "100px",
                width: "100px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {o?.name || "Products"}
            </Box>
          ))}
        </Box>
      </div> */}
    </Box>
  );

  return (
    <>
      {!open && (
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
      <Drawer
        onClose={toggleDrawer(false)}
        sx={{ height: "100%" }}
        open={open}
        anchor={"bottom"}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}
