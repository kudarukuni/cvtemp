// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Kudakwashe William Rukuni" />

            <div className='header__content'>
                <h1>Hi, I am Kudakwashe William Rukuni</h1>
                <p>Full Stack Web3 Developer</p><br/>
                <a href="https://contactkuda-kudarukuni.vercel.app" className="button" target="_blank">Get In Touch</a><br/><br/><br/>
                <a href="https://kudarukuni-kudarukuni.vercel.app" className="button" target="_blank">Desktop Site</a>
            </div>
        </section>
    );
}

export default Header;
