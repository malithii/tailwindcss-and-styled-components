import logo from '../assets/logo.png';


 //after copy pasting css styles of child elements replace header with &
export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-8 md:mb-16'>
      <img src={logo} alt="A canvas" className='mb-8 w-44 h-44 object-contain' />
      <h1 className='text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title'>ReactArt</h1>
      {/* font title is defined in tailwind.config.js , title can be replaced by any word u prefer*/}
      <p className='text-stone-500'>A community of artists and art-lovers.</p>
    </header>
  );
} 