import styles from './Typography.module.css';

const TAGS = {
    h1: 'h1',
    h2: 'h2',
    p: 'p'
} as const;
interface TypographyProps {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'p';
}
export default function Typography({ children, variant = 'p' }: TypographyProps) {
    const Component = TAGS[variant] || 'p';
    //para pegar o estilo baseado na variante que recebemos
    const variantClass = styles[variant] || styles.p;
    //como styles é um objeto, podemos acessar a propriedade dele usando colchetes
    return (
        <Component className={variantClass}>
            {children}
        </Component>
    );
};
