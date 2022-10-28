import React from 'react'
import Navbar from './Navbar'

export default function Information() {
  return (
    <div>
        <Navbar />
        <h1>Please read</h1>
        <ul>
            <li>This website doesn't gurantee to be precise. </li>
            <li>Inflation is not taken into consideration.</li>
            <li>The tenure and rates of different Interest schemes may vary from actual data. </li>
            <li>It is considered that each year the car value will depreciate by 10% it may vary. </li>
            <li>All cars models and companies are not present in the dataset. </li>
            <li>The Cost of cab will vary from place to place and time to time </li>
            <li>The Cost of Petrol will vary from place to place </li>
            <li>Criteria for Calculating the cost/km for car
                <ul>
                    <li>Cost of Car</li>
                    <li>Petrol price</li>
                    <li>Depreciation rate</li>
                    <li>Tenure of Car</li>

                </ul>
            </li>
        </ul>

        <h2 style={{textAlign:'center', marginTop:'50px'}}>Thank You for coming till here</h2>
    </div>
  )
}
