import { Box, Container, Grid, Typography } from "@mui/material";
import Menu from "./Menu";
const TopArea = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#000", padding: "10px 0" }}>
        <Container>
          <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Typography variant="body1" style={{ color: "#fff" }}>
                React with TypeScript
              </Typography>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Menu />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TopArea;
