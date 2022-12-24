// import React from "react";
// import "./TestPost.css";
// import { FaRegImage } from "react-icons/fa";
// import Post from "./TP";
// import { PostList, Users } from "../../assets/dummyData";
// import Friend from "../../pages/Posts/Friend";

// import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
// const TestPost = () => {
//   return (
//     <div className="post-container-1">
//       <LeftSidebar />
//       <div className="post-container-2">
//         <div style={{ paddingTop: "50px" }} className="share">
//           <div className="shareWrapper">
//             <div className="shareTop">
//               <div
//                 style={{
//                   backgroundColor: "purple",
//                   width: "50px",
//                   height: "50px",
//                   color: "white",
//                   borderRadius: "50%",
//                   textAlign: "center",
//                   fontSize: "30px",
//                   marginRight: "10px",
//                 }}
//               >
//                 C
//               </div>
//               <input
//                 placeholder="What's in your mind Chinmay?"
//                 className="shareInput"
//               />
//             </div>
//             <hr className="shareHr" />
//             <div className="shareBottom">
//               <div className="shareOptions">
//                 <div className="shareOption">
//                   <FaRegImage className="shareIcon" />
//                   <span className="shareOptionText">Photo or Video</span>
//                 </div>
//               </div>
//               <button className="shareButton">Share</button>
//             </div>
//           </div>
//         </div>
//         {PostList.map((p) => (
//           <Post key={p.id} post={p} />
//         ))}
//         <div className="post-right">
//           <h4 className="rightbarTitle">Recommendations</h4>
//           <ul className="rightbarFriendList">
//             {Users.map((u) => (
//               <Friend key={u.id} user={u} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestPost;
