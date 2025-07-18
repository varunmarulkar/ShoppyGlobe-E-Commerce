import React, { useEffect, useState } from 'react'
import { dummyData } from '../utils/constant'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/CartSlice'

const ProductInfo = () => {
    const [data, setData] = useState({})
    const [showReviews, setShowReviews] = useState(false)

    const dispatch=useDispatch()

    function addToCart(){
        dispatch(addItems(data))
    }

    const params = useParams()
    // console.log(params)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const dummy = await fetch(dummyData)
        const json = await dummy.json()
        //   console.log(json)

        const allData = json.products.find(d =>
            d.id === Number(params.id)
        )

        setData(allData)
    }

    return (
        <div>
            <Link to={"/"}><p className='p-2  hover:text-red-500 hover:cursor-pointer'>⬅️Back To The Home Page</p></Link>
            <div className='m-4 '>
                <div className='grid grid-cols-3 '>
                    <img className='shadow-lg bg-gray-100 w-[300px] col-span-1' src={data.thumbnail} alt="" />
                    <div className='col-span-1'>
                        <h1 className='font-semibold text-3xl'>{data.title}</h1>
                        <h1 className='font-semibold'>{data.brand ? data.brand : data.category && data.category.charAt(0).toUpperCase() + data.category.slice(1)}</h1>
                        <h2 className='font-semibold'>{Math.floor(data.rating)}<span className='mx-2'>{'⭐'.repeat(Math.floor(data.rating))}</span></h2>
                        <div className=' text-gray-300'><hr /></div>
                        <h1 className=' my-2 font-semibold text-2xl'><span className='text-red-500 font-normal'>-{data.discountPercentage}%</span> <sup>$</sup>{data.price}</h1>
                        <h3 className={data.availabilityStatus === "In Stock" ? 'text-blue-600 text-2xl'
                            : 'text-red-500'}>{data.availabilityStatus}</h3>
                            <h1 className='text-red-500 font-semibold mt-5'>Minimum order quantity for this product is {data.minimumOrderQuantity}</h1>
                    </div>
                    <div className='mx-40 w-[230px] border-1 border-gray-300 rounded-md col-span-1'>
                        <h1 className=' my-2 mx-3 font-semibold text-2xl'><sup>$</sup>{data.price}</h1>
                        <h1 className='text-red-500 mx-3 font-bold'> {data.stock <50?`Only ${data.stock} left in stock`:` ${data.stock} left in stock`}</h1>
                        <h1 className='text-sm mx-4 mt-2'> Ships From <span className='mx-2  font-semibold'>ShoppyGlobe</span></h1>
                        <h1 className='text-sm mx-4 mt-2'> Sold by <span className='mx-2 font-semibold'>
                            {data.brand ? data.brand : data.category && data.category.charAt(0).toUpperCase() + data.category.slice(1)}</span></h1>
                        <h1 className='text-sm mx-4 mt-2'> Payment <span className='mx-2 font-semibold'>Secure Transaction</span></h1>
                        <div className='text-center mt-5'>
                            <button className='bg-yellow-400 p-2 w-[200px] rounded-2xl mx-4 mt-2 cursor-pointer hover:bg-yellow-500' onClick={addToCart}>Add to Cart</button>
                        </div>

                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='text-2xl mb-2 font-bold'>Product Details</h1>
                    <h1 className='text-[16px] px-2 font-semibold'>Category: <span className='text-sm font-normal'> {data.category && data.category.charAt(0).toUpperCase() + data.category.slice(1)}</span></h1>
                    <h1 className='text-[16px] px-2 font-semibold'>Shipping: <span className='text-sm font-normal'> {data.shippingInformation}</span></h1>
                    <h1 className='text-sm  px-2'><span className='font-semibold text-[16px]'>Product Dimensions: </span>{data.dimensions?.depth} x {data.dimensions?.height} x {data.dimensions?.width} cm</h1>
                    <h1 className='text-[16px] px-2 font-semibold'>Date First Available: <span className='text-sm font-normal'>{new Date(data.meta?.createdAt).toLocaleDateString()}</span></h1>
                    <h1 className='text-[16px] px-2 font-semibold'>Manufacturer: <span className='text-sm font-normal'> ShoppyGlobe Pvt. Ltd. Mumbai, Maharashtra</span></h1>
                    <h1 className='text-[16px] px-2 font-semibold'>Country of Origin: <span className='text-sm font-normal'> India</span></h1>
                    <h1 className='text-[16px] px-2 font-semibold'>Packer: <span className='text-sm font-normal'> SG Packaging Solutions, Pune, Maharashtra</span></h1>
                    <h1 className='text-[16px] px-2 font-semibold'>Importer: <span className='text-sm font-normal'> ShoppyGlobe Imports, New Delhi, India</span></h1>
                    <h1 className='text-[16px] px-2 font-semibold'>Return Policy: <span className='text-sm font-normal'> {data.returnPolicy}</span></h1>
                    <h1 className='text-[16px] px-2 font-semibold'>Warranty: <span className='text-sm font-normal'>{data.warrantyInformation}</span></h1>

                    <div className='mt-10'>
                        <hr />
                        <h1 className='text-2xl mb-2 mt-8 font-semibold text-gray-600'>Product Description</h1>
                        <p className='mx-4'>{data.description}</p>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <hr />
                <div className='mt-8'>
                    <span className='mx-4 text-2xl mb-2 text-red-500 font-semibold'>Reviews</span>
                    <button onClick={() => setShowReviews(!showReviews)}
                        className='-ml-2 cursor-pointer'>({showReviews ? "hide reviews" : "show reviews"})</button>
                </div>

                {showReviews && data.reviews?.map((review) => {
                    return <div className='mb-4'>
                        <h1 className='mx-4 mt-2'>{review.reviewerName}</h1>
                        <div className='mx-4'>
                            <span className=''>{'⭐'.repeat(Math.floor(review.rating))}</span>
                            <p className='text-sm'> Reviewed in India on <span>({new Date(review.date).toLocaleDateString()})</span></p>
                            <h1 className='font-bold'>{review.comment}</h1>
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductInfo
