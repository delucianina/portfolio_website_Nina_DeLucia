function Footer() {
    const date = new Date();

    return(
        <footer>
            <p>Copyright {date.getFullYear()}</p>
            <p>Designed and Developed by Nina DeLucia</p>
        </footer>
    )
}

export default Footer;