import React from 'react'
import PageHeading from '../Components/PageHeading'

function About() {
  return (
    <div >
        <PageHeading content={"Get to Know Us"} imageUrl={""}/>
        <div className="flex flex-col justify-center items-center  gap-10 pt-10 pb-10 px-5 md:px-40 md:pt-30">
      <h1 className="text-center text-4xl font-bold ">A Community Where Students Shape Their Journey</h1>
        </div>
    </div>
  )
}

export default About