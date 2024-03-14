import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { prodcutsCategoriesFunc } from "../features/ProductsCategoriesSlice";
import ProductsLimit from "./ProductsLimit";
import ProductsCategoriesSkeleton from "./ProductsCategoriesSkeleton";
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.prodcutsCategories.datas);
  const loading = useAppSelector((state) => state.prodcutsCategories.loading);
  const error = useAppSelector((state) => state.prodcutsCategories.error);
  useEffect(() => {
    void dispatch(prodcutsCategoriesFunc());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ padding: "40px 0", backgroundColor: "#f1f1f1" }}>
        <Container>
          <Grid container>
            <Grid
              item
              xl={12}
              md={12}
              style={{
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <Typography
                variant="h4"
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Our Products Categories
              </Typography>
            </Grid>
            {loading ? (
              <ProductsCategoriesSkeleton />
            ) : (
              data?.map((item: string) => (
                <Grid
                  item
                  xl={3}
                  lg={3}
                  md={6}
                  sm={6}
                  xs={12}
                  key={item}
                  style={{ textAlign: "center" }}
                >
                  <Typography
                    variant="h4"
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      boxShadow: "0px 4px 8px rgba(142, 142, 142, 0.16)",
                      padding: "30px 0",
                      margin: "20px",
                      backgroundColor: "#fff",
                    }}
                  >
                    {item.toUpperCase()}
                  </Typography>
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
          </Grid>
        </Container>
      </Box>
      <ProductsLimit />
    </>
  );
};

export default Home;
