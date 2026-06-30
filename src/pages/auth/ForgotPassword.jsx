import { Link } from "react-router-dom";

export default function ForgotPassword(){

return(

<div className="min-h-screen flex justify-center items-center bg-slate-900">

<div className="bg-slate-800 p-8 rounded-xl w-96">

<h2 className="text-white text-2xl mb-5">

Forgot Password

</h2>

<input

type="email"

placeholder="Enter Email"

className="w-full p-3 rounded bg-slate-700 text-white mb-4"

/>

<button

className="bg-purple-600 w-full p-3 rounded text-white">

Send Reset Link

</button>

<Link

to="/"

className="block mt-5 text-purple-400">

Back to Login

</Link>

</div>

</div>

)

}