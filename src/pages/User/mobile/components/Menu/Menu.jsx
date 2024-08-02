import {
  SwipeableDrawer,
  Stack,
  Typography,
  Box,
  Avatar,
  Divider,
} from "@mui/material";
import { persistStore } from "redux-persist";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { MdArrowRight } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { StyledTreeItem } from "../../theme/themes";
import { store as reduxStore } from "./../../../../../redux/store";
import { TbCheckupList } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { BsBox2HeartFill } from "react-icons/bs";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { nodeAPI } from "../../../../../services/nodeApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setContentVisibilty } from "../../../../../redux/slices/ContentVisibility";
import { CiLogout } from "react-icons/ci";
import { logout } from "../../../../../redux/slices/User";
import { removeBillingAddress } from "../../../../../redux/slices/Billing";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { CiLogin } from "react-icons/ci";

const Menu = ({ menuState, toggleMenu, categories=[], setIsFavouritesOpen }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const persistor = persistStore(reduxStore);
    dispatch(logout());
    dispatch(nodeAPI.util.resetApiState());
    dispatch(removeBillingAddress());
    Cookies.remove("jwt");
    await persistor.purge();
    toast.success("You have been logged out!");
    navigate("/login");
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={menuState}
      onClose={toggleMenu}
      onOpen={toggleMenu}
      style={{ zIndex: 400000 }}
    >
      <Box px={10} pt={3} pb={2}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ width: 56, height: 56 }}></Avatar>
        </Box>

        {user.isLoggedIn ? (
          <>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "grey",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              {user.details.firstName + " " + user.details.lastName}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "grey",
                textAlign: "center",
              }}
            >
              {user.details.email}
            </Typography>
          </>
        ) : (
          <>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "grey",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              Guest
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "grey",
                textAlign: "center",
              }}
            >
              Currently browsing as guest
            </Typography>
          </>
        )}

        {user.isLoggedIn ? (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              background: "#111",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            <Stack direction="row" alignItems="center" justifyContent="center">
              <CiLogout size={20} color="white" />
              <span style={{ marginLeft: "5px", color: "white" }}>Logout</span>
            </Stack>
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              background: "#111",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Link to="/login">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <CiLogin size={20} color="white" />
                <span style={{ marginLeft: "5px", color: "white" }}>Login</span>
              </Stack>
            </Link>
          </Box>
        )}
      </Box>
      <Divider mb={3} />
      <TreeView
        aria-label="Categories"
        defaultExpanded={["4"]}
        defaultCollapseIcon={<MdArrowRight size={40} />}
        defaultExpandIcon={<MdArrowDropDown size={40} />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{
          height: 264,
          flexGrow: 1,
          maxWidth: 400,
          maxHeight: "75vh",
          overflowY: "auto",
          marginTop: "1rem",
          msOverflowStyle: "none",
          scrollbarColor: "red",
        }}
      >
        <StyledTreeItem
          nodeId="1"
          labelText="Home"
          labelIcon={FaHome}
          onClick={() => navigate("/")}
        />
        {user.isLoggedIn && (
          <>
            <StyledTreeItem
              nodeId="2"
              labelText="Orders"
              labelIcon={TbCheckupList}
              onClick={() => navigate("/orders")}
            />
            <StyledTreeItem
              nodeId="3"
              labelText="Review Products"
              labelIcon={MdOutlineRateReview}
              onClick={() => navigate("/review-products")}
            />
            <StyledTreeItem
              nodeId="4"
              labelText="Favourite Items"
              labelIcon={BsBox2HeartFill}
              onClick={() => {
                toggleMenu();
                setIsFavouritesOpen(true);
              }}
            />
          </>
        )}
        {/* <StyledTreeItem
          nodeId="5"
          labelText="Categories"
          labelIcon={BiSolidCategoryAlt}
        >
          {categories &&
            categories.data.map((category, index) => {
              if (!category.subCategories)
                return (
                  <Link
                    key={`c-${index + 1}`}
                    to={`/products/category/${category.name}`}
                    state={{
                      category: category.name,
                      item: "laptop",
                    }}
                    onClick={() => dispatch(setContentVisibilty(true))}
                  >
                    <StyledTreeItem
                      nodeId={`c-${index + 1}`}
                      labelText={category.name}
                    />
                  </Link>
                );
              else
                return (
                  <StyledTreeItem
                    nodeId={`c-${index + 1}`}
                    key={`c-${index + 1}`}
                    labelText={category.name}
                  >
                    {category.subCategories.map((subCat, subIndex) => (
                      <Link
                        to={`/products/category/${category.name}`}
                        state={{
                          category: category.name,
                          item: "laptop",
                        }}
                        key={`s-${index + 1}-${subIndex + 1}`}
                        onClick={() => dispatch(setContentVisibilty(true))}
                      >
                        <StyledTreeItem
                          nodeId={`s-${index + 1}-${subIndex + 1}`}
                          key={`s-${index + 1}-${subIndex + 1}`}
                          labelText={subCat.name}
                        />
                      </Link>
                    ))}
                  </StyledTreeItem>
                );
            })}
        </StyledTreeItem> */}
        <Divider sx={{ marginBlock: "0.6rem" }} />
        <StyledTreeItem
          nodeId="6"
          labelText="Privacy Policy"
          onClick={() => {
            navigate("/privacy-policy");
          }}
        />
        {/* <StyledTreeItem
          nodeId="7"
          labelText="Terms of Service"
          onClick={() => {
            navigate("/terms-conditions");
          }}
        /> */}
        <StyledTreeItem
          nodeId="7"
          labelText="Terms and Conditions"
          onClick={() => {
            navigate("/terms-conditions");
          }}
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Cookie Policy"
          onClick={() => {
            navigate("/cookies");
          }}
        />
        {/* <StyledTreeItem
          nodeId="9"
          labelText="Shipping Policy"
          onClick={() => {
            navigate("/refund-policy");
          }}
          
        /> */}
        <StyledTreeItem
          nodeId="9"
          labelText="Refund Policy"
          onClick={() => {
            navigate("/refund-policy");
          }}
          
        />
        <StyledTreeItem
          nodeId="9"
          labelText="About Us"
          onClick={() => {
            navigate("/about");
          }}
          
        />
      </TreeView>
    </SwipeableDrawer>
  );
};

export default Menu;
