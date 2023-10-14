import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
const TableHead = () => {
  return (
    <>
    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            <h1 className='text-2xl'>Hello, name!</h1>
            <div>
                <AiOutlinePlus className='addButton' />
            </div>
            <h2 className='py-4'>Register Client</h2>
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    E-mail
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
    </>
  )
}

export default TableHead