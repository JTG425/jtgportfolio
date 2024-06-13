// import '../styles/navbar.css'
// import { motion } from 'framer-motion'
// import { useState } from 'react';

// function NavBar(props) {
//   const background = "rgb(33, 39, 44)";
//   const primary = 'rgb(2, 81, 132)';
//   const buttonBorder ='rgb(54, 66, 73)'
//   const text = 'rgb(251, 251, 252)'
//   const setPage = props.setPage

//   const pages = ["Home", "About Me", "My Projects", "My Resume", "Contact Me"]

//   const shadowVariants = {
//     notHovered: {
//       background: background,
//       color: text,
//       border: `2px solid ${buttonBorder}`,
//       boxShadow: "none",
//       transition: {
//         duration: 0.2,
//         ease: "easeInOut",
//       },
//     },
//     hovered: {
//       background: background,
//       color: text,
//       border: `2px solid ${primary}`,
//       boxShadow: "0 0px 10px 1px rgba(2, 81, 132, 0.5)",
//       transition: {
//         duration: 0.2,
//         ease: "easeInOut",
//       },
//     },
//     pressed: {
//       background: background,
//       color: primary,
//       border: `2px solid ${buttonBorder}`,
//       transition: {
//         duration: 0.2,
//         ease: "easeInOut",
//       },
//     },
//   }



//   return (
//       <div className="navbar">
//           {pages.map((page, index) => (
//             <motion.button
//               key={index}
//               className="nav-link"
//               initial="notHovered"
//               whileHover="hovered"
//               whileTap="pressed"
//               variants={shadowVariants}
//               onClick={() => setPage(page)}
//             >
//               {page}
//             </motion.button>
//           ))}
//       </div>
//   );
// }

// export default NavBar;
