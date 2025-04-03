import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full'>
      <footer className="w-full bg-[var(--dark-bg)] text-[var(--light-color,#FFFFFF)]">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">MIDDLE & UPPER SCHOOL</h3>
              <p className="mb-4">(Grades 7-12)</p>
              <address className="not-italic">
                <p>[Address Here]</p>
                <p>[City, State ZIP Code]</p>
                <p>[Phone Number]</p>
              </address>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">LOWER SCHOOL</h3>
              <p className="mb-4">(Grades K-6)</p>
              <address className="not-italic">
                <p>[Address Here]</p>
                <p>[City, State ZIP Code]</p>
                <p>[Phone Number]</p>
              </address>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-6">AFFILIATED PROGRAMS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Almora Learning Portal</a></li>
                <li><a href="#" className="hover:underline">Almora Digital Academy</a></li>
                <li><a href="#" className="hover:underline">Almora Schools Network</a></li>
                <li><a href="#" className="hover:underline">Almora Global Connect</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">ACCREDITATION & MEMBERSHIPS</h3>
              <div className="flex flex-wrap gap-4 items-center justify-start">

                <div className="p-2 rounded-lg flex items-center justify-center h-16 w-16">
                  <img
                    className="h-full object-contain"
                    src="./src/assets/CBSE-Black.svg"
                    alt="CBSE"
                  />
                </div>

                <div className="p-2 rounded-lg flex items-center justify-center h-16 w-16">
                  <img
                    className="h-full object-contain invert"
                    src="./src/assets/NCERT-Black.svg"
                    alt="NCERT"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-4">Like. Follow. Friend.</h3>
              <p>@schoolofalmora</p>
              <div className="flex items-center space-x-4 mb-4">
                <a href="#" className="text-[var(--light-color,#FFFFFF)] hover:text-gray-300">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-[var(--light-color,#FFFFFF)] hover:text-gray-300">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-[var(--light-color,#FFFFFF)] hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--light-color,#FFFFFF)] text-[#3A4852] text-center py-4">
          <div className="container mx-auto px-4">
            &copy; School of Almora | Privacy | Cookie Policy | Terms of Use
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
