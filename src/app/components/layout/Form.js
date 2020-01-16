import React, { Fragment, useState } from "react";

import Accordion from "./Accordion";

const Form = () => {
  // Information to be displayed on the form
  const [formInfo, setFormInfo] = useState([
    {
      title: "Step1: Your Details",
      open: true,
      fields: [
        {
          type: "text",
          name: "First name"
        },
        {
          type: "text",
          name: "Surname"
        },
        {
          type: "email",
          name: "Email"
        }
      ]
    },
    {
      title: "Step2: More Comments",
      open: false,
      fields: [
        {
          type: "tel",
          name: "Telephone number"
        },
        {
          type: "select",
          name: "Gender",
          options: ["Male", "Female", "Other"]
        },
        {
          type: "date",
          name: "Date of birth"
        }
      ]
    },
    {
      title: "Step3: Final Comments",
      open: false,
      fields: [
        {
          type: "textarea",
          name: "Comments"
        }
      ]
    }
  ]);

  const toggleOpen = index => {
    // toggle open of the next index to true and the current one to false
    let next = (index + 1) % formInfo.length;

    // Opens one panel and closes the previous
    setFormInfo(
      [...formInfo].map((obj, i) => {
        if (i === index) {
          return {
            ...obj,
            open: false
          };
        } else if (i === next) {
          return {
            ...obj,
            open: true
          };
        } else {
          return obj;
        }
      })
    );
  };

  return (
    <Fragment>
      {/* I'm not familiar with Laravel so I haven't handled the form validation */}
      <form className="form" action="" method="post">
        {formInfo.map((obj, index) => (
          <Accordion
            position={index}
            key={index}
            title={obj.title}
            fields={obj.fields}
            open={obj.open}
            toggleOpen={toggleOpen}
          />
        ))}
      </form>
    </Fragment>
  );
};

export default Form;
