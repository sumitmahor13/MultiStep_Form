import React from "react";

const Form = (props) => {

    const {submitHandler,backHandler,changeHandler, index,form,formData} = props;

  return (
    <>
      <div>
        {index > 0 && (
          <a href="/" onClick={backHandler}>
            Back
          </a>
        )}
        <form onSubmit={submitHandler} className="from">
          <label>{form[index].lable}</label>
          <input
            value={formData[form[index].id]}
            type={form[index].type}
            placeholder={form[index].placeHolder}
            id={form[index].id}
            name={form[index].name}
            onChange={changeHandler}
          />
          <button>{form[index].button}</button>
        </form>
      </div>
    </>
  );
};

export default Form;
