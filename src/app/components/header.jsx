import { links } from "../Links/links"

const Header = () => {

    return (
        <>
            <div>
                <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                    <div className=".container px-4 mx-auto relative text-sm">
                        <div className="flex justify-center items-center">
                            <div className="flex items-center flex-shrink-0">
                                <img className="h-10 w-10 mr-2" src="/favicon.ico" />
                                <span className="span text-xl tracking-tight">Ukason</span>
                            </div>
                            <ul className="hidden lg:flex ml-14 space-x-12">
                                {
                                    links.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={item.href}>{item.label} </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header