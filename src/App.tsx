import { Toaster } from "react-hot-toast"
import Container from "./components/Container"
import Header from "./components/Header"
import Home from "./pages/Home/page"

const App = () => {
  return (
    <>
      <Toaster/>
      <Container className="bg-[#FFF]"><Header></Header></Container>
      <Home></Home>
    </>
  )
}

export default App
