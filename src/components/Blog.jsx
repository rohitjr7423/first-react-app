import React, { useState, useEffect } from "react";

const employeesArr = [
  { id: 1, name: "Rohit", department: "IT", salary: 25000 },
  { id: 2, name: "Amit", department: "Dev", salary: 45000 },
  { id: 3, name: "Neha", department: "Design", salary: 38000 },
  { id: 4, name: "Priya", department: "HR", salary: 40000 },
  { id: 5, name: "Karan", department: "Testing", salary: 42000 },
  { id: 6, name: "Sneha", department: "IT", salary: 30000 },
  { id: 7, name: "Vikas", department: "Manager", salary: 60000 },
  { id: 8, name: "Rahul", department: "Dev", salary: 50000 },
  { id: 9, name: "Pooja", department: "Content", salary: 28000 },
  { id: 10, name: "Arjun", department: "Finance", salary: 55000 },
  { id: 11, name: "Nikita", department: "Design", salary: 37000 },
  { id: 12, name: "Ravi", department: "Testing", salary: 41000 },
  { id: 13, name: "Ankit", department: "IT", salary: 32000 },
  { id: 14, name: "Kavita", department: "HR", salary: 39000 },
  { id: 15, name: "Manoj", department: "Support", salary: 27000 },
  { id: 16, name: "Deepak", department: "Dev", salary: 48000 },
  { id: 17, name: "Sonal", department: "Design", salary: 36000 },
  { id: 18, name: "Aakash", department: "IT", salary: 34000 },
  { id: 19, name: "Meena", department: "Finance", salary: 52000 },
  { id: 20, name: "Harsh", department: "Manager", salary: 65000 },
];

function Blog() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = employeesArr.reduce((acc, emp) => {
      return acc + emp.salary;
    }, 0);

    setTotal(sum);
  }, []);
  useEffect(()=>{
      document.title = "My App"
    },[])

  return <h2>Total Salary: ₹{total}</h2>;
}

export default Blog;