function Footer() {
    const date = new Date();

    return(
        <footer>
            <p>Copyright &copy {date.getFullYear()}</p>
            <p>Designed and Developed by Nina DeLucia</p>
        </footer>
    )
}

export default Footer;