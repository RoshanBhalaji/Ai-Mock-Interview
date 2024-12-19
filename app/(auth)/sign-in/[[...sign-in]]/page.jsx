import Header from "@/app/dashboard/_components/Header";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import backgroundImage from "@/public/bg.jpg";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-165px)]">
      <Header />

      <section className="flex-grow">
        <div className="lg:grid lg:h-full lg:grid-cols-12">
          {/* Left section with background image */}
          <section className="relative flex flex-col justify-end bg-gray-900 lg:col-span-5 lg:min-h-[calc(100vh-165px)] xl:col-span-6 p-12 items-end">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={backgroundImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                objectPosition="right center"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
            </div>

            <div className="relative z-10 text-right">
              {/* Left-side content with text aligned at the bottom */}
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Welcome to <span className="text-indigo-400">MockInterviewerGPT</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-300 sm:text-xl">
                Prepare yourself for success with personalized practice sessions
                that enhance your interview skills and boost your confidence.
              </p>
              
            </div>
          </section>

          {/* Right section with the sign-in form */}
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="w-full max-w-lg p-8">
             
            
              <SignIn />
            </div>
          </main>
        </div>
      </section>

      {/* Footer or other components would go below */}
    </div>
  );
}  