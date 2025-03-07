export default function Footer() {
  return (
    <div>
      <footer className=" border-t text-gray-500 py-4 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-gray-400 text-base">
            &copy; {new Date().getFullYear()} DesainAI. All rights reserved.
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#" className="text-gray-400 text-sm transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 text-sm transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 text-sm transition">
                Support
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
