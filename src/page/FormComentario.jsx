import { useRef } from "react";



const FormComentario = () => {

    const form = useRef(null);

    /*
        ¿Cómo conectarse a una base de datos con PHP?
        Para poder procesar datos es necesario el lenguaje sql
        tipos de datos, no relacionales y relacionales.
        
        PHP puede usarse para cualquier cosa, pero solo por que puedas escribir algo con PHP no significa que debas hacerlo.

        React surgio de un experimiento que estaba haciendo facebook con php
        
        PHP es una herramienta, no una religion.

        Lenguaje del lado del servidor
        Fundamentos de como interactua una pagina web con tu backend
    */

    /*
        Servidor físico o VPS 🖥
        Es la computadora que se encarga de guardar tu página web y mantenerla accesible 24/7.
        Se le conoce como servidor y siempre está conectado a internet.
        A través de él podemos definir ciertas reglas de seguridad para nuestra página.
        Servidor web 🌐
        Es un programa que corre dentro de nuestro servidor físico y se encarga de gestionar cualquier petición que llegue al mismo. Esta petición es procesada por algún lenguaje de programación y al final devuelve una respuesta.
        
        Métodos HTTP 📩
        Los métodos HTTP son una forma de comunicación entre el cliente y el navegador. A través de una solicitud HTTP, el cliente es capaz de pedirle al servidor que realice una acción.
        
        Hay varios, pero tenemos 5 métodos principales.
        
        ℹ️ GET
        Este método permite solicitar información al servidor. Por ejemplo, podemos pedirle una lista de productos en el caso de que estemos haciendo un e-commerce o una lista de cursos si tenemos una página como Platzi.
        
        ➕ POST
        Este método permite guardar información. Por ejemplo, podemos recabar datos del usuario desde un formulario y mandarlos a nuestro servidor para procesarlos. Podríamos guardarlos para armar una base de datos de usuarios o incluso un sistema de login.
        
        🔄 PUT/PATCH
        Estos métodos permiten actualizar información ya guardada. Por ejemplo, podemos darle la oportunidad a un usuario de actualizar su correo electrónico o incluso cambiar su contraseña.
        La diferencia es que PUT reemplaza toda la información existente y PATCH solo reemplaza lo necesario, es decir, “parcha” la información.
        ❌ DELETE
        Este método lo usamos para eliminar un recurso del servidor. Por ejemplo, podemos utilizarlo si deseamos eliminar un blogpost o un comentario.
        Existe algo llamado soft delete. Esto quiere decir que vamos a ocultar la información para que los usuarios ya no pueden acceder a esta; sin embargo, sigue guardada en la base de datos.
        Contribución creada por: Martín Álvarez
    */

    return (
        <div className="FormComentario bg-gray-100 h-full">
            <div className=" flex flex-col border-2 w-50 h-screen">

                <div className="bg-blue-300 w-2/6 rounded-xl border flex bottom-0 right-40 absolute h-2/4">

                </div>
                <div className="bg-yellow-300 w-2/12 rounded-full border flex top-3/4 right-1/3 absolute h-2/6">

                </div>
                <div className="bg-yellow-300 w-2/6 rounded-xl border flex m-16 absolute h-4/6 overflow-hidden">

                </div>
                <div className="bg-blue-300 w-2/12 rounded-full border flex top-24 left-1/3 absolute h-2/6">

                </div>
                <form action="Form.php" method="_POST" className="flex shadow-2xl flex-col relative justify-around p-16 bg-white m-auto  w-2/5 h-4/5 border-2 rounded-lg border-red" ref={form}>
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

export default FormComentario;