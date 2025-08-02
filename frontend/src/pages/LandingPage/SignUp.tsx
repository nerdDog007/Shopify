import NavBar from "../../components/navBar"
import img from '../../assets/signPic.webp'
import { useSelector,useDispatch } from "react-redux"
import { setSignUp,setLogin, setEmailAuth, setPasswordAuth } from "../../redux/slices/Auth"
import { setEmail, setName, setPassword } from "../../redux/slices/SignUp"

function SignUp() {
    const login = useSelector((state) => state.auth.login)
  return (
    <div>
        <NavBar/>
        <img src={img} alt="" className="w-screen h-[40vh] object-cover"/>
        <div className="w-screen h-[60vh]">
            {login?<LogIn/>:<SignUpForm/>}
        </div>
    </div>
  )
}


function LogIn(){
    const dispatch = useDispatch()
    const {email,password} = useSelector((state) => state.auth)
    return(
        <form action="" className="w-[90vw] mx-auto h-fit flex flex-col gap-8 items-start justify-center">
        <h1 className="items-start text-xl mt-4">Log In</h1>
        <div className="flex flex-col gap-4 w-full">
        <input value={email} onChange={(e) => dispatch(setEmailAuth(e.target.value))} type="email" name="" id="" placeholder="Email Address" className="px-0 py-2 outline-0 w-full border-b-2 border-black"/>
        <input value={password} onChange={(e) => dispatch(setPasswordAuth(e.target.value))} type="password" name="" id="" placeholder="Password" className="px-0 py-2 outline-0 w-full border-b-2 border-black"/>
        <button className="btn-bg py-2 text-white bg-[#414042] w-full">Log In</button>
        </div>
        <p className="border-b-2 border-black pb-1"
        onClick={()=>{
            dispatch(setLogin(false)) 
            dispatch(setSignUp(true))}}
        >Don't have an account? Sign Up</p>
    </form>
    )
}


function SignUpForm(){
    const dispatch = useDispatch()
    const {name,email,password} = useSelector((state) => state.signUp)
    const handleClick = async (e) => {
        e.preventDefault()
        await fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then((res) => res.json()).then((data) => console.log(data))
    }
    console.log(name,email,password);
    return(
        <form action="" className="w-[90vw] mx-auto h-fit flex flex-col gap-8 items-start justify-center">        
            <h1 className="items-start text-xl mt-4">Sign Up</h1>
            <div className="flex flex-col gap-4 w-full">
                <input value={name} onChange={(e) => dispatch(setName(e.target.value))} type="text" name="" id="" placeholder="Name" className="px-0 py-2 outline-0 w-full border-b-2 border-black"/>
                <input value={email} onChange={(e) => dispatch(setEmail(e.target.value))} type="email" name="" id="" placeholder="Email Address" className="px-0 py-2 outline-0 w-full border-b-2 border-black"/>
                <input value={password} onChange={(e) => dispatch(setPassword(e.target.value))} type="password" name="" id="" placeholder="Password" className="px-0 py-2 outline-0 w-full border-b-2 border-black"/>
                <button className="btn-bg py-2 text-white bg-[#414042] w-full"onClick={handleClick}>Sign Up</button>
            </div>
            <p className="border-b-2 border-black pb-1" onClick={()=>{
                dispatch(setLogin(true)) 
                dispatch(setSignUp(false))}}
            >Already have an account? Log In</p>
        </form>
    )
}
export default SignUp