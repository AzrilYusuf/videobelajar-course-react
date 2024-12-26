import { useEffect, useState } from "react";
import InputForm from "../../../components/molecules/input-form/InputForm";
import Button from "../../../components/atoms/Button";
import ConfirmToast from "../../../components/molecules/confirm-toast/ConfirmToast";
import { toast, ToastPosition } from "react-toastify";
import {
  getCustomToastConfig,
  getDefaultToastConfig,
} from "../../../utils/toastStyleConfig.ts";
import {
  getAllUsers,
  createUser,
  updateUser,
  getUserByFullname,
  getUser,
  getUserByEmail,
  deleteUser,
} from "../../../services/user.service";
import { useAdminStore } from "../../../stores/adminStore";
import {
  Role,
  UserRegisterService,
} from "../../../interfaces/service.interface";
import { FormTypes } from "../../../interfaces/component.interface";
import { UserData } from "../../../interfaces/store.interface";
import { AxiosError } from "axios";

const ManageUsers: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOnEdit, setIsOnEdit] = useState(false);
  const {
    allAdmins,
    allUsers,
    setAllAdmins,
    setAllUsers,
    removeAdmin,
    removeUser,
  } = useAdminStore();
  const [usersList, setUsersList] = useState<UserData[]>([]);
  const [values, setValues] = useState<UserRegisterService>({
    id: 0,
    fullname: "",
    email: "",
    phone_number: "",
    password: "",
    role: "user" as Role,
  });
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const toastDefault = getDefaultToastConfig();
  const toastCustom = getCustomToastConfig({
    position: "top-center" as ToastPosition,
    autoClose: 5000,
    closeOnClick: false,
  });

  useEffect(() => {
    setUsersList(allAdmins.concat(allUsers));

    if (message || error) {
      const timeout = setTimeout(() => {
        setMessage("");
        setError("");
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [allAdmins, allUsers, message, error]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name !== "role") {
      setValues({ ...values, [e.target.name]: e.target.value });
      console.log(values);
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.checked
          ? ("admin" as Role)
          : ("user" as Role),
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //* Update user
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
            setError("Fullname or Email is used!");
            throw new Error("Fullname or Email is used!");
          } else {
            await updateUser(responseFullname.data[0].id, values);
            setMessage("User is successfully updated!");
          }
        } catch (error) {
          if (error instanceof AxiosError) {
            // Log the error message
            console.error(
              error.response?.data?.message || "Failed to update user!"
            );
            setError(error.response?.data?.message || "Failed to update user!");
          } else {
            console.error("An unexpected error occurred: ", error);
          }
        }
      } else {
        //* Create user
        try {
          const responseFullname = await getUserByFullname(values.fullname);
          const responseEmail = await getUserByEmail(values.email);
          if (responseFullname.status === 200 || responseEmail.status === 200) {
            setValues({
              ...values,
              fullname: "",
              email: "",
            });
            setError(
              "Fullname or Email have already been registered. Please use another one."
            );
            throw new Error("Fullname or Email have already been registered.");
          } else {
            await createUser(values);
            setMessage("User is successfully created!");
            setValues({
              fullname: "",
              email: "",
              phone_number: "",
              password: "",
              role: "user" as Role,
            });
          }
        } catch (error) {
          if (error instanceof AxiosError) {
            // Log the error message
            console.error(
              error.response?.data?.message || "Failed to create user!"
            );
            setError(error.response?.data?.message || "Failed to create user!");
          } else {
            // Log the error if it wasn't an AxiosError
            console.error("An unexpected error occurred: ", error);
          }
        }
      }

      try {
        const usersData: { data: UserData[] } = await getAllUsers();
        const admins: UserData[] = usersData.data.filter(
          (data) => data.role === "admin"
        );
        const users: UserData[] = usersData.data.filter(
          (data) => data.role !== "admin"
        );
        setAllAdmins(admins);
        setAllUsers(users);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.error(error.message || "Failed to fetch data!");
          setError(error.message || "Failed to fetch data!");
        } else {
          console.error("An unexpected error occurred: ", error);
        }
      }
      setIsLoading(false);
    } else {
      setMessage("Please Wait...");
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
      value: values.fullname,
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
      value: values.email,
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
      value: values.phone_number,
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
      value: values.password,
    },
    {
      key: 5,
      htmlFor: "role",
      labelChildren: "Role",
      id: "role",
      inputType: "checkbox",
      inputName: "role",
      isSelect: false,
      toggleHide: false,
      handleChange: handleInput,
      checked: values.role === "admin" ? true : false,
      isRequired: false,
      value: values.role,
    },
  ];

  return (
    <div>
      <h2>User Management</h2>
      {isLoading && <h3>Loading...</h3>}
      <form onSubmit={handleSubmit}>
        <div className="form-box form-admin">
          {inputs.map((form) => (
            <InputForm
              key={form.key}
              htmlFor={form.htmlFor}
              labelChildren={form.labelChildren}
              id={form.id}
              inputType={form.inputType}
              inputName={form.inputName}
              inputMode={form.inputMode}
              isSelect={form.isSelect}
              toggleHide={form.toggleHide}
              value={form.value}
              handleChange={form.handleChange}
              checked={form.checked}
              isRequired={form.isRequired}
            />
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
        {message && (
          <p
            style={{
              color: "green",
              right: "20%",
              bottom: "54.5%",
              display: "block",
              transition: "1s ease display",
            }}
          >
            {message}
          </p>
        )}
        {error && (
          <p
            style={{
              color: "red",
              right: "20%",
              bottom: "54.5%",
            }}
          >
            {error}
          </p>
        )}
      </form>
      <h3>USERS LIST</h3>
      <ul>
        <li className="table-header">
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
            <p style={{ color: user.role === "admin" ? "hsl(126, 54%, 48%)" : "black" }}>
              {user.fullname}
            </p>
            {user.role === "admin" && (
              <p style={{ marginLeft: "10px", color: "red" }}>
                (Administrator)
              </p>
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
                      if (user.id) {
                        const response = await getUser(user.id);
                        setValues({
                          id: response.data.id,
                          fullname: response.data.fullname,
                          email: response.data.email,
                          phone_number: response.data.phone_number,
                          password: response.data.password,
                          role: response.data.role,
                        });
                      } else {
                        throw new Error("User ID is not found!");
                      }
                    } catch (error) {
                      if (error instanceof AxiosError) {
                        console.error(
                          error.response?.data?.message ||
                            "Failed to fetch user data!"
                        );
                        setError(
                          error.response?.data?.message ||
                            "Failed to fetch user data!"
                        );
                      } else {
                        console.error("An unexpected error occurred: ", error);
                      }
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
                  toast(
                    <ConfirmToast
                    questionText={
                      isLoading
                      ? "Loading..."
                      : `Are you sure you want to delete ${user.fullname}?`
                    }
                    handleConfirm={async () => {
                        console.log("User selected");
                        setIsLoading(true);
                        try {
                          if (!user.id) {
                            throw new Error("User ID is not found!");
                          }
                          const response = await deleteUser(user.id);
                          console.log(response);
                          if (user.role === "admin") {
                            removeAdmin(user.id);
                          } else {
                            removeUser(user.id);
                          }
                          toast.dismiss();
                          toast.info(
                            `Delete user with username : ${user.fullname}`,
                            toastDefault
                          );
                        } catch (error) {
                          console.error(error);
                          if (error instanceof AxiosError) {
                            toast.error(
                              error.message
                                ? error.message
                                : "Failed to delete user.",
                              toastDefault
                            );
                          } else {
                            toast.error(
                              "An unexpected error occurred!",
                              toastDefault
                            );
                          }
                        }
                        setIsLoading(false);
                      }}
                    />,
                    toastCustom,
                  );
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
