/* eslint-disable react/no-unescaped-entities */
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 bg-cover">
      <Nav />
      <main className="relative z-10 flex min-h-screen flex-col items-center overflow-auto text-black">
        {/* Header */}
        <h1 className="mt-6 font-pp-mondwest text-5xl">About</h1>
        <p className="mt-4 max-w-2xl text-balance text-center text-xl">
          The Tech Innovation Club presents{" "}
          <span className="text-blue-400 font-semibold">
            TIC Hackathon 2.0
          </span>
          — Pan-Atlantic University's biggest hackathon yet. A 24-hour
          innovation challenge where students reimagine today with Artificial
          Intelligence.
        </p>

        {/* Partner Cards */}
        <div className="w-95 mt-10 grid max-w-5xl gap-6 px-8 md:w-full md:grid-cols-2">
          {/* Pan-Atlantic University */}
          <div className="rounded-lg bg-gray-100 p-6 text-center shadow-md">
            <Link href="https://pau.edu.ng/">
              <Image
                alt="Pan-Atlantic University logo"
                src="/images/pau_logo.png"
                className="mx-auto"
                height={150}
                width={150}
              />
              <h4 className="mt-4 text-lg font-bold text-blue-400">
                Pan-Atlantic University
              </h4>
            </Link>
            <p className="mt-2">
              Pan-Atlantic University (PAU) is one of Nigeria’s foremost private
              institutions of higher learning. Committed to fostering
              creativity, integrity, and service, PAU equips students to become
              global leaders who shape the world through innovation and
              entrepreneurship.
            </p>
          </div>

          {/* Tech Innovation Club */}
          <div className="rounded-lg bg-gray-100 p-6 text-center shadow-md">
            <Link href="https://ticpau.vercel.app/">
              <Image
                alt="Tech Innovation Club Logo"
                src="/images/tic_logo.png"
                height={150}
                width={150}
                className="mx-auto"
              />
              <h4 className="mt-4 text-lg font-bold text-blue-400">
                Tech Innovation Club (TIC)
              </h4>
            </Link>
            <p className="mt-2">
              The Tech Innovation Club (TIC) is a student-led community at
              Pan-Atlantic University focused on building real-world solutions
              through technology. Founded in 2022, TIC fosters collaboration,
              mentorship, and technical excellence — empowering students to
              innovate and drive meaningful impact through software and AI.
            </p>
          </div>
        </div>

        {/* Event Overview */}
        <section className="mt-16 w-full max-w-4xl px-8 text-center">
          <h2 className="font-pp-mondwest text-4xl mb-4 text-blue-400">
            Event Overview
          </h2>
          <p className="text-lg leading-relaxed">
            TIC Hackathon 2.0 is a 24-hour innovation challenge that brings
            together 80 students in 20 teams to design, build, and pitch
            AI-driven solutions to real-world problems. The theme for this
            edition is{" "}
            <span className="font-semibold">“Reimagining Today with AI.”</span>{" "}
            Participants will develop solutions across sectors such as
            education, fintech, productivity, and beyond.
          </p>
        </section>

        {/* Event Details Table */}
        <div className="mt-10 w-full max-w-4xl overflow-x-auto px-6">
          <table className="w-full border-collapse rounded-lg bg-gray-100 text-left text-black shadow-md">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-semibold text-blue-400">Date</td>
                <td className="p-4">October 24 – 25, 2025 (Friday – Saturday)</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-semibold text-blue-400">Venue</td>
                <td className="p-4">
                  Pan-Atlantic University — Hack Space & Demo Area
                </td>
              </tr>
              {/* <tr className="border-b border-gray-300">
                <td className="p-4 font-semibold text-blue-400">
                  Prize Pool
                </td>
                <td className="p-4">
                  ₦1.8 Million + Internship Opportunities (₦1M, ₦500K, ₦300K)
                </td>
              </tr> */}
              <tr>
                <td className="p-4 font-semibold text-blue-400">Theme</td>
                <td className="p-4">Reimagining Today with AI</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Event Schedule */}
        <section className="mt-16 w-full max-w-4xl px-8">
          <h2 className="font-pp-mondwest text-4xl mb-4 text-blue-400 text-center">
            Event Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-gray-100 text-left text-black shadow-md">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="p-4 font-bold text-blue-400">Date</th>
                  <th className="p-4 font-bold text-blue-400">Time</th>
                  <th className="p-4 font-bold text-blue-400">Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-4">Friday, Oct 24</td>
                  <td className="p-4">1:00 PM – 1:45 PM</td>
                  <td className="p-4">Opening Ceremony</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4">Friday, Oct 24</td>
                  <td className="p-4">2:00 PM – 8:00 PM</td>
                  <td className="p-4">Hacking Begins</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4">Friday, Oct 24</td>
                  <td className="p-4">8:00 PM – 8:30 PM</td>
                  <td className="p-4">Dinner</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4">Overnight</td>
                  <td className="p-4">8:30 PM – Dawn</td>
                  <td className="p-4">Continuous Hacking</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4">Saturday, Oct 25</td>
                  <td className="p-4">7:00 AM – 7:30 AM</td>
                  <td className="p-4">Breakfast</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4">Saturday, Oct 25</td>
                  <td className="p-4">12:00 PM</td>
                  <td className="p-4">Submission Deadline (GitHub Repo)</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4">Saturday, Oct 25</td>
                  <td className="p-4">1:00 PM</td>
                  <td className="p-4">Slide Submission Deadline</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4">Saturday, Oct 25</td>
                  <td className="p-4">2:00 PM – 4:00 PM</td>
                  <td className="p-4">Team Demos & Judging</td>
                </tr>
                <tr>
                  <td className="p-4">Saturday, Oct 25</td>
                  <td className="p-4">4:00 PM – 4:30 PM</td>
                  <td className="p-4">Closing Ceremony & Awards</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Closing Section */}
        <p className="mt-16 max-w-2xl text-center text-lg">
          Join over{" "}
          <span className="text-blue-400 font-semibold">80 innovators</span>{" "}
          at Pan-Atlantic University as we push the boundaries of creativity and
          technology to build the next generation of responsible AI.
        </p>

        <div className="mt-12 mb-32">
          <Link
            href="https://tinyurl.com/tichackathon2"
            className="rounded-lg bg-black px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-neon hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </main>
    </main>
  );
}
