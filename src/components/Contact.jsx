import React, { useState } from "react";

const users = [
  { id: 1, name: "Rohit", age: 22, city: "Shimla", profession: "Student" },
  { id: 2, name: "Amit", age: 25, city: "Delhi", profession: "Developer" },
  { id: 3, name: "Neha", age: 21, city: "Chandigarh", profession: "Designer" },
  { id: 4, name: "Priya", age: 24, city: "Mumbai", profession: "HR" },
  { id: 5, name: "Karan", age: 27, city: "Pune", profession: "Tester" },
  { id: 6, name: "Sneha", age: 23, city: "Jaipur", profession: "Student" },
  { id: 7, name: "Vikas", age: 29, city: "Bangalore", profession: "Manager" },
  { id: 8, name: "Ram", age: 26, city: "Indore", profession: "Analyst" },
  { id: 9, name: "Rahul", age: 28, city: "Noida", profession: "Engineer" },
  { id: 10, name: "Pooja", age: 22, city: "Kolkata", profession: "Content Writer" },
];

function Contact() {
  const [fill, setFill] = useState({});
  const [result, setResult] = useState(users);
  const handelvalue = (e) => {
    setFill({
      ...fill,
      [e.target.name]: e.target.value,
    });
  };

  const submitvalue = (e) => {
    e.preventDefault(); 

    const age = Number(fill.age); 

    const filteredData = users.filter((user) => user.age >= age);
    setResult(filteredData);
  };
console.log(result);

  return (
    <>
      <form onSubmit={submitvalue}>
        <input
          type="number"
          name="age"
          placeholder="Enter minimum age"
          onChange={handelvalue}
        />
        <button type="submit">Search</button>
      </form>

      {result.map((v) => (
        <div className="card" key={v.id}>
          <div className="container">
            <h4><b>{v.name}</b></h4>
            <p>{v.profession}</p>
            <p>Age: {v.age}</p>
            <p>ID: {v.id}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Contact;