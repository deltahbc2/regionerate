const Menu = () => {
    return (
        <nav id="header" className="w-full z-50 glass-panel transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 bg-eco-600 rounded-xl flex items-center justify-center text-white shadow-soft">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-leaf" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="leaf" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"></path></svg></i>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-eco-900">Urbanscape</span>
                    </div>
                    
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#problem" className="text-eco-700 hover:text-eco-500 font-medium transition-colors text-sm">The Problem</a>
                        <a href="#solution" className="text-eco-700 hover:text-eco-500 font-medium transition-colors text-sm">Solution</a>
                        <a href="#how-it-works" className="text-eco-700 hover:text-eco-500 font-medium transition-colors text-sm">How it Works</a>
                        <a href="#impact" className="text-eco-700 hover:text-eco-500 font-medium transition-colors text-sm">Impact</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-eco-700 font-medium text-sm hover:text-eco-500 transition-colors">Log in</a>
                        <a href="#cta" className="bg-eco-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-eco-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Explorar plataforma
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="text-eco-900 focus:outline-none p-2">
                            <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Menu;