import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import ServicesView from './services-view'

const ServicesController = () => {
  const [loading, setLoading] = useState(false) // this is for when the data is loaded, to show a loading screen
  // const [numbers, setNumbers] = useState([]) // the data will be stored in here
  const [dataServices, setDataServices] = useState([]) // the data will be stored in here

  // catch with useEffect so the data will be contained
  useEffect(() => {
    // create a function for the request of data
    const getNumbers = async () => {
      setLoading(true)

      // what is happening with headers?
      const headers = {
        'Content-Type': 'application/json',
      }

      // fetch the data with makerequest
      makeRequest({
        headers,
        endPoint: 'services', // place the endpoint of where the data is in, from the json file
        // params: {
        //   slug: 'services',
        // },
      }).then((resp) => {
        // setNumbers(resp.data[0].acf.rows.map) // map out the rows, create condition to check acf_fc_layout equals name + return component
        setDataServices(resp.data[4].acf.rows) // why not possible to subtract the above from this one?
        // setDataHome(resp.data[0].acf.rows.map((layout) => layout.acf_fc_layout))
        console.log('Services data controller after reqeust', dataServices)
        setLoading(false)
      })
        .catch((error) => {
          console.log(error)
          setLoading(false)
        })
    }
    getNumbers()
  }, [])

  const viewProps = {
    data: dataServices,
    loading,
  }
  return (
    <ServicesView {...viewProps} />
  )
}

export default ServicesController
