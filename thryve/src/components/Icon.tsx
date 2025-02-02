import { Button } from '@headlessui/react';
import { FaHeart } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Popup from "./Popup";
import { useState } from 'react';
import GoalPopup from './GoalPopup';
import "../Animation.css"

interface IconProps {
    goalCategory?: string;
}

function Icon({goalCategory} : IconProps){
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
      const handleOpenPopup = () => {
        setIsPopupOpen(true);
      };
    
      const handleClosePopup = () => {
        setIsPopupOpen(false);
      };
      
    if(goalCategory == "romance"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <FaHeart className="size-16 enlarge-box"/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup}  title={"Goal"} content={<GoalPopup goalTitle='Romance' goalSteps={20} goalStepsLeft={10}></GoalPopup>} closeBtn={true}/>   
            </div>
    );} if(goalCategory == "health"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <MdMonitorHeart className="size-16 enlarge-box"/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"} content={<GoalPopup goalTitle='Health' goalSteps={15} goalStepsLeft={15}></GoalPopup>} closeBtn={true}/> 
            </div>
    );} if(goalCategory == "social"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <FaUserFriends className="size-16 enlarge-box"/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"} content={<GoalPopup goalTitle='Social' goalSteps={10} goalStepsLeft={5}></GoalPopup>} closeBtn={true}/> 
            </div>
    );} if(goalCategory == "personalGrowth"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <FaPersonArrowUpFromLine className="size-16 enlarge-box"/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"} content={<GoalPopup goalTitle='Personal Growth' goalSteps={30} goalStepsLeft={20}></GoalPopup>} closeBtn={true}/> 
            </div>
    );} if(goalCategory == "finance"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <FaMoneyCheckDollar className="size-16 enlarge-box"/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"} content={<GoalPopup goalTitle='Finance' goalSteps={7} goalStepsLeft={15}></GoalPopup>} closeBtn={true}/> 
            </div>
    );} if(goalCategory == "education"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <FaUserGraduate className="size-16 enlarge-box"/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"} content={<GoalPopup goalTitle='Romance' goalSteps={30} goalStepsLeft={20}></GoalPopup>} closeBtn={true}/> 
            </div>
    );} if(goalCategory == "travel"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <BiSolidPlaneAlt className="size-16 enlarge-box"/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"} content={<GoalPopup goalTitle='Travel' goalSteps={12} goalStepsLeft={3}></GoalPopup>} closeBtn={true}/> 
            </div>
    );} if(goalCategory == "work"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <MdWork className="size-16 enlarge-box"/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"} content={<GoalPopup goalTitle='Work' goalSteps={10} goalStepsLeft={20}></GoalPopup>} closeBtn={true}/> 
            </div>
    );} else {
        return (
            <div>
                <Button onClick={handleOpenPopup}>    
                    <FaStar className="size-16 enlarge-box"/>  
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"} content={<GoalPopup goalTitle='Other' goalSteps={15} goalStepsLeft={50}></GoalPopup>} closeBtn={true}/> 
            </div>
    )}     
}

export default Icon;