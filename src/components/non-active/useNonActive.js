
import {
     useGetAllUsersQuery,
     useDeleteUserMutation,
} from "../../redux/queries/userApi";
const useNonActive = () => {

      const { data: users, isLoading, isError, refetch } = useGetAllUsersQuery();
     const [deleteUser] = useDeleteUserMutation();

     const handleDelete = (id) => {
          deleteUser({ id }).then((res) => {
               if (res) {
                    refetch();
               }
          });
     };
     return { handleDelete, users, isLoading, isError, }
}

export default useNonActive
