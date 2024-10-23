import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col">
      <h1 className="text-4xl font-bold mb-4">Hello World</h1>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
