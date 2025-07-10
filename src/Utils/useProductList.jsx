import { useState, useEffect } from 'react'
import { dummyData } from './constant'

const useProductList = () => {
  const [defaultData, setDefaultData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      const data = await fetch(dummyData)
      const json = await data.json()
      setDefaultData(json.products)
      setFilteredData(json.products)
    } catch (error) {
      setError(error.message)
    }
  }

  return { defaultData, filteredData, setFilteredData, error }
}

export default useProductList