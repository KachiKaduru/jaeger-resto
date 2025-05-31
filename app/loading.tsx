import Spinner from "./_components/Spinner";

export default function LoadingPage() {
  return (
    <div className="absolute top-0 left-0 grid w-full h-screen place-content-center bg-[#25283610] backdrop-blur-md">
      <Spinner />
    </div>
  );
}
