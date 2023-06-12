import React from 'react'

type Props = {
  options: React.ReactNode[]
  active: boolean
}

export const SideBarLinks = ({ active, options }: Props) => {

    console.log(active)

  return (
    <ul className="pl-6">
      {options.map((options, index) => (
        <li key={index}>{options}</li>
      ))}
    </ul>
  )
}
