import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const navOutside = useRef();
    const overlayRef = useRef();
    const [isClick, setIsClick] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // handle toggle icon navbar untuk mengeluarkan menu navbar saat posisi mobile dari kiri 
    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    // handle nav nemu scroll ke section contact
    const scrollToContact = () => {
        const contactLink = document.getElementById("contactArea");
        if (contactLink) {
            contactLink.scrollIntoView({ behavior: "smooth" });
        }
        setIsClick(false);
    };

    // effect untuk handle click diluar navbar untuk menutup dropdown menu about us
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                (navOutside.current && !navOutside.current.contains(event.target)) &&
                (overlayRef.current && overlayRef.current.contains(event.target))
            ) {
                setIsClick(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <nav
                ref={navOutside}
                className="fixed inset-x-0 top-0 z-50 py-4 transition-all duration-500 bg-white border-b border-gray-200 md:py-6"
            >
                <div className="container">
                    {/* Desktop menu */}
                    <div className="flex items-center justify-between w-full h-full">
                        <NavLink to="/">
                            <a className="font-extrabold xx:text-base xz:text-xl sm:text-2xl text-primary">MuzirO</a>
                        </NavLink>
                        <div className="items-center hidden md:flex">
                            <ul className="items-center hidden gap-10 md:flex">
                                <NavLink to="/" className={({ isActive, isPending }) =>
                                    isPending
                                    ? "text-tertiary !cursor-progress navRoute-styles"
                                    : isActive
                                    ? "text-primary font-semibold navRoute-styles"
                                    : "text-black navRoute-styles"
                                }>
                                    Home
                                </NavLink>
                                <NavLink to="/experience" className={({ isActive, isPending }) =>
                                    isPending
                                    ? "text-tertiary !cursor-progress navRoute-styles"
                                    : isActive
                                    ? "text-primary font-semibold navRoute-styles"
                                    : "text-black navRoute-styles"
                                }>
                                    Experience
                                </NavLink>
                                <NavLink to="/project" className={({ isActive, isPending }) =>
                                    isPending
                                    ? "text-tertiary !cursor-progress navRoute-styles"
                                    : isActive
                                    ? "text-primary font-semibold navRoute-styles"
                                    : "text-black navRoute-styles"
                                }>
                                    Project
                                </NavLink>
                                <button
                                    id="buttonCV"
                                    className="px-5 py-3 bg-white rounded-md cursor-pointer navRoute-button"
                                    onClick={scrollToContact}
                                >
                                    <a className="navRoute-button">Donwload CV</a>
                                </button>
                            </ul>
                        </div>
                        {/* Icon Hamburger */}
                        <IconContext.Provider value={{ color: "#000957", className: "navbar-Hamburger" }}>
                            <div
                                onClick={toggleNavbar}
                                className="cursor-pointer md:hidden"
                            >
                                <RxHamburgerMenu />
                            </div>
                        </IconContext.Provider>
                    </div>
                    {/* Mobile menu */}
                    <div
                        className={
                            isClick
                            ? "fixed xz:w-[50%] sm:w-[40%] xx:w-[47%] md:hidden h-screen flex flex-col flex-start right-0 top-0 p-5 sm:p-8 sm:!pt-7 ease-in duration-400 transition-all bg-white"
                            : "fixed right-[-100%] top-0 p-10 ease-out duration-700 transition-all"
                        }
                    >
                        {/* Icon Close */}
                        <IconContext.Provider value={{ color: "#000957", className: "navbar-Hamburger" }}>
                            <div className="flex items-center justify-end w-full cursor-pointer">
                                <div onClick={toggleNavbar}>
                                    <IoClose />
                                </div>
                            </div>
                        </IconContext.Provider>
                        <div className="w-full h-full pt-2">
                            <ul className="flex flex-col items-end gap-4 pt-5">
                                <NavLink to="/" className={({ isActive, isPending }) =>
                                    isPending
                                    ? "text-tertiary !cursor-progress navRoute-styles"
                                    : isActive
                                    ? "text-primary font-semibold navRoute-styles"
                                    : "text-black navRoute-styles"
                                }>
                                    Home
                                </NavLink>
                                <NavLink to="/experience" className={({ isActive, isPending }) =>
                                    isPending
                                    ? "text-tertiary !cursor-progress navRoute-styles"
                                    : isActive
                                    ? "text-primary font-semibold navRoute-styles"
                                    : "text-black navRoute-styles"
                                }>
                                    Experience
                                </NavLink>
                                <NavLink to="/project" className={({ isActive, isPending }) =>
                                    isPending
                                    ? "text-tertiary !cursor-progress navRoute-styles"
                                    : isActive
                                    ? "text-primary font-semibold navRoute-styles"
                                    : "text-black navRoute-styles"
                                }>
                                    Project
                                </NavLink>
                                <button
                                    id="buttonCV"
                                    className="w-full bg-white border-2 rounded-md cursor-pointer xx:py-2 sm:py-3 navRoute-button"
                                    onClick={scrollToContact}
                                >
                                    <a className="navRoute-button">Donwload CV</a>
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {isClick && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 z-40 transition-opacity bg-black bg-opacity-10"
                />
            )}
        </>
    );
};

export default Navbar;