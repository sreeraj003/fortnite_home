import './home.css'

function Home() {
    return (
        <>
            <div className='home container'>
                <div className="row whole ">
                    <div className="col-12">
                        <h4>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h4>
                    </div>
                    <div className="col-12 fortnite mt-3 ">
                        <img className='fortnite' src='../../public/fortnite-pictures-b5kfcchwazwiz3cs.jpg' alt="" />
                    </div>
                    <div className="col-12 mt-5">
                        <p>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that is right for you and your friends. Find it all in Fortnite ... Drop In.</p>
                    </div>
                    <div className="col-12">
                        <div className="btn bg-white text-dark">
                            Visit Website
                        </div>
                    </div>
                    <div className=" row multi">
                        <div className='card col-sm-4 p-0 m-0 bg-black'>
                            <img className='cardImg p-2' src="../../public/download.jpeg" alt="" />
                            <p className='limited-text'>Explore large, destructible environments where no two games are ever the same.</p>
                        </div>
                        <div className='card col-sm-4 p-0 m-0 bg-black'>
                            <img className='p-2 cardImg' src="../../public/images.jpeg" alt="" />
                            <p className='limited-text'>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
                        </div>
                        <div className='card col-sm-4 p-0 m-0 bg-black'>
                            <img className=' p-2 cardImg' src="../../public/images (1).jpeg" alt="" />
                            <p className='limited-text'>Discover even more ways to play across thousands of creator-made game genres</p>
                        </div>
                    </div>
                    <div className="col-12 contribution">
                        <h3>Our Contribution</h3>
                        <p>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <h2>5M</h2>
                            <p>Daily User
                                Engagements
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>$500K</h2>
                            <p>Revenue Surge for an
                                Platform
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>10X</h2>
                            <p>ROAS on all our
                                marketing campaigns
                            </p>
                        </div>
                    </div>
                    <div className="col-12 deeper ">
                        <h4>Interested in delving deeper into the project?</h4>
                        <p>If you had like to explore further details about our initiatives or any of our affiliated brands, do not hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>
                        <div>
                            <button className="btn ringBtn bg-black">Ring us on skype</button>
                            <button className="btn contactBtn bg-white">Contact Us</button>
                        </div>
                    </div>
                    <div className="footer">
                        <p>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home