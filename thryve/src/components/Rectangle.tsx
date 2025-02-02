import clsx from "clsx";

interface IProps {
  flipHorizontal?: boolean;
  flipVertical?: boolean;
  className?: string;
  fill?: string;
}

const Rectangle = ({
  flipHorizontal,
  flipVertical,
  className = "",
  fill = "inherit",
}: IProps) => {
  return (
    <svg
      width="212"
      height="80"
      viewBox="0 0 262 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx({
        "scale-x-[-1]": flipHorizontal,
        "rotate-90": flipVertical,
        className,
      })}
    >
      <path
        d="M1 131L261 131L261 1.00003L1.00001 1.00001L1 131Z"
        fill={fill}
        stroke="black"
      />
    </svg>
  );
};

export default Rectangle;
