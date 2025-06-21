// @flow strict
import { contactsData } from "@/utils/data/contactsData";
import { BsBehance, BsInstagram, BsDribbble, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 70% 30%, rgba(128, 128, 128, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Collaborate
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? Let's discuss your next design project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">
                Get In Touch
              </h3>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MdEmail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href={`mailto:${contactsData.email}`}
                      className="text-white font-semibold hover:text-gray-300 transition-colors duration-300"
                    >
                      {contactsData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-gray-300/20 to-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MdPhone size={24} className="text-gray-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a 
                      href={`tel:${contactsData.phone}`}
                      className="text-white font-semibold hover:text-gray-300 transition-colors duration-300"
                    >
                      {contactsData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MdLocationOn size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">
                      {contactsData.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">Follow My Work</h4>
                <div className="flex gap-4">
                  <a
                    href={contactsData.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white/10 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    <BsBehance size={20} className="text-white group-hover:text-black" />
                  </a>
                  <a
                    href={contactsData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white/10 rounded-full hover:bg-gray-300 transition-all duration-300 hover:scale-110"
                  >
                    <BsInstagram size={20} className="text-white group-hover:text-black" />
                  </a>
                  <a
                    href={contactsData.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white/10 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    <BsDribbble size={20} className="text-white group-hover:text-black" />
                  </a>
                  <a
                    href={contactsData.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white/10 rounded-full hover:bg-gray-300 transition-all duration-300 hover:scale-110"
                  >
                    <BsLinkedin size={20} className="text-white group-hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Start Your Design Project
              </h3>
              <p className="text-gray-300 mb-8">
                Tell me about your creative vision and I'll help bring it to life with professional design solutions.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black focus:outline-none focus:border-white transition-colors duration-300">
                    <option value="">Select project type</option>
                    <option value="movie-poster">Movie Poster Design</option>
                    <option value="brand-identity">Brand Identity</option>
                    <option value="album-artwork">Album Artwork</option>
                    <option value="social-media">Social Media Content</option>
                    <option value="studio-branding">Studio Branding</option>
                    <option value="typography">Typography Design</option>
                    <option value="print-design">Print Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-colors duration-300 resize-none"
                    placeholder="Describe your project vision, requirements, and timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-4 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/10 to-gray-300/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Bring Your Vision to Life?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              From concept to final design, I'm here to create stunning visual experiences 
              that capture your brand's essence and connect with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${contactsData.email}`}
                className="inline-block bg-gradient-to-r from-white to-gray-300 px-8 py-4 rounded-full text-black font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
              >
                Start Your Project
              </a>
              <a 
                href={`tel:${contactsData.phone}`}
                className="inline-block border-2 border-gray-300 px-8 py-4 rounded-full text-gray-300 font-semibold text-lg transition-all duration-300 hover:bg-gray-300 hover:text-black"
              >
                Let's Discuss
              </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;