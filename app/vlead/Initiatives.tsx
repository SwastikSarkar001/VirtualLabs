'use client'

import Link from "next/link"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});


export default function Initiatives() {
  return(
    <div className="self-stretch">
      <h1 id='workshop-title' className={`text-4xl mb-12 font-bold text-center ${montserrat.className}`}>Initiatives</h1>
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
        <li>
          <Link href='#user-tools' className="toc-link">User Tools</Link>
          <ul className="ml-2 pl-2 border-l border-gray-400 space-y-1 mt-1 text-sm">
            <li><Link href='#pwa' className="toc-link">PWA App</Link></li>
            <li><Link href='#rating-widget' className="toc-link">Rating Widget</Link></li>
            <li><Link href='#bug' className="toc-link">Bug Reporting Tool</Link></li>
            <li><Link href='#ga4' className="toc-link">GA4 Analytics Dashboard</Link></li>
          </ul>
        </li>
        <li>
          <Link href='#dev-tools' className="toc-link">Developer Tools</Link>
          <ul className="ml-2 pl-2 border-l border-gray-400 space-y-1 mt-1 text-sm">
            <li><Link href='#vscode' className="toc-link">Visual Studio Code Extension</Link></li>
            <li><Link href='#vscode-web' className="toc-link">Visual Studio Code Web Extension</Link></li>
            <li><Link href='#content' className="toc-link">Content Development Platform</Link></li>
            <li><Link href='#repo' className="toc-link">National Question Repository</Link></li>
            <li><Link href='#performance' className="toc-link">Performance Tool</Link></li>
            <li><Link href='#validation' className="toc-link">Validation Tool</Link></li>
            <li><Link href='#code' className="toc-link">Code Assessment Tool</Link></li>
            <li><Link href='#service' className="toc-link">Service Worker</Link></li>
            <li><Link href='#tech' className="toc-link">Tech Blogs</Link></li>
          </ul>
        </li>
        <li>
          <Link href='#vlead-tools' className="toc-link">VLEAD Tools</Link>
          <ul className="ml-2 pl-2 border-l border-gray-400 space-y-1 mt-1 text-sm">
            <li><Link href='#doc-search' className="toc-link">Document Search Tool</Link></li>
            <li><Link href='#lab' className="toc-link">Automated Lab Deployment Tool</Link></li>
            <li><Link href='#tracker' className="toc-link">Outreach Workshop Tracker</Link></li>
            <li><Link href='#site-generator' className="toc-link">Static Site Generator</Link></li>
            <li><Link href='#doc-generator' className="toc-link">Document Generator</Link></li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}

function Content() {
  return (
    <div className="text-left">
      <h2 id='user-tools' className={`${ montserrat.className } blog-h2`}>User Tools</h2>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='pwa' className={`${ montserrat.className } blog-h3`}>PWA App</h3>
        <p>An application that showcases all experiments on the Virtual Labs site, enabling users to filter and search for specific ones. It&apos;s a Progressive Web App (PWA), making it mobile-friendly and usable offline. The app is available on the Android Play Store as an APK, offering seamless performance. Powered by MUI Joy and React, it provides a native Android app experience.</p>
        <Link href='https://github.com/virtual-labs/app-vlabs-pwa/blob/main/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='rating-widget' className={`${ montserrat.className } blog-h3`}>Rating Widget</h3>
        <p>A web component for Virtual Labs has been developed that showcases ratings for each experiment and logs them on Google Analytics. This component is written and packaged as a customizable Lit component, offering flexibility with its parameters.</p>
        <Link href='https://github.com/virtual-labs/svc-rating/blob/main/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='bug' className={`${ montserrat.className } blog-h3`}>Bug Reporting Tool</h3>
        <p>A tool has been developed to facilitate users of Virtual Labs in logging bugs during experiment sessions. It offers highly extendable features, allowing users to select from preset options based on the page type, share screenshots, and compose detailed reports.</p>
        <Link href='https://github.com/virtual-labs/svc-bug-report/blob/main/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-8">
        <h3 id='ga4' className={`${ montserrat.className } blog-h3`}>GA4 Analytics Dashboard</h3>
        <p>VLEAD led the coordination efforts for migrating Virtual Lab analytics from Universal Analytics to GA 4. A streamlined process to facilitate a seamless transition and provide support to consortium developers in migrating their institute&apos;s experiments onto the GA 4 platform was established. This development and upgrade not only ensured a uniform UI interface across all labs but, more importantly, provided a comprehensive list distinguishing popular labs from those that are less used or entirely unused.</p>
        <Link href='https://lookerstudio.google.com/u/2/reporting/b40ac724-41f1-4b46-ba1b-c83f65284092/page/5fLPB' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <h2 id='dev-tools' className={`${ montserrat.className } blog-h2`}>Developer Tools</h2>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='vscode' className={`${ montserrat.className } blog-h3`}>Visual Studio Code Extension</h3>
        <p>A Visual Studio Code extension has been developed to facilitate the authoring of Virtual Labs experiments in a streamlined and user-friendly manner. This extension offers features to manage all common tasks associated with experiment development. Currently, a web version of this extension is in progress.</p>
        <Link href='https://github.com/virtual-labs/tool-vscode-plugin/blob/main/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='vscode-web' className={`${ montserrat.className } blog-h3`}>Visual Studio Code Web Extension</h3>
        <p>A Visual Studio Code Web extension is being developed to facilitate the authoring of Virtual Labs experiments in a streamlined and user-friendly manner on the Web. This extension offers features to manage all common tasks associated with experiment development.</p>
        <Link href='https://github.com/virtual-labs/tool-web-ext-vscode/blob/dev/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='content' className={`${ montserrat.className } blog-h3`}>Content Development Platform</h3>
        <p>It is a web-based Content Management System built over Netlify CMS designed to facilitate the creation of virtual experiments. It offers a user-friendly interface that eliminates the need for users to have prior knowledge of Git and Markdown. With this platform, experiment creators can easily build and manage virtual experiments while having the convenience of seamless deployment as it gives an online option to develop experiments which does not require any downloads or local setup.</p>
        <Link href='https://github.com/virtual-labs/app-exp-create-web/blob/master/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='repo' className={`${ montserrat.className } blog-h3`}>National Question Repository</h3>
        <p>An application to create a centralized repository of multiple-choice questions that can be accessed and contributed to by authorized users is being built. It aims to facilitate question retrieval based on search terms, tags, and similarity matching.</p>
        <Link href='https://vlead.vlabs.ac.in/vlead/' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='performance' className={`${ montserrat.className } blog-h3`}>Performance Tool</h3>
        <p>A tool that generates performance reports on the experiment code base which include various scores and metrics as well as suggestions for improvement has been built for the content developers. These reports are generated using a lighthouse API.</p>
        <Link href='https://github.com/virtual-labs/tool-performance/blob/main/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='validation' className={`${ montserrat.className } blog-h3`}>Validation Tool</h3>
        <p>A tool has been implemented to validate code once experiments have been developed. This tool executes ESLint on the JavaScript code, examines HTTP links, and validates the JSON files in the repository against a schema.</p>
        <Link href='https://github.com/virtual-labs/tool-validation/blob/main/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='code' className={`${ montserrat.className } blog-h3`}>Code Assessment Tool</h3>
        <p>This tool is designed to provide experiment developers with an efficient way to integrate code assessment exercises into their experiments. With a simple JSON file containing problem statements, inputs, and expected outputs, this tool offers a JavaScript-based code IDE where learners can code their solutions for the respective problems and simultaneously check for the outputs. The tool also enables the developers to add multiple problem exercises and for learners to seamlessly navigate between problems, making their learning experience fruitful and joyous.</p>
        <Link href='https://github.com/virtual-labs/comp-code-editor/blob/main/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <h3 id='service' className={`${ montserrat.className } blog-h3`}>Service Worker</h3>
        <p>Completed the first iteration of the Virtual Labs service worker. The service worker will be our agent on the client and will be used for many of the planned tasks, e.g. caching and capturing analytics data stream. Apart from the default service worker functionality, an experiment author can add custom functionality for each experiment. Currently the integration of Service Worker with the build script is being tested.</p>
        <Link href='https://github.com/virtual-labs/lib-service-worker-vlabs/blob/main/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-8">
        <h3 id='tech' className={`${ montserrat.className } blog-h3`}>Tech Blogs</h3>
        <p>The VLEAD Team encourages experiment and tool developers to share their learnings and experiences throughout the development lifecycle via tech blogs. These blogs are published on the Medium site to benefit other developers.</p>
        <Link href='https://medium.com/vlead-tech' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <h2 id='vlead-tools' className={`${ montserrat.className } blog-h2`}>VLEAD Tools</h2>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-8">
        <h3 id='doc-search' className={`${ montserrat.className } blog-h3`}>Document Search Tool</h3>
        <p>The Document Search Tool for Virtual Labs has been designed to alleviate the challenges associated with navigating vast collections of documents within the virtual labs environment. This tool serves as a powerful solution to efficiently retrieve relevant sections from a plethora of documents, ensuring that users can access the information they need promptly.</p>
        <Link href='https://github.com/virtual-labs/tool-doc-search/blob/dev/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-8">
        <h3 id='lab' className={`${ montserrat.className } blog-h3`}>Automated Lab Deployment Tool</h3>
        <p>A tool that simplifies the lab deployment process for hosting engineers, providing a unified, efficient interface for configuring and triggering multiple lab deployments has been developed. Previously, this process was manual and required separate deployment for each lab through GitHub. Due to the manual nature of the deployment process, there was a dependence on the resource.</p>
        <Link href='https://github.com/virtual-labs/app-lab-deployment-web/blob/dev/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-8">
        <h3 id='tracker' className={`${ montserrat.className } blog-h3`}>Outreach Workshop Tracker</h3>
        <p>This tool has been developed to facilitate the storage and management of workshop data for Virtual Labs. It allows admins and nodal coordinators from various institutes to access and maintain workshop information efficiently.</p>
        <Link href='https://github.com/virtual-labs/app-outreach-tracker-web/blob/dev/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-8">
        <h3 id='site-generator' className={`${ montserrat.className } blog-h3`}>Static Site Generator</h3>
        <p>Developing a publishable lab, along with all its experiments, entails significant manual effort that does not directly enhance the lab&apos;s value. To address this challenge, the Virtual Labs Static Site Generator automates the creation of the experiment website and allows the content developers to focus on producing content. This Static Site Generator was refactored in order to facilitate its integration with various automation tools.</p>
        <Link href='https://github.com/virtual-labs/ph3-lab-mgmt/blob/master/README.org' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-8">
        <h3 id='doc-generator' className={`${ montserrat.className } blog-h3`}>Document Generator</h3>
        <p>Virtual Labs Prompt Repository is a tool designed for VLEAD team to generate various types of content, such as blogs and documentation, using large language models (LLMs). The repository contains predefined prompt templates, allowing users to input specific information to generate content efficiently.</p>
        <Link href='https://github.com/virtual-labs/app-text-generator/blob/main/README.md' className="text-blue-400 hover:underline" passHref>Read More</Link>
      </div>
    </div>
  )
}