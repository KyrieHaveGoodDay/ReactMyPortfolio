import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import GoTop from './GoTop';
import Loading from './Loading';

function Index() {

    const navigate = useNavigate();
    


    return <>
    
        <Loading/>
    
        <nav id="card">
            <div id="content"   >
                <a onClick={() => { navigate('/Page/') }} title="作品" style={{cursor:'pointer'}}>
                    <h2>把時間花在哪裡，成就就在哪裡</h2>
                    <hr />
                    <p>我是前端網頁設計師Kyrie<br />
                        任何事情只要經過一萬個小時的淬鍊，都能到達巔峰</p>
                </a>
            </div>
        </nav >

        <section id="life">
            <div id="my-life">
                <div id="life-img"></div>
                <div className="life-content">
                    <h2>平常的我</h2>
                    <ol>
                        <li>運動:打球、跑步、球類運動</li>
                        <li>逛街:夜市(享受在人群之中的感覺)、服飾店、美食</li>
                        <li>電影:<a href="https://www.instagram.com/xian_86.1.2o.0/?hl=zh-tw"
                            target="_blank">這是我的IG裡面有不少我看過覺得不錯的電影，如果你喜歡的話可以追蹤!!</a></li>

                    </ol>
                    <p>人多的時候，我喜歡在人群之中享受著繁盛。<br />
                        人少的時候，我喜歡找一個安靜的地方思考平常不會想到的事情。<br />
                        <br />
                        關於程式<br />
                        我從高中開始就選擇資訊這條路，也有迷茫的時期，於是嘗試過許多方向後，最後決定就是前端了。<br />
                        在學習的過程中，難免會碰壁，受挫，甚至收到各種不看好的評價，懷疑自己是否適合這條路，我仍想證明給自己看，我可以的!
                    </p>
                </div>
            </div>
            <div id="my-focus">
                <div className="life-content">
                    <h2>鋼琴</h2>
                    <p>鋼琴，是我從高中時期就很喜歡的樂器，在我上大學後才開始接觸，斷斷續續的從2018年開始自學至今，約三年多了。<br />
                        起初我發現自己的專注度不夠，我透過學琴來提升自己的專注度，很剛好的把興趣跟能力做結合，在學習的過程嘗過不少苦頭，走過不少彎路，但是最後的完整彈奏會覺得前面辛苦的一切都是值得的。<br />
                        <br />
                        學習的動力，這該怎麼形容...<br />
                        如果你有一件熱愛的事情，你會朝思暮想的去思考該怎麼做，去把它做的更好。<br />
                        我學琴不是為了要展現給別人看，我只是去完成我一個小目標，並且維持，時刻提醒自己，只要有心，什麼事都可以完成的!!!
                    </p>
                </div>
                <div id="life-img"></div>

            </div>

            <div id="mix-box">

                <div className="work-about" id="img-work">
                    <a onClick={() => { navigate('/Page/web') }}><span>作品集</span> </a>
                </div>


                <div className="work-about" id="img-about">
                    <a onClick={() => { navigate('/Page/About') }}><span>關於我</span> </a>
                </div>



            </div>

        </section>

        <GoTop/>


        <Footer />
    </>
}

export default Index;