const Footer = () => {
    let date = new Date().getFullYear();

    return(
        <footer className="fixed h-20 bottom-0 lg:bottom-0 bg-bkg text-content flex justify-center items-center lg:h-20 w-full">
            <p className="text-sm tracking-wide"> © {date} #VANLIFE</p> 
        </footer>
    )
}

export default Footer;