import React, { useContext } from 'react';
import { OrderContext } from './ContextOrder';
import { Navbar } from '../Navbar';
import '../../App.css';
import { FaPlus, FaShoppingCart, FaDollarSign, FaMinus } from 'react-icons/fa';

export const OrderList = () => {
    const { allitems } = useContext(OrderContext);
    const { total } = useContext(OrderContext);

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];


    const handlePrint = () => {
        window.print();
    };

    return (
        <div className='landing-bg'>
            <Navbar />

            <br /><br /><br />
            <div className="overflow-x-auto fade-in">
                <center><p style={{ color: 'green' }}>Order Placed</p></center>

                <div className='flex items-center px-10 text-gray-900 py-5 '>Ordered Items</div>
                <div className='flex items-center px-10 text-gray-900 py-5 '> Order Date : {formattedDate} </div>



                <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Item No</th>
                            <th scope="col" className="px-6 py-3">Item Name</th>
                            <th scope="col" className="px-6 py-3">Brand</th>
                            <th scope="col" className="px-6 py-3">Stock Unit</th>
                            <th scope="col" className="px-6 py-3">Unit Price</th>
                            <th scope="col" className="px-6 py-3">Order Quantity</th>
                            <th scope="col" className="px-6 py-3">Net Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allitems.length > 0 ? (
                            allitems.map((val, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4">{val.item_name}</td>
                                    <td className="px-6 py-4">{val.brand}</td>
                                    <td className="px-6 py-4">{val.stock_unit}</td>
                                    <td className="px-6 py-4">${val.unit_price}</td>
                                    <td className="px-6 py-4">{val.order_quantity}</td>
                                    <td className="px-6 py-4">${val.net_amount}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="px-6 py-4 text-center">No items found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br /><br />

                <div className='flex items-center justify-center'>
                    <button
                        onClick={handlePrint}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Print Bill
                    </button>
                    <div className='flex justify-end px-28 items-center'>Grand Total: {total} <FaDollarSign /></div>
                </div>
            </div>
        </div>
    );
};
