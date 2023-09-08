
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/KetlynLaury" target="blank">
                        <img src="/images/icone-github.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ketlyn-laury/" target="blank">
                        <img src="/images/icone-linkedin.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/ketlynhx/" target="blank">
                        <img src="/images/icone-instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p>
                Desenvolvido por Ketlyn Laury.
            </p>
        </section>
    </footer>)
}

export default Rodape