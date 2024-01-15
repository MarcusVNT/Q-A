import React from "react";

const Radio = ({ pergunta, options, id, onChange, value, active }) => {
  if (active === false) return null;

  const idTitulo = id.replace("p", "");
  return (
    <div>
      <h3>Pergunta {idTitulo}</h3>
      <fieldset
        style={{
          padding: "2rem",
          marginBottom: "1rem",
          border: "2px solid #eee",
        }}
      >
        <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
        {options.map((option) => (
          <label
            key={option}
            style={{
              marginBottom: "1rem",
              fontFamily: "monospace",
            }}
          >
            <input
              type="radio"
              id={id}
              value={option}
              onChange={onChange}
              checked={value === option}
            />
            {option}
          </label>
        ))}
      </fieldset>
    </div>
  );
};

export default Radio;
