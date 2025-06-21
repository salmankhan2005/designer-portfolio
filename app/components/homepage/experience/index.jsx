"use client";
// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  const projectThumbnails = [
    { name: "Movie Posters", count: "25+", color: "from-white to-gray-300" },
    { name: "Brand Identity", count: "15+", color: "from-gray-300 to-white" },
    { name: "Album Artwork", count: "10+", color: "from-white to-gray-300" },
    { name: "Studio Designs", count: "8+", color: "from-gray-300 to-white" }
  ];

  return (
    <div id="experience" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(-45deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Design Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey in graphic design, creating visual stories and brand experiences
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectThumbnails.map((project, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}>
                  {project.count}
                </div>
                <div className="text-gray-300 text-sm lg:text-base">{project.name}</div>
      </div>
            </div>
          ))}
          </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white to-gray-300"></div>
              
              <div className="relative lg:pl-20">
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-white to-gray-300 rounded-full border-4 border-black"></div>
                
                {/* Experience Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-xl text-gray-300 font-semibold mb-2">
                        {experience.company}
                      </p>
                      <p className="text-gray-400 text-lg">
                          {experience.period}
                        </p>
                      </div>
                    
                    {/* Company Badge */}
                    <div className="mt-4 lg:mt-0">
                      <span className="inline-block bg-gradient-to-r from-white/20 to-gray-300/20 text-white px-4 py-2 rounded-full border border-white/20">
                        {experience.company}
                      </span>
                    </div>
                        </div>

                  {/* Responsibilities */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                    <ul className="space-y-3">
                            {experience.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                        </li>
                            ))}
                          </ul>
                        </div>

                  {/* Project Highlights */}
                  {index === 0 && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-xl border border-white/10">
                      <h4 className="text-white font-semibold text-lg mb-4">Notable Collaborations:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                        <div>• Aliens Studio</div>
                        <div>• Lock Screen Studio</div>
                        <div>• Kanavu Pictures</div>
                        <div>• S. Rajavarman (Director)</div>
                        <div>• Afrideen Shah (Musical)</div>
                        <div>• Suriya, Vetrimaaran, Mari Selvaraj</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/10 to-gray-300/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Bring Your Vision to Life?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next project. From movie posters to brand identity, 
              I'm here to transform your ideas into compelling visual stories.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-white to-gray-300 px-8 py-4 rounded-full text-black font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;