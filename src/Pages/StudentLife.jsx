import React, { useState } from "react";
import PageHeading from "../Components/PageHeading";

function StudentLife() {
  const [activeTab, setActiveTab] = useState("Upper School");

  const tabs = ["Upper School", "Middle School", "Lower School"];

  const content = {
    "Upper School": [
      "Aerospace Club",
      "Drama and Acting",
      "Entrepreneurship and Innovation",
      "Equity, Belonging, and Inclusion",
      "Genes in Diseases and Symptoms",
      "Hacking Club",
      "iGEM",
      "Khranicle",
      "Leadership Team",
      "Table Tennis",
      "Math Club",
      "Mock Trial",
      "National History Day",
      "Science Journal Club",
      "Spanish Honor Society",
      "Speech and Debate",
      "Yearbook",
    ],
    "Middle School": [
      "Board Games",
      "Chess Club",
      "Green Team (Sustainability)",
      "Leadership Team",
      "3D Printing",
      "Yearbook",
    ],
    "Lower School": ["Leadership Team"],
  };

  return (
    <div>
      <PageHeading content={"Student Clubs"} imageUrl={"/photo.webp"} />

      <div className="bg-[var(--card-bg)] pt-8 px-5 flex flex-col pb-5 gap-5 mt-19 md:flex-row md:px-40 md:gap-15 md:py-20">
        <div className="flex flex-col gap-5 md:w-150 text-md">
          <h2 className="text-4xl font-bold">Student Led Clubs</h2>
          <p>
            Student-led clubs offer students the chance to work together to
            pursue extracurricular interests and assume leadership roles within
            their community.
          </p>
          <p>
            The clubs and organizations offered at The Almora School reflect the
            interests and passions of our students. They are able to create and
            lead clubs on any interest or topic of their choice. Established
            clubs include chess, yearbook, gaming, and our student-led
            newspaper, the Khranicle.
          </p>
          <p>
            There are also opportunities to be student ambassadors and teaching
            assistants. The list of clubs available changes from year to year
            based on the interests and needs of students.
          </p>
          <p>
            If student can’t find a specific activity that meets their
            interests, we encourage them to create one.
          </p>
          <p className="italic">
            Banner photo (above) by student photographer John Fan.
          </p>
        </div>
        <div
          className="h-65 bg-center bg-cover md:w-120 md:h-120"
          style={{ backgroundImage: "url(/photo6.webp)" }}
        ></div>
      </div>

      <div className=" pt-8 px-5 flex flex-col pb-5 gap-5 md:flex-row md:px-40 md:gap-15 md:py-20">
        <div className="flex flex-col gap-5 md:w-150 text-md">
          <h2 className=" font-bold text-[var(--orange-color)]">
            CLUB SPOTLIGHT: ROBOTICS (ANTARES)
          </h2>
          <p>
            Antares (FRC Team 6962) is a team of young and aspiring KLS middle-
            and high-school students. The 2018 season was the team’s rookie year
            competing in the FIRST Robotics Competition (FRC). Hands-on learning
            and passion-driven work are encouraged at Khan Lab School, and the
            robotics team is a prime example of students pursuing learning
            outside of standard academics.
          </p>
          <p>
            Antares has a mission to inspire and expose others to the
            exploration of science, mathematics, computer science, and
            technology. We hope to represent our self-driven school at FRC
            competitions and share our experiences and knowledge with the rest
            of our community.
          </p>
          <p>
            One of the unique differentiators for Antares is its mixed-aged
            demographic. While most FRC teams are comprised of high school
            students only, Antares encourages students as young as age 11 to
            participate. Antares exposes students to not only engineering
            skills, but critical thinking, problem-solving, financing, teamwork,
            leadership, marketing, and presentation skills.
          </p>
        </div>
        <div
          className="h-65 bg-center bg-cover md:w-120 md:h-120"
          style={{ backgroundImage: "url(/photo9.webp)" }}
        ></div>
      </div>

      <div className=" pt-8 px-5 flex flex-col pb-5 gap-5 md:flex-row md:px-40 md:gap-15 md:py-20 md:items-center">
        <div className="flex flex-col gap-5 md:w-150 text-md">
          <h2 className=" font-bold text-[var(--orange-color)]">
            CLUB SPOTLIGHT: SPEECH AND DEBATE
          </h2>
          <p className="text-lg">
            The Speech & Debate Team is a great place for members to practice
            confidence, critical thinking, and effective speaking skills in a
            positive, constructive, and inclusive environment. The team is
            comprised of all skill levels and provides student, teacher, and
            coach based instruction. The club is a ton of fun, with events like
            school-wide spars with prizes, end of the term parties, and weekend
            tournaments at a variety of high schools and universities.{" "}
          </p>
        </div>
        <div className="border-t-1 border-b-1 text-2xl px-5 py-7 mt-10 text-center md:w-140 md:text-3xl">
          Clubs give students an opportunity to lead and collaborate in a
          low-stakes but high-reward environment.
        </div>
      </div>

      <div className="py-10 px-5 flex flex-col gap-2 md:flex-row md:px-40">
        <div
          className="h-55 md:w-100 bg-center bg-cover md:h-65 "
          style={{ backgroundImage: "url(/photo.webp)" }}
        ></div>
        <div
          className="h-55 md:w-100 bg-center bg-cover md:h-65 "
          style={{ backgroundImage: "url(/photo2.webp)" }}
        ></div>
        <div
          className="h-55 md:w-100 bg-center bg-cover md:h-65"
          style={{ backgroundImage: "url(/photo5.webp)" }}
        ></div>
      </div>

      <div className="py-10 px-5 flex flex-col gap-2 md:flex-row md:px-40 md:gap-10 md:justify-between">
      <div className="p-5 md:w-150">
      <h2 className="mb-10 text-3xl font-semibold">Student Clubs</h2>
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${
                activeTab === tab
                  ? "border-t border-l border-r bg-gray-100"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-5 border">
          {content[activeTab].map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>

      <div
          className="h-65 bg-center bg-cover md:w-120 md:h-120 md:mt-30"
          style={{ backgroundImage: "url(/photo7.webp)" }}
        ></div>
      </div>
    </div>
  );
}

export default StudentLife;