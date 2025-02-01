import { Button } from '@headlessui/react';
import { FaHeart } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";

interface IconProps {
    goalCategory?: string;
}

function Icon({goalCategory} : IconProps){
    if(goalCategory == "romance"){      
    return (
        <Button> 
            <FaHeart className="size-16 ..."/>
        </Button>
    );} if(goalCategory == "health"){      
        return (
            <Button> 
                <MdMonitorHeart className="size-16 ..."/>
            </Button>
    );} if(goalCategory == "social"){      
        return (
            <Button> 
                <FaUserFriends className="size-16 ..."/>
            </Button>
    );} if(goalCategory == "personalGrowth"){      
        return (
            <Button> 
                <FaPersonArrowUpFromLine className="size-16 ..."/>
            </Button>
    );} if(goalCategory == "finance"){      
        return (
            <Button> 
                <FaMoneyCheckDollar className="size-16 ..."/>
            </Button>
    );} if(goalCategory == "education"){      
        return (
            <Button> 
                <FaUserGraduate className="size-16 ..."/>
            </Button>
    );} if(goalCategory == "travel"){      
        return (
            <Button> 
                 <BiSolidPlaneAlt className="size-16 ..."/>
            </Button>
    );} else {
        return (
            <Button>    
                <FaStar className="size-16 ..."/>  
            </Button>
            )}        
}

export default Icon;