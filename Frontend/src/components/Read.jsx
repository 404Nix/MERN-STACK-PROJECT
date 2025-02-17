import React, { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
        console.log(error)
      } else {
        setData(result);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong!");
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    })

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setError("User Deleted Successfully!");

      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }

  }

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    <div className="text-white">
      <div className="text-center mt-2">
        <h1 className="text-2xl font-semibold mb-10">All Users</h1>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {data.map((elem) => (
          <div
            key={elem._id}
            className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-60 flex flex-col items-center gap-1"
          >
            <h2 className="text-xl font-semibold">{elem.name}</h2>
            <p className="text-gray-400">{elem.email}</p>
            <p className="text-gray-400">Age: {elem.age}</p>
            <div className="flex gap-3 mt-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-900 text-white px-4 py-2 rounded-lg transition"
                onClick={() => {
                  handleDelete(elem._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
