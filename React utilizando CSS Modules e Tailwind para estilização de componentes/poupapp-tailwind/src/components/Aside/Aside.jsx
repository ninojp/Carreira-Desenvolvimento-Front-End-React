import logo from '/Logo-PoupApp.svg';

export default function Aside() {
    return (
        <aside className='bg-neutral-header max-w-[282px] min-h-screen py-20 px-10 flex flex-col gap-[56px]'>
            <img src={logo} alt="Logo do PoupApp" className="w-48 mb-4" />
            <h1 className="text-3xl leading-[120%] font-bold text-neutral-text mb-2">Bem-vindo ao PoupApp</h1>
            <p className="text-[13px] text-neutral-text text-center">Seu aplicativo de controle financeiro pessoal.</p>
        </aside>
    )
}
