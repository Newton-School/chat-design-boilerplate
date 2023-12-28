import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";


function Dashboard() {
  const { } = useContext(AuthContext);




  return (
    <div id="dashboardPage">
      <div id="data">

        <div className="message" >
          msg
        </div>


      </div>
      <input /><button >Send</button>
      <div id="large-size-btn" >Large size</div>
      <div id="highlight-btn" >Highlight</div>
      <div id="bold-btn" >Bold</div>
    </div>
  );
}
export default Dashboard;
