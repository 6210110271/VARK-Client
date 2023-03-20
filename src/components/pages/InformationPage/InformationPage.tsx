import React from 'react'
import ProfileHelper from '../../layouts/Profile/ProfileHelper'
import * as scoreAction from "../../../actions/score.action"
import { useDispatch, useSelector } from 'react-redux';
import { RootReducers } from '../../../reducers';

export default function InformationPage() {

  const dispatch = useDispatch<any>();
  const scoreReducer = useSelector((state: RootReducers) => state.scoreReducer);

  React.useEffect(() => {
    dispatch(scoreAction.loadCount());

  }, []);

  let dob = localStorage.getItem("dob");
  let username = localStorage.getItem("username");

  return (
    <div>
      {dob && username ? <>
        <ProfileHelper dateOfBirth={dob} name={username} score3={scoreReducer.result} ></ProfileHelper>
      </> :
        <>
          <ProfileHelper dateOfBirth={"ไม่มีข้อมูล"} name={"admin"} score3={scoreReducer.result} ></ProfileHelper>

        </>}
    </div>
  )
}
