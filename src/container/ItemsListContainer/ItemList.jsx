import React from 'react'
import ExampleSection from '../ComponentsExampleSection/Section'
import Item from './Item'




export default function ItemList({ productos }) {

  return (
    <div className='w-full m-auto'>
      <ExampleSection/>
      <div className=" flex w-8/12 mt-12 m-auto flex-wrap ">
          {
            productos.map(producto => (
              <div className="sm:w-1/2 lg:w-1/4  my-2">
                <Item
                    producto={ producto}
                />
              </div>
            ))
          }
    </div>
    </div>
  )
}