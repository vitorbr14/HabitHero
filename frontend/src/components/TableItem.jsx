import React from 'react'

const TableItem = () => {
  return (
    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td class="px-6 py-4">
                    xxxxxxxxx@gmail.com
                </td>
                <td class="px-6 py-4">
                    (xx) xxxxx-xxxx
                </td>
               
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-2">Edit</a>
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>
  )
}

export default TableItem