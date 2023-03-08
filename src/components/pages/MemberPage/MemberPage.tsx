import MaterialTable from "material-table";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootReducers } from "../../../reducers";
// import * as historyAction from "../../../actions/history.action"


const MemberPage: React.FC<any> = () => {
  const dispatch = useDispatch<any>();
  const historyReducer = useSelector((state: RootReducers) => state.historyReducer);
  const navigate = useNavigate();

  let userId = localStorage.getItem("userId")

  React.useEffect(() => {
    if (userId) {
      // dispatch(historyAction.loadAccount(userId));
    }
  }, []);

  const handleRowDelete = (oldData: any, resolve: any) => {
    // dispatch(accountAction.deleteAccount(oldData.accountId));
    resolve();
  };


  const [columns, setColumns] = useState<any>([
    { title: "ลำดับที่", field: "userId", type: "numeric", editable: 'never' },
    {
      title: "ชื่อ - นามสกุล",
      field: "fullname",
      type: "string" as const,
    },
    { title: "บทเรียนพยัญชนะ", field: "score", type: "numeric" as const },
    { title: "บทเรียนอักษร 3 หมู่", field: "score", type: "numeric" as const, editable: 'never' },

    { title: "แบบทดสอบ", field: "score", type: "numeric" as const, editable: 'never' },

  ]);

  return (
    <MaterialTable
      title="รายชื่อผู้ใช้"
      columns={columns}
      data={historyReducer.result}
      editable={{
        onRowDelete: (oldData: any) =>
          new Promise((resolve) => {
            handleRowDelete(oldData, resolve);
          }),
      }}
    />
  );
};

export default MemberPage;
