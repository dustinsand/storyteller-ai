import Image from "next/image";
import Logo from "@/images/logo.svg"
import Link from "next/link";
import {Button} from "@/components/ui/button";
import StoryWriter from "@/components/StoryWriter";

export default function Home() {
  return (
      <main className="flex-1 flex flex-col">
          <section className="flex-1 grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-purple-500 flex flex-col space-y-5 justify-center items-center order-1 lg:-order-1 pb-10">
                  <Image src={Logo} alt="logo" width={256} height={256} />
                  <Button asChild className="px-20 bg-purple-700 p-10 text-xl">
                      <Link href="/stories">Explore Story Library</Link>
                  </Button>
              </div>

              { /* Storywriter */ }
              <StoryWriter />
          </section>
      </main>
  );
}
