// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>D.A.T.S</h3>
                    <img src={uniswap} alt="DATS" />
                    <p>The Web3.0 Decentralized Autonomous Tender System</p>

                    <a href="https://dats-kudarukuni.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/kudarukuni/dats" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>B.E.V.R</h3>
                    <img src={compound} alt="BEVR" />
                    <p>The Web3.0 Blockchain Election Voters Roll System</p>

                    <a href="https://bevr-kudarukuni.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/kudarukuni/bevr" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>B.P.N</h3>
                    <img src={aave} alt="BPN" />
                    <p>The Web3.0 Bat-Pack Non-Fungible Token System</p>

                    <a href="https://bpn-kudarukuni.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/kudarukuni/bpn" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;