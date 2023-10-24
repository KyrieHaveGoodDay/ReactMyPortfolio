function Footer(){
    const today = new Date();
    const todayYear = today.getFullYear();
    return<>
        <footer>
            <div id="icon">
                <a href="../index.html">
                    <h3>KyrieHaveGoodDay</h3>
                </a>
                <p>Copyright &copy;<span>{todayYear}</span> KyrieHaveGoodDay</p>
            </div>
        </footer>
    </>
}

export default Footer;