import MaterialTable from "material-table";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootReducers } from "../../../reducers";
// import * as historyAction from "../../../actions/history.action"


const ScorePage: React.FC<any> = () => {
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
      type: "string"
    },
    { title: "เกมจับคู่ตัวอักษร", field: "score", type: "numeric" as const },
    { title: "เกมจับคู่ภาพกับตัวอักษร", field: "score", type: "numeric" as const, editable: 'never' },
    { title: "วันที่", field: "updateDate", type: "numeric" as const, editable: 'never' },

  ]);

  return (
    <MaterialTable
      title="ข้อมูลคะแนน"
      columns={columns}
      data={historyReducer.result}
      // editable={{
      //   onRowDelete: (oldData: any) =>
      //     new Promise((resolve) => {
      //       handleRowDelete(oldData, resolve);
      //     }),
      // }}
    />
  );
};

export default ScorePage;
