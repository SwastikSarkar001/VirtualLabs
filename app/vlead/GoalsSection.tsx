export default function GoalsSection() {
  return (
    <div className="self-stretch">
      <h1 className="text-4xl mb-12 font-bold text-center">Goals and Philosophy</h1>
      <div className="text-left">
        <h2 className="text-2xl pb-2 border-b-2 border-gray-300/30 font-medium mb-4">Goals</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>To offer a remote learning experience with simulated experiments in diverse areas of Science and Engineering.</li>
          <li>To engage students by sparking their curiosity, allowing them to learn fundamental and complex concepts through remote experimentation.</li>
          <li>To present a complete Learning Management System around the Virtual Labs, where students and teachers can utilize various tools for learning, including supplemental web-resources, video-lectures, animated demonstrations, and self-evaluation.</li>
        </ul>
        <h2 className="text-2xl pb-2 border-b-2 border-gray-300/30 font-medium mb-4">Philosophy</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Bridging the gap for colleges that lack lab facilities: Provide online labs as a substitute for hands-on lab work in engineering colleges that do not have the necessary equipment.</li>
          <li>Enhancing existing labs with online resources: Expand the capabilities of existing labs with online labs to complement and augment the learning experience of engineering students.</li>
          <li>Empowering educators through specialized workshops: Offer workshops on-site or online to enhance the skill set and proficiency of educators in the effective use of online labs in engineering education.</li>
        </ul>
        <p className="text-lg mb-16 italic text-gray-300">
          Virtual labs are any place, any pace, any-time, any-type labs. It is a paradigm shift in student-centric, online education.
        </p>
      </div>
    </div>
  )
}
