import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import purple from "./assets/purple-lens-flare-png-10.png";
import Landing from "./pages/Landing/Landing";
import Header from "./layouts/Header/Header";
import ContactUs from "./pages/ContactUs/ContactUs";
import Registration from "./pages/Registration/Registration";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
    // <div className="getlinked">
    //   <div className="div">
    //     <div className="overlap">
    //       <div className="overlap-group">
    //         <img
    //           className="purple-lens-flare"
    //           alt="Purple lens flare"
    //           src="src/assets/purple-lens-flare-png.png"
    //         />
    //         <img className="metrix" alt="Metrix" src="src/assets/metrix-1.png" />
    //         <img
    //           className="img"
    //           alt="Purple lens flare"
    //           src={purple}
    //         />
    //         <img className="line" alt="Line" src="src/assets/line-1.svg" />
    //         <img className="line-2" alt="Line" src="src/assets/line-2.svg" />
    //         <img className="line-3" alt="Line" src="src/assets/line-5-1.svg" />
    //         <button className="register-button">
    //           <div className="div-wrapper">
    //             <div className="text-wrapper">Register</div>
    //           </div>
    //         </button>
    //         <button className="overlap-wrapper">
    //           <div className="div-wrapper">
    //             <div className="text-wrapper-2">Read More</div>
    //           </div>
    //         </button>
    //         <div className="navbar">
    //           <div className="text-wrapper-3">Timeline</div>
    //           <div className="text-wrapper-4">Overview</div>
    //           <button className="overlap-group-wrapper">
    //             <div className="div-wrapper">
    //               <div className="text-wrapper">Register</div>
    //             </div>
    //           </button>
    //           <div className="text-wrapper-5">FAQs</div>
    //           <div className="text-wrapper-6">Contact</div>
    //         </div>
    //         <p className="p">
    //           <span className="span">get</span>
    //           <span className="text-wrapper-7">linked</span>
    //         </p>
    //         <img
    //           className="man-wearing-smart"
    //           alt="Man wearing smart"
    //           src="src/assets/man-wearing-smart-glasses-touching-virtual-screen-1.png"
    //         />
    //         <p className="participate-in">
    //           Participate in getlinked tech Hackathon 2023 stand <br />a chance
    //           to win a Big prize
    //         </p>
    //         <div className="title">
    //           <div className="overlap-2">
    //             <div className="overlap-3">
    //               <div className="text-wrapper-8">getlinked Tech</div>
    //               <p className="hackathon">
    //                 <span className="span">Hackathon </span>
    //                 <span className="text-wrapper-7">1.0</span>
    //               </p>
    //               <img
    //                 className="creative"
    //                 alt="Creative"
    //                 src="src/assets/creative-1.png"
    //               />
    //             </div>
    //             <img
    //               className="chain"
    //               alt="Chain"
    //               src="src/assets/chain-9365116-7621444.png"
    //             />
    //           </div>
    //           <img className="element" alt="Element" src="src/assets/1f-4a-5.png" />
    //         </div>
    //         <img className="image" alt="Image" src="src/assets/image-1.png" />
    //         <div className="rectangle" />
    //         <img
    //           className="purple-lens-flare-2"
    //           alt="Purple lens flare"
    //           src="src/assets/purple-lens-flare-png-7.png"
    //         />
    //         <img
    //           className="purple-lens-flare-3"
    //           alt="Purple lens flare"
    //           src="src/assets/purple-lens-flare-png-6.png"
    //         />
    //         <p className="introduction-to">
    //           <span className="span">
    //             Introduction to getlinked
    //             <br />
    //           </span>
    //           <span className="text-wrapper-7">tech Hackathon 1.0</span>
    //         </p>
    //         <p className="rules-and-guidelines">
    //           <span className="span">
    //             Rules and
    //             <br />
    //           </span>
    //           <span className="text-wrapper-7">Guidelines</span>
    //         </p>
    //         <div className="countdown-time">
    //           <div className="overlap-4">
    //             <div className="element-2">
    //               00&nbsp;&nbsp; 00&nbsp;&nbsp; 00
    //             </div>
    //             <div className="text-wrapper-9">H</div>
    //             <div className="text-wrapper-10">M</div>
    //             <div className="text-wrapper-11">S</div>
    //           </div>
    //         </div>
    //         <div className="the-big-idea">
    //           <div className="the-big-idea-wrapper">
    //             <div className="the-big-idea-2">
    //               The Big
    //               <br />
    //               Idea!
    //             </div>
    //           </div>
    //         </div>
    //         <p className="our-tech-hackathon">
    //           Our tech hackathon is a melting pot of visionaries, and its
    //           purpose is as
    //           <br />
    //           clear as day: to shape the future. Whether you&#39;re a coding
    //           genius, a <br />
    //           design maverick, or a concept wizard, you&#39;ll have the chance
    //           to transform <br />
    //           your ideas into reality. Solving real-world problems, pushing the
    //           boundaries
    //           <br />
    //           of technology, and creating solutions that can change the world,
    //           <br />
    //           that&#39;s what we&#39;re all about!
    //         </p>
    //         <p className="our-tech-hackathon-2">
    //           Our tech hackathon is a melting pot of visionaries, and its
    //           purpose is as
    //           <br />
    //           clear as day: to shape the future. Whether you&#39;re a coding
    //           genius, a <br />
    //           design maverick, or a concept wizard, you&#39;ll have the chance
    //           to transform <br />
    //           your ideas into reality. Solving real-world problems, pushing the
    //           boundaries
    //           <br />
    //           of technology, and creating solutions that can change the world,
    //           <br />
    //           that&#39;s what we&#39;re all about!
    //         </p>
    //         <img className="arrow" alt="Arrow" src="src/assets/arrow.png" />
    //         <img className="star" alt="Star" src="src/assets/star-10.png" />
    //         <img className="star-2" alt="Star" src="src/assets/star-6.png" />
    //         <img className="star-3" alt="Star" src="src/assets/star-6.png" />
    //         <img className="star-4" alt="Star" src="src/assets/star-6.png" />
    //         <img className="star-5" alt="Star" src="src/assets/star-6.png" />
    //         <img className="star-6" alt="Star" src="src/assets/star-10.png" />
    //         <img className="star-7" alt="Star" src="src/assets/star-10.png" />
    //         <img className="star-8" alt="Star" src="src/assets/star-10.png" />
    //         <img
    //           className="sata-gra"
    //           alt="Sata gra"
    //           src="src/assets/sata-gra-2.png"
    //         />
    //         <img
    //           className="sata-gra-2"
    //           alt="Sata gra"
    //           src="src/assets/sata-gra-2.png"
    //         />
    //         <img
    //           className="sata-gra-3"
    //           alt="Sata gra"
    //           src="src/assets/sata-gra-2.png"
    //         />
    //         <img className="star-pu" alt="Star pu" src="src/assets/star-pu-1.png" />
    //         <img className="star-pu-2" alt="Star pu" src="src/assets/star-pu-1.png" />
    //         <img
    //           className="star-outlin"
    //           alt="Star outlin"
    //           src="src/assets/star-outlin.png"
    //         />
    //         <div className="ellipse" />
    //         <div className="ellipse-2" />
    //         <img className="element-3" alt="Element" src="src/assets/7450159-1.png" />
    //         <p className="judging-criteria-key">
    //           <span className="span">
    //             Judging Criteria
    //             <br />
    //           </span>
    //           <span className="text-wrapper-7">Key attributes</span>
    //         </p>
    //         <p className="frequently-ask">
    //           <span className="span">
    //             Frequently Ask
    //             <br />
    //           </span>
    //           <span className="text-wrapper-7">Question</span>
    //         </p>
    //         <img
    //           className="purple-lens-flare-4"
    //           alt="Purple lens flare"
    //           src="src/assets/purple-lens-flare-png-5.png"
    //         />
    //         <img
    //           className="purple-lens-flare-5"
    //           alt="Purple lens flare"
    //           src="src/assets/purple-lens-flare-png-4.png"
    //         />
    //         <img className="element-4" alt="Element" src="src/assets/8046554-1.png" />
    //         <p className="innovation-and">
    //           <span className="text-wrapper-12">Innovation and Creativity</span>
    //           <span className="text-wrapper-13">
    //             : Evaluate the uniqueness and creativity of the
    //             <br />
    //             solution. Consider whether it addresses a real-world problem in
    //             a novel <br />
    //             way or introduces innovative features.
    //           </span>
    //         </p>
    //         <p className="functionality-assess">
    //           <span className="text-wrapper-12">Functionality:</span>
    //           <span className="text-wrapper-13">
    //             {" "}
    //             Assess how well the solution works. Does it perform its <br />
    //             intended functions effectively and without major issues? Judges
    //             would
    //             <br />
    //             consider the completeness and robustness of the solution.
    //           </span>
    //         </p>
    //         <p className="impact-and-relevance">
    //           <span className="text-wrapper-12">Impact and Relevance: </span>
    //           <span className="text-wrapper-13">
    //             Determine the potential impact of the solution <br />
    //             in the real world. Does it address a significant problem, and is
    //             it relevant <br />
    //             to the target audience? Judges would assess the potential
    //             social, <br />
    //             economic, or environmental benefits.
    //           </span>
    //         </p>
    //         <p className="technical-complexity">
    //           <span className="text-wrapper-12">Technical Complexity: </span>
    //           <span className="text-wrapper-13">
    //             Evaluate the technical sophistication of the solution. <br />
    //             Judges would consider the complexity of the code, the use of
    //             advanced <br />
    //             technologies or algorithms, and the scalability of the solution.
    //           </span>
    //         </p>
    //         <p className="adherence-to">
    //           <span className="text-wrapper-12">
    //             Adherence to Hackathon Rules:{" "}
    //           </span>
    //           <span className="text-wrapper-13">
    //             Judges will Ensure that the team adhered <br />
    //             to the rules and guidelines of the hackathon, including
    //             deadlines, use of <br />
    //             specific technologies or APIs, and any other
    //             competition-specific requirements.
    //           </span>
    //         </p>
    //         <img
    //           className="cwok-casual"
    //           alt="Cwok casual"
    //           src="src/assets/cwok-casual-21-1.png"
    //         />
    //         <img className="star-9" alt="Star" src="src/assets/star-6.png" />
    //         <div className="text-wrapper-14">?</div>
    //         <div className="text-wrapper-15">?</div>
    //         <div className="text-wrapper-16">?</div>
    //         <p className="text-wrapper-17">
    //           Igniting a Revolution in HR Innovation
    //         </p>
    //         <img className="vector" alt="Vector" src="src/assets/vector-4.svg" />
    //       </div>
    //       <p className="we-got-answers-to">
    //         <span className="text-wrapper-18">
    //           We got answers to the questions that you might
    //           <br />
    //           want to ask about{" "}
    //         </span>
    //         <span className="text-wrapper-19">getlinked Hackathon 1.0</span>
    //       </p>
    //       <img className="star-pu-3" alt="Star pu" src="src/assets/star-pu-1.png" />
    //       <div className="question-of-FAQ">
    //         <p className="text-wrapper-20">
    //           Can I work on a project I started before the hackathon?
    //         </p>
    //         <img className="line-4" alt="Line" src="src/assets/line-10.svg" />
    //         <div className="text-wrapper-21">+</div>
    //       </div>
    //       <div className="question-of-FAQ-2">
    //         <p className="text-wrapper-20">
    //           What happens if I need help during the hackathon?
    //         </p>
    //         <img className="line-4" alt="Line" src="src/assets/line-10.svg" />
    //         <div className="text-wrapper-21">+</div>
    //       </div>
    //       <div className="question-of-FAQ-3">
    //         <p className="text-wrapper-20">
    //           What happens if I don&#39;t have an idea for a project?
    //         </p>
    //         <img className="line-4" alt="Line" src="src/assets/line-10.svg" />
    //         <div className="text-wrapper-21">+</div>
    //       </div>
    //       <div className="question-of-FAQ-4">
    //         <p className="text-wrapper-20">
    //           Can I join a team or do I have to come with one?
    //         </p>
    //         <img className="line-4" alt="Line" src="src/assets/line-10.svg" />
    //         <div className="text-wrapper-21">+</div>
    //       </div>
    //       <div className="question-of-FAQ-5">
    //         <p className="text-wrapper-20">
    //           What happens after the hackathon ends
    //         </p>
    //         <img className="line-4" alt="Line" src="src/assets/line-10.svg" />
    //         <div className="text-wrapper-21">+</div>
    //       </div>
    //       <div className="question-of-FAQ-6">
    //         <p className="text-wrapper-20">
    //           Can I work on a project I started before the hackathon?
    //         </p>
    //         <img className="line-4" alt="Line" src="src/assets/line-10.svg" />
    //         <div className="text-wrapper-21">+</div>
    //       </div>
    //     </div>
    //     <img className="line-5" alt="Line" src="src/assets/line-5-1.svg" />
    //     <div className="overlap-5">
    //       <div className="overlap-6">
    //         <img className="line-6" alt="Line" src="src/assets/line-5-1.svg" />
    //         <button className="button">
    //           <div className="div-wrapper">
    //             <div className="text-wrapper-2">Read More</div>
    //           </div>
    //         </button>
    //         <img className="star-10" alt="Star" src="src/assets/star-10.png" />
    //         <img className="star-11" alt="Star" src="src/assets/star-10.png" />
    //         <img
    //           className="sata-gra-4"
    //           alt="Sata gra"
    //           src="src/assets/sata-gra-2.png"
    //         />
    //         <img
    //           className="sata-gra-5"
    //           alt="Sata gra"
    //           src="src/assets/sata-gra-2.png"
    //         />
    //         <img className="star-pu-4" alt="Star pu" src="src/assets/star-pu-1.png" />
    //         <img className="star-pu-5" alt="Star pu" src="src/assets/star-pu-1.png" />
    //         <div className="testimonials">
    //           <div className="overlap-7">
    //             <img
    //               className="purple-lens-flare-6"
    //               alt="Purple lens flare"
    //               src="src/assets/purple-lens-flare-png-7.png"
    //             />
    //             <img
    //               className="purple-lens-flare-7"
    //               alt="Purple lens flare"
    //               src="src/assets/purple-lens-flare-png-6.png"
    //             />
    //             <p className="highlight-of-the">
    //               Highlight of the prizes or rewards for winners and
    //               <br />
    //               for participants.
    //             </p>
    //             <img className="star-12" alt="Star" src="src/assets/star-6.png" />
    //             <img className="star-13" alt="Star" src="src/assets/star-10.png" />
    //             <img className="star-14" alt="Star" src="src/assets/star-10.png" />
    //             <img
    //               className="sata-gra-6"
    //               alt="Sata gra"
    //               src="src/assets/sata-gra-2.png"
    //             />
    //             <img
    //               className="premium-photo"
    //               alt="Premium photo"
    //               src="src/assets/premium-photo-1664443577580-dd2674e9d359-1.png"
    //             />
    //             <p className="prizes-and-rewards">
    //               <span className="span">
    //                 Prizes and <br />
    //               </span>
    //               <span className="text-wrapper-7">Rewards</span>
    //             </p>
    //           </div>
    //         </div>
    //         <img className="element-5" alt="Element" src="src/assets/9486889-1.png" />
    //         <img className="star-15" alt="Star" src="src/assets/star-6.png" />
    //         <div className="text-wrapper-22">Partners and Sponsors</div>
    //         <img
    //           className="purple-lens-flare-8"
    //           alt="Purple lens flare"
    //           src="src/assets/purple-lens-flare-png-3.png"
    //         />
    //         <img
    //           className="purple-lens-flare-9"
    //           alt="Purple lens flare"
    //           src="src/assets/purple-lens-flare-png-2.png"
    //         />
    //         <div className="partner-and-sponsors">
    //           <div className="partner-and-sponsors-2">
    //             <img
    //               className="wisper-logo-white"
    //               alt="Wisper logo white"
    //               src="src/assets/wisper-logo-white.png"
    //             />
    //             <img
    //               className="liberty-company-logo"
    //               alt="Liberty company logo"
    //               src="src/assets/liberty-company-logo-white-colour.png"
    //             />
    //             <img
    //               className="liberty-company-logo-2"
    //               alt="Liberty company logo"
    //               src="src/assets/liberty-company-logo-white.png"
    //             />
    //             <img className="line-7" alt="Line" src="src/assets/line-12.svg" />
    //             <img className="line-8" alt="Line" src="src/assets/line-18.svg" />
    //             <img className="line-9" alt="Line" src="src/assets/line-19.svg" />
    //             <img className="line-10" alt="Line" src="src/assets/line-13.svg" />
    //             <img className="line-11" alt="Line" src="src/assets/line-16.svg" />
    //             <img className="line-12" alt="Line" src="src/assets/line-14.svg" />
    //             <img className="line-13" alt="Line" src="src/assets/line-17.svg" />
    //             <img
    //               className="winwise-logo-white"
    //               alt="Winwise logo white"
    //               src="src/assets/winwise-logo-white-colour-1.png"
    //             />
    //             <p className="paybox">
    //               <span className="span">Pay</span>
    //               <span className="text-wrapper-23">box</span>
    //             </p>
    //             <div className="vizual-plus">
    //               <p className="vuzual-plus">
    //                 <span className="span">Vuzual </span>
    //                 <span className="text-wrapper-24">Plus </span>
    //                 <span className="text-wrapper-25">&nbsp;</span>
    //               </p>
    //               <div className="text-wrapper-26">Design Studios</div>
    //             </div>
    //           </div>
    //         </div>
    //         <p className="getlinked-hackathon">
    //           Getlinked Hackathon 1.0 is honored to have the following major{" "}
    //           <br />
    //           companies as its partners and sponsors
    //         </p>
    //         <div className="rectangle-2" />
    //         <div className="footer-contents">
    //           <p className="div-2">
    //             <span className="span">get</span>
    //             <span className="text-wrapper-7">linked</span>
    //           </p>
    //           <div className="overlap-8">
    //             <img className="line-14" alt="Line" src="src/assets/line-20.svg" />
    //             <p className="terms-of-use-privacy">
    //               Terms of Use&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy
    //               Policy
    //             </p>
    //           </div>
    //           <p className="getlinked-tech">
    //             Getlinked Tech Hackathon is a technology innovation program{" "}
    //             <br />
    //             established by a group of organizations with the aim of
    //             showcasing <br />
    //             young and talented individuals in the field of technology
    //           </p>
    //           <div className="overlap-9">
    //             <div className="useful-links-and">
    //               <div className="text-wrapper-27">Useful Links</div>
    //               <div className="text-wrapper-28">Contact Us</div>
    //               <div className="text-wrapper-29">Overview</div>
    //               <div className="text-wrapper-30">Timeline</div>
    //               <div className="text-wrapper-31">FAQs</div>
    //               <div className="text-wrapper-32">Register</div>
    //               <div className="text-wrapper-33">Follow us</div>
    //               <img
    //                 className="social-media"
    //                 alt="Social media"
    //                 src="src/assets/social-media.png"
    //               />
    //             </div>
    //             <img className="group" alt="Group" src="src/assets/group.png" />
    //             <img
    //               className="vector-2"
    //               alt="Vector"
    //               src="src/assets/vector-1.svg"
    //             />
    //             <div className="element-alara-street-yaba">
    //               27,Alara Street
    //               <br />
    //               Yaba 100012
    //               <br />
    //               Lagos State
    //             </div>
    //             <div className="text-wrapper-34">+234 679 81819</div>
    //           </div>
    //         </div>
    //         <img
    //           className="sata-gra-7"
    //           alt="Sata gra"
    //           src="src/assets/sata-gra.png"
    //         />
    //         <img
    //           className="sata-gra-8"
    //           alt="Sata gra"
    //           src="src/assets/sata-gra.png"
    //         />
    //         <img className="star-16" alt="Star" src="src/assets/star-5.png" />
    //         <img className="star-17" alt="Star" src="src/assets/star.png" />
    //         <img className="star-18" alt="Star" src="src/assets/star.png" />
    //         <img className="star-19" alt="Star" src="src/assets/star.png" />
    //         <img className="star-20" alt="Star" src="src/assets/star.png" />
    //         <img className="star-21" alt="Star" src="src/assets/star.png" />
    //         <img
    //           className="purple-lens-flare-10"
    //           alt="Purple lens flare"
    //           src="src/assets/purple-lens-flare-png-1.png"
    //         />
    //         <p className="text-wrapper-35">
    //           All rights reserved. © getlinked Ltd.
    //         </p>
    //         <div className="rectangle-3" />
    //         <p className="at-getlinked-tech">
    //           At getlinked tech Hackathon 1.0, we value your privacy
    //           <br />
    //           and are committed to protecting your personal information.
    //           <br />
    //           This Privacy Policy outlines how we collect, use, disclose, <br />
    //           and safeguard your data when you participate in our tech <br />
    //           hackathon event. By participating in our event, you consent <br />
    //           to the practices described in this policy.
    //         </p>
    //         <p className="the-standard-license">
    //           The Standard License grants you a non-exclusive right to
    //           <br />
    //           navigate and register for our event
    //         </p>
    //         <p className="you-are-licensed-to">
    //           You are licensed to use the item available at any free source
    //           <br />
    //           sites, for your project developement
    //         </p>
    //         <div className="text-wrapper-36">Licensing Policy</div>
    //         <p className="text-wrapper-37">
    //           Here are terms of our Standard License:
    //         </p>
    //         <div className="list-terms">
    //           <img className="vector-3" alt="Vector" src="src/assets/vector-3.svg" />
    //         </div>
    //         <div className="vector-wrapper">
    //           <img className="vector-3" alt="Vector" src="src/assets/vector-3.svg" />
    //         </div>
    //         <img className="vector-4" alt="Vector" src="src/assets/vector.svg" />
    //         <img className="element-6" alt="Element" src="src/assets/08-1.png" />
    //         <div className="rewards">
    //           <div className="overlap-10">
    //             <div className="element-position">
    //               <div className="overlap-group-2">
    //                 <div className="rectangle-4" />
    //                 <img
    //                   className="silver-medal"
    //                   alt="Silver medal"
    //                   src="src/assets/silver-medal-1.png"
    //                 />
    //                 <div className="text-wrapper-38">2nd</div>
    //                 <div className="text-wrapper-39">Runner</div>
    //                 <div className="text-wrapper-40">N300,000</div>
    //               </div>
    //             </div>
    //             <div className="element-rd-position">
    //               <div className="overlap-11">
    //                 <div className="rectangle-5" />
    //                 <img
    //                   className="bronze-medal"
    //                   alt="Bronze medal"
    //                   src="src/assets/bronze-medal-1.png"
    //                 />
    //                 <div className="text-wrapper-41">3rd</div>
    //                 <div className="text-wrapper-42">Runner</div>
    //                 <div className="text-wrapper-43">N150,000</div>
    //               </div>
    //             </div>
    //             <div className="element-st-position">
    //               <div className="overlap-12">
    //                 <div className="rectangle-6" />
    //                 <img
    //                   className="gold-medal"
    //                   alt="Gold medal"
    //                   src="src/assets/gold-medal-1.png"
    //                 />
    //                 <div className="text-wrapper-44">1st</div>
    //                 <div className="text-wrapper-45">Runner</div>
    //                 <div className="text-wrapper-46">N400,000</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <p className="privacy-policy-and">
    //         <span className="span">
    //           Privacy Policy and <br />
    //         </span>
    //         <span className="text-wrapper-7">Terms</span>
    //       </p>
    //       <p className="below-are-our">
    //         Below are our privacy &amp; policy, which outline a lot of goodies.{" "}
    //         <br />
    //         it’s our aim to always take of our participant
    //       </p>
    //       <img className="star-pu-6" alt="Star pu" src="src/assets/star-pu.png" />
    //       <img className="star-22" alt="Star" src="src/assets/star-6.png" />
    //       <img className="star-23" alt="Star" src="src/assets/star-6.png" />
    //       <p className="text-wrapper-47">Last updated on September 12, 2023</p>
    //     </div>
    //     <div className="overlap-13">
    //       <div className="timeline">
    //         <div className="text-wrapper-48">Timeline</div>
    //         <img className="line-15" alt="Line" src="src/assets/line-3.svg" />
    //         <img className="line-16" alt="Line" src="src/assets/line-8.svg" />
    //         <img className="line-17" alt="Line" src="src/assets/line-8.svg" />
    //         <img className="line-18" alt="Line" src="src/assets/line-8.svg" />
    //         <img className="line-19" alt="Line" src="src/assets/line-8.svg" />
    //         <img className="line-20" alt="Line" src="src/assets/line-8.svg" />
    //         <div className="text-wrapper-49">Hackathon Announcement</div>
    //         <div className="text-wrapper-50">Teams Registration ends</div>
    //         <p className="text-wrapper-51">
    //           Getlinked Hackathon 1.0 Offically Begins
    //         </p>
    //         <div className="text-wrapper-52">Teams Registration begins</div>
    //         <p className="announcement-of-the">
    //           Announcement of the accepted teams
    //           <br />
    //           and ideas
    //         </p>
    //         <div className="text-wrapper-53">Demo Day</div>
    //         <p className="the-getlinked-tech">
    //           The getlinked tech hackathon 1.0 is formally announced
    //           <br />
    //           to the general public and teams begin to get ready to register
    //         </p>
    //         <p className="interested-teams-can">
    //           Interested teams can now show their interest in the
    //           <br />
    //           getlinked tech hackathon 1.0 2023 by proceeding to register
    //         </p>
    //         <p className="interested">
    //           Interested Participants are no longer Allowed to
    //           <br />
    //           register
    //         </p>
    //         <p className="accepted-teams-can">
    //           Accepted teams can now proceed to build their
    //           <br />
    //           ground breaking skill driven solutions
    //         </p>
    //         <p className="all-teams-whom-idea">
    //           All teams whom idea has been accepted into getlinked tech
    //           <br />
    //           hackathon 1.0 2023 are formally announced
    //         </p>
    //         <p className="teams-get-the">
    //           Teams get the opportunity to pitch their projects to judges.
    //           <br />
    //           The winner of the hackathon will also be announced on
    //           <br />
    //           this day
    //         </p>
    //         <div className="text-wrapper-54">November 18, 2023</div>
    //         <div className="text-wrapper-55">November 18, 2023</div>
    //         <div className="text-wrapper-56">November 18, 2023</div>
    //         <div className="text-wrapper-57">November 18, 2023</div>
    //         <div className="text-wrapper-58">November 18, 2023</div>
    //         <div className="text-wrapper-59">November 18, 2023</div>
    //         <div className="no">
    //           <div className="overlap-group-3">
    //             <div className="text-wrapper-60">1</div>
    //           </div>
    //         </div>
    //         <div className="no-2">
    //           <div className="overlap-group-3">
    //             <div className="text-wrapper-60">2</div>
    //           </div>
    //         </div>
    //         <div className="no-3">
    //           <div className="overlap-group-3">
    //             <div className="text-wrapper-60">3</div>
    //           </div>
    //         </div>
    //         <div className="no-4">
    //           <div className="overlap-group-3">
    //             <div className="text-wrapper-60">4</div>
    //           </div>
    //         </div>
    //         <div className="no-5">
    //           <div className="overlap-group-3">
    //             <div className="text-wrapper-61">5</div>
    //           </div>
    //         </div>
    //         <div className="no-6">
    //           <div className="overlap-group-3">
    //             <div className="text-wrapper-61">6</div>
    //           </div>
    //         </div>
    //         <img className="star-24" alt="Star" src="src/assets/star-6.png" />
    //         <img className="star-25" alt="Star" src="src/assets/star-10.png" />
    //         <img className="star-pu-7" alt="Star pu" src="src/assets/star-pu-1.png" />
    //       </div>
    //       <p className="here-is-the">
    //         Here is the breakdown of the time we anticipate <br />
    //         using for the upcoming event.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};
