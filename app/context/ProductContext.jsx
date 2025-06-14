'use client';

import React, { createContext, useEffect, useState } from 'react';
import toast from "react-hot-toast";
import axios from 'axios';

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    const [productList, setProductList] = useState([])
    const [store, setStore] = useState([]);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [savedItems, setSavedItems] = useState([]);
    // console.log(store);

    //Adding Items

    const addToCart = (product) => {
        setStore((prevItem) => {
            const itemExists = prevItem.find((item) => item.id === product.id);
            if (itemExists) {
                return prevItem.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            } else {
                return [...prevItem, { ...product, quantity: 1 }]
            }
        })
        toast.success("Item Added!");
    }

    //Removing Items

    const removeFromCart = (productId) => {
        setStore((prevItems) => prevItems.filter((item) => item.id !== productId));
        toast.success("Item Removed!");
    }

    //Updating Items

    const updateQuantity = (productId, amount) => {
        setStore((prevItems) => prevItems.map((item) => item.id === productId ? { ...item, quantity: item.quantity + amount } : item).filter((item) => item.quantity > 0))
    }

    //Calculate total price
    const totalPrice = store.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        // if (!category || category === 'all') {
        //     setProductList(products);
        // } else {
        //     const filteredProduct = products.filter((item) => item.category === category);
        //     setProductList(filteredProduct);
        // }
        const fetchData = async () => {
            setLoading(true);
            try {
                const url = category ? `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}` : 'https://fakestoreapi.com/products';
                const response = await axios.get(url);
                setProductList(response.data);
            }catch(error){
                console.error("Error fetching products: ", error);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [category]);



    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);

    return (
        <ProductContext.Provider value={{ productList, addToCart, store, removeFromCart, updateQuantity, totalPrice, category, setCategory, loading, savedItems, setSavedItems }}>
            {props.children}
        </ProductContext.Provider>
    );
};
