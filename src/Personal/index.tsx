import './Personal.css'
import photo from '../assets/picture.jpeg'

interface PersonalProps {
  name: string;
  lastName: string;
  position: string;
}

export const Personal = ({name, lastName, position}: PersonalProps) => {
  return (
    <aside className='cv-personal'>
      <h2>Personal Data</h2>
      <img className='cv-photo' src={photo} alt={`${name} ${lastName} photo}`}/>
      <small>{position}</small>
    </aside>
  )
}
