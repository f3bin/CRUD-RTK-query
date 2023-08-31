
import {
     useAddUserMutation,
     useEditUserMutation,
     useGetAllUsersQuery,
     useHideUserMutation,
     userApi,
} from "../../redux/queries/userApi";
import { useDeleteUserMutation } from "../../redux/queries/userApi";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
const useHome = () => {
     const dispatch = useDispatch();
     const { data: users, isLoading, refetch, isError } = useGetAllUsersQuery({});
     const [deleteUser] = useDeleteUserMutation();
     const [addUser] = useAddUserMutation();
     const [editUser] = useEditUserMutation();
     const [hideUser] = useHideUserMutation();

     const [state, setState] = useState({
          id: uuidv4(),
          name: "",
          birthDate: "",
          status: "active"
     });
     const [isSubmit, isSetSubmit] = useState(true);

     //handling Hiding user
     const handleHideUser = (user) => {
          hideUser({ ...user, status: "non-active" }).then((res) => {
               if (res) {
                    // refetch();
                    dispatch(userApi.util.invalidateTags(['User']))
               }
          })
     };


     //handling delete onClick
     const handleDeleteUser = (id) => {
          deleteUser({ id }).then((res) => {
               if (res) {
                    refetch();
               }
          });
     };

     //handling edit onclick
     const handleEditUser = (user) => {
          isSetSubmit(false);
          setState({
               id: user.id,
               name: user.name,
               birthDate: user.birthDate,
          });
     };
     const isStateIdIncluded = users?.some((user) => user.id === state.id);


     //handling submition while creating and updating
     const handleSubmit = (e) => {
          e.preventDefault();

          //updating user details
          if (isStateIdIncluded) {
               editUser({
                    id: state.id,
                    name: state.name,
                    birthDate: state.birthDate,
                    status: "active"
               }).then((res) => {
                    if (res) {
                         refetch();
                         setState({
                              id: "",
                              name: "",
                              birthDate: "",
                              status: ""
                         });
                         isSetSubmit(true);
                    }
               });
          } else {

               //creating new user
               addUser(state).then((res) => {
                    if (res) {
                         setState({
                              id: "",
                              name: "",
                              birthDate: "",
                              status: ""
                         });
                         refetch();
                    }
               });
          }
     };

     return { isLoading, isError, isSubmit, handleDeleteUser, handleEditUser, handleHideUser, handleSubmit, state, setState, users }
}

export default useHome
