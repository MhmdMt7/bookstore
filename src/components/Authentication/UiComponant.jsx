import { ErrorMessage, Field } from 'formik';

export default function UiComponant({ name, label , placeholder }) {


  return (
    <div className="flex flex-col gap-2 font-semibold text-[16px] text-[#222222]">
      <label >{label}</label>

      <Field
       
        name={name}
        type={name}
        placeholder={placeholder}
        className="text-sm text-gray-950 w-full border-[#22222233] p-3 rounded-lg border outline-none focus:border-mainColor"
      />

      <ErrorMessage name={name} component="p" className="text-red-500 text-sm" />
    </div>
  );
}