// import React, { useState, useEffect } from 'react';
// import styles from '../heroStyles.css'
// const Cursor = () => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const handleMouseMove = (event) => {
//             setPosition({
//                 x: event.clientX,
//                 y: event.clientY,
//             });
//         };

//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <div
//             className="custom-cursor"
//             style={{
//                 left: `${position.x}px`,
//                 top: `${position.y}px`,
//             }}
//         ></div>
//     );
// };

// export default Cursor;
