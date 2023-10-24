import React from 'react'

const Card = ({item, key, deleteItem }) => {
  return (
    <div key={key} className={`ml-6 relative bg-white p-4 border-r-8 shadow-md my-4 flex justify-between ${item.type === 'expense' ? 'border-red-500' : 'border-green-500'}`}>
    <div className="absolute -left-6">
      <div onClick={() => deleteItem(item.id)}
            className="cursor-pointer absolute -left-2 bg-red-600 p-2 w-6 flex items-center text-xs text-white justify-center">
        x
      </div>
    </div>
    <div>
      <p className="text-black">{item.name}</p>
    </div>
    <div>
      <p className="text-black">{item.price} ks</p>
    </div>
  </div>
  )
}

export default Card
