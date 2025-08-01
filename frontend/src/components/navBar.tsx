import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate();
  return (
    <nav className='w-screen h-[10vh] flex px-1   shadow-2xl top-[7vh] z-10 bg-white items-center justify-between  text-xl'>
        <h1 className=' font-bold text-[1rem]'>Sandesh.KC</h1>
        <div className="hidden md:block">
            <ul className="flex gap-8 lg:gap-8 sm:text-[.8rem] md:text-[.8rem] lg:text-xl">
                <NavbarItem text="Shop"/>
                <NavbarItem text="Sample"/>
                <NavbarItem text="Sets"/>
                <NavbarItem text="Fragnance Finder"/>
                <NavbarItem text="Perfume Guide" />
            </ul>
        </div>
            <ul className='flex items-center justify-center gap-2 border-x-2 p-4 border-black'>
                <li className=' border-black '>
                    <select name="name" id="" className='text-[1rem]'>
                        <option value="">NRS</option>
                        <option value="">AUD</option>
                        <option value="">USD</option>
                        <option value="">INR</option>
                        <option value="">EUR</option>
                        <option value="">GBP</option>
                        <option value="">JPY</option>
                        <option value="">CAD</option>
                    </select>
                </li>
                <li className=' border-black '>
                    <CiSearch className='w-4 h-4'/>
                </li>
                <li className='  text-2xl border-black'>
                    <VscAccount className='w-4 h-4' onClick={() => {
                        navigate("/login");
                    }}/>
                </li>
                <li className='  text-2xl border-black'>
                    <CiShoppingCart className='w-4 h-4'/>
                </li>
            </ul>
            <p className="md:hidden hamburger text-[.5rem]"></p>
    </nav>
  )
}

function NavbarItem({ text }: { text: string }) {
    return(
        <li className="border-b-2 cursor-pointer border-black/40 hover:border-red-500 transition-all duration-300">
            <p>{text}</p>
        </li>
    )
}
export default NavBar