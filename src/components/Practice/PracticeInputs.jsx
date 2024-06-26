import React from 'react'


const Input = React.forwardRef(function Input({label, ...props}, ref) {
    
  return (
    <p className="control">
      <label {...props}>{label}</label>
      <input ref={ref} {...props}/>
    </p>
  );
})

export default Input;
