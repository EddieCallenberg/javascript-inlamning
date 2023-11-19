import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <>
        <h2 className='section-title-title'>{title}</h2>
        <h3 className='section-title-desc'>{description}</h3>
    </>
  )
}

export default SectionTitle