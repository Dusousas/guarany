import Link from 'next/link';
import { products } from '../data/produtos';

export default function Products() {
    return (
        <section className='bg-Bege py-20'>
            <div className='maxW'>
                <article className='flex flex-col items-center'>
                    <h2 className='text-BegeD/10 uppercase text-center font-Catamaran font-bold text-8xl tracking-wider'>Produtos</h2>
                    <div className='flex items-center gap-4 mx-auto relative top-[-68px]'>
                        <div className='border-2 border-b-BegeD w-[50px]' />
                        <h2 className='font-CrimsonPro text-BegeD italic uppercase text-xl text-center'>Nossos produtos</h2>
                        <div className='border-2 border-b-BegeD w-[50px]' />
                    </div>
                    <h1 className='font-Catamaran text-GrayP uppercase font-semibold text-2xl text-center relative top-[-50px]'>Conheça a linha de sabores Guarany</h1>
                </article>

                <article className='mt-10 flex justify-center gap-20 flex-wrap'>
                    {products.map(product => (
                        <div key={product.id}>
                            <Link href={`/${product.slug}`}>
                                <img src={product.image} alt={product.name} />
                                <p className='text-center mt-2 uppercase'>Ver detalhes</p>
                            </Link>
                        </div>
                    ))}
                </article>
            </div>
        </section>
    );
}
