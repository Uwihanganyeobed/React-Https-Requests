import React from 'react'
import GetData from './Components/GET-Requests/GetData'
import GetPosts from './Components/GET-Requests/GetPosts'
import PostData from './Components/POST-Requests/PostData'
import DEVGET from './Components/DEV-REQUESTS/DEVGET'
import DEVPOST from './Components/DEV-REQUESTS/DEVPOST'
import DEVPUT from './Components/DEV-REQUESTS/DEVPUT'
import DEVDELETE from './Components/DEV-REQUESTS/DEVDELETE'

const App = () => {
  return (
    <div>
      {/* <GetData/> */}
      {/* <GetPosts/> */}
      {/* <PostData/> */}
      {/* <DEVGET/> */}
      {/* <DEVPOST/> */}
      {/* <DEVPUT/> */}
      <marquee direction="right"><h2><u> Posted and Designed by UWIHANGANYE Obed.</u></h2></marquee>
      <DEVDELETE/>
    </div>
  )
}

export default App