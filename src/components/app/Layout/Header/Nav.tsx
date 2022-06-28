export const Nav = () => {
  return (
    <div className="flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
      <a
        className="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
        href="#"
      >
        Home
      </a>
      <a
        className="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
        href="#"
      >
        Components
      </a>
      <a
        className="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
        href="#"
      >
        Pricing
      </a>
      <a
        className="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
        href="#"
      >
        Contact
      </a>

      <a
        className="block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
        href="#"
      >
        Get started
      </a>
    </div>
  );
};
