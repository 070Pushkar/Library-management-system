import React from "react";

function Button({
  title,
  variant = "contained",
  color = "primary",
  type="button",
  onClick,
  fullWidth = false,
  disabled
}) {
  let className =  fullWidth ?"w-100 rounded " : "pl-2 pr-2 rounded ";
  if (variant === "contained" && !disabled ) {
    className += "bg-" + color + " text-white";
  } else if (variant === "outlined" && !disabled ) {
    className += "border-" + color + " text-" + color;
  }

  if(disabled){
    className += "disabled-btn";

  }

  return (
    <button className={className} 
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;