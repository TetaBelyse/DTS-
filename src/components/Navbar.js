import logo from '../logo.png'

const Navbar = () => {
  return (
    <div className="bg-cyan-50 text-black flex justify-between items-center">
      <div>
        <img src={logo} className='h-16 bg-white' />
      </div>
      <div className='text-lg font-semibold'>
        Logiciel de gestion de colis
      </div>
      <div className="pr-4 p-2">
        <button className="bg-cyan-200 hover:bg-cyan-300 px-4 rounded-full p-1 font-semibold uppercase">Se connecte</button>
      </div>
    </div>
  )
}

export default Navbar