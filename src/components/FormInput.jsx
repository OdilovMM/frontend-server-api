const FormInput = ({ label, name, type, placeholder, size }) => {
  return (
    <div className="form-control w-[350px] max-w-xs ">
      <label className="input input-bordered flex items-center justify-normal gap-2">
        {label}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`input items-end grow `}
        />
      </label>
    </div>
  );
};

export default FormInput;
