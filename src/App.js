import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {} from "react-router-dom";
import {
  Navbar,
  Feed,
  SearchFeed,
  VideoDetails,
  ChannelDetails,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetails />} />
          <Route path="/channel/:id" exact element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
