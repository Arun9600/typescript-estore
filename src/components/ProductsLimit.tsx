import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { limitResultsApiFunc } from "../features/ProductsLimitSlice";
import { productsListDatas } from "../App.types";
const ProductsLimit = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.limitResults.datas);
  useEffect(() => {
    dispatch(limitResultsApiFunc());
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ padding: "40px 0" }}>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} style={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Our Top Products
              </Typography>
            </Grid>
            {data &&
              data.map((item: productsListDatas) => (
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  key={item.id}
                  style={{ marginBottom: "50px" }}
                >
                  <Box sx={{ padding: "30px" }}>
                    <Box>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "350px",
                          height: "300px",
                          marginBottom: "20px",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box sx={{ marginBottom: "10px" }}>
                      <Grid container>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                          <Typography
                            variant="h6"
                            style={{ fontSize: "14px", color: "#000" }}
                          >
                            {item.category.toUpperCase()}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xl={6}
                          lg={6}
                          md={6}
                          sm={6}
                          xs={6}
                          style={{ textAlign: "right" }}
                        >
                          <Typography
                            variant="h6"
                            style={{ fontSize: "14px", color: "#000" }}
                          >
                            Rs. {item.price}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container>
                        <Grid item xl={12}>
                          <Typography
                            variant="h2"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            {item.title}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              ))}
            <Grid item xl={12} md={12} sm={12} style={{ textAlign: "center" }}>
              <Button
                color="success"
                variant="outlined"
                onClick={() => navigate("/shop")}
              >
                View All Products
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductsLimit;
