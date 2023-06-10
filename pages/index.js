import Image from 'next/image';
import banner from './ramsnehi-plywood.jpg';
import Head from 'next/head';

export default function Home() {
  
return (

    

    <>



<Head>
       <link rel="icon" href="/favicon.ico" />
        <title>Ramsnehi Plywood & Hardware</title>
        <meta name="description" content="Discover a diverse selection of top-quality plywood materials, captivating sunmica sheets, and an extensive range of hardware products at competitive prices." />
        <meta name="keywords" content="Plywood , Ramsnehi Plywood, Plywood shop Mandsaur, Plywood Shop Near Me, Hardware store Mandsaur, Plywood suppliers Mandsaur, Plywood dealer Mandsaur, Hardware shop near me, Plywood and hardware Mandsaur, Quality plywood Mandsaur, Sunmica, Affordable hardware Mandsaur, Plywood sheets Mandsaur, Door hardware Mandsaur, Plywood cutting service Mandsaur, Cabinet hardware Mandsaur, Plywood for furniture Mandsaur, Hardware fittings Mandsaur, Best plywood shop Mandsaur" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

    <section>
      <h1 className='banner_heading'>Welcome to Ramsnehi Plywood</h1>
      <Image src={banner} alt="Ramsnehi Plywood" className="banner_image" />
    </section>
    </>
  );
}
