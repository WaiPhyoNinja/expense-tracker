import React from 'react'

const Header = ({ 
    expenseTotal ,
    total,
    incomeTotal,
    expenseClick,
    incomeClick}) => {
    return (
        <>
            <div className="border-b">
                <div className="my-4 px-6">
                    <h2 className="font-semibold text-2xl">Expense Tracker</h2>
                </div>
            </div>
            <div className="px-8 py-2">
                <h4 className="text-lg text-white font-thin">Your Balance</h4>
                <h4 className="text-2xl font-semibold">{total} Ks</h4>
            </div>
            <div className="flex space-x-0 flex-col lg:flex-row lg:space-x-2 my-2 px-6">
                <div className="bg-green-600 p-4 border-2 rounded-md shadow-lg  w-full text-white text-center" onClick={incomeClick}>
                    <h1 className="text-xl font-light">INCOME</h1>
                    <h1 className="text-2xl text-green-100 font-semibold">{incomeTotal} Ks</h1>
                </div>
                <div className="bg-red-600 p-4 border-2 rounded-md shadow-lg  w-full text-white text-center" onClick={expenseClick}>
                    <h1 className="text-xl font-light">EXPENSE</h1>
                    <h1 className="text-2xl text-red-100 font-semibold">{expenseTotal} Ks</h1>
                </div>
            </div>
        </>
    )
}

export default Header
