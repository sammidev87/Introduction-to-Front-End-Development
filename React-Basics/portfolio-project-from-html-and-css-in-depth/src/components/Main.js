import wideLogoCoral from '../images/Artboard 22.png';
import wideLogoWhite from '../images/Artboard 23.png';

function Main() {
    return (
            <main>
            <section class="promotion">
                <article>
                    <h1>Hair Day</h1>
                    <p>We currently have a deal this month for 50% off all haircuts!</p>
                </article>
            </section>
            <section class="articles">
                <article>
                    <img src={wideLogoCoral} alt="Wide Hair Day Logo Coral" />
                    <h2>Color Treatment</h2>
                    <p>We offer a wide range of color treatment options. Come on down and talk to one of our trained hair stylists to get your own hair plan today!</p>
                </article>
                <article>
                    <img src={wideLogoWhite} alt="Wide Hair Day Logo White" />
                    <h2>Make Up</h2>
                    <p>Did you know? We also offer a wide assortment of make up products! Come in to paruse our wide array of options in make up today!</p>
                </article>
                <article>
                    <img src={wideLogoCoral} alt="Wide Hair Day Logo Coral" />
                    <h2>Nail Salon</h2>
                    <p>We also offer manicures and pedicures! We have several different package options to choose from. Come down and treat yourself today!</p>
                </article>
            </section>
        </main>
    );
}

export default Main;