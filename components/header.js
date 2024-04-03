import * as React from "react";

import Navbar from "./navbar";

//import Paper from '@mui/material/Paper';

function disableRightClick(event) {
  event.preventDefault();
}
export default function Header() {
  // useEffect(() => {
  //   window.addEventListener('contextmenu', disableRightClick);
  //   return () => {
  //     window.removeEventListener('contextmenu', disableRightClick);
  //   };
  // }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
}
