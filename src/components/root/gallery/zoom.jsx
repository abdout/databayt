// import styles from './styles.module.scss';
// import Image from 'next/image';
// import { useScroll, useTransform, motion } from 'framer-motion';
// import { useRef } from 'react';
// import Title from "@/components/atom/title";

// const images = [
//   '/gallery/01.png', '/gallery/2.png', '/gallery/3.png',
//   '/gallery/4.png', '/gallery/5.png', 
// ];

// export default function Zoom() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end'],
//   });

//   // Create a set of scales for each image based on its index
//   const scales = images.map((_, index) => useTransform(scrollYProgress, [0, 1], [1, index + 4]));

//   return (
//     <div className='space-y-10'>
//          <Title icon="ph:camera-light" placeholder="معرض الصور"/>
//     <div ref={container} className={styles.container}>
        
        
         
//       <div className={styles.sticky}>
//         {images.map((src, index) => (
//           <motion.div key={index} style={{ scale: scales[index] }} className={styles.el}>
//             <div className={styles.imageContainer}>
//               <Image
//                 src={src}
//                 fill
//                 alt={`image ${index + 1}`}
//                 // placeholder="blur"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }
