import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="slider">

      <div className="slides">
        <div id="slide-1">1</div>
        <div id="slide-2">2</div>
        <div id="slide-3">3</div>
        <div id="slide-4">4</div>
        <div id="slide-5">5</div>
      </div>

      <a href="#slide-1">1</a>
      <a href="#slide-2">2</a>
      <a href="#slide-3">3</a>
      <a href="#slide-4">4</a>
      <a href="#slide-5">5</a>
    </div>
  );
}


