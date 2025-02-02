import { motion } from "framer-motion";
import Curve from "./Curve";
import Rectangle from "./Rectangle";
import Icon from "./Icon.tsx";
import BrushStroke from "./BrushStroke.tsx";

interface IProps {
  showNewGoal?: boolean;
}


const Roadmap = ({showNewGoal}: IProps) => {
  const renderBrushStroke = (fill: string) => {
    return (
      <div className="absolute z-[-1] top-[-1rem] left-[-1rem]">
        <BrushStroke fill={fill} />
      </div>
    );
  };

  const elements = [
    {
      Component: Curve,
      props: {
        fill: "#f7c42a",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10">
            {renderBrushStroke("rgba(219, 68, 57, 0.4)")}
            <div>
              <Icon goalCategory="social"></Icon>
            </div>
          </div>
        ),
      },
      style: "left-[-1rem] top-[4.78rem]",
    },
    {
      Component: Rectangle,
      props: { flipVertical: true, fill: "#f7c42a" },
      style: "left-[3.4rem] top-[12.36rem] ",
    },
    {
      Component: Curve,
      props: {
        flipHorizontal: true,
        flipVertical: true,
        fill: "#f7c42a",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10">
            {renderBrushStroke("rgba(247, 107, 42, 0.4)")}
            <Icon goalCategory="personalGrowth"></Icon>
          </div>
        ),
      },
      style: "left-[7.3rem] top-[19.96rem]",
    },
    {
      Component: Rectangle,
      props: { fill: "#f7c42a" },
      style: "left-[17.36rem] top-[19.96rem]",
    },
    {
      Component: Curve,
      props: {
        rotate: true,
        flipHorizontal: true,
        fill: "#f7c42a",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10">
            {renderBrushStroke("rgba(196, 247, 42, 0.4)")}
            <Icon goalCategory="education"></Icon>
          </div>
        ),
      },
      style: "left-[24.66rem] top-[24.1rem]",
    },
    {
      Component: Rectangle,
      props: { flipVertical: true, fill: "#f7c42a" },
      style: "left-[24.9rem] top-[33.86rem]",
    },
    {
      Component: Curve,
      props: {
        flipHorizontal: true,
        flipVertical: true,
        fill: "#f7c42a",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10">
            {renderBrushStroke("rgba(86, 199, 10, 0.4)")}
            <Icon goalCategory="romance"></Icon>
          </div>
        ),
      },
      style: "left-[28.85rem] top-[41.46rem]",
    },
    {
      Component: Rectangle,
      props: {
        fill: "#f7c42a",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10">
            {renderBrushStroke("rgba(51, 176, 124, 0.4)")}
            <Icon goalCategory="work"></Icon>
          </div>
        ),
      },
      style: "left-[38.96rem] top-[41.46rem]",
    },
    {
      Component: Rectangle,
      props: {
        fill: "#f7c42a",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10">
            {renderBrushStroke("rgba(34, 214, 227, 0.4)")}
            <Icon goalCategory="travel"></Icon>
          </div>
        ),
      },
      style: "left-[48.96rem] top-[41.46rem]",
    },
    {
      Component: Rectangle,
      props: { fill: "#f7c42a" },
      style: "left-[58.96rem] top-[41.46rem]",
    },
    {
      Component: Curve,
      props: {
        rotate: true,
        fill: "#f7c42a",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10">
            {renderBrushStroke("rgba(11, 63, 66, 0.4)")}
            <Icon goalCategory="finance"></Icon>
          </div>
        ),
      },
      style: "left-[66.26rem] top-[37.3rem]",
    },
    {
      Component: Curve,
      props: {
        fill: "#f7c42a",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10">
            {renderBrushStroke("rgba(47, 84, 204, 0.4)")}
            <Icon goalCategory="personalGrowth"></Icon>
          </div>
        ),
      },
      style: "left-[62.1rem] top-[29.90rem]",
    },
    {
      Component: Rectangle,
      props: { fill: "#f7c42a" },
      style: "left-[52.54rem] top-[29.90rem]",
    },
    {
      Component: Rectangle,
      props: {
        fill: "#f7c42a",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10">
            {renderBrushStroke("rgba(47, 84, 204, 0.4)")}
            <Icon goalCategory="health"></Icon>
          </div>
        ),
      },
      style: "left-[42.54rem] top-[29.90rem]",
    },
    {
      Component: Curve,
      props: {
        rotate: true,
        flipVertical: true,
        fill: "#f7c42a",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10">
            {renderBrushStroke("rgba(4, 34, 130, 0.4)")}
            <Icon goalCategory="social"></Icon>
          </div>
        ),
      },
      style: "left-[34.74rem] top-[25.8rem]",
    },
    {
      Component: Curve,
      props: { flipHorizontal: true, fill: "rgba(247, 196, 42, 0.4)" },
      style: "left-[38.9rem] top-[18.44rem]",
    },
    {
      Component: Rectangle,
      props: {
        fill: "rgba(247, 196, 42, 0.4)",
        layeredComponent: (
          <div className="absolute left-[5rem] z-10 text-white/40 pointer-events-none">
            <Icon goalCategory="travel"></Icon>
          </div>
        ),
      },
      style: "left-[48.96rem] top-[18.44rem]",
    },
    {
      Component: Curve,
      props: { rotate: true, fill: "rgba(247, 196, 42, 0.4)" },
      style: "left-[56.26rem] top-[14.3rem]",
    },
    {
      Component: Curve,
      props: { flipHorizontal: true, fill: "rgba(247, 196, 42, 0.4)" },
      style: "left-[60.4rem] top-[6.94rem]",
    },
    {
      Component: Rectangle,
      props: { fill: "rgba(247, 196, 42, 0.4)" },
      style: "left-[70.46rem] top-[6.94rem]",
    },
    {
      Component: Curve,
      props: {
        flipHorizontal: true,
        rotate: true,
        fill: "rgba(247, 196, 42, 0.4)",
      },
      style: "left-[77.76rem] top-[11.1rem]",
    },
    {
      Component: Curve,
      props: {
        flipHorizontal: true,
        flipVertical: true,
        fill: "rgba(247, 196, 42, 0.4)",
        layeredComponent: 
          showNewGoal ? ( <div className="fade-container absolute left-[5rem] z-10">
            <Icon goalCategory='Other'></Icon>
          </div>) : null},
      style: "left-[81.9rem] top-[18.46rem]",
    },
    {
      Component: Rectangle,
      props: { fill: "rgba(247, 196, 42, 0.4)" },
      style: "left-[91.96rem] top-[18.46rem]",
    },
  ];

  return (
    <div className="w-full h-full relative">
      {elements.map(({ Component, props, style }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          className={`absolute ${style}`}
        >
          <Component {...props} />
        </motion.div>
      ))}
    </div>
  );
};

export default Roadmap;
