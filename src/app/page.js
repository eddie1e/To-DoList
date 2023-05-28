import Layout from './components/layout';

export default function Home() {
  return (
    <Layout containerClassName="bg-my-bg-image h-screen flex flex-col">
      <div className="flex flex-grow justify-center mt-10 ">
        <main className="w-8/12">
          <p className='w-full text-lg font-medium text-slate-200 md: '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis inventore delectus dolorem ea quo, dolore
            saepe perferendis nesciunt quod pariatur officia cupiditate reiciendis, alias harum quasi. Repellat alias vel
            accusamus
          </p>
        </main>
      </div>
    </Layout>
  );
}

// import Image from 'next/image'
// import Header from './components/header'
// import Footer from './components/footer'


// export default function Home() {
//   return (
//     <div className="bg-my-bg-image h-screen flex flex-col min-h-screen">
//       <Header />
//       <div className="flex flex-grow justify-center mt-10">
//         <main className="w-1/2">
//           <p className='text-lg font-medium text-slate-200'>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis inventore delectus dolorem ea quo, dolore
//             saepe perferendis nesciunt quod pariatur officia cupiditate reiciendis, alias harum quasi. Repellat alias vel
//             accusamus
//           </p>
//         </main>
//       </div>
//       <div className="flex items-center justify-center">
//         <div className="flex flex-col items-center">
//           <div className="flex-grow">
            
//           </div>
//           <Footer />
//         </div>
//       </div>
//   </div>
//   )
// }
