import React, { useState, useEffect } from "react";
import {
  TextField,
  Modal,
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import Navigation from "./Navigation";


const MenuUser = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [expandedProductIds, setExpandedProductIds] = useState({});

  const handleToggleExpand = (productId) => {
    setExpandedProductIds((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    clearForm();
  };

  const handleEditOpen = (product) => {
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setCurrentProductId(product._id);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setPrice("");
    setDescription("");
    setImage("");
    setError(null);
    setCurrentProductId(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleEdit = () => {
    fetch(`http://localhost:1337/products/${currentProductId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price: parseFloat(price),
        description,
        image: image.split(",")[1],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to edit product");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Product edited successfully:", data);
        handleEditClose();
        fetchProducts();
      })
      .catch((error) => {
        console.error("Error editing product:", error);
        setError(error.message || "Failed to edit product. Please try again.");
      });
  };

  const fetchProducts = () => {
    fetch("http://localhost:1337/getproducts")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products");
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navigation />

      <Typography
        variant="h4"
        gutterBottom
        style={{
          zIndex: 3,
          padding: 5,
          justifyContent: "center",
          display: "flex",
          fontFamily: "Poetson",
          fontWeight: "700",
          width: "100%",
        }}
      >
        Menu
      </Typography>

      <div
        className="menu"
        style={{
          top: -170,
          padding: 100,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Modal open={editOpen} onClose={handleEditClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Edit Product
            </Typography>
            <TextField
              label="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              margin="normal"
            />

            <input type="file" accept="image/*" onChange={handleImageChange} />
            <Button
              variant="contained"
              color="primary"
              onClick={handleEdit}
              sx={{ mt: 2 }}
            >
              Save Changes
            </Button>
          </Box>
        </Modal>

        <div style={{ display: "flex", justifyContent: "center", zIndex: "2", fullWidth: "100%" }}>
          <div>
            <Typography
              variant="h4"
              gutterBottom
              zIndex={-2}
              padding={5}
              justifyContent={"center"}
              display={"flex"}
            ></Typography>
            {error && (
              <Typography variant="body1" color="error">
                {error}
              </Typography>
            )}
            <Grid container spacing={2}>
              {products.map((product) => {
                const isExpanded = expandedProductIds[product._id] || false;
                const previewText =
                  product.description.length > 30
                    ? `${product.description.substring(0, 50)}...`
                    : product.description;

                return (
                  <Grid item key={product._id}>
                    <div>
                      <Typography
                        variant="h6"
                        fontFamily={"Poetson"}
                        fontWeight={"900"}
                        fontSize={"30px"}
                        color={"#89522F"}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontFamily={"Poppins"}
                        fontWeight={"500"}
                        fontSize={"20px"}
                      >
                        Price: Php {product.price}
                      </Typography>
                      <div style={{ width: "300px" }}>
                        <Typography variant="body1">
                          {isExpanded ? product.description : previewText}
                          {product.description.length > 20 && (
                            <Button
                              onClick={() => handleToggleExpand(product._id)}
                              color="primary"
                            >
                              {isExpanded ? "Read Less" : "Read More"}
                            </Button>
                          )}
                        </Typography>
                      </div>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: 300, height: 250, marginRight: 10 }}
                      />
                    </div>

                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuUser;
