import "./App.css";
import logo from "./images/neon-logo.png";
import featuredImage from "./images/neon.png";
import searchImage from "./images/search.png";

function App() {
  return (
    <div className="app">
      <img src={logo} className="logo" />
      <div className="content">
        <h1>Shahrear</h1>
        <h2>PHOTOGRAPHY</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
          voluptates facilis impedit laboriosam accusamus magnam modi
          consequatur, praesentium laborum at, atque aperiam doloribus veniam
          nostrum consectetur unde veritatis saepe recusandae vel esse. Alias
          amet sed, sit ducimus placeat officia.
        </p>
        <a href="#" className="link">
          DISCOVER MORE
        </a>
        <span>1st December, 2020</span>
      </div>
      <img src={featuredImage} className="featured-img" />
      <img src={searchImage} className="search-img" />
    </div>
  );
}

export default App;
