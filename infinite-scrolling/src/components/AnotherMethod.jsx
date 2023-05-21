//this method is only compatible for desktop and tablet till now it is not working for mobile, that is why I kept here as a reference so //that I can correct it later on.

//Correct code is in Home.jsx file




// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react';
// import { SkeletonE } from '../components/Skeleton';
// import { useSelector } from 'react-redux';

// export const Home = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [offset, setOffset] = useState(0);
//     const containerRef = useRef(null);
//     const isAuth = useSelector((store) => console.log(store));

//     const getData = async () => {
//         setLoading(true);
//         try {
//             const res = await axios.get(`https://randomuser.me/api/?results=20&nat=us&inc=name,picture`);
//             setData(prevData => [...prevData, ...res.data.results]);
//             setLoading(false);
//             setOffset(prevOffset => prevOffset + 20);
//         } catch (error) {
//             console.log('error:', error);
//             alert(error.message);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getData();
//     }, []);

//     useEffect(() => {
//         const container = containerRef.current;
//         const handleScroll = () => {
//             if (
//                 container.scrollTop + container.clientHeight >=
//                 container.scrollHeight
//             ) {
//                 getData();
//             }
//         };
//         container.addEventListener('scroll', handleScroll);
//         return () => {
//             container.removeEventListener('scroll', handleScroll);
//         };
//     }, [containerRef]);

//     return (
//         <div ref={containerRef} style={{ overflowY: 'auto', height: '100vh' }}>
//             {data.length > 0 &&
//                 data.map((el, index) => (
//                     <div key={index} width={{ base: "100%", md: "80%", xl: "70%", "2xl": "70%" }} style={{ display: "flex", justifyContent: "space-between", margin: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "10px", margin: "auto", alignItems: "center", width: "80%", marginBottom: "15px", backgroundColor: (index % 2 == 0) ? "white" : "#edf2f7" }}>
//                         <h1 style={{ marginLeft: "10px", padding: "10px", color: "gray" }}>
//                             {el.name.title} {el.name.first} {el.name.last}
//                         </h1>
//                         <div style={{ marginRight: "10px", padding: "10px", borderRadius: "10px" }}>
//                             <img style={{ borderRadius: "25px" }} src={el.picture.thumbnail} alt={index} />
//                         </div>

//                     </div>
//                 ))}
//             {loading && <SkeletonE />}
//         </div>
//     );
// };