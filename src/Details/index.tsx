import './Details.css'
import {Experience} from "../CV";

interface DetailsProps {
  experiences: Experience[];
  education: string[];
}

export const Details = ({experiences, education}: DetailsProps) => {
  return (
    <section className='cv-details'>
      <h2>Experience</h2>
      <ul>
        {experiences.map(experience => (
          <li key={experience.year}>
            <strong>{experience.year}</strong> - {experience.description}
          </li>
        ))}
      </ul>
      <h2>Education</h2>
      <ul>
        {education.map((education, index) => <li key={index}>{education}</li>)}
      </ul>
    </section>
  )
}
