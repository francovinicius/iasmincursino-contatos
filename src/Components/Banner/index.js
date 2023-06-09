import styles from './Banner.css'

export default function Banner() {
    return (
        <section>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='d-flex align-items-center justify-content-center navegacao'>
                    <a className="nav-link" href="/about">Sobre</a>
                    <a className="nav-link" href="/">Links</a>
                </div>

                <img className="img-perfil img-fluid" src="./assets/img/iasmin-cursino.svg" alt="Minha foto" />
                <h3>Iasmin Cursino</h3>
                <span className='slogan'>Nutricionista</span>


            </div>

        </section>
    )
}