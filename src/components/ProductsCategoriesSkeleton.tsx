import { Box, Grid, Skeleton } from "@mui/material";
const ProductsCategoriesSkeleton = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((item, index) => (
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12} key={index}>
          <Box sx={{ padding: "30px" }}>
            <Skeleton variant="rectangular" width={210} height={60} />
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default ProductsCategoriesSkeleton;
