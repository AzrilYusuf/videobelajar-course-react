import ProfileMenu from "../components/organisms/profile-menu/ProfileMenu";
import UserProfileForm from "../components/organisms/user-profile-form/UserProfileForm";
import { useSearchParams } from "react-router-dom";

const UserProfilePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "profile";

  const renderContent = () => {
    switch (tab) {
      case "profile":
        return <UserProfileForm />;
      default:
        return <UserProfileForm />;
    }
  }
  
  return (
    <div className="user-profile">
      <ProfileMenu />
      {renderContent()}
    </div>
  );
};

export default UserProfilePage;
