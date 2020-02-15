import React from 'react'

function FormItem({ label, children }) {
  return (
    <div>
      {label && <label>{label}</label>}
      {children}
    </div>
  )
}

export default FormItem
