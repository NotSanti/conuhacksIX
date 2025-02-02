import clsx from "clsx";
import React from "react";

interface IProps {
  flipHorizontal?: boolean;
  flipVertical?: boolean;
  rotate?: boolean;
  className?: string;
  fill?: string;
  layeredComponent?: React.ReactNode;
}

const Curve = ({
  flipHorizontal,
  flipVertical,
  rotate,
  className = "",
  fill = "inherit",
  layeredComponent,
}: IProps) => {
  return (
    <div>
      {layeredComponent}
      <svg
        width="220"
        height="80"
        viewBox="0 0 252 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx({
          "scale-x-[-1]": flipHorizontal,
          "scale-y-[-1]": flipVertical,
          "rotate-90": rotate,
          className,
        })}
      >
        <path
          d="M1 131V1L176.137 1C191.385 1 273.637 17.1141 301 131H167.071H1Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Curve;
