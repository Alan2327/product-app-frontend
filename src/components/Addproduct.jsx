import React, { useState } from 'react';
import '../Addproduct.css';  // Import the CSS file
import { Button, TextField, Typography } from '@mui/material';

function AddProduct() {
  const [product, setProduct] = useState({ name: '', image: '', price: '', rating: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!product.name) errors.name = 'Product Name is required';
    if (!product.image) errors.image = 'Image URL is required';
    if (!product.price || product.price <= 0) errors.price = 'Price must be greater than zero';
    if (!product.rating || product.rating < 0 || product.rating > 5) errors.rating = 'Rating must be between 0 and 5';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('New Product:', product);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="add-product-container">
      <Typography variant="h4" component="h1" className="add-product-title">
        Add Product
      </Typography>
      <form onSubmit={handleSubmit} className="add-product-form">
        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          className="add-product-input"
        />
        <TextField
          fullWidth
          label="Image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
          error={!!errors.image}
          helperText={errors.image}
          className="add-product-input"
        />
        <TextField
          fullWidth
          type="number"
          label="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          error={!!errors.price}
          helperText={errors.price}
          className="add-product-input"
        />
        <TextField
          fullWidth
          type="number"
          label="Rating"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          error={!!errors.rating}
          helperText={errors.rating}
          inputProps={{ step: 0.1, min: 0, max: 5 }}
          className="add-product-input"
        />
        <Button type="submit" variant="contained" className="add-product-button">
          Add Product
        </Button>
      </form>
    </div>
  );
}

export default AddProduct;

















// import { Button, TextField, Typography, Box } from '@mui/material';
// import React, { useState } from 'react';
// import '../Addproduct.css'; // Import the CSS file for styling

// const Addproduct = () => {
//   const [product, setProduct] = useState({ name: '', image: '', price: '', rating: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('New Product:', product);
//     // Add logic to handle form submission (e.g., POST request to an API)
//   };

//   return (
//     <div className="add-product-container">
//       <Typography variant="h4" className="add-product-title">
//         Add Product
//       </Typography>
//       <form onSubmit={handleSubmit} className="add-product-form">
//         <TextField
//           label="Product Name"
//           name="name"
//           value={product.name}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="Image URL"
//           name="image"
//           value={product.image}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="Price"
//           name="price"
//           type="number"
//           value={product.price}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="Rating"
//           name="rating"
//           type="number"
//           value={product.rating}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <Box textAlign="center" marginTop={2}>
//           <Button variant="contained" color="primary" type="submit">
//             Add Product
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default Addproduct;
