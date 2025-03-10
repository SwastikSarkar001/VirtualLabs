export default function Loading() {
  return (
    <main className="h-screen grid place-content-center">
      <div className="flex flex-col items-center">
        <div className="border-t-2 rounded-full border-violet-500 animate-spin size-24" />
        <h1 className="text-2xl font-body font-bold text-center mt-4">Loading...</h1>
      </div>
    </main>
  )
}
