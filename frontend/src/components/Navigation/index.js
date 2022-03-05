import React, { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function navigation() {

  return (
    <ul>
      {}
    </ul>
  )
}
// show a button or link or something that onclick useEffect:
// dispatch(sessionActions.logout)