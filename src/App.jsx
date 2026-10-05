import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";
import CustomEase from "gsap/src/CustomEase";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { RoughEase } from "gsap/all";
import { useRef } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(
  SplitText,
  CustomEase,
  ScrollTrigger,
  RoughEase,
  ScrollToPlugin,
);

CustomEase.create("hop", "0.9,0,0.1,1");
CustomEase.create("glide", "0.8,0,0.2,1");
const App = () => {
  const colors = [
    "/pexels-clarence-chan-2160207969-37192725.jpg",
    "/pexels-enginakyurt-5200063.jpg",
    "/pexels-lukhe-27379946.jpg",
    "/pexels-nadin-sh-78971847-26903058.jpg",
    "/pexels-william-posser-2150279702-32025819.jpg",
  ];
  useGSAP(() => {
    gsap.set(".img-wrapper", {
      opacity: 0,
      z: -350,
    });

    gsap.to(".img-wrapper", {
      z: 350,
      opacity: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "+=600%",
        markers: true,
        scrub: 1,
        pin: true,
      },
    });
  }, []);
  return (
    <>
      <div className="main-container h-screen relative overflow-hidden">
        <div className="flex h-full items-center justify-center gap-22 perspective-near">
          <div className="img-wrapper h-100 transform-3d">
            {" "}
            <img
              src="/pexels-nadin-sh-78971847-26903058.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="img-wrapper h-100 transform-3d">
            {" "}
            <img
              src="/pexels-nadin-sh-78971847-26903058.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex absolute inset-0 items-center justify-center gap-22 perspective-near">
          <div className="img-wrapper h-70 transform-3d">
            {" "}
            <img
              src="/pexels-nadin-sh-78971847-26903058.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="img-wrapper h-100 transform-3d">
            {" "}
            <img
              src="/pexels-nadin-sh-78971847-26903058.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex absolute inset-0 items-center justify-center gap-22 perspective-near">
          <div className="img-wrapper h-100 transform-3d">
            {" "}
            <img
              src="/pexels-nadin-sh-78971847-26903058.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="img-wrapper h-100 transform-3d">
            {" "}
            <img
              src="/pexels-nadin-sh-78971847-26903058.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex absolute inset-0 items-center justify-center gap-22 perspective-near">
          <div className="img-wrapper h-100 transform-3d">
            {" "}
            <img
              src="/pexels-nadin-sh-78971847-26903058.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="img-wrapper h-100 transform-3d">
            {" "}
            <img
              src="/pexels-nadin-sh-78971847-26903058.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex absolute inset-0 items-center justify-center gap-22 perspective-near">
          <div className="img-wrapper h-100 transform-3d">
            {" "}
            <img
              src="/pexels-nadin-sh-78971847-26903058.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="img-wrapper h-100 transform-3d">
            {" "}
            <img
              src="/pexels-nadin-sh-78971847-26903058.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
};

export default App;
