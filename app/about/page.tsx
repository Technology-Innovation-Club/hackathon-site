/* eslint-disable react/no-unescaped-entities */
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white bg-cover">
      <Nav />
      <main className="relative z-10 flex min-h-screen flex-col items-center overflow-auto text-black">
        <h1 className="mt-6 font-pp-mondwest text-5xl">About</h1>
        <p className="mt-4 max-w-2xl text-balance text-center text-xl">
          The Tech Innovation Club presents its biggest hackathon ever.
        </p>
        <div className="w-95 mt-6 grid max-w-5xl gap-6 px-8 md:w-full md:grid-cols-3">
          <div className="rounded-lg bg-black/30 p-6">
            <Link href="https://pau.edu.ng/">
              <Image
                alt="Pan-Atlantic University logo"
                src="/images/pau_logo.png"
                className="mx-auto"
                height={150}
                width={150}
              />
              <h4 className="mt-4 text-lg font-bold text-electric-blue">
                Pan-Atlantic University
              </h4>
            </Link>
            <p className="mt-2">
              UC Berkeley is the world’s #1 public university, with a rich
              history of groundbreaking discoveries.
            </p>
          </div>
          <div className="rounded-lg bg-black/30 p-6">
            <Link href="https://ticpau.vercel.app/">
              <Image
                alt="Tech Innovation Club Logo"
                src="/images/tic_logo.png"
                height={150}
                width={150}
                className="mx-auto"
              />
              <h4 className="mt-4 text-lg font-bold text-electric-blue">
                Tech Innovation Club
              </h4>
            </Link>
            <p className="mt-2">
              Hackathons @ Berkeley is the non-profit, student-run organization
              that runs Cal Hacks, the world's largest collegiate hackathon.
              Hackathons @ Berkeley brings together innovative minds to push the
              boundaries of what is possible.
            </p>
          </div>
        </div>
      </main>
    </main>
  );
}
