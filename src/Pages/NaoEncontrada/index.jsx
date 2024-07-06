import styles from './NaoEncontrada.module.css';
import animalImage from './animal_com_ferramenta.jpg';

const NaoEncontrada = () => {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
            <img className={styles.imagemGatilho} src={animalImage} alt='Animal com ferramenta' />
        </section>
    );
};

export default NaoEncontrada;