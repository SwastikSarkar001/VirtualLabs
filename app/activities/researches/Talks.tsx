import Link from "next/link";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Talks() {
  return (
    <div className="self-stretch">
      <h1 id='workshop-title' className={`text-4xl mb-12 font-bold text-center ${montserrat.className}`}>Talks,Webinars,Surveys & MoUs</h1>
      <div className="flex flex-row-reverse gap-12">
        <TOC />
        <Content />
      </div>
    </div>
  )
}

function TOC() {
  return (
    <aside className='shrink-0 bg-stone-900 p-4 border border-gray-200 rounded hidden md:block md:w-60 xl:w-80 sticky top-30 h-max mb-16'>
      <h2 className="text-xl font-semibold mb-2">Table of Contents</h2>
      <ul className="space-y-2">
        <li><Link href='#talk' className="toc-link">Talks & Webinars</Link></li>
        <li><Link href='#content' className="toc-link">Content Structure</Link></li>
        <li>
          <Link href='#assembly' className="toc-link">Web Assembly</Link>
        </li>
        <li><Link href='#software' className="toc-link">Software Engineering</Link></li>
        <li><Link href='#tools' className="toc-link">Tools</Link></li>
        <li><Link href='#analytics' className="toc-link">Analytics</Link></li>
      </ul>
    </aside>
  )
}

function Content() {
  return (
    <div className="text-left">
      <h2 id='talks' className={`${ montserrat.className } blog-h2`}>Talks & Webinars</h2>
        <p className="mb-2">Virtual Labs is seeking to integrate Generative AI into various aspects of content generation, such as summarizing content for users and generating questions based on content. The following series of projects will address different stages of this initiative:</p>
        <ol className="list-decimal pl-5 mb-8">
          <li><p>Identify open-source Large Language Models (LLMs) suitable for fine-tuning for educational purposes.</p></li>
          <li>Identify LLMs pertinent to educational contexts through prompt engineering using zero-shot and few shot prompting.</li>
          <li>Identify and collect data necessary for fine-tuning and prompt engineering.</li>
          <li>Conduct cost and performance analysis of different types of LLM solutions, including the expenses associated with fine-tuning, deploying the fine-tuned model, and utilizing APIs in the case of closed-source API based solutions.</li>
          <li>Build a GenAI powered search bot on top of the Virtual Labs document vector store.</li>
          <li>Build an automated agent to create social media posts, which can be triggered by various activities of content addition, modification and deployment</li>
          <li>Build a prompt repository containing standardized set of prompts for different GenAI models to facilitate tasks and activities like question generation, image generation, blog post generation, document formatting etc.</li>
        </ol>
      <h2 id='content' className={`${ montserrat.className } blog-h2`}>Content Structure</h2>
      <ol className="list-decimal pl-5 mb-8">
        <li>Build a knowledge dependency graph for all data structures elements of Virtual Labs. The project will entail defining a hierarchical knowledge graph and building an API to manipulate it.</li>
        <li>Build a metadata repository for all experiments and labs under Virtual Labs. The metadata can be used for search, filtering etc on different Virtual Labs platforms</li>
        <li>Define and implement a Schema for e-learning content which can be contributed to Schema.org for standardization over the Web</li>
        <li>Define a domain specific language for specifying a Virtual Labs simulation. Implement a framework to convert this specification into code</li>
        <li>Build an open questions repository for Virtual Labs</li>
      </ol>
      <h2 id='assembly' className={`${ montserrat.className } blog-h2`}>Web Assembly</h2>
      <ol className="list-decimal pl-5 mb-8">
        <li>Port the Verilog compiler to WebAssembly</li>
        <li>Port the Spice Code compiler to WebAssembly</li>
        <li>Port the SDCC Compiler Suite to WebAssembly</li>
        <li>Port a light-weight python interpreter to WebAssembly</li>
      </ol>

      <h2 id='software' className={`${ montserrat.className } blog-h2`}>Software Engineering</h2>
      <ol className="list-decimal pl-5 mb-4">
        <li>Build reusable components for all Virtual Labs data structure experiments</li>
        <li>Upgrade the Virtual Labs cloud infrastructure</li>
      </ol>
      <h2 id='tools' className={`${ montserrat.className } blog-h2`}>Tools</h2>
      <ol className="list-decimal pl-5 mb-4">
        <li>Build a plagiarism validator tool for Virtual Labs.</li>
        <li>Integrate a programming interface to Virtual Labs. The interface should be able to validate the correctness of the code.</li>
        <li>Build a progressive web app for Virtual Labs</li>
        <li>Build a web based development environment for Virtual Labs</li>
      </ol>
      <h3 id='analytics' className={`${ montserrat.className } blog-h2`}>Analytics</h3>
      <p className="mb-8">Define and implement an analytics system for e-learning content. This project will first define a model of the metrics relevant for e-learning content. Afterwards the model will be implemented as a framework, which can be integrated with any e-learning project.</p>
      
    </div>
  )
}