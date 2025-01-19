/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useId, useState } from 'react';
import { Input as InputField, Textarea } from '@material-tailwind/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Input(
  { label, type = 'text', className, variant, ...props },
  ref,
) {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full items-center">
      {type === 'textarea' ? (
        <div className="flex flex-col gap-1">
          {label && (
            <label
              htmlFor={id}
              className="text-sm font-medium text-gray-700"
            >
              {label}
            </label>
          )}
          <Textarea
            variant={variant}
            className={`px-3 py-1 w-full rounded-lg bg-white text-gray-700 focus:bg-white focus:bg-opacity-80 duration-200 ${className}`}
            ref={ref}
            {...props}
            id={id}
          />
        </div>
      ) : type === 'file' ? (
        <div className="flex flex-col gap-1">
          {label && (
            <label
              htmlFor={id}
              className="text-sm font-medium text-gray-700"
            >
              {label}
            </label>
          )}
          <div className="relative w-full">
            <label
              htmlFor={id}
              className="flex items-center justify-center px-3 py-1 w-full text-gray-900 border border-cyan-300 rounded-lg bg-white cursor-pointer hover:bg-slate-200 hover:border-slate-400 transition duration-200"
            >
              <span className="truncate">
                {props.value ? props.value.name : 'Choose a file'}
              </span>
              <input
                type="file"
                id={id}
                className="hidden"
                ref={ref}
                {...props}
              />
            </label>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          {label && (
            <label
              htmlFor={id}
              className="text-sm font-medium text-gray-700"
            >
              {label}
            </label>
          )}
          <div className="relative w-full">
            <InputField
              variant={variant}
              type={showPassword && type === 'password' ? 'text' : type}
              className={`px-3 py-1 w-full rounded-lg bg-white text-gray-900 focus:bg-white focus:bg-opacity-80 duration-200 ${className}`}
              ref={ref}
              {...props}
              id={id}
            />
            {type === 'password' && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded"
              >
                {showPassword ? (
                  <FiEye className="text-black" />
                ) : (
                  <FiEyeOff className="text-black" />
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default React.forwardRef(Input);
