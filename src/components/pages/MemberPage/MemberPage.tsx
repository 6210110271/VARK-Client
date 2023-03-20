import MaterialTable from "material-table";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootReducers } from "../../../reducers";
import * as userAction from "../../../actions/user.action"
import { User } from "../../../types/user.type";


const MemberPage: React.FC<any> = () => {
  const dispatch = useDispatch<any>();
  const userReducer = useSelector((state: RootReducers) => state.userReducer);
  const navigate = useNavigate();

  let userId = localStorage.getItem("userId")

  React.useEffect(() => {
    if (userId) {
      dispatch(userAction.loadUser());
    }
  }, []);

  const handleRowDelete = (oldData: User, resolve: any) => {
    dispatch(userAction.deleteUser(oldData.userId));
    resolve();
  };


  const [columns, setColumns] = useState<any>([
    { title: "ลำดับที่", field: "userId", type: "numeric", editable: 'never' },
    { title: "ชื่อผู้ใช้", field: "username", type: "string" as const },
    {
      title: "ชื่อ - นามสกุล",
      field: "fullname",
      type: "string" as const,
    },
    { title: "วัน/เดือน/ปีเกิด", field: "dob", type: "string" as const },
    { title: "สถานะ", field: "status", type: "string" as const },


  ]);

  return (
    <MaterialTable
      title="รายชื่อผู้ใช้"
      columns={columns}
      data={userReducer.result}
      editable={{
        onRowDelete: (oldData: User) =>
          new Promise((resolve) => {
            handleRowDelete(oldData, resolve);
          }),
      }}
    />
  );
};

export default MemberPage;
