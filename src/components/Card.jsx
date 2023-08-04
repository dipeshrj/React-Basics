import "./Card.css"
// rafce
const Card = (props) => {
  const { title, personName, img, gender, contactNumber, location, bloodGroup,
    linkedinIcon, linkedinLink, githubLink, githubIcon, instagramIcon, instagramLink,
  facebookIcon, facebookLink} = props
  return (
    <div className='main-div'>
      <div className="upper-container">
        <div className="img-container">
          <img className="img"
            src={img}
            alt='person Image'></img>
        </div> 
      </div>
      <div className="lower-container">
      <div className="description">
        <p>
          Name : {personName}<br/>
          Gender : {gender}<br/>
          Location : {location}<br/>
          Contact Number : {contactNumber}<br/>
          Blood Group : {bloodGroup} 
        </p>
        <h3>Social</h3>
        <div className="icons">
          <a href={linkedinLink}><img className="icon" src={linkedinIcon} alt="linkedin Icon"/></a>
          <a href={githubLink}><img className="icon" src={githubIcon} alt="linkedin Icon"/></a>
          <a href={instagramLink}><img className="icon" src={instagramIcon} alt="linkedin Icon" /></a>
          <a href={facebookLink}><img className="icon" src={facebookIcon} alt="linkedin Icon"/></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Card