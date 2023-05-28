'use client'

import React, { useState, useEffect, useContext } from "react";
import Layout from "../../components/layout";
import { FiPlusCircle, FiTrash } from "react-icons/fi";
// import SelectedItemsContext, { SelectedItemsProvider } from "../../contexts/SelectedItemsContext";

const Tasks = () => {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [addInputValue, setAddInputValue] = useState("");
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchItems = () => {
        try {
          if (!JSON.parse(localStorage.getItem("items"))) {
            setAndSaveItems([]);
          }
          setItems(JSON.parse(localStorage.getItem("items")));
          setFetchErr(null);
        } catch (error) {
          // setFetchErr(error.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      setTimeout(() => {
        fetchItems();
      }, 1500);
    }, []);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.text.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchInputValue, items]);

  useEffect(() => {
    setCount(items.length);
  }, [items]);

  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleAddInputChange = (event) => {
    setAddInputValue(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    if (addInputValue.trim() !== "") {
      const newItem = {
        id: new Date().getTime(),
        text: addInputValue.trim(),
        selected: false,
      };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      setAddInputValue("");
      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  const handleToggleSelect = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleSelectAll = () => {
    const updatedItems = items.map((item) => ({
      ...item,
      selected: true,
    }));
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleUnselectAll = () => {
    const updatedItems = items.map((item) => ({
      ...item,
      selected: false,
    }));
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleDeleteSelected = () => {
    const updatedItems = items.filter((item) => !item.selected);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  // const { setSelectedItems } = useContext(SelectedItemsContext);

  // const handleDone = () => {
  //   setSelectedItems(items.filter((item) => item.selected));
  //   router.push("/selected-items");
  // };

    return (
        <Layout containerClassName="bg-my-bg-image h-screen flex flex-col min-h-screen">
                <div className="flex flex-grow justify-center mt-10 ">
                    <div className="flex flex-col items-center">
                        <form>
                            <input
                                type="text"
                                id="search"
                                role="searchbox"
                                value={searchInputValue}
                                onChange={handleSearchInputChange}
                                placeholder="Search items"
                                className="w-96 h-10 mb-3 block rounded-lg pl-2 border-2 border-rose-500 focus:outline-none"
                            />
                        </form>
                        <form className="flex items-center">
                            <input
                                type="text"
                                value={addInputValue}
                                onChange={handleAddInputChange}
                                placeholder="Add items"
                                className="w-80 h-10 mr-2 rounded-lg pl-2 border-2 border-rose-500 focus:outline-none"
                            />
                            <button
                                className="bg-white h-10 w-14 flex items-center justify-center rounded-md border-2 border-rose-500 hover:bg-rose-200 transition-colors"
                                onClick={handleAddItem}>
                                
                                <FiPlusCircle />
                            </button>
                        </form>
                            <main className="mt-6 p-2 bg-violet-300 rounded-lg overflow-auto max-h-screen w-96">
                                {isLoading ? (
                                    <div className="text-green-500 text-center text-xl font-medium">Wait, loading...</div>
                                ) : (
                                    <>
                                        <ul className="flex justify-center flex-col items-center text-center max-h-96 overflow-y-auto">
                                            {items.length === 0 ? (
                                                <li className="w-80 mb-2 pr-1 bg-slate-50 rounded-lg p-2 text-red-500  font-medium">
                                                    List is empty
                                                </li>
                                            ) : filteredItems.length === 0 ? (
                                                <li className="w-80 mb-2 pr-1 bg-slate-50 rounded-lg p-2 text-red-500 text-center font-medium">
                                                    No items found
                                                </li>
                                            ) : (
                                                filteredItems.map((item) => (
                                                    <li
                                                        key={item.id}
                                                        className="w-80 ml-2 mb-2 bg-slate-50 rounded-lg p-2 flex justify-between items-center h-12 text-lg"
                                                    >
                                                        <div className="flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                checked={item.selected}
                                                                className="mr-2 h-8 w-8 rounded cursor-pointer"
                                                                onChange={() => handleToggleSelect(item.id)}
                                                        />
                                                        {item.text}
                                                    </div>
                                                    <button
                                                        className="text-red-500 text-2xl p-2 hover:bg-violet-400 rounded-lg transition-colors"
                                                        onClick={() =>
                                                            handleDeleteItem(item.id)
                                                        }
                                                    >
                                                        <FiTrash />
                                                    </button>
                                                </li>
                                            )))}
                                        </ul>
                                        <div className="flex space-x-2 justify-center mt-5">
                                            <button onClick={handleSelectAll} className="border-2 border-slate-50 rounded-lg p-1 text-slate-50 hover:bg-violet-500 transition-colors">
                                                Select All
                                            </button>
                                            <button onClick={handleUnselectAll} className="border-2 border-slate-50 rounded-lg p-1 text-slate-50 hover:bg-violet-500 transition-colors">
                                                Unselect All 
                                            </button>
                                            <button onClick={handleDeleteSelected} className="border-2 border-slate-50 rounded-lg p-1 text-slate-50 hover:bg-violet-500 transition-colors">
                                                Delete Selected
                                            </button>
                                            <button className="border-2 border-slate-50 rounded-lg p-1 text-slate-50 hover:bg-violet-500 transition-colors">
                                                Done
                                            </button>
                                        </div>
                                    </>
                                )}
                            </main>
                    </div>
                </div>
                <div className="text-2xl text-slate-50 self-center font-medium mb-4">
                    Total items: {count}
                </div>
        </Layout>
    );
};;

export default Tasks;

