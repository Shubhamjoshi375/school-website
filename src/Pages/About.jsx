import React from "react";
import PageHeading from "../Components/PageHeading";
import CardCollection from "../Components/Hero-Section/CardCollection";

function About() {
  return (
    <div>
      <PageHeading content={"Get to Know Us"} imageUrl={""} />
      <div className="flex flex-col justify-center items-center  gap-10 pt-10 pb-10 px-5 md:px-30 md:pt-30">
        <h1 className="text-center text-4xl font-bold ">
          A Community Where Students Shape Their Journey
        </h1>

        <div className="w-full md:px-15 flex flex-col gap-10">
          <div className="flex flex-col gap-10 ">
            <div className="w-full flex flex-col md:flex-row md:gap-5 md:items-center">
              <div className="border h-35 w-full md:h-45"></div>
              <p className="text-center">
                The Almora School is a non-profit, mastery-based, independent
                school designed to implement the innovative educational ideas by
                founders, Gaurav and Ankit.{" "}
              </p>
            </div>
            <CardCollection />
          </div>

          <h2 className="text-3xl">Quick Facts</h2>

          <div className="w-full flex flex-col md:flex-row gap-20 md:gap-50">
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-bold">Grades</h4>
                <p>TK-12</p>
              </div>

              <div>
                <h4 className="font-bold">Enrollment</h4>
                <p>280 students</p>
              </div>

              <div>
                <h4 className="font-bold">Faculty</h4>
                <p>47 Full and Part-Time Faculty</p>
              </div>

              <div>
                <h4 className="font-bold">Accreditation</h4>
                <p>Cognia</p>
                <p>Western Association of Schools and Colleges</p>
              </div>

              <div>
                <h4 className="font-bold">Memberships</h4>
                <p>National Association of Independent Schools (NAIS)</p>
              </div>

              <div>
                <h4 className="font-bold">Tuition (2024-25 School Year)</h4>
                <p>Lower School (K-6): $32,100</p>
                <p>Middle and Upper School (7-12): $35,900</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-bold">Location</h4>
                <p>
                  Our school is located on two campuses. Our Lower School campus
                  is in Palo Alto, CA and our Middle and Upper School campus is
                  in Mountain View, CA.
                </p>
              </div>

              <div>
                <h4 className="font-bold">
                  School Hours (2024-25 School Year)
                </h4>
                <p>Palo Alto Campus: 9 am – 3:30 pm</p>
                <p>Mountain View Campus: 9 am – 4 pm</p>
              </div>

              <div>
                <h4 className="font-bold">
                  Drop-Off Times (2024-25 School Year)
                </h4>
                <p>Palo Alto Campus: 8:30 am – 8:55 am</p>
                <p>Mountain View Campus: 8 am – 8:45 am</p>
              </div>

              <div>
                <h4 className="font-bold">Extended-Day Care</h4>
                <p>
                  Extended Day care is available for students Monday-Friday from
                  4 pm – 6 pm
                </p>
              </div>

              <div>
                <h4 className="font-bold">Financial Assistance</h4>
                <p>
                  Tuition assistance is based on a family’s demonstrated need.
                </p>
              </div>
            </div>
          </div>

          <hr />

          <div className="w-full flex flex-col items-center gap-20 md:flex-row">
            <div>
              <div className="text-3xl text-[var(--orange-color)] text-center mb-20">
                <h2>SCHOOL</h2>
                <h2>HISTORY</h2>
              </div>
              <img src="./src/assets/celebrate.png" alt="Celebration Badge" />
            </div>
            <div className="flex flex-col gap-10 text-md">
              <p>
                The Almora School's story began in the most humble of
                settings—Sal Khan's living room in Almora, Uttarakhand. In
                2014, armed with just a PowerPoint presentation and a vision for
                reimagining education, Sal shared his ideas with a small group
                of passionate parents who believed in the possibility of a
                different kind of school. From that first living room meeting, a
                committed community formed around the ambitious goal of creating
                a learning environment that would break free from traditional
                educational constraints.
              </p>
              <p>
                Starting with just 30 students in a single mixed-age classroom,
                the school became a reality, growing from Sal's vision to
                reimagine education for the 21st century. Inspired by the
                success of Khan Academy's online platform, Sal and these
                founding families recognized the need for a physical school that
                could serve as a laboratory for educational innovation. The
                school's founding principles emphasized mastery-based learning,
                student agency, and real-world application of knowledge—moving
                beyond traditional grade levels and fixed academic schedules.
              </p>
              <p>
                Today, The Almora School continues to evolve and grow while
                maintaining its commitment to being a model for educational
                innovation, serving as both a successful independent school and
                an incubator for new teaching and learning practices.
              </p>
            </div>
          </div>

          <hr />

          <div className="bg-[var(--card-bg)] py-8 px-3 md:py-12 md:px-8">
            <p className="text-2xl md:text-3xl text-center text-[var(--orange-color)]">Our story began in a living room where a passionate community of parents asked:
            </p>
            <p className="text-2xl md:text-3xl text-center text-[var(--orange-color)]">What if school could be different?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
