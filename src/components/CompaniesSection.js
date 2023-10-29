import React from 'react'
import DorfusLogo from '../assets/images/dorfus.svg'
import PaperzLogo from '../assets/images/paperz.svg'
import SquareLogo from '../assets/images/square.svg'
import MartinoLogo from '../assets/images/martino.svg'
import GobonaLogo from '../assets/images/gobona.svg'
import CompanyLogo from './CompanyLogo'

const companies = [
    {src: PaperzLogo, alt: "Paperz company logotype"},
    {src: DorfusLogo, alt: "Dorfus company logotype"},
    {src: MartinoLogo, alt: "Martino company logotype"},
    {src: SquareLogo, alt: "Square company logotype"},
    {src: GobonaLogo, alt: "Gobona company logotype"}
]


const CompaniesSection = () => {
  return (
    <section>
        <div class="container">
            <div class="companies">
                {
                    companies.map((company, index) => (
                        <CompanyLogo key={index} src={company.src} alt={company.alt} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default CompaniesSection