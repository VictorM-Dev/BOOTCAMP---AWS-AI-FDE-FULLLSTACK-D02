import Categories from "../../components/Categories";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
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
    </div>
  );
};
export default Home;
