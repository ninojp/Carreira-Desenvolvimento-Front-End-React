const TAGS = {
    body: 'p',
    h1: 'h1',
    h2: 'h2'
}
const VARIANT_CLASS = {
    body: 'm-0 text-neutral-text text-base leading-[120%]',
    h1: 'm-0 text-neutral-text text-[31px] leading-[120%]',
    h2: 'm-0 text-neutral-text text-2xl leading-[120%]',
}
export default function Typography({ children, variant }) {
    const ComponentTag = TAGS[variant] || TAGS.body;
    const variantClass = VARIANT_CLASS[variant] || VARIANT_CLASS.body;
    return (
        <ComponentTag className={variantClass}>
            {children}
        </ComponentTag>
    );
};
