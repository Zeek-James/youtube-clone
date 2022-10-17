import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((c) => {
        return (
          <button
            className="category-btn"
            style={{
              backgroundColor: c.name === selectedCategory && "#fc1503",
              color: "#fff",
            }}
            key={c.name}
            onClick={() => {
              setSelectedCategory(c.name);
            }}
          >
            <span
              style={{
                color: c.name === selectedCategory ? "#fff" : "red",
                marginRight: "15px",
              }}
            >
              {c.icon}
            </span>
            <span style={{ opacity: c.name === selectedCategory ? 1 : 0.5 }}>
              {c.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
