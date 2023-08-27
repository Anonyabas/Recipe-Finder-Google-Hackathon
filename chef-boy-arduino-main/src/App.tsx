import "./App.css";
import { CardContainer } from "./Display/Cards";
import Instructional from "./Display/Instructional";
import SearchBar from "./Display/Search";
const bg = require("./img/main-bg.png");
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
        width: "100vw",
        // backgroundColor: "#282c34",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflowY: "scroll",
      }}
    >
      <SearchBar />
      <Instructional />
      <CardContainer />
    </div>
  );
}

export default App;
