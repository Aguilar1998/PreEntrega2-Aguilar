import React from 'react'
import ExampleSection from '../ComponentsExampleSection/Section'
import Item from './Item'




export default function ItemList({ productos }) {

  return (
    <div>
      <ExampleSection/>
      <div className=" flex mt-12 w-8/12 m-auto flex-wrap">
          {
            productos.map(producto => (
                <Item
                    producto={ producto}
                />
            ))
          }
    </div>
    </div>
  )
}