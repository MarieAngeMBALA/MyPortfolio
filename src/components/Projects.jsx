import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';        
import '../assets/css/responsive.css'; 
import '../assets/css/font-awesome.css';
import devops from '../assets/projects/devops.png';
import devindus from '../assets/projects/devindus.png';
import belgium from '../assets/projects/belgium.png';
import poubelle from '../assets/projects/poubelle.png';
import java from '../assets/projects/java.png';
import code from '../assets/projects/code.png';
import lid from '../assets/projects/lid.png';
import micro from '../assets/projects/micro.png';
import mobile from '../assets/projects/mobile.png';
import portfolio from '../assets/projects/portfolio.png';
import othello from '../assets/projects/othello.png';
import coupe from '../assets/projects/coupe.png';
import mans from '../assets/projects/mans.png';
import semestre from '../assets/projects/semestre.png';
import '../assets/css/bootstrap.css';
import '../assets/css/style.css';
import '../assets/css/animate.css';
import '../assets/js/jquery.min.js'
import '../assets/js/bootstrap.js'; 


const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
              />
              LIVE DEMO
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>All my Work experiences, projects and competitions I took part in. --- International Experiences</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Experiences.</h2>
      </motion.div>

      <section id="features">
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#tab-1" role="tab" data-toggle="tab"> <strong>Work Experiences</strong><i></i></a></li>
                <li role="presentation"><a href="#tab-2" role="tab" data-toggle="tab"> <strong>School Projects</strong> <i></i></a></li>
                <li role="presentation"><a href="#tab-3" role="tab" data-toggle="tab"><strong>Personal Projects</strong><i></i></a></li>
                <li role="presentation"><a href="#tab-4" role="tab" data-toggle="tab"><strong>Competitions</strong><i></i></a></li>
                <li role="presentation"><a href="#tab-5" role="tab" data-toggle="tab"><strong>My Internship REX</strong><i></i></a></li>
            </ul>

            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade in active feat-sec" id="tab-1">
                <div class="container">
                <motion.img
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  src={devops} 
                  alt="Web Design"
                  className="image-block"
                />
                <motion.div 
                  className="text-block"
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}>
                    <h1 className='titre1'>Continuous Integration and Deployment Internship (CI/CD Engineering) </h1>
                    <h2 className='titre2'>Austria | OPmobility</h2>
                    <p>May - June 2025</p>
                    <br />
                    <h3 className='titre3'>Automate builds using Jenkins and Azur devops</h3>
                    <br />
                    <ul class="skill-liste">
                        <li><b class="fas fa-user"></b>  Bash command to run the software in cmd (msbuild)</li>
                        <li><b class="fas fa-user"></b>  Jenkins as an automation server</li>
                        <li><b class="fas fa-user"></b> Azur devops for version management and pipeline creation</li>
                    </ul>
                    <p>The aim was to ensure continuous deployment of the software by automating builds of the various code contained 
                      in the azur devops repos. This made it possible to increase the reliability 
                      and efficiency of software updates by automating the management of integrations and deployments.</p>    
                </motion.div>
                </div>

                <div class="container">  
                <motion.div
                  className="text-block"
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}>
                    <h1 className='titre1'>Work assignment as an Engineering Software Development Engineer</h1>
                    <h2 className='titre2'>Belgium | OPmobility Plant</h2>
                    <p>July -  September 2024</p>
                    <br />
                    <h3 className='titre3'>Write Python scripts to ensure machine-software communication</h3>
                    <br />
                    <ul class="skill-liste">
                        <li><b class="fas fa-user"></b>  Python for writing code that is consistent with C++ output</li>
                        <li><b class="fas fa-user"></b>  Creating an installer with 'Advanced Installer' tool </li>
                        <li><b class="fas fa-user"></b> Security audits and certifications (ISO27001, etc...)</li>
                        <li><b class="fas fa-user"></b> Contact with certification authorities (DigiCert) to sign the Code and prove authenticity</li>
                        <li><b class="fas fa-user"></b> Pentesting (PowerShell Empire)</li>
                        <li><b class="fas fa-user"></b> Python script to establish communication with an FTP or SFTP server.</li>
                    </ul>
                    <p>Creating this software was a mixture of algorithmic complexity, improving the user interface and practising 
                      object-oriented programming using a multitude of tools, not forgetting the 'project management' aspect.</p>    
                </motion.div>
                <motion.img
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  src={belgium} // Remplacez par le chemin de votre image
                  alt="Web Design"
                  className="image-block"/>  
                </div>

                <div class="container" >
                <motion.img
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  src={devindus} // Remplacez par le chemin de votre image
                  alt="Web Design"
                  className="image-block"/>  
                <motion.div
                  className="text-block"
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}>
                    <h1 className='titre1'>C++ and C# developer</h1>
                    <h2 className='titre2'>France | Plastic Omnium (R&D Center)</h2>
                    <p>September 2023 -  June 2024</p>
                    <br />
                    <h3 className='titre3'>Development of industrial filament winding software with the calculation part in C++ and the interface in C#</h3>
                    <br />
                    <ul class="skill-liste">
                        <li><b class="fas fa-user"></b>  Creating and managing Nodelocked and Floating licences with FlexLM</li>
                        <li><b class="fas fa-user"></b>  Improving the performance of the WinForms application with Multithreading</li>
                        <li><b class="fas fa-user"></b>  Perfect knowledge of .NET applications</li>
                        <li><b class="fas fa-user"></b> Applications of object-oriented programming concepts with C++</li>
                        <li><b class="fas fa-user"></b> Complex mathematical algorithms for calculations</li>
                        <li><b class="fas fa-user"></b> Optimisation of Runtimes (DotTrace) and Bugg fixes</li>
                        <li><b class="fas fa-user"></b> UI C# design</li>
                        <li><b class="fas fa-user"></b>  Writing a user guide (Jekyll, Web programming(Html/CSS) + WordPress)</li>
                        <li><b class="fas fa-user"></b> Project management with in-depth knowledge of Azur Devops</li>
                        <li><b class="fas fa-user"></b> Visual Studio as IDE</li>
                    </ul>
                    <p>Creating this software was a mixture of algorithmic complexity, improving the user interface and practising 
                      object-oriented programming using a multitude of tools, not forgetting the 'project management' aspect.</p>    
                </motion.div>
                </div>
              </div>


              <div role="tabpanel" class="tab-pane fade feat-sec" id="tab-2">
                <div class="container">  
                  <motion.div
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                      <h1 className='titre1'>Mobile application similar to Deezer </h1>
                      <h2 className='titre2'>BAC +4 | 2nd year of the engineering cycle</h2>
                      <p>2023</p>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b>  Kotlin and Flutter programming language</li>
                          <li><b class="fas fa-user"></b>  Use of remote APIs and state Management </li>
                      </ul>
                      <p>The aim of this project was to get an initial introduction to mobile dev using modern tools.</p>    
                  </motion.div>
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={mobile} // Remplacez par le chemin de votre image
                    alt="Web Design"
                    className="image-block"/>  
                </div>
                <div class="container">  
                  <motion.div
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                      <h1 className='titre1'>Automatic garage with RFID badge | Mechatronics project </h1>
                      <h2 className='titre2'>BAC +3 | 1st year of the engineering cycle</h2>
                      <p>2023</p>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b>  Arduino for the code</li>
                          <li><b class="fas fa-user"></b>  SolidWorks for the design and 3D printing </li>
                          <li><b class="fas fa-user"></b>  Making PCB (Shields with KICAD) & Use of microcontrollers</li>
                      </ul>
                      <p>As an end-of-year project, we had to apply almost all the concepts we had learnt during the year, 
                        from mechanical design and computer code to the physical construction of the mini garage.</p>    
                  </motion.div>
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={micro} // Remplacez par le chemin de votre image
                    alt="Web Design"
                    className="image-block"/>  
                </div>
                <div class="container">  
                  <motion.div
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                      <h1 className='titre1'>Automatic language detection | LID Artificial Intelligence </h1>
                      <h2 className='titre2'>BAC +3 | 1st year of the engineering cycle</h2>
                      <p>2023</p>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b>  Python as a programming language in Jupyter Notebook</li>
                          <li><b class="fas fa-user"></b>  Testing several models: RandomForest, MLP, Decision Tree, etc.</li>
                          <li><b class="fas fa-user"></b>  Data partitioning and K-Fold cross-validation</li>
                          <li><b class="fas fa-user"></b>  1st place in a Kaggle competition with SVC model </li>
                      </ul>
                      <p>The aim of this project was to create an AI that could detect the different languages of an audio file (TED conference audio files).</p>    
                  </motion.div>
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={lid} // Remplacez par le chemin de votre image
                    alt="Web Design"
                    className="image-block"/>  
                </div>
                <div class="container">  
                  <motion.div
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                      <h1 className='titre1'>Solitaire and MasterMind game in C </h1>
                      <h2 className='titre2'>BAC +3 | 1st year of the engineering cycle</h2>
                      <p>2022 - 2023</p>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b>  C programming language in CodeBlock IDE</li>
                          <li><b class="fas fa-user"></b>  GCC Compiler (GNU Compiler Collection)</li>
                          <li><b class="fas fa-user"></b>  Use of standard functions and libraries : conio.h, time.h, srand(), etc. </li>
                      </ul>
                      <p>This project was carried out in the form of a tutored project in which we had to create a Mastermind game purely in 
                        C language that ran on a cmd while having a pleasant console interface and above all being functional in 1 month.</p>    
                  </motion.div>
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={code} // Remplacez par le chemin de votre image
                    alt="Web Design"
                    className="image-block"/>  
                </div>
                <div class="container">  
                  <motion.div
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                      <h1 className='titre1'>Development of an accounting software in JAVA </h1>
                      <h2 className='titre2'>BAC +2 | 2nd year of preparatory class</h2>
                      <p>2022</p>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b>  Eclipse as the IDE, UML for project management and SQL for data management</li>
                          <li><b class="fas fa-user"></b>  Object-oriented programming (Classes, Heritage, Overloading, etc.)</li>
                          <li><b class="fas fa-user"></b>  JavaFx for interface design </li>
                          <li><b class="fas fa-user"></b> PhpMyAdmin for administering the MYSQL server</li>
                          <li><b class="fas fa-user"></b> Practical application of accounting concepts such as: General Ledger, Balance Sheet, Depreciation & Provisions, Cost Accounting, etc...</li>
                      </ul>
                      <p>This project involved designing an accounting application to enable a company to view its profit and loss accounts, balance sheet, etc.</p>    
                  </motion.div>
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={java} // Remplacez par le chemin de votre image
                    alt="Web Design"
                    className="image-block"/>  
                </div>
                <div class="container">  
                  <motion.div
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                      <h1 className='titre1'>Design a stand-alone waste bin </h1>
                      <h2 className='titre2'>BAC +1 | 1st year of preparatory class</h2>
                      <p>2021</p>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b>  Introduction to sensors (Proximity and Weight)</li>
                          <li><b class="fas fa-user"></b>  Creation of a logic circuit with gates: AND,OR,NAND,NOR,XOR etc... </li>
                          <li><b class="fas fa-user"></b> prototyping</li>
                      </ul>
                      <p>The idea was to apply the concepts of digital electronics (logic gates) to design this autonomous dustbin. 
                        When the bin is full, it no longer opens to receive the rubbish, but signals this to the maintenance staff.</p>    
                  </motion.div>
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={poubelle} // Remplacez par le chemin de votre image
                    alt="Web Design"
                    className="image-block"/>  
                </div>
              </div>


              <div role="tabpanel" class="tab-pane fade feat-sec" id="tab-3">
                <div class="container">
                <motion.img
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  src={portfolio} 
                  alt="Web Design"
                  className="image-block"
                />
                <motion.div 
                  className="text-block"
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}>
                    <h1 className='titre1'>FullStack Portfolio project </h1>
                    <p>January 2024</p>
                    <br />
                    <h3 className='titre3'>This portfolio is a practical example</h3>
                    <br />
                    <ul class="skill-liste">
                        <li><b class="fas fa-user"></b>  MERN Stack development (Mongodb - Express - React - Nodejs)</li>
                        <li><b class="fas fa-user"></b>  Tailwind for some design</li>
                        <li><b class="fas fa-user"></b> Mastery of non-relational databases</li>
                    </ul>
                    <p>It's worth noting that before opting for a MERN Stack, I explored several frameworks (Angular, etc.) 
                      and after comparing them, I chose to use React to create this portfolio and showcase my skills.</p>    
                </motion.div>
                </div>

                <div class="container">
                <motion.img
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  src={othello} 
                  alt="Web Design"
                  className="image-block"
                />
                <motion.div 
                  className="text-block"
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}>
                    <h1 className='titre1'>OTHELLO Player game optimization | Neutral Network Models </h1>
                    <p>Octobre 2023</p>
                    <br />
                    <h3 className='titre3'>5th place in the Kaggle competition on deep learning</h3>
                    <br />
                    <ul class="skill-liste">
                        <li><b class="fas fa-user"></b>  Comparison of several models : LSTM, MLP, RMSProp</li>
                        <li><b class="fas fa-user"></b>  Optimisation of model architecture, taking into account the number of Epochs, learning rate, etc.</li>
                        <li><b class="fas fa-user"></b> Implémentation of a CNN network and optimizing its architecture</li>
                    </ul>
                    <p>The aim of this competition was to optimise an AI that would play the role of an Othello player and win every time.</p>    
                </motion.div>
                </div>

              </div>


              <div role="tabpanel" class="tab-pane fade feat-sec" id="tab-4">
                <div class="container">  
                  <motion.div
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                      <h1 className='titre1'>24H DU CODE</h1>
                      <h2 className='titre2'>Le Mans, France</h2>
                      <p>2024</p>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b>  We have used almost all the concepts of embedded systems</li>
                      </ul>
                      <p>Here, we worked with the teams at STMicroelectronics to control a console game using a computer during 24 hours non-stop.</p>    
                  </motion.div>
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={mans} // Remplacez par le chemin de votre image
                    alt="Web Design"
                    className="image-block"/>  
                </div>
                <div class="container">  
                  <motion.div
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                      <h1 className='titre1'>French Robotics Cup  </h1>
                      <h2 className='titre2'>France | With the ENSIM robotics club</h2>
                      <p>2023</p>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b>  Arduino and Raspberry programming</li>
                          <li><b class="fas fa-user"></b>  Communication protocols (UART,I2C) </li>
                      </ul>
                      <p>The aim was to create a robot that would bake a cake and store the remaining cherries in a basket. In this project, 
                        I was responsible for managing the basket so that it could count the number of cherries and display them.</p>
                        <p>For more information on the competition :<a style={{color: 'blue'}} href="https://www.coupederobotique.fr/edition-2023/le-concours/reglement-2023/">Click here</a></p>    
                  </motion.div>
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={coupe} // Remplacez par le chemin de votre image
                    alt="Web Design"
                    className="image-block"/>  
                </div>
              </div>


              <div role="tabpanel" class="tab-pane fade feat-sec" id="tab-5">
                <div class="container">  
                   <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={semestre} // Remplacez par le chemin de votre image
                    alt="Web Design"
                    className="image-block"
                    />  
                  <motion.div
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                      <h1 className='titre1'>Retour d'expérience de la période entreprise lors du Semestre8</h1>
                      <h2 className='titre2'>Ecole : ENSIM | Le Mans,France</h2>
                      <h2 className='titre2'>Entreprise : OPmobility | Domaine: Reservoir à Hydrogène | Compiegne,France</h2>
                      <p>2024</p>
                      <br />
                      <p>Dans l'entreprise, je suis chargée de développer le logiciel industriel de l'entreprise en C++ et C#. 
                      Et cela n'implique pas seulement le code mais plusieurs autres aspects afin d'avoir une expérience complète.</p> 
                      <br />
                        <h3 className='titre3'>Module 1 : Conduite de Projet</h3>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b>  Normes, Certifications et Démarche qualité : ISO 9001</li>
                      </ul>
                      <p>On utilise cette norme pour garantir la qualité des produits de l'entreprise afin de prouver l'aspect règlementaire.</p>
                      <p>La démarche qualité qu'on utilise est la suivante : Evaluation des risques - Mise en oeuvre des mesures sécuritaires - Audits. 
                        Pour le moment tout ce qui concerne les coûts je ne suis pas explicitement impliquée.</p> 
                        <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b> Recherche de solutions & Présentation de livrables</li>
                      </ul>
                      <p>Ici, face à un problème de bonne pratique lors de la commercialisation du logiciel, il fallait utiliser des méthodes plus modernes.
                        J'ai donc décidé de mettre sur pied un installateur pour le logiciel en prenant en compte tous les paramètres afin que le client l'installer
                        sans notre intervention à chaque fois.
                      </p>
                      <p>J'ai également contacté une entreprise de certification pour attester de la fiabilité.</p>

                      <br />
                        <h3 className='titre3'>Module 2 : Sécurité du système d'information</h3>
                      <br />
                      <p> <strong>Pratique de sécurité interne :</strong> Utilisation de VPN lors des télétravails, Modification des mots de passe chaque trimestre,
                      Formation cybersécurité (phishing, attaques réseaux etc.), etc... </p>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b> Sécurisation du logiciel : IEC 62443</li>
                      </ul>
                      <p>Cette partie m'a été totalement confiée et pour le faire j'ai suivi la démarche qualité décrite plus haut.</p>
                      <p>IEC 62443 est une norme spécifique à l'IOT (Logiciel) dans le domaine industriel. J'ai contacté une entité qui délivre cette certification
                        et nous travaillons avec elle pour assurer la sécurité avec un audit à chaque étape.
                      </p>
                      <p><strong>Pratiques :</strong> Test d'infiltration (Pentesting)</p>

                      <br />
                        <h3 className='titre3'>Module 3 : Technique</h3>
                      <br />
                      <ul class="skill-liste">
                          <li><b class="fas fa-user"></b> Le developpement du logiciel suit son cours comme présenté au semestre précédent.</li>
                          <li><b class="fas fa-user"></b>Gestion de licences avec l'outil FLEXLM</li>
                          <li><b class="fas fa-user"></b> Application des concepts vu en IHM à l'école</li>
                      </ul>
                  </motion.div>
                </div>
                
              </div>
            </div>

      </section> 

      

    </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
