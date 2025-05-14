import {BookOpen, FilePen} from "lucide-react";
import Link from "next/link";

function Header() {
    return (
        <header className="relative p-16 text-center">
            <Link href="/" prefetch={false}>
                <h1 className="text-6xl font-black">OpenAI Story Teller</h1>
                <div className="flex justify-center whitespace-nowrap space-x-5 text-3xl lg:text-5xl">
                    <h2>Bringing your stories</h2>
                    <div className="relative">
                        <div
                            className="absolute bg-purple-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1">
                        </div>
                        <p className="relative text-white">To life!</p>
                    </div>
                </div>
            </Link>

            { /* Nav Icons */ }
            <div className="absolute -top-5 right-5 flex space-x-2">
                <Link href="/" prefetch={false}>
                    <FilePen
                        className="w-8 h-8 lg:w-10 lg:h-10 mx-auto text-pruple-500 mt-10 border border-purple-500
                    p-2 rounded-md hover:opacity-50 cursor-pointer"></FilePen>
                </Link>
                <Link href="/stories" prefetch={false}>
                    <BookOpen
                        className="w-8 h-8 lg:w-10 lg:h-10 mx-auto text-pruple-500 mt-10 border border-purple-500
                    p-2 rounded-md hover:opacity-50 cursor-pointer"></BookOpen>
                </Link>
            </div>
        </header>
    )
}

export default Header