// import { notFound } from 'next/navigation'
// import ProductCard from '../../product/[id]/page'

// // This would typically come from an API or database
// const categories = ['men', 'women', 'kids']

// export default function CategoryPage({ params }: { params: { slug: string } }) {
//   if (!categories.includes(params.slug)) {
//     notFound()
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 capitalize">{params.slug}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* This would typically be fetched from an API */}
//         {[1, 2, 3, 4, 5, 6].map((product) => (
//           <ProductCard
//             key={product}
//             id={product}
//             name={`${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Product ${product}`}
//             price={99.99}
//             image={`/images/${params.slug}-${product}.jpg`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }
