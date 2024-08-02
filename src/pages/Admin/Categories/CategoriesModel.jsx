import { useEffect, useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { TreeView } from "@mui/x-tree-view/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { 
  Stack, 
  Button, 
  Box, 
  Alert, 
  Typography, 
  Modal, 
  Tooltip, 
  SvgIcon, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogTitle, 
  DialogContent, 
  DialogContentText 
} from '@mui/material';
import {
  TreeItem,
  treeItemClasses,
} from "@mui/x-tree-view/TreeItem";
import { v4 as uuidv4 } from "uuid";
import http from "../../../api";
import { toast } from "react-toastify";

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14, }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

const StyledTreeItem = styled((props) => <TreeItem {...props} />)(
  ({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
      "& .close": {
        opacity: 0.3,
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 15,
      paddingLeft: 18,
      marginTop: 8,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
    [`& .MuiTreeItem-content.Mui-selected`]: {
      backgroundColor: 'white !important',
    },
  })
);

const Style = {
  modal:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    height: '80vh',
    outline:'none',
    border:'none',
    bgcolor: 'background.paper',
    borderRadius:2,
    boxShadow: 24,
    p: 4,
  },
  scrolableBox: {
    overflowY:'scroll',
    maxHeight:`80%`
  },
  plusSquareButton: { 
    mt: 2,
    color: 'black',
    ':Select': {
      backgroundColor:'white',
    }
   },
  input: { 
    flexGrow: 1, 
    maxWidth: "80%" ,
    marginTop:'.5rem !important'
  },
  submit:{
     width:`90%`, 
     position: 'fixed',
     bottom:20,
     backgroundColor:`rgb(32 32 32)` ,
     color: 'white',
     ':hover': {
      backgroundColor: 'rgba(32, 32, 32, 0.8)',
    }
    }
};

const ConfirmClsoeDialog = function({dialogState, modalState}){
  const handleDialogClose = ()=>{
    dialogState.set(false);
  }

  const handleModalClose = () =>{
    modalState.set(false);
  }

  return(
    <Dialog
    open={dialogState.get}
    onClose={handleDialogClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Unsubmitted Changes"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      It looks like you have unsaved changes. Are you sure you want to close this window? Your changes will be lost if you don't save them.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleModalClose} color={'warning'}>Discard Changes</Button>
      <Button onClick={handleDialogClose} autoFocus color={'info'}>
      Continue Editing
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default function CustomizedTreeView({modalState, categoryId}) {
  const [nodes, setNodes] = useState([createNode("category")]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [actionLoader, setActionLoader] = useState(false);
  
  useEffect(()=>{
   console.log("nodes",nodes )
  },[nodes])

  const addCategory = (_categoryTree) => {
    setActionLoader(true);
    http
      .post("/category", _categoryTree)
      .then((res) => {
        console.log(res,"---")
        modalState.set(false);
        toast.success("Category added successfully.");
      })
      .catch(() => {
        setAlertMessage("Something went wrong.");
      })
      .finally(() => setActionLoader(false));
  };

  const editCategory = (_categoryTree) => {
    setActionLoader(true);
    http
      .patch("/category/" + categoryId, _categoryTree)
      .then((res) => {
        console.log(res,"---")
        modalState.set(false);
        toast.success("Category updated successfully.");
      })
      .catch(() => {
        setAlertMessage("Something went wrong.");
      })
      .finally(() => setActionLoader(false));
  };

  useEffect(()=>{
    if(categoryId){
    const getCategory = () => {
      http
        .get("/category/" + categoryId)
        .then((res) => {
          const _nodes = [];
          _nodes.push(res.data)
          setNodes(_nodes)
          console.log(_nodes)
        })
        .catch(() => {
          modalState.set(false);
          setAlertMessage("Something went wrong.");
        })
    };
    getCategory();
  }
  },[categoryId])

  function collectIds(node) {
    let ids = [node.id]; // Start with the current node's id
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        ids = ids.concat(collectIds(child)); // Recursively collect ids from children
      });
    }
    return ids;
  }

  function createNode(type, parentId = null) {
    const node = {
      id: uuidv4(),
      name: "",
      type,
      children: [],
      parentId,
      editable: true, // New state to control editability
    };
    return node;
  }

  const handleEditNode = (nodeId) => {
    const updateNodeEditable = (nodes, nodeId) =>
      nodes.map((node) => {
        if (node.id === nodeId) {
          node.editable = !node.editable;
        }
        if (node.children.length) {
          node.children = updateNodeEditable(node.children, nodeId);
        }
        return node;
      });

    setNodes(updateNodeEditable(nodes, nodeId));
  };

  const handleDeleteNode = (nodeId, parentId) => {
    const deleteNode = (nodes, nodeId) => {
      return nodes.reduce((acc, node) => {
        // If this node is the one to be deleted and it has no children, exclude it from the accumulator.
        if (node.id === nodeId && node.children.length === 0) {
          return acc;
        }
        // If this node is not the one to be deleted but has children, recursively check its children.
        if (node.children.length > 0) {
          node.children = deleteNode(node.children, nodeId);
        }
        // Include the node in the accumulator.
        acc.push(node);
        return acc;
      }, []);
    };

    // Check if the node to delete is a top-level node.
    if (parentId === null) {
      setNodes(deleteNode(nodes, nodeId));
    } else {
      // If not, find its parent and update its children.
      const updateNodes = (nodes, nodeId, parentId) => {
        return nodes.map((node) => {
          if (node.id === parentId) {
            node.children = deleteNode(node.children, nodeId);
          } else if (node.children.length > 0) {
            node.children = updateNodes(node.children, nodeId, parentId);
          }
          return node;
        });
      };
      setNodes(updateNodes(nodes, nodeId, parentId));
    }
  };

  const handleNameChange = (event, node) => {
    node.name = event.target.value;
    setNodes([...nodes]);
  };

  const handleSubmitName = (node) => {
    if (node.name.trim() !== "") {
      node.editable = false;
      setNodes([...nodes]);
    }
  };

  const renderTree = (nodes) =>
    nodes.map((node) => (
      <StyledTreeItem
        key={node.id}
        nodeId={node.id}
        label={
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
            <TextField
              disabled={!node.editable}
              value={node.name}
              onChange={(e) => handleNameChange(e, node)}
              onBlur={() => handleSubmitName(node)}
              onKeyUp={(e) => {
                if (e.key === "Enter") handleSubmitName(node);
              }}
              label={capitalizeFirstLetter(node.type)}
              color="info"
              variant="outlined"
              size="small"
              sx={Style.input}
            />

            {node.editable ? (
              <DoneIcon onClick={() => handleEditNode(node.id)} />
            ) : (
              <EditIcon onClick={() => handleEditNode(node.id)} />
            )}
            {node.type !== "category" &&
              (node.children.length === 0 ? (
                <DeleteIcon
                  onClick={() => handleDeleteNode(node.id, node.parentId)}
                />
              ) : (
                <Tooltip title="This item has sub-items. Remove them first to delete this item.">
                  <span>
                    <DeleteIcon
                      style={{ cursor: "not-allowed", opacity: 0.5 }}
                    />
                  </span>
                </Tooltip>
              ))}
          </Stack>
        }
        collapseIcon={
          node.type !== "sub-subcategory" ?  <ExpandMoreIcon />  : null
        }
        expandIcon={node.type !== "sub-subcategory" ?<ChevronRightIcon />: null}
      >
        {node.children && renderTree(node.children)}
        {node.type !== "sub-subcategory" && !node.editable && (
          <Button
            onClick={() =>
              handleAddNode(
                node,
                node.type === "category" ? "subcategory" : "sub-subcategory"
              )
            }
            sx={Style.plusSquareButton}
          >
            <PlusSquare />
          </Button>
        )}
      </StyledTreeItem>
    ));

  const handleAddNode = (node, type) => {
    const newNode = createNode(type, node.id);
    node.children = [...node.children, newNode];
    setNodes([...nodes]);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function checkInvalid(nodes) {
    return nodes.some((node) => {
      // Check current node for the conditions
      if (node.name.trim() === "" || node.editable) {
        return true; // Condition met, return true to indicate invalidity
      }
      // If current node has children, recursively check the children
      if (node.children && node.children.length > 0) {
        return checkInvalid(node.children); // Recursive call
      }
      // If none of the above conditions met, return false for this iteration
      return false;
    });
  }

  function checkStructureAndRelationships(nodes, level = 0) {
    // level: 0 = category, 1 = subcategory, 2 = sub-subcategory
    if (nodes.length === 0) {
      // If no nodes at the current level, return false (invalid)
      return false;
    }

    return nodes.every((node) => {
      // Check that categories and subcategories have at least one child
      if ((level === 0 || level === 1) && node.children.length === 0) {
        return false; // Invalid if a category or subcategory has no children
      }
      // Recursively check children if this is a category or subcategory
      if (level < 2 && node.children) {
        return checkStructureAndRelationships(node.children, level + 1);
      }
      // If at sub-subcategory level, no further children are required, return true
      return level === 2;
    });
  }

  const handleSubmit = () => {
    let _alertMessage = null;
    // Check for field completeness and edit mode
    if (checkInvalid(nodes)) {
      _alertMessage =
        "Please complete all fields and ensure no fields are in edit mode before submitting.";
    }
    // Check for structural integrity and relationships
    else if (!checkStructureAndRelationships(nodes)) {
      _alertMessage =
        "The structure is invalid. Ensure there are categories, subcategories, and sub-subcategories appropriately.";
    }

    // Set the alert message based on the checks
    setAlertMessage(_alertMessage);

    // If there's no alert message, submission is valid
    if (!_alertMessage) {
      if(!categoryId)
        addCategory(nodes[0])
      else
        editCategory(nodes[0])

    }
  };

  const handleCloseAttempt = () =>{
    setIsDialogOpen(true)
  }
  

  return (
    <Modal
    open={modalState.get}
    onClose={handleCloseAttempt}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={Style.modal}>
    <Box textAlign="center" pb={1}> 
      <Typography variant="h5" component="h3" fontWeight="medium" mb={2}>
        { !categoryId ? 'Add Category' : 'Edit Category'}
      </Typography>
    </Box>
       <Box sx={Style.scrolableBox}>
       {alertMessage && (
        <Alert variant="filled" severity="error"sx={{marginBottom:'1rem'}} onClose={() => {setAlertMessage(null)}}>
          {alertMessage}
        </Alert>
      )}
      <TreeView
        aria-label="customized"
        sx={{ overflowX: "hidden" }}
        expanded={categoryId && collectIds(nodes[0])}
      >
        {renderTree(nodes)}
      </TreeView>
       </Box>
      <Button variant="contained" onClick={handleSubmit} sx={Style.submit} disabled={actionLoader}>
        Submit
      </Button>
   <ConfirmClsoeDialog dialogState={{set:setIsDialogOpen,get:isDialogOpen}} modalState={modalState} />
    </Box>
    </Modal>
  );
}
