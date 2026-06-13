import HomeButtonSection from './_components/ButtonSection';
import CommonBar from './_components/CommonBar';
import ZustandButtonSection from './_components/ZustandButtonSection';

export default function Home() {
  return (
    <div className="w-full">
      <HomeButtonSection />
      <p className="text-2xl">Home Style!</p>
      <CommonBar />
      <ZustandButtonSection />
    </div>
  );
}
