const FormInput = ({ label, name, type, placeholder }) => {
  return (
    <div className="form-control w-full max-w-xs ">
      <label className="input input-bordered flex items-center gap-2">
        {label}
        <input
          type={type}
          className="grow"
          name={name}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default FormInput;
