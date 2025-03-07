const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>&copy; {new Date().getFullYear()} User Management. All rights reserved.</p>
        <p>
          <a href="/terms" className="underline mx-2">Terms of Service</a> | 
          <a href="/privacy" className="underline mx-2">Privacy Policy</a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  