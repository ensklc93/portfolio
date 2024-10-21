import portfolioIcon from "../assets/images/portfolio-icon.png"

const Navbar = () => {
    return (
        <nav className="flex fixed left-[10%] right-[10%] max-[450px]:left-[5%] max-[450px]:right-[5%] bottom-5  text-sm [box-shadow:-6px_-6px_14px_rgba(255,_255,_255,_.7),_-6px_-6px_10px_rgba(255,_255,_255,_.5),_6px_6px_8px_rgba(255,_255,_255,_.075),_6px_6px_10px_rgba(0,_0,_0,_.15)] rounded-[9px] 
        ">
            <a href="#hero"><img src={portfolioIcon} alt="" className="max-h-16 rounded-[9px]"/></a>
            <ul className="flex w-full *:h-full justify-evenly hover:*:cursor-pointer *:transition-all *:ease-linear hover:*:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] active:*:[box-shadow:inset_-2px_-2px_6px_rgba(255,_255,_255,_.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_.5),_inset_2px_2px_2px_rgba(255,_255,_255,_.075),_inset_2px_2px_4px_rgba(0,_0,_0,_.15)] *:w-full *:flex *:justify-center *:items-center *:font-black *:rounded-[9px]">
                <a href="#hero"><li className="">Home</li></a>
                <a href="#about"><li>About Me</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
    )
}

export default Navbar;

/*

.navbar {
  @apply shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]  flex items-center z-[2] mx-auto my-0 rounded-[9px] bg-[#ebeaea];
}

.navbar-li {
  @apply *:text-[#543310] *:font-normal hover:*:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] h-full [&>*]:w-full [&>*]:flex   [&>*]:items-center;
}



*/

/*
 hover:[box-shadow:-2px_-2px_6px_rgba(255,_255,_255,_.6),_-2px_-2px_4px_rgba(255,_255,_255,_.4),_2px_2px_2px_rgba(255,_255,_255,_.05),_2px_2px_4px_rgba(0,_0,_0,_.1)] bg-[#e5e5e5] active:[box-shadow:inset_-2px_-2px_6px_rgba(255,_255,_255,_.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_.5),_inset_2px_2px_2px_rgba(255,_255,_255,_.075),_inset_2px_2px_4px_rgba(0,_0,_0,_.15)]

 */