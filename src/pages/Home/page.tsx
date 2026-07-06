import Categories from "../../components/Categories";
import Container from "../../components/Container";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero></Hero>
      </Container>
      <Container>
        <Categories></Categories>
      </Container>
    </div>
  );
};
export default Home;
