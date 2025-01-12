import { Card, CardContent, CardMedia, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Home.css'; // Import the CSS file for styling

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Available Products</h1><hr />
      <Grid container spacing={2} className="product-grid">
        {products.map(product => (
          <Grid item xs={12} sm={6} md={6} key={product.id}>
            <Card className="product-card">
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                className="product-image"
              />
              <CardContent>
                <Typography variant="h6" className="product-title">
                  {product.title}
                </Typography>
                <Typography variant="body1" className="product-price">
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" className="product-rating">
                  Rating: {product.rating.rate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
