import { useEffect, useState } from "react";
import InputForm from "../../../components/molecules/input-form/InputForm";
import {
  getAllUsers,
  createUser,
  updateUser,
  getUserByFullname,
  getUser,
  deleteUser,
} from "../../../services/user.service";
import Button from "../../../components/atoms/Button";
// import { useDispatch, useSelector } from 'react-redux';
// import { removeAdmin, removeUser, setAllAdmin, setAllUsers } from '../../../redux/slices/adminSlice';
import { useAdminStore } from "../../../stores/adminStore";
import {
  Role,
  UserRegisterService,
} from "../../../interfaces/service.interface";
import { FormTypes } from "../../../interfaces/component.interface";

const ManageUsers: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOnEdit, setIsOnEdit] = useState(false);
  const { setAllAdmins, setAllUsers } = useAdminStore();
  // const admin = useSelector(state => state.admin.allAdmins);
  // const users = useSelector(state => state.admin.allUsers);
  const [usersList, setUsersList] = useState([]);

  const [values, setValues] = useState<UserRegisterService>({
    fullname: "",
    email: "",
    phone_number: "",
    password: "",
    role: "user" as Role,
  });

  useEffect(() => {
    setUsersList(admin.concat(users));
  }, [admin, users]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "username" || e.target.id === "password") {
      setValues({ ...values, [e.target.id]: e.target.value });
    } else {
      setValues({
        ...values,
        [e.target.id]: e.target.checked ? "admin" : "user",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      if (isOnEdit) {
        try {
          const responseFullname = await getUserByFullname(values.fullname);
          if (
            responseFullname.status === 200 &&
            responseFullname.data[0].id !== values.id
          ) {
            setValues({
              ...values,
              fullname: "",
            });
            throw new Error("Username is used!");
          } else {
            await updateUser(values.id, values.fullname, values.password);
          }
        } catch (error) {
          console.error(error);
          toast.error(
            error.message ? error.message : "Failed update data.",
            toastDefault
          );
        }
      } else {
        try {
          const responseUsername = await getUsername(values.username);
          if (responseUsername.status === 200) {
            setValues({
              ...values,
              username: "",
            });
            throw new Error("Username is used!");
          } else {
            await createUser(values.username, values.password, values.role);
            toast.success("User created successfully!", toastDefault);
            setValues({
              id: "",
              username: "",
              password: "",
              role: null,
            });
          }
        } catch (error) {
          console.error(error);
          toast.error(
            error.message ? error.message : "Failed to create user.",
            toastDefault
          );
        }
      }

      try {
        const usersData = await getAllUser();
        dispatch(
          setAllAdmin(usersData.data.filter((data) => data.role === "admin"))
        );
        dispatch(
          setAllUsers(usersData.data.filter((data) => data.role !== "admin"))
        );
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    } else {
      toast.info("Please Wait", toastDefault);
    }
  };

  const inputs: FormTypes[] = [
    {
      key: 1,
      htmlFor: "fullname",
      labelChildren: "Nama Lengkap",
      id: "fullname",
      inputType: "text",
      inputName: "fullname",
      isSelect: false,
      toggleHide: false,
      handleChange: handleInput,
      isRequired: true,
    },
    {
      key: 2,
      htmlFor: "email",
      labelChildren: "E-mail",
      id: "email",
      inputType: "email",
      inputName: "email",
      isSelect: false,
      toggleHide: false,
      handleChange: handleInput,
      isRequired: true,
    },
    {
      key: 3,
      htmlFor: "mobile",
      labelChildren: "Nomor HP",
      id: "phoneNumber",
      inputType: "text",
      inputName: "phone_number",
      inputMode: "numeric",
      isSelect: true,
      toggleHide: false,
      handleChange: handleInput,
      isRequired: true,
    },
    {
      key: 4,
      htmlFor: "password",
      labelChildren: "Password",
      id: "password",
      inputType: "password",
      inputName: "password",
      isSelect: false,
      toggleHide: true,
      handleChange: handleInput,
      isRequired: true,
    },
    // {
    //   id: "role",
    //   name: "make the user an admin?",
    //   inputType: "checkbox",
    //   placeholder: "Enter Password",
    //   checked: values.role === "admin" ? true : false,
    //   required: false,
    // },
  ];

  return (
    <div>
      <h2>User Management</h2>
      {isLoading && <h3>Loading...</h3>}
      <form onSubmit={handleSubmit}>
        <div className="form-box form-admin">
          {inputs.map((form) => (
            <InputForm key={form.key}
            htmlFor={form.htmlFor}
            labelChildren={form.labelChildren}
            id={form.id}
            inputType={form.inputType}
            inputName={form.inputName}
            inputMode={form.inputMode}
            isSelect={form.isSelect}
            toggleHide={form.toggleHide}
            handleChange={form.handleChange}
            isRequired={form.isRequired} />
          ))}
        </div>
        {isOnEdit ? (
          <div className="button-wrapper">
            <Button type="submit" className="form-btn">
              {isLoading ? "Loading..." : "Update User"}
            </Button>
            <Button
              type="reset"
              className="cancel-btn"
              handleClick={() => {
                setIsOnEdit(false);
                setValues({
                    fullname: "",
                    email: "",
                    phone_number: "",
                    password: "",
                  role: "user" as Role,
                });
              }}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button className="form-btn">
            {isLoading ? "Loading..." : "Create New User"}
          </Button>
        )}
      </form>
      <h3>USERS LIST</h3>
      <ul>
        <li>
          <p>ID</p>
          <p>USERNAME</p>
          <div className="button-wrapper">
            <p>ACTION</p>
          </div>
        </li>
        {!usersList.length && <center>Empty</center>}
        {usersList?.map((user) => (
          <li key={user.id}>
            <p>{user.id}</p>
            <p style={{ color: user.role === "admin" && "yellow" }}>
              {user.username}
            </p>
            {user.role === "admin" && (
              <p style={{ marginLeft: "10px" }}>(Administrator)</p>
            )}
            <div className="button-wrapper">
              <Button
                className="edit-btn"
                handleClick={() => {
                  setIsOnEdit(true);
                  window.scrollTo({
                    top: 0,
                    behavior: "instant",
                  });
                  const fetchUserData = async () => {
                    setIsLoading(true);
                    try {
                      const response = await getUser(user.id);
                      setValues({
                        id: response.data.id,
                        username: response.data.username,
                        password: response.data.password,
                        role: response.data.role,
                      });
                    } catch (error) {
                      console.error(error);
                      toast.error(
                        error.message ? error.message : "Failed fetch data",
                        toastDefault
                      );
                    }
                    setIsLoading(false);
                  };
                  fetchUserData();
                }}
              >
                Edit
              </Button>
              <Button
                className="delete-btn"
                handleClick={() => {
                //   toast(
                //     <ConfirmToast
                //       questionText={
                //         isLoading
                //           ? "Loading..."
                //           : `Are you sure you want to delete ${user.username}?`
                //       }
                //       handleConfirm={async () => {
                //         setIsLoading(true);
                //         try {
                //           const response = await deleteUser(user.id);
                //           console.log(response);
                //           user.role !== "admin"
                //             ? dispatch(removeUser(user.id))
                //             : dispatch(removeAdmin(user.id));
                //           toast.dismiss();
                //           toast.info(
                //             `Delete user with username : ${user.username}`,
                //             toastDefault
                //           );
                //         } catch (error) {
                //           console.error(error);
                //           toast.error(
                //             error.message
                //               ? error.message
                //               : "Failed to delete user.",
                //             toastDefault
                //           );
                //         }
                //         setIsLoading(false);
                //       }}
                //     />,
                //     toastCustom
                //   );
                }}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
