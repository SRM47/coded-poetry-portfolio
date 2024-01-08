function Footer() {
       return (
              <footer className=" flex justify-between items-center pb-20 pt-4 px-10">
                <p className="text-sm">&copy; 2024 Sameer Malik</p>
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Terms
                    </a>
                  </li>
                </ul>
              </footer>
            );
          }

export default Footer;