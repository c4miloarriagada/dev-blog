

export const Container = ({ children } : { children: React.ReactNode }) => {
  return (
    <main className="container-lg grid grid-cols-12 w-full border-solid border-black min-h-screen">
        { children }
    </main>
  )
}
