import Container from "./components/Container"
import Header from "./components/Header"
import Home from "./pages/Home/page"

const App = () => {
  return (
    <>
      <Container className="bg-[#FFF]"><Header></Header></Container>
      <Home className=""></Home>
    </>
  )
}

export default App
