import React from 'react'

const FormGroup = ({
    register,
    id,
    required,
    labelValue,
    type = "text",
    errors,
    requiredMessage
}) => {

  return (
    <div className='flex items-start flex-col py-2 min-w-full'>
            <label htmlFor={id} className='text-base'>
                {labelValue}
            </label>
            <input
            className='bg-[#D8E6FE] py-1 text-lg px-4 rounded shadow hover:outline-blue-500 w-full'
             type={type} id={id} {...register(id, {required: requiredMessage})} />

             {
                errors[id] && <div className='w-full border border-rose-600 py-2 text-sm text-rose-600  px-4 rounded shadow'>
                    {errors[id].message}
               </div>
             }
    </div>
  )
}

export default FormGroup
