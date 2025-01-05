import { Globe } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-40">
      {/* Contact Section */}
      <div className="mb-4">
        <a href="#" className="text-gray-400 hover:underline">
          Questions? Contact us.
        </a>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <div>
          <a href="#" className="block text-gray-400 hover:underline">
            FAQ
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Investor Relations
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Privacy
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Speed Test
          </a>
        </div>
        <div>
          <a href="#" className="block text-gray-400 hover:underline">
            Help Center
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Jobs
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Cookie Preferences
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Legal Notices
          </a>
        </div>
        <div>
          <a href="#" className="block text-gray-400 hover:underline">
            Account
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Ways to Watch
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Corporate Information
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Only on Netflix
          </a>
        </div>
        <div>
          <a href="#" className="block text-gray-400 hover:underline">
            Media Center
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Terms of Use
          </a>
          <a href="#" className="block text-gray-400 hover:underline">
            Contact Us
          </a>
        </div>
      </div>

      {/* Language Selector */}
      <div className="mt-6">
        <button
          className="bg-black text-gray-400 border flex border-gray-400 px-4 py-2 rounded hover:bg-gray-800"
        >
          <Globe  className="mr-2"/> English
        </button>
      </div>

      {/* Footer Text */}
      <div className="mt-4 text-gray-400 text-sm">
        Netflix Pakistan
      </div>
    </footer>
  );
};

export default Footer;
