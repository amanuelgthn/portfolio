import Backend from './Backend'
import Frontend from './Frontend'
import './skills.css'
import Programming from './Programming'

const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical Level</span>
        <div className="skills__container container grid">
            <Programming />
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills