import React from 'react'
import Heading from '@/app/common/Heading'
const layout = ({children}) => {
  return (
    <div>
        <Heading heading="Provider"/>
      {children}
    </div>
  )
}

export default layout
