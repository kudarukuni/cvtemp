// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Kudakwashe William Rukuni" />

            <div className='header__content'>
                <h1>Hi, I'm Kudakwashe William Rukuni</h1>
                <p>Full Stack Web3 Developer</p>
                <a href="https://contactkuda-kudarukuni.vercel.app" className="button" target="_blank">Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;