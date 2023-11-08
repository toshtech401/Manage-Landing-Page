import React from 'react'
import { TestimonialsData } from "../Data/TestimonialsData";
import "./Testimonials.css";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useWindowDimensions from "../Data/GetScreenSize";

const Testimonials = () => {
        let [xPos, setXpos] = useState(0);
        const [style, setStyle] = useState({ transform: `translateX(${xPos}px)` });
        const [styleLeftArrow, setStyleLeftArrow] = useState({ display: "block" });
        const [styleRightArrow, setStyleRightArrow] = useState({ display: "none" });
        const [selected, setSelected] = useState(1);
        const length = TestimonialsData.length;
        const { width } = useWindowDimensions();
      
      
        const onClick = (direction) => {
          console.log(direction);
          if (direction === "left") {
            if (xPos === -500) {
              setXpos((xPos -= 0));
            } else {
              setXpos((xPos = xPos - 500));
              setStyleLeftArrow({ display: "none" });
              setStyleRightArrow({ display: "block" });
            }
          } else {
            if (xPos === 0) {
              setXpos((xPos += 0));
            } else {
              setXpos((xPos = xPos + 500));
              setStyleLeftArrow({ display: "block" });
              setStyleRightArrow({ display: "none" });
            }
          }
          setStyle({ transform: `translateX(${xPos}px)` });
          console.log(xPos);
          console.log(style);
        };
  return (
    <div className="testimonials-container">
      <h3>What they've said</h3>

      <div className="testi-full">
        <div className="testimonials">
          {TestimonialsData.map((item, i) => {
            return (
              <div className="testimonial" style={style}>
                <img src={item.image} alt="" />
                <h5>{item.name}</h5>
                <p>{item.review}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="testimonials-single">
        {TestimonialsData.map((item, i) => {
          return (
            <>
              {selected === i && (
                <div className="testimonial">
                  <img src={item.image} alt="" />
                  <h5>{item.name}</h5>
                  <p>{item.review}</p>
                </div>
              )}
            </>
          );
        })}
      </div>

      <div className="dots">
        {TestimonialsData.map((item, i) => {
          return (
            <div
              className={selected === i ? "dot selected" : "dot"}
              onClick={() => setSelected(i)}
            ></div>
          );
        })}
      </div>

      <button className="btn btn-red">Get Started</button>
      <div
        className="rightarrow"
        onClick={() => onClick("right")}
        style={{ display: width >= 768 ? styleRightArrow.display : "none" }}
      >
        <AiOutlineArrowLeft />
      </div>
      <div
        className="leftarrow"
        onClick={() => onClick("left")}
        style={{ display: width >= 768 ? styleLeftArrow.display : "none" }}
      >
        <AiOutlineArrowRight />
      </div>
    </div>
  )
}

export default Testimonials