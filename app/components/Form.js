import React from 'react'

const Form = ({newItem, option, addItem, setNewItem}) => {
    return (
        <div className="px-8 my-6">
            <div className="my-4 border-b w-full">
                <h2 className="font-semibold text-lg">Add new transaction</h2>
            </div>
            <div className="bg-white p-4 border-2 rounded-md">
                <form className="mt-4">
                    <div className="my-5 text-sm">
                        <label htmlFor="text" className="block text-black">Description</label>
                        <input
                            type="text"
                            autoFocus
                            value={newItem.description}
                            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                            className="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full text-black"
                            placeholder="Enter Text"
                        />
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="amount" className="block text-black">
                            Amount
                            <small className="text-gray-600"> (
                                <span className={`text-${option === 'expense' ? 'red' : 'green'}-400`}>
                                    {option === 'expense' ? 'negative-expense' : 'positive-income'}
                                </span>
                                )
                            </small>
                        </label>
                        <input
                            type="number"
                            autoFocus
                            value={newItem.price}
                            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                            className="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-black-100 text-black w-full"
                            placeholder="Enter Amount"
                        />
                    </div>
                    <div className="my-5">
                        <button onClick={addItem} className="rounded-sm block text-center text-white bg-gray-800 p-3 duration-300 hover:bg-black w-full">
                            Add Transaction
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
