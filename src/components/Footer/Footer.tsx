const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-[#192232] text-center py-2 m-1 justify-center bottom-0 text-white text-sm items-center
      flex rounded-b-md">
        <span className="pl-2 pr-[3.5px] py-1.5 mt-0 font-dosis">
          Portfolio &copy; {currentYear}. Code by
        </span>
        <span className="font-victor font-semibold hover:underline">
          <a href="https://www.linkedin.com/in/jamesimanel/">Jhens</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer