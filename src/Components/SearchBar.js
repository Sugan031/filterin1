import React from 'react';
import {
    Stack,
    Grid,
    Box,
    Button,
  } from "@mui/material";
  import TextField from "@mui/material/TextField";
import ReferenceBaseTable from './ReferenceBaseTable';
import ReferenceMapTable from './ReferenceMapTable';
import Map from '../Map';

const SearchBar = () => {
  return (
    <>
    <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        marginTop={3}
        gap={2}
        flexWrap={"wrap"}
        maxWidth={"66%"}
      >
        <TextField
          id="outlined-basic"
          label="Unique Id"
          variant="outlined"
          name="unique_id"
          InputProps={{ style: { borderRadius: "3rem" } }}
        //   onChange={handlechange}
        />
        <TextField
          id="outlined-basic"
          label="Supplier Id"
          variant="outlined"
          InputProps={{ style: { borderRadius: "3rem" } }}
        />
      </Stack>
      <Grid
        container
        flexDirection={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        mt={1}
      >
      <ReferenceBaseTable/>
      <ReferenceMapTable/>
      <Grid item xs={3.7}>
          <Box marginTop={"-2rem"} sx={{ height: "400px", backgroundColor:'red' }}>
            {/* <Map  /> */}
          </Box>
          <Box mt={5} mb={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained">Save Changes</Button>
          </Box>
        </Grid>
      </Grid>
      </>
  )
}

export default SearchBar