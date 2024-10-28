import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";  // Firebase Firestore

const ResponsesTable = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state
  const [progress, setProgress] = useState(0);   // Percentage progress

  useEffect(() => {
    // Fetch data from Firebase and update progress
    db.collection("responses")
      .get()
      .then((querySnapshot) => {
        const totalDocs = querySnapshot.size;
        let fetchedDocs = 0;

        const data = querySnapshot.docs.map((doc) => {
          fetchedDocs += 1;
          setProgress(Math.round((fetchedDocs / totalDocs) * 100)); // Update progress
          return doc.data();
        });

        setResponses(data);
        setLoading(false); // Data fetched, stop loading
      })
      .catch((error) => {
        console.error("Error fetching responses: ", error);
        setLoading(false);
      });
  }, []);

  // Circular Progress Component
  const CircularProgress = ({ progress }) => {
    const circleStyle = {
      background: `conic-gradient(#4caf50 ${progress * 3.6}deg, #d3d3d3 0deg)`,
    };
    return (
      <div className="loading-circle">
        <div className="circle" style={circleStyle}>
          <div className="progress-text">{progress}%</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>Submitted Responses</h2>
      {loading ? (
        // Show loading circle while data is fetching
        <CircularProgress progress={progress} />
      ) : responses.length === 0 ? (
        <p>No responses yet.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th> table headin 1</th>
              <th> table headin 2</th>
              <th> table headin 3</th>
              <th> table headin 4</th>
              <th> table headin 4</th>
              <th> table headin 5</th>
              <th> table headin 6</th>
              <th> table headin 7</th>
             
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {responses.map((response, index) => (
              <tr key={index}>
                <td>{response[0]}</td>
                <td>{response[1]}</td>
                <td>{response[2]}</td>
                <td>{response[3]}</td>
                <td>{response[4]}</td>
                <td>{response[5]}</td>
                <td>{response[7]}</td>
                <td>{response[8]}</td>
                <td>{response[9]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResponsesTable;
