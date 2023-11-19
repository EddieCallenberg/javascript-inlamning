import React from 'react'
import SectionTitle from '../generics/SectionTitle'
import './NewsDetailsSlider.css'
import '../../App.css'
import Button from '../generics/Button'

const NewsDetailsSlider = () => {
  return (
    <section className='biege-background'>
        <div className='container'>
            <div className='slider-title-div'>
                <div>
                    <SectionTitle title="Articles & news" description="Get Every single Article and News" />
                </div>
                <Button type="btn-trans" title="Browse articles" url="/news" />
            </div>
            <div>
                
            </div>
        </div>
    </section>
  )
}

export default NewsDetailsSlider