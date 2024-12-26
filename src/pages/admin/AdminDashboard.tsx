import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import isEqual from "lodash/isEqual";
import Logo from "../../components/molecules/logo/Logo.tsx";
import Dashboard from "./menu/Dashboard";
import ManageUsers from "./menu/ManageUsers.tsx";
import ErrorPage from "../ErrorPage";
import useWindowWidth from "../../hooks/useWindowWidth";
import { getAllUsers } from "../../services/user.service";
import { useUserStore } from "../../stores/userStore.ts";
import { useAdminStore } from "../../stores/adminStore.ts";
import { UserData } from "../../interfaces/store.interface.ts";
import "./AdminDashboard.css";

const AdminDashboard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { fullname, role } = useUserStore((state) => state);
  const { setAllAdmins, setAllUsers } = useAdminStore((state) => state);
  const windowWidth = useWindowWidth(window.innerWidth);
  const tab = searchParams.get("tab") || "dashboard";
  const navigate = useNavigate();

  const renderContent = () => {
    switch (tab) {
      case "users":
        return <ManageUsers />;
      default:
        return <Dashboard />;
    }
  };

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const usersData: { data: UserData[] } = await getAllUsers();
        const admins: UserData[] = usersData.data.filter(
          (data) => data.role === "admin"
        );
        const users: UserData[] = usersData.data.filter(
          (data) => data.role !== "admin"
        );

        // To avoid unnecessary re-renders, check if the data has changed
        if (!isEqual(useAdminStore.getState().allAdmins, admins)) {
          setAllAdmins(admins);
        }

        if (!isEqual(useAdminStore.getState().allUsers, users)) {
          setAllUsers(users);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboardData();
  }, []);

  if (role !== "admin")
    return (
      <ErrorPage
        titleMessage={"404 Not Found"}
        message={"The requested URL was not found"}
      />
    );
  if (role === "admin" && typeof windowWidth === "number" && windowWidth < 992) {
    return (
      <ErrorPage
        titleMessage={"Display issues"}
        message={
          "The admin dashboard can only be accessed using the desktop view"
        }
      />
    );
  }
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div onClick={() => navigate("/")}>
          <Logo />
        </div>
        <div onClick={() => navigate("/user?tab=profile")}>
          <i className="bi bi-person-fill-gear" />
          <p style={{ display: "inline", marginLeft: "5px", color: "white" }}>
            {fullname}
          </p>
        </div>
        <div
          onClick={() => navigate("/admin?tab=dashboard")}
          style={{ backgroundColor: tab === "dashboard" ? "gray" : undefined }}
        >
          Dashboard
        </div>
        <div
          onClick={() => navigate("/admin?tab=users")}
          style={{ backgroundColor: tab === "users" ? "gray" : undefined }}
        >
          Users
        </div>
      </div>
      <div className="main-content">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;
