import { useRef } from "react";



const Login = () => {

    const form = useRef(null);


    return (
        <div className="Login bg-gray-100 h-full">
            <div className=" flex flex-col border-2 w-50 h-screen">

                <div className="bg-blue-300 w-2/6 rounded-xl border flex bottom-0 right-40 absolute h-2/4">

                </div>
                <div className="bg-yellow-300 w-2/12 rounded-full border flex top-3/4 right-1/3 absolute h-2/6">

                </div>
                <div className="bg-yellow-300 w-2/6 rounded-xl border flex m-16 absolute h-4/6 overflow-hidden">
                </div>
                <div className="bg-blue-300 w-2/12 rounded-full border flex top-24 left-1/3 absolute h-2/6">

                </div>
                <form action="Form.php" method="POST" className="flex shadow-2xl flex-col relative justify-around p-16 bg-white m-auto  w-2/5 h-4/5 border-2 rounded-lg border-red" ref={form}>
                    <h2 className="text-center font-serif text-4xl text-blue-700">Completa el formulario</h2>

                    <label htmlFor="name" className="labe mt-4">Name</label>
                    <input type="text" name="name" placeholder="Name" className="w-full bg-gray-300 rounded-lg h-10 p-4" />

                    <label htmlFor="email" className="labe mt-4">Email address</label>
                    <input type="text" name="email" placeholder="aguilarservice@example.cm" className="w-full bg-gray-300 rounded-lg h-10 p-4" />
                    
                    <div className="flex flex-col m-5">
                        <label htmlFor="abstract">Abstract</label>
                        <textarea name="abstract" id="abstract" cols="10" rows="5" className="border-2 rounded-lg p-3"></textarea>
                        <div>Describe your talk in 500 words or less</div>
                    </div>

                    <button className="m-auto flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ">
                        Submit
                    </button>
                    <a href="/" className='m-auto text-center w-full'>Forgot my password</a>
                </form>


            </div>
        </div >
    );
}

export default Login;