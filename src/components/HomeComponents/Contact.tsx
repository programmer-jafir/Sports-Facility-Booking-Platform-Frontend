import { Button } from 'antd';
import contact from '../../assets/images/Contact.jpg';

const Contact = () => {
  return (
    <div id="contact" className="mb-8 bg-gray-100 ">
            <h1 className="text-4xl text-secondary font-bold text-center mb-10 pt-5">Contact Us</h1>
            <div className="flex flex-col md:flex-row items-center justify-evenly min-h-screen bg-gray-100 p-6">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={contact} alt="Contact Us" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
            </div>
            <div>
              <Button htmlType="submit" className="w-full px-4 py-6 bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold shadow-lg hover:from-secondary hover:to-primary transition-colors duration-300">
                Send Message
              </Button>
              
            </div>
          </form>
        </div>
      </div>
        </div>
  );
};

export default Contact;
