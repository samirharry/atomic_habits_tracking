import Link from 'next/link'

export default function NavBar() {
    return (
     <>
       <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
    
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link href='/'> Menu Principal </Link>    
            <Link href='/dashboard'> Cuadro de control </Link>    
        </div>
      </div>

    </div>
  </div>
</div>
</nav>
     </>
    )
  }
  