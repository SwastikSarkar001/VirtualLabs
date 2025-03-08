export default async function Page({ params }: { params: Promise<{ course: string }>}) {
  const { course } = await params
  return (
    <div>{course}</div>
  )
}
