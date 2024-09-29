import { Layout } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const SportsFooter = () => {
  return (
    <Footer className="bg-gradient-to-tl from-secondary to-primary text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-white">
              Your go-to platform for booking sports facilities, offering convenience, reliability, and modern features for sports lovers.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white hover:font-bold hover:text-white">About</a></li>
              <li><a href="/facilities" className="text-white hover:font-bold hover:text-white">Facilities</a></li>
              <li><a href="/contact" className="text-white hover:font-bold hover:text-white">Contact</a></li>
              <li><a href="/faq" className="text-white hover:font-bold hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white">
              <li>Email: info@sportsbooking.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Sport Street, City, Country</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <FacebookOutlined style={{ fontSize: '24px' }} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <TwitterOutlined style={{ fontSize: '24px' }} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <InstagramOutlined style={{ fontSize: '24px' }} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className="text-white">&copy; 2024 Sports Facility Booking. All rights reserved.</p>
        </div>
      </div>
    </Footer>
  );
};

export default SportsFooter;
