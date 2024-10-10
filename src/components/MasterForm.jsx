import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemsContext } from './ContextItems';
import { Link } from 'react-router-dom'
import '../App.css'
import { Navbar } from './Navbar';
import { ListItems } from './ListItems';
import { ModalContext } from './ContextItems';



export const MasterForm = () => {

    const suppliers = ['Tech Distributors', 'Global Electronics', 'ProConnect Supply', 'ABC Wholesalers', 'Electro World'];
    const [filteredSuppliers, setFilteredSuppliers] = useState([]);
    const [selectedSupplier, setSelectedSupplier] = useState('');

    const { submittedItems, setSubmittedItems } = useContext(ItemsContext);

    const [myimages, SetImages] = useState([])

    const { modal, setModal } = useContext(ModalContext);

    const [items, setItems] = useState({
        item_name: '',
        location: '',
        brand: '',
        category: '',
        supplier: '',
        stock_unit: '',
        unit_price: '',
        status: true,
        images: []
    })


    const handlefileChange = (e) => {
        const files = Array.from(e.target.files); // Convert FileList to array
        SetImages([...myimages, ...files]); // Update the images state

        // Generate fake URLs and update items state with these URLs
        const fakeurls = files.map((file) => URL.createObjectURL(file));
        setItems({
            ...items,
            images: [...items.images, ...fakeurls] // Append new image URLs to items.images
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(items)
        setSubmittedItems([...submittedItems, items]);
        setItems({
            item_name: '',
            location: '',
            brand: '',
            category: '',
            supplier: '',
            stock_unit: '',
            unit_price: '',
            status: true,
            images: []
        })

        const updatedModal = { ...modal, itemsdisplay: true, formsdisplay: false };
        setModal(updatedModal)
        setSelectedSupplier('')
    }



    const closeModal = (e) => {
        e.preventDefault()
        const updatedModal = { ...modal, itemsdisplay: true, formsdisplay: false };
        setModal(updatedModal)
    }



    // Supplier search
    const handleSupplierChange = (e) => {
        const value = e.target.value.toLowerCase();
        const updatedSuppliers = suppliers.filter((supplier) =>
            supplier.toLowerCase().includes(value)
        );
        setFilteredSuppliers(updatedSuppliers);
        setSelectedSupplier(value);
    };

    const handleSupplierSelect = (supplier) => {
        setSelectedSupplier(supplier);
        setFilteredSuppliers([]);
    };

    return (

        <>
            <ListItems />
            <br />
            <div className={`master-background py-6 w-2/3 mx-auto md:w-4/5 md:mx-auto relative ${modal.formsdisplay ? 'block' : 'hidden'}`} >


                <br /><br />
                <form onSubmit={handleSubmit} class="md:w-96 md:mx-auto border-2 p-10 form">

                    <img onClick={closeModal} style={{ width: '4rem', cursor: 'pointer' }} className='close-button' src='https://thumbs.dreamstime.com/b/close-sticker-close-square-sign-close-close-sticker-153876219.jpg' />
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input onChange={(e) => setItems({ ...items, item_name: e.target.value })} value={items.item_name} type="text" name="item_name" id="item_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="item_name" className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input onChange={(e) => setItems({ ...items, location: e.target.value })} value={items.location} type="text" name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="location" className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Inventory Location</label>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input onChange={(e) => setItems({ ...items, brand: e.target.value })} value={items.brand} type="text" name="brand" id="brand" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="brand" className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input onChange={(e) => setItems({ ...items, category: e.target.value })} value={items.category} type="text" name="category" id="category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="category" className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input onChange={handleSupplierChange} value={selectedSupplier} type="text" name="brand" id="brand" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="supplier" className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Supplier</label>

                            <ul className="absolute z-10 bg-white border border-gray-300 mt-1 rounded-lg shadow-lg max-h-60 overflow-auto">
                                {filteredSuppliers.map((supplier, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSupplierSelect(supplier)}
                                        className="cursor-pointer hover:bg-gray-100 p-2"
                                    >
                                        {supplier}
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <label for="unit" className="block mb-2 text-sm font-medium   dark:text-gray-400">Stock Unit</label>
                            <select onChange={(e) => setItems({ ...items, stock_unit: e.target.value })} value={items.stock_unit} id="unit" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xs required:">
                                <option></option>
                                <option>Piece(pc)</option>
                                <option>Pack</option>
                                <option>Set</option>
                                <option>Roll</option>
                                <option>Pair</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input onChange={(e) => setItems({ ...items, unit_price: e.target.value })} value={items.unit_price} type="text" name="unit_price" id="unit_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="unit_price" className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Unit Price ($)</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <label style={{ color: 'white' }}>Item Status</label><br />
                            <label class="inline-flex items-center mb-5 cursor-pointer">
                                <input onChange={(e) => setItems({ ...items, status: !items.status })} type="checkbox" value="" class="sr-only peer" checked={items.status} />
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                            </label>
                        </div>



                    </div>


                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-3 pb-4">
                                <svg className="w-6 h-6 mb-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, or GIF (MAX. 800x400px)</p>
                            </div>
                            <input onChange={handlefileChange} id="dropzone-file" type="file" className="hidden" multiple />
                        </label>

                    </div>


                    <br />
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Submit</button>
                </form>


            </div>

        </>
    )
}

