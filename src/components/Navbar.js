import logo from "../logo.png";

const Navbar = () => {
  return (
    <div className="bg-slate-700 text-white flex justify-between items-center w-screen">
      <div>
        <img src={logo} className="h-16 bg-white" />
      </div>
      <div className="text-xl font-semibold">Dimension Technologies System</div>
      <div className="pr-4 p-2">
        <button className="bg-red-700 hover:bg-blue-400 px-4 rounded-full p-1 mr-4 font-semibold uppercase">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
