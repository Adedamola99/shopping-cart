// import { Link } from "react-router-dom";

// const TopDeals: React.FC<{ deals?: Deal[] }> = ({ deals = sampleDeals }) => {
//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold">Top Deals</h2>
//           <Link to="/deals">
//             <a className="text-sm text-gray-600 hover:text-gray-900">
//               See all deals →
//             </a>
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {deals.map((d: any) => (
//             <article
//               key={d.id}
//               className="bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
//             >
//               <div className="relative h-48 bg-gray-100">
//                 {/* Replace with next/image if you want optimization */}
//                 <img
//                   src={d.image || "https://via.placeholder.com/400x300"}
//                   alt={d.title}
//                   className="w-full h-full object-cover"
//                 />
//                 {d.badge && (
//                   <span className="absolute left-3 top-3 bg-pink-500 text-white text-xs px-2 py-1 rounded">
//                     {d.badge}
//                   </span>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg">{d.title}</h3>
//                 <div className="mt-2 flex items-baseline gap-3">
//                   <div className="text-xl font-bold">{d.price}</div>
//                   {d.oldPrice && (
//                     <div className="text-sm text-gray-500 line-through">
//                       {d.oldPrice}
//                     </div>
//                   )}
//                 </div>
//                 <div className="mt-4 flex items-center gap-3">
//                   <a
//                     href={`/product/${d.id}`}
//                     className="text-sm bg-gray-900 text-white px-3 py-2 rounded"
//                   >
//                     View
//                   </a>
//                   <button className="text-sm border border-gray-300 px-3 py-2 rounded">
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopDeals;
