import HomeButtonSection from './_components/ButtonSection';
import CommonBar from './_components/CommonBar';
import InputSection from './_components/InputSection';
import ZustandButtonSection from './_components/ZustandButtonSection';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-start gap-4 py-8">
      <HomeButtonSection />
      <p className="text-2xl">Home Style!</p>
      <CommonBar />
      <InputSection />
      <ZustandButtonSection />
    </div>
  );
}
