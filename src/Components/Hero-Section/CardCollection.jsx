import React from 'react'
import SlidingCard from '../Hero-Section/SlidingCard';
import { FaSchoolFlag } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaPenToSquare } from "react-icons/fa6";
function CardCollection({className}) {
  return (
    <div className={`${className} flex flex-col md:flex-row md:w-full md:justify-center px-3`}>
        <SlidingCard Icon={FaSchoolFlag} heading={"Visit"} summary={"Schedule a visit."} btnContent={"SCHEDULE"} bgColor={"#E9F6F5"}/>
        <SlidingCard Icon={IoIosPeople} heading={"Learn More"} summary={"We look forward to connecting with you."} btnContent={"LEARN MORE"} bgColor={'white'}/>
        <SlidingCard Icon={FaPenToSquare} heading={"Apply"} summary={"Learn more about the application process."} btnContent={"HOW TO APPLY"} bgColor={'#E9F6F5'}/>
        {/* <SlidingCard Icon={FaPenToSquare} heading={"Apply"} summary={"We look forward to connecting with you."} btnContent={"LEARN MORE"}/> */}
    </div>
  )
}

export default CardCollection