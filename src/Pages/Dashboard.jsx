import { useState, useEffect } from "react";
import { getUserInfo } from "../service/api";
import HeaderInfo from "../components/HeaderInfo";
import BarChart from "../components/BarChart";
import TinyLineChart from "../components/TinyLinechart";

function Dashboard() {
  const [userInfo, setUserInfo] = useState({
    userInfos: { firstName: "" },
  });

  useEffect(() => {
    getUserInfo(12).then((result) => {
      console.log(result.data);
      setUserInfo(result.data);
    });
  }, []);

  return (
    <div>
      <div className="dashboard-container">
        <HeaderInfo firstName={userInfo.userInfos.firstName} />
        <div className="barchart">
          <BarChart />
        </div>
        <div className="linechart">
          <TinyLineChart />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
