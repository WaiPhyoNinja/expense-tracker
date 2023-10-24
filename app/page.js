"use client";
import { useEffect, useState } from "react"
import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from './utils/firebase';
import Card from "./components/Card";
import Form from "./components/Form";
import Header from "./components/Header";

export default function Home() {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ description: '', price: '', type: '' })
  const [option, setOption] = useState('');
  const [total, setTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);

  // add item to database 
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.description !== '' && newItem.price !== '' && option !== '') {
      await addDoc(collection(db, 'items'), {
        name: newItem.description.trim(),
        price: newItem.price,
        type: newItem.type
      });
      setNewItem({ description: '', price: '', type: '' })
    }
  }

  //read item to database
  useEffect(() => {
    const q = query(
      collection(db, 'items'),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);

      const calculateData = (itemList, type) => {
        return itemList.filter((item) => item.type === type)
          .reduce((accumulator, currentItem) => {
            return accumulator + parseFloat(currentItem.price);
          }, 0);
      };

      setTotal(calculateData(itemsArr, 'income') - calculateData(itemsArr, 'expense'));
      setExpenseTotal(calculateData(itemsArr, 'expense'));
      setIncomeTotal(calculateData(itemsArr, 'income'));
      return () => unsubscribe();
    });
  }, []);

  //delete item to database
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'items', id));
  };

  const expenseClick = () => {
    setOption('expense');
    setNewItem({ ...newItem, type: 'expense' })
  }

  const incomeClick = () => {
    setOption('income');
    setNewItem({ ...newItem, type: 'income' })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          <div>
            <Header
              total={total}
              expenseTotal={expenseTotal}
              incomeTotal={incomeTotal}
              incomeClick={incomeClick}
              expenseClick={expenseClick}
            />
            <div className="px-8 my-6">
              <div className="my-4 border-b w-full">
                <h2 className="font-semibold text-lg">History</h2>
              </div>
              {items.map((item, id) => (
                <Card
                  item={item}
                  key={id}
                  deleteItem={deleteItem} />
              ))}
            </div>

            {option !== '' && (
              <Form
                newItem={newItem}
                option={option}
                addItem={addItem}
                setNewItem={setNewItem}
              />
            )}

          </div>
        </div>
      </div>
    </main >
  )
}
