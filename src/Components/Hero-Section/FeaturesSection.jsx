import React from 'react';

const FeaturesSection = () => {
    const features = [
        {
            title: "Learner-Centered",
            description: "At School of Almora, students have the space and encouragement to take control of their own learning journey. Our teacher-guides cultivate an environment that nurtures independence and curiosity. With ample time, space, and support, students are empowered to pursue authentic interests.",
            image: "/photo5.webp",
            reverse: false
        },
        {
            title: "Active Learning",
            description: "Learning happens through active engagement, and communication and collaboration are essential skills for success. We dedicate roughly half of each student’s experience to collaborative discussions, problem-solving, and real-world applications.",
            image: "/photo6.webp",
            reverse: true
        },
        {
            title: "Flexible & Accelerated Pacing",
            description: "Mastery of skills and content knowledge matters more than seat time. Freed from traditional pacing, our students often accelerate their learning by 1.5-2 grade levels per year and tackle college-level work as high school freshmen.",
            image: "/photo7.webp",
            reverse: false
        }
    ];

    return (
        <div className='w-full bg-[var(--card-bg)] mx-auto flex flex-col items-center pb-10 relative'>
            
            <div className="w-[1px] h-22 bg-teal-600 mb-4"></div>
            <h2 className="text-center text-4xl md:text-4xl font-bold text-gray-700 mb-10 lg:mb-20">
                What Sets Us Apart?
            </h2>

            {features.map((feature, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${feature.reverse ? 'md:flex-row-reverse' : ''} bg-[var(--card-bg)] mx-auto max-w-5xl mb-16`}>
                    
                    <div className={`md:w-1/2 relative h-80 md:h-[350px] ${feature.reverse ? 'lg:bottom-[45px] lg:right-[50px]' : 'lg:bottom-[45px] lg:left-[50px]'} z-10`}>
                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="md:w-1/2 px-[70px] pb-6 md:pb-10 flex flex-col justify-center bg-white shadow-md relative">
                        <h3 className="text-2xl font-semibold text-teal-700">{feature.title}</h3>
                        <p className="text-gray-700 mt-3 leading-relaxed">{feature.description}</p>
                        <button className="border-2 w-40 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white py-2 rounded-lg font-medium transition-colors duration-300 mt-4">
                            Learn More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturesSection;
