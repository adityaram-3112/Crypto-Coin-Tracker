import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'


const LineChart = ({historicalData}) => {
    const [data,setData]=useState([["Date","Prices"]]);
    useEffect(()=>{
        let tmp_data=[["Date","Prices"]];
        if(historicalData.prices)
        {
            historicalData.prices.map((item)=>
                {tmp_data.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])});
            setData(tmp_data);
        }
    },[historicalData])


  return (
    <Chart 
    chartType='LineChart'
    data={data}
    height="100%"
    legendToggle
    />
  )
}

export default LineChart
