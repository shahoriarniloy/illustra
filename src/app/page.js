import Banner from '@/components/Banner';
import Categories from '@/components/Categories';
import TopSelling from '@/components/TopSelling';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main className="">
        <Banner></Banner>
        <Categories></Categories>
        <TopSelling></TopSelling>
        
        
      </main>
    </div>
  );
}
