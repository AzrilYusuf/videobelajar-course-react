import ProfileMenu from "../components/organisms/profile-menu/ProfileMenu";
import UserProfileForm from "../components/organisms/user-profile-form/UserProfileForm";

const UserProfilePage: React.FC = () => {
  return (
    <div className="user-profile">
      <ProfileMenu />
      <UserProfileForm />
    </div>
  );
};

export default UserProfilePage;
