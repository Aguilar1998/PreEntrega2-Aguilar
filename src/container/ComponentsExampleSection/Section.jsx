import ItemsNavBar from "../ComponentsNavBar/ItemsNavBar";


// Funcion template tailwind.
export default function ExampleSection() {
  return (
    <div className="bg-gradient-to-b from-yellow-300 to-white-200">
      {/* <ItemsNavBar/> */}
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Estas Listo?</span>
          <span className="block text-orange-300 w-2/3">Con el beneficio de tener nuestros servicios, vas a obtener grandes resultados!</span>
        </h2>
      </div>
    </div>
  )
}
