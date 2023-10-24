import { Routes, Route, NavLink, Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import GoTop from './GoTop';
import Loading from './Loading';
import { type } from 'jquery';


function Page() {
    // titleActive
    const style = ({ isActive }) => {
        return {
          color: isActive ? 'rgb(165, 65, 37)' : null,
          borderBottom: isActive ? '5px solid rgb(165, 65, 37)' : null
        }
      }
    
    return <>
        <Loading />
        <div id="introduction">
            <div id="card-left">

                <div id="introduction-img">

                </div>
                <h3>梁鎮䜢</h3><br />
                <h1>前端設計師</h1><br />

                <div id="connection">
                    <a href="https://www.facebook.com/ggawp/" target="_blank"><img
                        src="https://kyriehavegoodday.github.io/myindexImg/img/icon-fb.png" alt="fb" /></a>
                    <a href="https://github.com/KyrieHaveGoodDay/" target="_blank"><img
                        src="https://kyriehavegoodday.github.io/myindexImg/img/icon-github.png" alt="github" /></a>
                    <a href="https://line.me/ti/p/pSpjZ2EZOd" target="_blank"><img
                        src="https://kyriehavegoodday.github.io/myindexImg/img/icon-line (2).png" alt="line" /></a>
                </div>
            </div>

            <div id="card-right">
                <div id="card-img">
                    <img src="https://kyriehavegoodday.github.io/myindexImg/img/webpage-me.jpg" alt="個人照片" />
                </div>
                <div id="card-bg">安安</div>

            </div>
        </div>

        <div id="title">
            <span>
                <NavLink to="/Page/" style={style} >平面設計</NavLink>
            </span>
            <span>
                <NavLink to="/Page/web" style={style}>網頁設計</NavLink>
            </span>
            <span>
                <NavLink to="/Page/About" style={style}>關於我</NavLink>
            </span>
        </div>
        <hr />
        <Outlet />
        {/* <Routes>
            <Route path='/' element={<Portfolio/>}/>
            <Route path='/web' element={<Web/>}/>
        </Routes> */}
        <Footer />
        <GoTop />


    </>
}

export default Page;