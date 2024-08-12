import React from 'react'

function DynamicProduct({params}:{params: {slug:string}}) {
  return (
    <div>
      {`This is the Dynamic ${params.slug}`}
    </div>
  )
}

export default DynamicProduct
