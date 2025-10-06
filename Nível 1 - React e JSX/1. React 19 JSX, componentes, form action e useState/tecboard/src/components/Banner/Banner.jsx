import styles from './Banner.module.css';

export default function Banner({className}) {
    return (
        <section className={`${styles.mainSectionBanner} ${className ?? ''}`}>
            <img src='./banner.png' alt='Banner' />
        </section>
    );
};
