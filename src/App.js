import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Testemonials from "./components/Testemonials/Testemonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Recipe from "./components/Recipe/Recipe";
import Work from "./components/Work/Work";

function App() {
  const [meals, setMeals] = useState([]);

  async function getRecipe() {
    let { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
    );
      setMeals(data.meals)

    console.log(data);
  }

  useEffect(() => {
    getRecipe();
  }, []);
  return (
    <div className="App">
      <Header />
      <Work />
      <About />
      <Recipe recipeList={meals}/>
      <Testemonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
