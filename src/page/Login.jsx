import { useRef } from "react";

import imagenPerfil from "../assets/img/Foto.jpg";


const Login = () => {

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="Login bg-gray-100">
            <div className=" flex flex-col border-2 w-50 h-screen">

                <div className="bg-blue-300 w-1/3 rounded-xl border flex bottom-0 right-60 absolute h-2/4">

                </div>
                <div className="bg-yellow-200 w-2/6 rounded-xl border flex m-16 absolute h-4/6 overflow-hidden">
                    <img src={imagenPerfil} alt="logo imagen" className="text-center w-1/1 object-cover h-1/2 mr-96 rounded-full mt-96"/>
                </div>
                <form action="/" className="flex shadow-2xl flex-col relative justify-around p-16 bg-white m-auto  w-2/5 h-3/5 border-2 rounded-lg border-red" ref={form}>
                    <h2 className="text-center font-serif text-4xl text-blue-700">Inicia secion</h2>
                    <label htmlFor="email" className="labe mt-4">Email address</label>
                    <input type="text" name="email" placeholder="platzi@example.cm" className="w-full bg-gray-300 rounded-lg h-10 p-4" />
                    <label htmlFor="password" className="label mt-4">Password</label>
                    <input type="password" name="password" placeholder="*********" className="w-full bg-gray-300 rounded-lg h-10 p-4" />
                    <button
                        onClick={handleSubmit}
                        className="m-auto flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ">
                        Log in
                    </button>
                    <a href="/" className='m-auto text-center w-full'>Forgot my password</a>
                </form>


            </div>
        </div >
    );
}

export default Login;