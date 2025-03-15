import Image from "next/image";

export default function Loading() {
  return (
    <main className="h-screen grid place-content-center">
      <div className="flex flex-col items-center">
        <Image src='/loading.gif' width={196} height={196} alt='Loading...' unoptimized quality={100} />
        <h1 className="text-2xl font-body font-bold text-center mt-4">Loading...</h1>
      </div>
    </main>
  )
}
