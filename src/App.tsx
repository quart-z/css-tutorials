import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <body>
      <header>

      </header>
      <div className = "main-content-box">
      {/* Section 1 - Content section , <Content /> */}

        <div className = "gradient-container">
          <div className="gradient-noise"> </div>
          <div className = "gradient1"> </div>
        </div>

        <div className = "tutorial-grid">
          <div className = "tutorial-box"> 
            <h1 className = "tutorial-box-text"> CSS Tutorials </h1>
          </div>

        </div>
      </div>
    </body>
  );
}

export default Home;

