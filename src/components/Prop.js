import React from "react";
function Prop(props) {
  console.log(props)
  return (
    <div className="contact">
        <h3>{props.contact.name}</h3>
        <h2>email:{props.contact.email}</h2>
        <p>para:{props.contact.para}</p>
        <h4>{props.contact.mobile}</h4>
    </div>
  );
}
export default Prop;
