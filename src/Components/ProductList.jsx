// Displaying all products with search functionality

import React from 'react'
import ProductItem from './ProductItem'
import Shimmer from './Shimmer'
import useProductList from '../utils/useProductList'

//Using custom hook to get products
const ProductList = () => {
    const { defaultData, filteredData, setFilteredData, error } = useProductList()

    function searchData(e) {
        const search = defaultData.filter((data) => {
            return data.title?.toLowerCase().includes(e.toLowerCase()) ||
                data.brand?.toLowerCase().includes(e.toLowerCase()) ||
                data.category?.toLowerCase().includes(e.toLowerCase())
        })
        setFilteredData(search)
    }

    if (error) {
        return <h1 className='text-center mt-4 text-red-600'>Error: {error}</h1>
    }

    if (defaultData.length === 0) {
        return <Shimmer />
    }

    return (
        <div>
            <div className='text-center'>
                <input
                    className='border text-sm text-center p-2 mt-2 -mb-2 w-80 rounded-lg'
                    type="text"
                    placeholder='search by item,category or brand'
                    onChange={(e) => searchData(e.target.value)}
                />
            </div>
            <div className='flex flex-wrap justify-center m-4 p-2'>
                {filteredData.map((d) => {
                    return <ProductItem key={d.id} data={d} />
                })}
            </div>
        </div>
    )
}

export default ProductList