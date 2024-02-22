import {useNavigate } from 'react-router-dom';

function About(){
    const navigate = useNavigate();
    return<>
        <div id="about-kyrie">
            <div id="about-left">
                <img src="https://kyriehavegoodday.github.io/myindexImg/img//about-resume.jpg" alt="me" id="about-resume"/>
                <div className="about-date">
                    <h2>About me</h2>
                    <p>一個人成就的大小，往往取決於他所遇到的困難程度。</p>
                </div>
                <div className="about-date">
                    <h2>Interested</h2>
                    <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-run.png" alt="興趣"/>
                    <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-basketball.png" alt="興趣"/>
                    <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-poke.png" alt="興趣"/>
                    <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-piano.png" alt="興趣"/>
                    <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-shop.png" alt="興趣"/>
                    <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-game.png" alt="興趣"/>
                    <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-apple.png" alt="興趣"/>
                </div>
                <div className="about-date">
                    <h2>Contact</h2>
                    <p>iPhone : 0985-734-993</p>
                </div>
            </div>
            <div id="about-right">
                <div id="about-head">
                    <h1>Kyrie</h1>
                    <h3>Web Design</h3>
                </div>

                <div id="contact-me">
                    <div className="box1">
                        <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-phone.png" alt="聯絡我"/><br/><span>0985-734-993</span>
                    </div>
                    <div className="box1">
                        <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-email.png" alt="聯絡我"/><br/><span>healthymbear@gmail.com</span>
                    </div>
                    <div className="box1">
                        <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-web.png" alt="聯絡我"/><br/><span><a onClick={()=>{navigate('/')}}>Kyrie.com</a></span>
                    </div>
                    <div className="box1">
                        <img src="https://kyriehavegoodday.github.io/myindexImg/img//icon-address.png" alt="聯絡我"/><br/><span>台北市信義區福德街</span>
                    </div>



                </div>
            
                <div id="education">
                
                    <h2 className="about-title">Experince</h2>
                    <hr className="about-hr"/>
                    <div className="about-content">
                        <h2>2023 - 2024</h2>
                        <div className="about-box">
                            <h3>奇韋資訊股份有限公司</h3>
                            <h4>前端設計師</h4>
                            <p>網站轉型，結合企業文化，製作前端視覺及相關元件</p>
                        </div>
                    </div>
                    <div className="about-content">
                        <h2>2021-2023</h2>
                        <div className="about-box">
                            <h3>PChome網路家庭</h3>
                            <h4>前端設計師</h4>
                            <p>活動頁、遊戲製作，規劃專案，排除問題</p>
                        </div>
                    </div>
                    <div className="about-content">
                        <h2>2020-2021</h2>
                        <div className="about-box">
                            <h3>台達電子-自動化儲運部</h3>
                            <h4>倉庫管理</h4>
                            <p>簽收廠商送的貨，將資料匯入至台達SPA系統、備料、其他事項處理等</p>
                        </div>
                    </div>

                    <div className="about-content">
                        <h2>2019-2020</h2>
                        <div className="about-box">
                            <h3>無極限國際有限公司</h3>
                            <h4>資訊人員</h4>
                            <p>管理公司官方網站，網站使用WordPress製作，新增需求，修改問題</p>
                        </div>
                        

                    </div>
                    <div className="about-content">
                        <h2>2018-2019</h2>
                        <div className="about-box">
                            <h3>迪智國際</h3>
                            <h4>助理工程師</h4>
                            <p>實習全端工程師，該公司是做政府部門系統管理相關業務，接觸到後端資料庫較多。</p>
                        </div>

                    </div>
                    <div className="about-content">
                        <h2>2017-2018</h2>
                        <div className="about-box">
                            <h3>江蘇金易達共應鏈管理有限公司</h3>
                            <h4>研發部助理</h4>
                            <p>處理公司網頁遇到的Bug，並與同事討論工作上遇到的問題及解決方法的可行性。</p>
                        </div>

                    </div>
                </div>

            
                <div id="experince">
                    <h2 className="about-title">Education</h2>
                    <hr className="about-hr"/>
                    <div className="about-content">
                        <h2>2016-2019</h2>
                        <div className="about-box">
                            <h3>苗栗育達科技大學</h3>
                            <h4>資訊管理系</h4>
                            <p>資管系的這四年，接觸到許多資訊領域的事物，有網頁設計、軟體設計、iPhone手機維修，讓我值得驕傲的是從大一到大四，每學期課業總平均至少80以上，但是我最後選擇了前端網頁並將列為是職業生崖的開始。
                            </p>
                        </div>

                    </div>

                    <div className="about-content">
                        <h2>2014-2016</h2>
                        <div className="about-box">
                            <h3>桃園育達高級中學</h3>
                            <h4>資料處理科</h4>
                            <p>高中的三年資處科，在資訊領域有些微的瞭解，其中也考取了許多證照，其中一個就是電腦軟體應用乙級</p>
                        </div>

                    </div>

                

                </div>


        
                <div id="skills">
                    <h2 className="about-title">Skills</h2>
                    <hr className="about-hr"/>
                    <div className="about-skill">
                        <div className="skill-box">
                            <h2>前端技能</h2>
                            <hr/>
                            <ol>
                                <li>1. SCSS : 建立及整合css資源</li>
                                <li>2. RWD : 全尺寸設計</li>
                                <li>3. jQuery : 使用提供的API做相關的操作(動畫、AJAX)</li>
                                <li>4. React : Hook / SPA / NextJS / function Component / Router / JSX / Babel</li>
                                <li>5. BootStrap : v4/v5 快速開發</li>
                                <li>6. AOS、GSAP : 第三方套件動畫應用</li>
                                <li>7. 建構工具 : NodeJS/NPM/Vite</li>
                                <li>8. JavaScript : es5 、 es6 / component / 解構 / 串接API、Promise、async 、 await / ESmodule /cookie</li>
                                <li>9. 版本控制 : git / GitHub / Sourcetree</li>
                                <li>10. 其他 : Firebase資料庫 / Gulp / 瀏覽器相容性 / MVC / SEO / AI、PS、XD、Figma</li>
                                

                            </ol>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default About;