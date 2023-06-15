import React from 'react'

export const PagesContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="col-span-9 flex items-center justify-center">
      <div className="h-5/6 w-5/6  rounded-md">{children}</div>
    </div>
  )
}
