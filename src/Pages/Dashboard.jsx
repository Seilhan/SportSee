import { useState, useEffect } from "react";
import { getUserInfo } from "../service/api";
import HeaderInfo from "../components/HeaderInfo";

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
      </div>
    </div>
  );
}
export default Dashboard;
