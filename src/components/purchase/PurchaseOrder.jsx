import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { useContext } from 'react'
import { ItemsContext, ModalContext } from '../ContextItems'
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus, FaShoppingCart, FaDollarSign, FaMinus } from 'react-icons/fa';


export const PurchaseOrder = () => {

    const { submittedItems } = useContext(ItemsContext)
    const { modal, setModal } = useContext(ModalContext)

    const navigate = useNavigate()

    const [total, setTotal] = useState(0)

    const [allitems, setAllitem] = useState([])

    const [item, setItem] = useState({
        item_no: '',
        item_name: '',
        brand: '',
        stock_unit: '',
        unit_price: '',
        order_quantity: 1,
        net_amount: 0
    })


    // Modal Visiblity for craete-list page
    const handleModal = (e) => {
        e.preventDefault()
        const updatedModal = { ...modal, itemsdisplay: false, formsdisplay: true };
        setModal(updatedModal)
        navigate('/create-item')
    }


    // Add to Cart
    const handleCart = (e, val, index) => {
        const indices = index
        e.preventDefault(e)

        let found = false

        for (let i = 0; i < allitems.length; i++) {
            if (allitems[i].item_name === val.item_name) {
                found = true;
                alert('Item Already added')
                break
            }
        }

        if (!found) {
            const newitem = { ...item, item_no: indices, item_name: val.item_name, brand: val.brand, stock_unit: val.stock_unit, unit_price: val.unit_price, order_quantity: 1, net_amount: val.unit_price }
            setItem(newitem)
            setAllitem([...allitems, newitem])
        }
    }



    // Extra Adding
    const handleAddCart = (e, val, index) => {
        e.preventDefault()
        const updatingitems = [...allitems]
        setAllitem(updatingitems, updatingitems[index].order_quantity += 1, updatingitems[index].net_amount = updatingitems[index].order_quantity * updatingitems[index].unit_price)

    }


    // Extra Removing
    const handleMinusCart = (e, val, index) => {
        e.preventDefault()
        const updatingitems = [...allitems]

        setAllitem(updatingitems, updatingitems[index].order_quantity -= 1, updatingitems[index].net_amount = updatingitems[index].order_quantity * updatingitems[index].unit_price)
        if (updatingitems[index].order_quantity < 1) {
            const filtered_allitems = allitems.filter((val) =>
                val !== updatingitems[index]
            )

            setAllitem(filtered_allitems)
        }
    }


    // Grand Total Calculating
    const changetotal = () => {
        let net_amounts = 0
        for (let i = 0; i < allitems.length; i++) {
            net_amounts += allitems[i].net_amount
        }
        setTotal(net_amounts)
    }

    useEffect(() => {
        changetotal()
    }, [allitems])



    return (
        <div>
            <Navbar />
            <br /><br />
            <center><button>  Purchase Items</button></center>
            <form className='flex justify-center'>
                <>
                    <div class="relative overflow-x-auto max-w-[1100px]">

                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Item No
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Brand
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Stock Unit
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Unit Price <FaDollarSign />
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Add
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {submittedItems.length > 0 ? (submittedItems.map((val, index) =>
                                    <tr class="bg-white dark:bg-gray-800">
                                        <td class="px-6 py-4">
                                            {index + 1}
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {val.item_name}
                                        </th>
                                        <td class="px-6 py-4">
                                            {val.brand}
                                        </td>
                                        <td class="px-6 py-4">
                                            {val.stock_unit}
                                        </td>
                                        <td class="flex items-center px-6 py-4">
                                            {val.unit_price}<FaDollarSign />
                                        </td>
                                        <td>
                                            <button onClick={(e) => handleCart(e, val, index)} className='flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Cart<span className='flex items-center pl-2'><FaPlus /></span></button>
                                        </td>
                                    </tr>)) : (<div className='flex gap-2'><p>Nothing Added for purchasing</p> <button onClick={handleModal} className='text-blue-600' >Add</button></div>)}
                            </tbody>
                        </table>
                    </div>

                </>

            </form>

            <br /><br /><br />


            <div className='max-w-4xl mx-auto border-2 bg-cyan-100'>
                <center><p className='py-3'>Cart Items</p></center>
                <form className='flex justify-center py-8'>
                    <>
                        <div class="relative overflow-x-auto max-w-[1100px]">

                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>

                                        <th scope="col" class="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Quantity
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Unit Price <FaDollarSign />
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Total <FaDollarSign />
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Add Remove Item
                                        </th>
                                    </tr>
                                </thead> {allitems.length > 0 ? (allitems.map((val, index) =>
                                    <tbody>

                                        <tr class="bg-white dark:bg-gray-800">

                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {val.item_name}
                                            </th>

                                            <td class="px-6 py-4">
                                                {val.order_quantity}
                                            </td>
                                            <td class="px-6 py-4">
                                                {val.unit_price}
                                            </td>
                                            <td class="flex items-center px-6 py-4">
                                                {val.net_amount}<FaDollarSign />
                                            </td>

                                            <td>
                                                <div className='flex justify-center'>
                                                    <button onClick={(e) => handleAddCart(e, val, index)} className='flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'><FaPlus /></button>
                                                    <button onClick={(e) => handleMinusCart(e, val, index)} className='flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-green-800focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'><FaMinus /></button>
                                                </div>
                                            </td>
                                        </tr>




                                    </tbody>

                                )) : (<div className='flex gap-2'><p>OOPS CART EMPTY</p> </div>)}
                            </table>
                        </div>


                    </>

                </form>
                <div className='flex justify-center gap-6'><p className='text-2xl'>Grand Total: {total}</p>
                    {allitems.length > 0 && (<button className='flex text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Place Order</button>
                    )}
                </div>


            </div>

        </div>
    )
}


