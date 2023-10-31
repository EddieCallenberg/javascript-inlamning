import React from 'react'
import Button from '../generics/Button'
import Kristine from '../../assets/images/kristine-palmer.png'
import kimberly from '../../assets/images/kimberly-hansen.png'
import Mark from '../../assets/images/mark-aubri.png'
import Justin from '../../assets/images/justin-willoman.png'
import TeamCard from './TeamCard'
import Cassandra from '../../assets/images/cassandra-warren.png'
import Amanda from '../../assets/images/amanda-tulling.png'
import Jack from '../../assets/images/jack-mc.png'
import ReviewsCard from './ReviewsCard'

const TeamAndTestimonial = () => {

    const teamMembers = [
        {imgSrc: Kristine, memberName: "Kristine Palmer", role: "Chef Operation Manager"},
        {imgSrc: Mark, memberName: "Mark Aubri", role: "Senior Consultant"},
        {imgSrc: kimberly, memberName: "Kimberly Hansen", role: "Senior Consultant"},
        {imgSrc: Justin, memberName: "Justin Willoman", role: "Senior Tech Consultant"}
    ]

    const reviewers = [
      {description: "\"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate\"", imgUrl: Cassandra, rName: "Cassandra Warren", role: "Business Manager, Dorfus"},
      {description: "\"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate\"", imgUrl: Amanda, rName: "Amanda Tulling", role: "Senior Developer, Square"},
      {description: "\"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate\"", imgUrl: Jack, rName: "Jack McDougal", role: "Key Account Manager, Gobona"},
    ]

  return (
    <section className="yellow-background">
        <div className="container">
          <div className="meet-our-team">
            <h2>Meet Our Team</h2>
            <div className="team-members">
              <h3>Experience Team Members</h3>
              <Button type="btn-black" title="Browse Team" url="/team" />
            </div>
            <div className="team-members-cards">
              {
                teamMembers.map((teamMember, index) => (
                    <TeamCard key={index} imgSrc={teamMember.imgSrc} memberName={teamMember.memberName} role={teamMember.role} />
                ))
              }
            </div>
            <div className="selection-circle">
              <div />
              <div className="selected" />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="testimonial-wrapper">
            <h2>Testimonial</h2>
            <h3>what Our Clients Say</h3>
            <div className="reviews-wrapper">
              {
                reviewers.map((reviewer, index) => (
                  <ReviewsCard description={reviewer.description} imgUrl={reviewer.imgUrl} rName={reviewer.rName} role={reviewer.role} />
                ))
              }
            </div>
            <div className="testimonial-btn">
              <Button type="btn-black" title="All Reviews" url="/reviews"/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TeamAndTestimonial