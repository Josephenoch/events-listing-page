import NextLink from "next/link"

const Nav = () => {
    return (
        <nav  className="bg-indigo-700 shadow-lg">
            <div className="container mx-auto">
                <div className="sm:flex justify-center">

                <a className="text-white text-3xl font-bold p-3 py-6"> <NextLink href="/"> Events Page</NextLink></a>

                </div>  
            </div>
        </nav>
    )
}

export default Nav