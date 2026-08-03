const Header = () => {
    return (
        <>
            <header className="bg-cf-dark-red fiexed w-full">
                <div className="container mx-auto px-auto flex items-center justify-between">
                    <a href="">
                        <img src="https://codingfactory.aueb.gr/sites/all/themes/cf_theme/logo.png" alt="Cf Logo"
                             className="my-4 h-16"/>
                    </a>
                    <nav className="flex gap-4 text-white font-medium">
                        <a href="/">Home</a>
                    </nav>
                </div>
                
            </header>
        </>
    )
}
export default Header;