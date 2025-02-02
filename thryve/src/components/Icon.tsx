import { Button } from '@headlessui/react';
import { FaHeart } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import Popup from "./Popup";
import { useState } from 'react';
import GoalPopup from './GoalPopup';

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
                    <FaHeart className="size-16 ..."/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup}  title={"Goal"} content={<GoalPopup goalTitle='Romance'></GoalPopup>}/>   
            </div>
    );} if(goalCategory == "health"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <MdMonitorHeart className="size-16 ..."/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"}/> 
            </div>
    );} if(goalCategory == "social"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <FaUserFriends className="size-16 ..."/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"}/> 
            </div>
    );} if(goalCategory == "personalGrowth"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <FaPersonArrowUpFromLine className="size-16 ..."/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"}/> 
            </div>
    );} if(goalCategory == "finance"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <FaMoneyCheckDollar className="size-16 ..."/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"} /> 
            </div>
    );} if(goalCategory == "education"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <FaUserGraduate className="size-16 ..."/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"}/> 
            </div>
    );} if(goalCategory == "travel"){      
        return (
            <div>
                <Button onClick={handleOpenPopup}> 
                    <BiSolidPlaneAlt className="size-16 ..."/>
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"}/> 
            </div>
    );} else {
        return (
            <div>
                <Button onClick={handleOpenPopup}>    
                    <FaStar className="size-16 ..."/>  
                </Button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title={"Goal"}/> 
            </div>
    )}     
}

export default Icon;