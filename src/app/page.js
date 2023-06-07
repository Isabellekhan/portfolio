import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import isabelle from "public/CartoonIsabelle.png";
import design from "public/design.png";
import code from "public/code.png";
import consulting from "public/consulting.png";
import web11 from "public/web11.png";
import web10 from "public/web10.png";

export default function Home() {
  return (
    <div>
      <title>Isabelle Khan portfolio</title>
      <meta name="description" content="Generated by create next app" />

      <main className=" bg-gradient-to-b from-white to-green-900/30 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-mono">byIsabelle</h1>
            <ul className=" flex items-center ">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl " />
              </li>

              <li>
                <a
                  className="bg-gradient-to-r from-green-900/30 to-green-900/70 hover:bg-green-900/50 text- px-4 py-2 rounded-md ml-8 "
                  href="Resume .pdf"
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-black font-medium md:text-6xl">
              <span
                className=" font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-900  to-green-900/20
            animate-text "
              >
                Hello
              </span>{" "}
              I'm Isabelle Khan!
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-green-900 font-bold">
              Front End Developer
            </h3>
            <p className="text-md py-5 leading-7 text-gray-800 md:text-xl max-w-lg mx-auto">
              Welcome to my page! I'm currently a student at Hyperisland looking
              for an internship this fall, ready to challange my skills.
            </p>
            <p className="text-md py-5 leading-7 text-gray-800 md:text-xl max-w-lg mx-auto">
              I'm a brown girl born and brought up in Stockholm, so basically
              coding should be in my blood, haha! ...Jokes aside, i'm learning
              my way in to the coding world, and it's so exciting! Please take a
              look around my page and feel free to contact me anytime!
            </p>

            <div className="mx-auto bg-gradient-to-b from-green-900 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={isabelle} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-6 text-black ">
            <a href="https://www.linkedin.com/in/isabelle-khan-825656162">
              <AiFillLinkedin />
            </a>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl pt-7  ">My skills</h3>
            <p className="text-md py-2 leading-7 text-gray-800 md:max-w-l ">
              Since the beginning of my studies I have done some group projects.
              They have been super fun to do! And I have gotten some great
              learnings out of it.I am ready to use my skills and really
              challange my learings to become an even better developer than I
              am, and expand my learnings futher.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white/30">
              <h3 className="text-lg font-extrabold pt-8 pb-2 ">Design</h3>
              <p className="py-2">
                Tools that I have learnd and used in my school projects
              </p>
              <h4 className="py-4 text-teal-900 font-extrabold ">
                Desing tools I use
              </h4>
              <p className=" text-green-900/70 py-1">Css</p>

              <p className=" text-green-900/70 py-1">Tailwind</p>
              <p className=" text-green-900/70 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white/30">
              <h3 className="text-lg font-extrabold pt-8 pb-2">Code</h3>
              <p className="py-2">
                Creating interactive pages during my projects using these skills
              </p>
              <h4 className="py-4 text-green-900 font-extrabold">
                Programming tools I use
              </h4>
              <p className="text-green-900/70 py-1">Version control/git</p>
              <p className=" text-green-900/80 py-1">JavaScript</p>
              <p className=" text-green-900/70 py-1">Html</p>
              <p className="text-green-900/70 py-1">react</p>
              <p className="text-green-900/70 py-1">next.js</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1  ">My Portfolio</h3>
          </div>
          <div className=" flex  flex-col gap-10 py-10 lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <h4 className=" font-extrabold py-2">
                Spotify Clone app (Mobile version)
              </h4>
              <p className="text-md py-5">
                In this project we made a Spotify clone music player in react.{" "}
              </p>
              <a href="https://weact-clonify.netlify.app/">
                <Image
                  src={web11}
                  className="rounded-lg object-cover py-10 bg-white/40"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <h4 className="font-bold py-2">Quote generator</h4>
              <p className="text-md py-5 ">
                This project is a simple quote generator, that is fetching an
                api to generat these quotes
              </p>
              <Image
                src={web10}
                className="rounded-lg  shadow-lg object-cover py-10 bg-white/40"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
