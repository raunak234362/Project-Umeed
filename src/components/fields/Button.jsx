/* eslint-disable react/prop-types */

const Button = ({children, type='button',className="",...props}) => {
    return (
    <button
    type={type}
    className={`${className} md:px-5 px-3 md:py-1 py-1 text-white md:text-lg text-sm rounded-lg bg-blue-500 hover:bg-blue-600`}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button