import React from "react";

export default function buttons({ handleDelete }) {
  return (
    <div>
      <button
        type="button"
        style={{ background: "tomato", color: "white", fontSize: "1rem" }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
