import Link from "next/link";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Publications() {
  return (
    <div className="self-stretch">
      <h1 id='workshop-title' className={`text-4xl mb-12 font-bold text-center ${montserrat.className}`}>Research Publications</h1>
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
        <li><Link href='#edu' className="toc-link">Educational Technology And Computing Pedagogy Virtual Labs</Link></li>
        <li><Link href='#auth' className="toc-link">Authoring Tools And Environments</Link></li>
        <li>
          <Link href='#func' className="toc-link">Functional Programming</Link>
        </li>
        <li><Link href='#algo' className="toc-link">Algorithms And Discrete Dynamical Systems</Link></li>
        <li><Link href='#onto' className="toc-link">Ontologies</Link></li>
      </ul>
    </aside>
  )
}

function Content() {
  return (
    <div className="text-left pr-">
      <h2 id='edu' className={`${ montserrat.className } blog-h2`}>Educational Technology And Computing Pedagogy Virtual Labs</h2>
        <ol className="list-decimal pl-5 mb-8">
          <li>K.C. Bandi, A.K. Nori, V. Choppella, and S. Kode. A virtual laboratory for teaching linux on the web. In IEEE 3rd International Conference on Technology for Education, pages 212--215. IEEE Press, 2011.</li>
          <li>Rohit Khot and Venkatesh Choppella. Discovir: A framework for designing interfaces and structuring content for virtual labs. In IEEE 3rd International Conference on Technology for Education, pages 121--127. IEEE Press, 2011</li>
          <li>Venkatesh Choppella., V K Brahmajosyula, M. Vutpala., and S. Kole. Process models for virtual lab development, deployment and distribution. In IEEE 3rd International Conference on Technology for Education, pages 293--294. IEEE Press, 2011.</li>
          <li>S. Malani, G.N.S. Prasanna, J.A. del Alamo, J.L. Hardison, K. Moudgalya, and V. Choppella. Issues faced in a remote instrumentation laboratory. In IEEE 4th International Conference on Technology for Education, pages 67--74. IEEE Press, 2012.</li>
          <li>Sourav Chatterjee, Pranitha Reddy, and Venkatesh Choppella. Automated restructuring of contents for virtual labs. In Proceedings of the IEEE International Conference on Technology for Education (T4E2013). IEEE Press, 2013.</li>
          <li>Jatin Agarwal, Utkarsh Rastogi, Prateek Pandey, Nurendra Choudhary, Venkatesh Choppella, and Raghu Reddy. Large scale web page optimization of virtual labs. In Proceedings of the IEEE International Conference on Technology for Education (T4E2014), pages 146--147. IEEE, 2014.</li>
          <li>Nurendra Choudhary, Venkatesh Choppella, Raghu Reddy, and Thirumal Ravula. Large scale web page optimization of virtual labs. In Proceedings of the IEEE International Conference on Technology for Education (T4E2014), pages 29--31. IEEE, December 2014.</li>
          <li>Garima Ahuja, Anubha Gupta, Harsh Wardhan, and Venkatesh Choppella. Assessing the impact of virtual labs: a case study with the lab on advanced vlsi. In Proceedings of the 15 IEEE Conference on Advances in Learning Technologies, ICALT 2015, pages 290--292. IEEE, July 2015.</li>
          <li>Tejaswinee Kelkar, Anon Ray, and Venkatesh Choppella. Sangeetkosh: An open web platform for hindustani music education. In Proceedings of the 15 IEEE Conference on Advances in Learning Technologies, ICALT 2015, pages 5--9. IEEE, July 2015.</li>
          <li>Mrityunjay Kumar, Jessica Emory, and Venkatesh Choppella. Usability analysis of virtual labs. In International Conference on Advanced Learning Technologies (ICALT). IEEE, July 2018.</li>
          <li>Mrityunjay Kumar, Venkatesh Choppella, Sanjana Sunil, Sumaid Ali Syed, 'A learnable-by-design (LEAD) model for designing virtual experiments for computer science labs', submitted to ITiCSE 2019, 12 to 17 July 2019.</li>
          <li>M. Kumar, V. Choppella, S. Sunil and S. Syed, "A Learnable-by-Design (LEAD) Model for Designing Experiments for Computer Science Labs," 2019 IEEE Tenth International Conference on Technology for Education (T4E), Goa, India, 2019, pp. 222-229.</li>
          <li>R. S. Pillutla, L. M. S, V. Choppella, A. Jesrani, P. Raman and Y. Raghu Reddy, "Towards Massively Open Online Virtual Internships in Computing Education," 2019 IEEE Tenth International Conference on Technology for Education (T4E), Goa, India, 2019, pp. 90-93</li>
          <li>R. S. Pillutla, V. Choppella, L. M. S, M. Dammaraju and P. Raman, "Enhancing Virtual Labs Usage in Colleges," 2019 IEEE Tenth International Conference on Technology for Education (T4E), Goa, India, 2019, pp. 158-161.</li>
          <li>Subhrojyoti Roy Chaudhuri, Amar Banerjee, N. Swaminathan, Venkatesh Choppella, Arpan Pal, and P. Balamurali. A knowledge centric approach to conceptualizing robotic solutions. In Proceedings of the 12th Innovations on Software Engineering Conference (Formerly Known As India Software Engineering Conference), ISEC'19, pages 12:1--12:11, New York, NY, USA, 2019</li>
        </ol>
      <h2 id='auth' className={`${ montserrat.className } blog-h2`}>Authoring Tools And Environments</h2>
      <ol className="list-decimal pl-5 mb-8">
        <li>Thulasiram Naidu P, Manisha Verma, Venkatesh Choppella, and Gangadhar Chalapaka. Synthesizing customizable learning environments. In 2nd IEEE International Conference on Technology for Education, July 2010.</li>
        <li>Venkatesh Choppella. Foss, web2.0 and mashups as a natural learning management infrastructure. In IEEE Conf. on Technology for Education, July 2010. Conference tutorial.</li>
        <li>Sankalp Khare, Ishan Misra, and Venkatesh Choppella. Using org-mode and subversion for managing and publishing content in computer science courses. In IEEE 4th International Conference on Technology for Education, pages 220--223. IEEE Press, 2012.</li>
      </ol>
      <h2 id='func' className={`${ montserrat.className } blog-h2`}>Functional Programming</h2>
      <ol className="list-decimal pl-5 mb-8">
        <li>Venkatesh Choppella, Hitesh Kumar, P. Manjula, and K. Viswanath. From high-school algebra to computing through functional programming. In IEEE 4th International Conference on Technology for Education, pages 180--183. IEEE Press, 2012.</li>
        <li>V. Choppella, G. Ahuja, and A. Mavalankar. How does a program run? a visual model based on annotating abstract syntax trees. In 2016 International Conference on Learning and Teaching in Computing and Engineering (LaTICE), pages 38--42, March 2016.</li>
      </ol>

      <h2 id='algo' className={`${ montserrat.className } blog-h2`}>Algorithms And Discrete Dynamical Systems</h2>
      <ol className="list-decimal pl-5 mb-4">
        <li>Venkatesh Choppella, K Viswanath, and P Manjula. Viewing algorithms as iterative systems and plotting their dynamic behaviour. In Proceedings of the IEEE International Conference on Technology for Education (T4E2013), T4E 2013, pages 206--209. IEEE Press, 2013</li>
        <li>V. Choppella, K. Viswanath and M. Kumar, "Algodynamics: Algorithms as systems," in 2021 IEEE Frontiers in Education Conference (FIE), Lincoln, NE, USA, 2021, pp. 1-9</li>
      </ol>
      <h2 id='onto' className={`${ montserrat.className } blog-h2`}>Ontologies</h2>
      <p className="mb-8">Aditi Mavalankar, Tejaswinee Kelkar, and Venkatesh Choppella. Generation of quizzes and solutions based on ontologies -- a case for a music problem generator. In 2015 IEEE Seventh International Conference on Technology for Education (T4E), pages 73--76. IEEE, December 2015.</p>
      
    </div>
  )
}