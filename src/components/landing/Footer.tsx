const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pb-8">
      <div className="container mx-auto px-6">
        <div className="pt-8  border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 FinFlow. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
