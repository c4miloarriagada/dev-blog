import React from 'react'

type Props = {
  options: React.ReactNode[]
  active: boolean
}

export const SideBarLinks = ({ active, options }: Props) => {


  return (
    <ul className={`pl-6 ${active && 'hidden'}`}>
      {options.map((options, index) => (
        <li key={index}>{options}</li>
      ))}
    </ul>
  )
}
