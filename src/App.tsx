import "./App.css";
import Navbar from "./components/Navbar";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";

function App() {
  const comp = useRef(null); // create a ref for the root level element (we'll use it later)

  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --
    const tt = gsap.timeline();
    tt.to(comp.current, {
      y: "100vh",
      scale: 0.6,
      duration: 0,
    });
    tt.to(comp.current, {
      y: "30vh",
      duration: 1,
      delay: 1,
    });
    tt.to(comp.current, {
      y: "0vh",
      rotate: 360,
      scale: 1,
      duration: 0.8,
    });
    return () => {
      // cleanup code (optional)
    };
  }, []);

  return (
    <div className="main" ref={comp}>
      <div className="page1">
        <Navbar />
      </div>
      <div className="elems">
        <div className="elem1">
          <div className="image-div">
            <img
              src="https://uploads-ssl.webflow.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
              alt="hero-img"
            />
          </div>
          <h4>
            AVRO | Ko <span>NEW</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            aliquam alias quidem nesciunt porro voluptatem animi labore,
            delectus cupiditate vitae iusto perferendis, debitis hic deserunt
            vero accusamus odit. Quisquam, culpa.
          </p>
        </div>
        <div className="elem2">
          <h2>All Work!</h2>
          <h3>
            A Featured selection <br />
            the latest Work - <br />
            of the last years.
          </h3>
          <h6>Tipx! Drag sideways to navigate</h6>
        </div>
        <div className="elem3">
          <div className="image-div">
            <img
              src="https://uploads-ssl.webflow.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
              alt="hero-img2"
            />
          </div>
          <h4>
            The roger hub <span>NEW</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            aliquam alias quidem nesciunt porro voluptatem animi labore,
            delectus cupiditate vitae iusto perferendis, debitis hic deserunt
            vero accusamus odit. Quisquam, culpa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
