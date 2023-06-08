import Image from 'next/image';
import banner from './ramsnehi-plywood.jpg';

export default function Home() {
  
return (
    <section>
      <h1 className='banner_heading'>Welcome to Ramsnehi Plywood</h1>
      <Image src={banner} alt="Ramsnehi Plywood" className="banner_image" />
    </section>
  );
}
