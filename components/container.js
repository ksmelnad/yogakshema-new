import React from "react";

// export default function Container(props) {
//   return (
//     <div
//       className={`container p-8 mx-auto xl:px-0 ${
//         props.className ? props.className : ""
//       }`}
//     >
//       {props.children}
//     </div>
//   );
// }

export default function Container({ children }) {
  return <div className="container mx-auto px-5">{children}</div>;
}
