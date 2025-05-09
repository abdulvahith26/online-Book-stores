// components/Footer.jsx
function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/cart" className="hover:underline">Cart</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Info</h4>
            <p>Email: support@bookstore.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <p>Instagram | Facebook | Twitter</p>
          </div>
        </div>
        <div className="text-center mt-4">&copy; {new Date().getFullYear()} BookStore. All rights reserved.</div>
      </footer>
    );
  }
  
  export default Footer;
  