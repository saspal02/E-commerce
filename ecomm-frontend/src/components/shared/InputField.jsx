const InputField = ({
  label,
  id,
  type = "text",
  errors,
  register,
  message,
  className,
  min,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={id}
        className={
          className ? className : "font-semibold text-sm text-slate-800"
        }
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        min={min}
        defaultValue={value}
        placeholder={placeholder}
        {...register(id)}
        className="border border-slate-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
      />

      {errors?.[id] && (
        <p className="text-red-500 text-sm">{message || errors[id].message}</p>
      )}
    </div>
  );
};

export default InputField;
