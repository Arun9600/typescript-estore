import { Box, Container, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../features/hooks";
const Cart = () => {
  const data = useAppSelector((state) => state.cart.datas);
  {
    console.log(data);
  }
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
                Cart
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Cart;
