import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const mapData = [
  {
    para: "This is my First node",
    date: "06/06/2024",
  },
  {
    para: "Pick up the groceries",
    date: "06/05/2024",
  },
  {
    para: "This is for new note",
    date: "06/08/2024",
  },
  {
    para: "This is my First node",
    date: "06/06/2024",
  },
  {
    para: "Pick up the groceries",
    date: "06/05/2024",
  },
  {
    para: "This is for new note",
    date: "06/08/2024",
  },
];

const boxStyle = {
  border: "1px solid black",
  backgroundColor: "#efff12",
  padding: "2px 10px",
  width: "32%",
  borderRadius: "8px",
};

const FolderThird = () => {
  const [inputChange, setInputChange] = useState("");
  const [filteredData, setFilteredData] = useState(mapData);

  // Function to handle delete button click
  const handleDelete = (index) => {
    const newData = [...filteredData];
    newData.splice(index, 1); // Remove the item at index
    setFilteredData(newData); // Update state with new filtered data
  };

  // Filter the data based on inputChange
  const filterData = filteredData.filter((data) => {
    return data.para.toLowerCase().includes(inputChange.toLowerCase());
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          minWidth: "500px",
          maxWidth: "800px",
          border: "0.5px solid grey",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "5px" }}>Notes</h2>
        <div
          style={{ position: "relative", width: "100%", marginBottom: "20px" }}
        >
          <FaSearch
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              color: "#aaa",
            }}
          />
          <input
            type="text"
            placeholder="search..."
            value={inputChange}
            onChange={(e) => setInputChange(e.target.value)}
            style={{
              width: "100%",
              padding: "5px 5px 5px 30px", // padding to make room for the icon
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: "10px",
          }}
        >
          {filterData.map((data, index) => (
            <div key={index} style={boxStyle}>
              <p>{data.para}</p>
              <div
                style={{
                  display: "flex",
                  marginTop: "50px",
                  justifyContent: "space-between",
                }}
              >
                <p>{data.date}</p>
                <MdDelete onClick={() => handleDelete(index)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FolderThird;
