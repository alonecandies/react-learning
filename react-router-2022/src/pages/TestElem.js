import React from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { data } from "../data/data";

export default function TestElem() {
  const params = useParams();
//   let navigate = useNavigate();
  let testData = data.find((item) => item.id === params.id);
//   useEffect(() => {
//     if (!testData) 
//       navigate("..");    
//   },[testData,navigate]);

  return (
    <div>
      {testData?`Test ${testData.id} for ${testData.name}`:<Navigate to=".."></Navigate>}
    </div>
  );
}
