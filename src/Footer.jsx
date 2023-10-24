import {useNavigate } from 'react-router-dom';

function Footer(){
    const today = new Date();
    const todayYear = today.getFullYear();
    const navigate = useNavigate();

    return<>
        <footer>
            <div id="icon">
                <a onClick={()=>{navigate('/')}} style={{cursor:'pointer'}}>
                    <h3>KyrieHaveGoodDay</h3>
                </a>
                <p>Copyright &copy;<span>{todayYear}</span> KyrieHaveGoodDay</p>
            </div>
        </footer>
    </>
}

export default Footer;