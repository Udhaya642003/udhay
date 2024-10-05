export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="bg-gray-800 text-white px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold">MyBrand</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              About
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Services
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Contact
            </a>
          </div>
          <div className="hidden md:block">
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition">
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {children}
    </>
  );
}
