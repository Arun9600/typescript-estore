import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { limitResultsApiFunc } from "../features/ProductsLimitSlice";
import type { productsListDatas } from "../App.types";
import { productDetailsFunc } from "../features/ProductsDetailsSlice";
import ProductsListSkeleton from "./ProductsListSkeleton";
import { Link } from "react-router-dom";
const ProductsLimit: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.limitResults.datas);
  const loading = useAppSelector((state) => state.limitResults.loading);
  const error = useAppSelector((state) => state.limitResults.error);
  const productDetailEvent = (productId: number): void => {
    void dispatch(productDetailsFunc(productId));
  };
  useEffect(() => {
    void dispatch(limitResultsApiFunc());
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ padding: "40px 0" }}>
        <Container>
          <Grid container>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ textAlign: "center" }}
            >
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
            {loading ? (
              <ProductsListSkeleton />
            ) : (
              data?.map((item: productsListDatas) => (
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={item.id}>
                  <Box sx={{ padding: "30px" }}>
                    <Box>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "300px",
                          marginBottom: "20px",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box sx={{ marginBottom: "10px" }}>
                      <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                          <Typography
                            variant="h6"
                            style={{ fontSize: "14px", color: "#000" }}
                          >
                            {item.category.toUpperCase()}
                          </Typography>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                          <Link
                            to={`/productdetail/${item.title}`}
                            onClick={() => {
                              productDetailEvent(item.id);
                            }}
                          >
                            <Typography
                              variant="h2"
                              style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#000",
                                cursor: "pointer",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              ))
            )}

            {error ? (
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ textAlign: "center", padding: "30px " }}
              >
                {error}
              </Grid>
            ) : (
              ""
            )}

            {data?.length === 0 ? (
              " "
            ) : (
              <>
                <Grid
                  item
                  xl={12}
                  md={12}
                  sm={12}
                  style={{ textAlign: "center" }}
                >
                  <Button
                    color="success"
                    variant="outlined"
                    onClick={() => {
                      navigate("/shop");
                    }}
                  >
                    View All Products
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductsLimit;
