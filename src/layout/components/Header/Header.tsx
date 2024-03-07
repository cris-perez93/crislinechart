const NAV_ITEMS = [
    { name: 'Demos' },
    { name: 'Docs' },
    { name: 'About' },
    { name: 'Contact' }
];



const Header = () => {
    return (
        <header className="w-full flex justify-evenly items-center bg-[#f8f8f8f0] p-5 shadow-sm">
            <h1 className="font-bold tracking-widest text-[30px] uppercase">CrisPlot.</h1>
            <nav>
                <ul className="flex gap-5">
                    {NAV_ITEMS.map((item, index) => (
                        <li key={index} className=" cursor-pointer hover:underline transition-all duration-300 ease-in-out">{item.name}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
export default Header;