import './Header.css'

interface HeaderProps {
  name: string;
  lastName: string;
}

export const Header = ({name, lastName}: HeaderProps) => {
  return (
    <header className='cv-header'>
      <h1>CV {name} {lastName}</h1>
    </header>
  )
}
