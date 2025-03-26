import Link from 'next/link';


export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className='flex flex-col gap-2'>
            <div>
               This is a NextJS/DecapCMS/Netlify playground.
            </div>
              <a href="https://friendly-lily-ba7b3f.netlify.app/admin-ttzpubxivj/">Go to the CMS</a> 
            </section>
        </div>
    );
}