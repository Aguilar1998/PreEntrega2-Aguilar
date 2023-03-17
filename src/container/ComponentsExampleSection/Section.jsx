import ItemsNavBar from "../ComponentsNavBar/ItemsNavBar";


// Funcion template tailwind.
export default function ExampleSection() {
  return (
    <div className="bg-gradient-to-b from-yellow-200 to-gray-50">
      <ItemsNavBar/>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-orange-300	">Start your free study today.</span>
        </h2>
      </div>
    </div>
  )
}