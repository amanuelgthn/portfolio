import './about.css'

const Info = () => {
  return (
    <div className="about__info">
      <div className="about__box">
        <i className='uil-lightbulb about__icon'></i>

        <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">1 year experience</span>
      </div>
      <div className="about__box">
        <i className="uil-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed Proects</h3>
          <span className="about__subtitle">10+ Projects</span>
      </div>
      <div className="about__box">
        <i className='uil-headphones about__icon'></i>
        <h3 className="about__title">Support</h3>
          <span className="about__subtitle">Online 24/7</span>
      </div>

    </div>
  )
}

export default Info