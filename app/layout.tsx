import './globals.css'

export const metadata = {
  title: 'TKT20019',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='h-screen'>
        <main className='flex flex-col h-full w-11/12 m-auto flex-row items-center justify-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
