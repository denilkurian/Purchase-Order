import React, { useEffect, useState, useContext } from 'react'
import { MasterForm } from './MasterForm'
import { FaDollarSign } from 'react-icons/fa';
import { ItemsContext, ModalContext } from './ContextItems'
import { Link } from 'react-router-dom'
import '../App.css'
import { Navbar } from './Navbar'
export const ListItems = () => {


  const width = { width: '2rem' }

  const { submittedItems } = useContext(ItemsContext);

  // Modal 
  const { modal, setModal } = useContext(ModalContext);


  const handleModal = (e) => {
    e.preventDefault()
    const updatedModal = { ...modal, itemsdisplay: false, formsdisplay: true };
    setModal(updatedModal)
  }


  return (
    <div className={`landing-bg ${modal.itemsdisplay ? 'block' : 'hidden'}`}>

      <Navbar />
      <br /> <br />
      <center>BR ELECTRONICS - ITEMS</center>
      <div className=" overflow-auto shadow-md sm:rounded-lg max-w-9xl mx-auto py-16">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr className='table-header'>
              <th scope="col" className="px-6 py-3">
                Item No
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Inventory Location
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Supplier
              </th>
              <th scope="col" className="px-6 py-3">
                Stock Unit
              </th>
              <th scope="col" className="px-6 py-3">
                Unit Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" classsName="px-6 py-3">
                Images
              </th>

            </tr>
          </thead>
          <tbody>

            {submittedItems.length > 0 ? (
              submittedItems.map((item, index) => (
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td class="px-6 py-4">
                    {index + 1}
                  </td>
                  <td class="px-6 py-4">
                    {item.item_name}
                  </td>
                  <td class="px-6 py-4">
                    {item.location}
                  </td>
                  <td class="px-6 py-4">
                    {item.brand}
                  </td>
                  <td class="px-6 py-4">
                    {item.category}
                  </td>
                  <td class="px-6 py-4">
                    {item.supplier}
                  </td>
                  <td class="px-6 py-4">
                    {item.stock_unit}
                  </td>
                  <td class="px-6 py-4">
                    {item.unit_price}
                  </td>
                  <td class="px-6 py-4">
                    {item.status}
                  </td>
                  <td class="px-6 py-4 flex gap-5">
                    {item.images.map((img) =>
                      <img className='hover-img' style={width} src={img} />
                    )
                    }
                  </td>

                </tr>
              ))
            ) : (
              <>
                <br />
                <div className='flex items-center justify-center'>
                  <p>No items added for purchase</p>

                </div>
                <br />
              </>
            )}  <br />
            <button onClick={handleModal} className=' text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Add Product</button>
            {submittedItems.length > 0 ? (
              <Link to='/'> <button className='flex text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Purchase   <span className='flex items-center justify-end'><FaDollarSign /></span></button></Link>)
              : '.'}  </tbody>
        </table>
      </div>

    </div>
  )
}
