import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
      isScrolled ? "bg-white shadow-md py-3" : "bg-transparent"
    )}>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-finflow-blue">
              FinFlow
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-medium text-gray-700 hover:text-finflow-blue transition-colors">
              Features
            </a>
            <a href="#benefits" className="font-medium text-gray-700 hover:text-finflow-blue transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-finflow-blue transition-colors">
              Testimonials
            </a>
            {/* <a href="#pricing" className="font-medium text-gray-700 hover:text-finflow-blue transition-colors">
              Pricing
            </a> */}
            <Button variant="outline" className="ml-4" onClick={() => navigate('/login')}>Log In</Button>
            <Button className="bg-finflow-blue bg-blue-800 hover:bg-blue-600" onClick={() => navigate('/register')}>Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#features" 
                className="font-medium text-gray-700 hover:text-finflow-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#benefits" 
                className="font-medium text-gray-700 hover:text-finflow-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#testimonials" 
                className="font-medium text-gray-700 hover:text-finflow-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="font-medium text-gray-700 hover:text-finflow-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full" onClick={() => navigate('/login')}>Log In</Button>
                <Button className="w-full bg-finflow-blue bg-blue-800 hover:bg-blue-600" onClick={() => navigate('/register')}>Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
