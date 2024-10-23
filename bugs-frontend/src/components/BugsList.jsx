import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnresolvedBugs, loadBugs } from "../store/bugs";

// In function components we use hooks - only available in function components
const BugsList = () => {
  // Hook from react-redux
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  // Hook - call function everytime after rendering components
  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>{bug.description}</li>
      ))}
    </ul>
  );
};

export default BugsList;
