import SportsFooter from "../components/HomeComponents/SportsFooter";
import Navbar from "../components/Navbar/Navbar";
import ceo from '../assets/images/ceo.jpg'
import TechnicalLead from '../assets/images/Technical Lead.jpg'
import MarketingHead from '../assets/images/Marketing Head.jpg'
import OurMission from '../assets/images/Our Mission.jpeg'
import OurJourney from '../assets/images/Our Journey.jpeg'
import ContactUs from '../assets/images/Contact Us.jpeg'


const About = () => {
    return (
    <div>
        <Navbar/>
        <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-24">
      {/* Mission Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary mb-10">Our Mission</h1>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <img
            src={OurMission}
            alt="Our Mission"
            className="w-full lg:w-1/2 rounded-lg shadow-md mb-6 lg:mb-0"
          />
          <p className="text-gray-700 text-lg max-w-2xl mx-auto font-semibold">
            Our mission is to provide an easy-to-use platform for sports enthusiasts to discover and book
            sports facilities, fostering a community of active and healthy living.
          </p>
        </div>
      </section>

      {/* Team member Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-secondary mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Sufia Islam', role: 'Founder & CEO', image: `${ceo}` },
            { name: 'Ratul Ahmed', role: 'Technical Lead', image: `${TechnicalLead}` },
            { name: 'Sara Khan', role: 'Marketing Head', image: `${MarketingHead}` },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-secondary mb-10">Our Journey</h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
                <div className="max-w-4xl mx-auto mb-10">
          <ul className="list-disc list-inside text-gray-700 space-y-5">
            <li><strong>2025:</strong> Introduced premium features and mobile app support.</li>
            <li><strong>2026:</strong> Partnered with leading sports organizations to offer exclusive facility access and memberships.</li>
            <li><strong>2027:</strong> Launched AI-powered booking recommendations to enhance user experience.</li>
            <li><strong>2028:</strong> Expanded internationally, covering 50+ cities worldwide.</li>
            <li><strong>2029:</strong> Achieved 1 million active users and recognized as the top sports facility booking platform globally.</li>
            <li><strong>2030:</strong> Introduced virtual reality tours of sports facilities for a seamless booking experience.</li>
          </ul>
                </div>
        <img
            src={OurJourney}
            alt="Our Mission"
            className="w-full lg:w-1/2 rounded-lg shadow-md mb-6 lg:mb-0"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-secondary mb-10">Contact Us</h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 justify-between">
        <img
            src={ContactUs}
            alt="Our Mission"
            className="w-full lg:w-1/2 rounded-lg shadow-md mb-6 lg:mb-0"
          />
        <div className="text-gray-700 space-y-2 text-lg">
          <p>Office Address: 123 Sport Street, City, Country</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: <a href="info@sportsbooking.com" className="text-blue-500 hover:underline">support@sportsbook.com</a></p>
        </div>
        </div>
      </section>
    </div>
    <SportsFooter/>
    </div>
    );
};

export default About;