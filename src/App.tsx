import './App.css'
import picture from './assets/picture.jpeg';

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experiences: Experience[];
  education: string[];
}

interface Experience {
  year: number;
  description: string;
}

const cvData: CVData = {
  photo: picture,
  name: 'Tomasz',
  lastName: 'Wojciechowski',
  position: 'Developer',
  experiences: [
    {year: 2020, description: 'Frontend developer'},
    {year: 2022, description: 'React-Native developer'},
  ],
  education: [
    "Hogwart szkola magii i czarodziejstwa",
    "Harvard University kierunek kazdy"
  ]
}

function App() {
  return (
    <>
      <main className='cv-main'>
        <header className='cv-header'>
          <h1>CV {cvData.name} {cvData.lastName}</h1>
        </header>

        <aside className='cv-personal'>
          <h2>Personal Data</h2>
          <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} photo}`}/>
          <small>{cvData.position}</small>
        </aside>

        <section className='cv-details'>
          <h2>Experience</h2>
          <ul>
            {cvData.experiences.map(experience => (
              <li key={experience.year}>
                <strong>{experience.year}</strong> - {experience.description}
              </li>
            ))}
          </ul>
          <h2>Education</h2>
          <ul>
            {cvData.education.map((education, index) => <li key={index}>{education}</li>)}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
