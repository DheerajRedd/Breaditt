import { HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl md:text-4xl ">Your feed</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6 ">
        {/* feed */}

        {/* Subreddit Info */}
        <div className="overflow-hidden h-fy rounded-lg border  border-gray-200 order-first md:last-order ">
          <div className="bg-emerald-100 px-6 py-4">
            <p className="font-semibold py-3 flex items-center gap-1.5">
              <HomeIcon className="w-4 h-4" />
              Home
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
