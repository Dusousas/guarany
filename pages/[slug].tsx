import { products } from '../data/produtos';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';

interface Product {
  name: string;
  slug: string;
  image: string;
  description: string;
}

interface Props {
  product: Product;
}

interface Params {
  [key: string]: string;
  slug: string;
}

export default function ProductPage({ product }: Props) {
  return (
    <section className="bg-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-10 text-gray-900">
          {product.name}
        </h1>
        <div className="flex flex-col items-center">
          <div className="relative w-[300px] h-[300px] mb-6">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <p className="mt-6 text-center text-lg max-w-xl text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const product = products.find((p) => p.slug === params?.slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};