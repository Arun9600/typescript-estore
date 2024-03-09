import { useAppSelector, useAppDispatch } from "../features/hooks";
import { Typography, Box, Container, Grid, Button } from "@mui/material";
import { productsDetailData } from "../App.types";
import { add } from "../features/CartSlice";
const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(
    (state) => state.productDetails.datas
  ) as productsDetailData;

  const addToCart = (data: productsDetailData) => {
    dispatch(add(data));
  };
  return (
    <>
      <Box sx={{ padding: "40px 0" }}>
        <Container>
          <Grid
            container
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item xl={4} lg={4} md={3} sm={12} xs={12}>
              <img
                src={data?.image}
                alt={data?.title}
                style={{ width: "350px", height: "300px", objectFit: "cover" }}
              />
            </Grid>
            <Grid item xl={8} lg={8} md={9} sm={12} xs={12}>
              <Box sx={{ marginBottom: "15px" }}>
                <Typography variant="h6">{data.title}</Typography>
              </Box>
              <Box>
                <Typography variant="body1" style={{ marginBottom: "15px" }}>
                  {data.description}
                </Typography>
                <Typography variant="h5" style={{ marginBottom: "15px" }}>
                  Rs.{data.price}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="success"
                onClick={() => addToCart(data)}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetails;
