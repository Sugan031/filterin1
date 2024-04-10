import ReferenceMapTable from './Components/ReferenceMapTable';
import SearchBar from './Components/SearchBar';
import Hotel from './Hotel';
import Reference from './Reference';
import {
  Container,
} from "@mui/material";
function App() {
  return (
    <div className="App">
      <Hotel/>
      <div style={{margin:'3rem'}}></div>
      <Reference/>
       {/* <Container
      maxWidth="xl"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <SearchBar/>
      </Container> */}
      {/* <ReferenceMapTable/> */}
    </div>
  );
}

export default App;
