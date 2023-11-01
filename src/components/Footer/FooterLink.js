import React from 'react'

const FooterLink = ({title, links}) => {
  return (
    <div className={`${title.toLowerCase()}-footer`}>
        <h2>{title}</h2>
        {
            links.map((link, index) => (
                <a key={index} href={link.url}>
                    {link.text}
                </a>
            ))
        }
    </div>
  )
}

export default FooterLink