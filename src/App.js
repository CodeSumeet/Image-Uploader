import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ImageProvider } from "./context/ImageContext";
import Main from "./components/Main";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ImageProvider>
        <Main />
        <ToastContainer />
      </ImageProvider>
    </>
  );
}

export default App;
