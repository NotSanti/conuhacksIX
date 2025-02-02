import {
  FaHeart,
  FaUsers,
  FaPersonArrowUpFromLine,
  FaMoneyCheckDollar,
  FaUserGraduate,
  FaStar,
} from "react-icons/fa6";
import { MdMonitorHeart, MdWork } from "react-icons/md";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { Tooltip } from "react-tooltip";

// Ensure CSS for react-tooltip is imported
import "react-tooltip/dist/react-tooltip.css";

interface AchievementListProps {
  isCompleted: number[]; // Array of completed indices
  tooltips: string[]; // Array of tooltip messages
}

// List of icons to randomly pick from
const iconList = [
  FaHeart,
  MdMonitorHeart,
  FaUsers,
  FaPersonArrowUpFromLine,
  FaMoneyCheckDollar,
  FaUserGraduate,
  BiSolidPlaneAlt,
  MdWork,
  FaStar,
];

// The first 9 icons will always be this:
const fixedIcons = [
  FaHeart,
  MdMonitorHeart,
  FaUsers,
  FaPersonArrowUpFromLine,
  FaMoneyCheckDollar,
  FaUserGraduate,
  BiSolidPlaneAlt,
  MdWork,
  FaStar,
];

// Function to shuffle icons randomly
const getRandomIcons = (count: number) => {
  return Array.from({ length: count }, () => {
    const randomIndex = Math.floor(Math.random() * iconList.length);
    return iconList[randomIndex];
  });
};

const AchievementList: React.FC<AchievementListProps> = ({
  isCompleted,
  tooltips,
}) => {
  const totalIcons = 50;
  const iconsArray = getRandomIcons(totalIcons); // Get 50 random icons

  // Combine fixed icons with randomly generated icons
  const iconsWithFixed = [...fixedIcons, ...iconsArray.slice(9)];

  return (
    <div className="text-black flex flex-col gap-2">
      {Array.from({ length: 5 }, (_, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {iconsWithFixed
            .slice(rowIndex * 10, rowIndex * 10 + 10)
            .map((Icon, index) => {
              const globalIndex = rowIndex * 10 + index;
              const isHighlighted = isCompleted.includes(globalIndex);
              const tooltipMessage = tooltips[globalIndex];

              return (
                <div key={globalIndex} className="relative">
                  {/* Render Tooltip only if there is a message */}
                  {tooltipMessage && (
                    <a
                      data-tooltip-id={`tooltip-${globalIndex}`}
                      data-tooltip-content={tooltipMessage}
                      className="my-anchor-element"
                    >
                      <Icon
                        className={`w-8 h-8 transition-colors duration-300 ${
                          isHighlighted
                            ? "text-yellow-400"
                            : "text-gray-400 opacity-50"
                        }`}
                      />
                    </a>
                  )}
                  {/* If no tooltip message, just render the icon without a tooltip */}
                  {!tooltipMessage && (
                    <Icon
                      className={`w-8 h-8 transition-colors duration-300 ${
                        isHighlighted
                          ? "text-yellow-400"
                          : "text-gray-400 opacity-50"
                      }`}
                    />
                  )}
                </div>
              );
            })}
        </div>
      ))}
      {/* Tooltip component with id props corresponding to the icon's data-tooltip-id */}
      {tooltips.map((_, index) => (
        <Tooltip key={index} id={`tooltip-${index}`} />
      ))}
    </div>
  );
};

export default AchievementList;
