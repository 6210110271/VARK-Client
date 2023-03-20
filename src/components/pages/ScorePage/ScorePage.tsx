import MaterialTable from "material-table";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "../../../reducers";
import * as scoreAction from "../../../actions/score.action"


const ScorePage: React.FC<any> = () => {
  const dispatch = useDispatch<any>();
  const scoreReducer = useSelector((state: RootReducers) => state.scoreReducer);


  React.useEffect(() => {
    dispatch(scoreAction.loadScore());

  }, []);

  const [columns, setColumns] = useState<any>([
    { title: "ลำดับที่", field: "userId", type: "numeric", editable: 'never' },
    {
      title: "ชื่อ - นามสกุล",
      field: "fullName",
      type: "string"
    },
    { title: "เกมจับคู่ตัวอักษร", field: "score", type: "numeric" as const },

  ]);

  return (
    <MaterialTable
      title="ข้อมูลคะแนน"
      columns={columns}
      data={scoreReducer.result}
    />
  );
};

export default ScorePage;
