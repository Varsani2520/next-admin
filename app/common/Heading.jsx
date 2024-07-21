import React from 'react'
import BreadCrumb from './BreadCrumb'

const Heading = ({ heading }) => {
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <h1 className="text-2xl font-bold text-gray-800">{heading}</h1>
            <nav className="flex items-center space-x-2">
                <BreadCrumb First={"Dashboard"} secondtitle={"Providers"} />
            </nav>
        </div>
    )
}

export default Heading
