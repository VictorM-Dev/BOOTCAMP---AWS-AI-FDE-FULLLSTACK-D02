import Categories from "../../components/Categories";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Inspiration from "../../components/Inspiration";
import Mosaic from "../../components/Mosaic";
import OurProducts from "../../components/OurProducts";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero></Hero>
      </Container>
      <Container>
        <Categories></Categories>
      </Container>
      <Container>
        <OurProducts></OurProducts>
      </Container>
      <Container className="bg-inspiration">
        <Inspiration></Inspiration>
      </Container>
      <Container>
        <Mosaic></Mosaic>
      </Container>
      <Container className="bg-primary border-t border-t-[rgba(0,0,0,0.17)]"><Footer></Footer></Container>
    </div>
  );
};
export default Home;
