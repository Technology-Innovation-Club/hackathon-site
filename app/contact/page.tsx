import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white bg-cover">
      <Nav />
      <main className="relative z-10 flex h-screen flex-col items-center overflow-hidden text-black">
        <h1 className="mt-6 font-pp-mondwest text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-balance text-center text-xl">
          Any questions? Let us know!
        </p>
        <div className="w-95 mt-12 max-w-3xl px-8 text-center text-lg">
          <div>
            <p className="mb-2">
              We are here to help. Please check out FAQ, and email us if your
              question is not answered. We’ll get back to you as soon as we can!
            </p>
            <p className="mb-2">
              Please be advised we cannot offer travel reimbursements at this
              time. We apologize for the inconvenience
            </p>
            <p className="text-bold text-blue-400">
              <a href="mailto:tech.innovation.club@pau.edu.ng">tech.innovation.club@pau.edu.ng</a>
            </p>
          </div>
        </div>
      </main>
      {/* <div className="margin-auto fixed bottom-[-50vh] left-1/2 z-0 h-[1144px] w-[1181px] w-full -translate-x-1/2 transform overflow-hidden rounded-full bg-gradient-radial blur-xl"></div>
      <style>
        {`html {
        background: #000
      }`}
      </style> */}
    </main>
  );
}
