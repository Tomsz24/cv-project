import './CV.css'
import {Header} from "../Header";
import {Personal} from "../Personal";
import {Details} from "../Details";

interface CVData {
  name: string;
  lastName: string;
  position: string;
  experiences: Experience[];
  education: string[];
}

export interface Experience {
  year: number;
  description: string;
}

const cvData: CVData = {
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

export const CV = () => {
  const {name, lastName, position,experiences, education} = cvData;
  return (
    <main className='cv-main'>
      <Header name={name} lastName={lastName}/>
      <Personal name={name} lastName={lastName} position={position} />
      <Details experiences={experiences} education={education}/>
    </main>
  )
}
