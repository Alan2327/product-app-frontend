import { Button, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import '../Addproduct.css'; // Import the CSS file for styling

const Addproduct = () => {
  const [product, setProduct] = useState({ name: '', image: '', price: '', rating: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Product:', product);
    // Add logic to handle form submission (e.g., POST request to an API)
  };

  return (
    <div className="add-product-container">
      <Typography variant="h4" className="add-product-title">
        Add Product
      </Typography>
      <form onSubmit={handleSubmit} className="add-product-form">
        <TextField
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Rating"
          name="rating"
          type="number"
          value={product.rating}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Box textAlign="center" marginTop={2}>
          <Button variant="contained" color="primary" type="submit">
            Add Product
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Addproduct;
