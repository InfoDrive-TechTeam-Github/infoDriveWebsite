import React from 'react'

export default function SalesForceDevelopment({data}) {
  return (
    <div className='max-w-6xl mx-auto py-20 px-4 md:px-8'>
      {data.map((post,index) =>{
        var today = new Date(post['date']).toLocaleDateString();
        return(
            <div>
                <img className='mb-5 rounded-2xl w-full object-cover' src={post['']}></img>
                <h1 className='text-4xl mb-3 font-medium'>{post['title']['rendered']}</h1>
                <div className='text-sm mb-10'>Published on : {today}</div>
                <div dangerouslySetInnerHTML={{__html:post['content']['rendered']}}></div>
            </div>
        );
      })}
    </div>
  )
}
export async function getServerSideProps(context) {
    const { id } = context.params;
    // Fetch data from external API
    const res = await fetch(`https://mydryve.co/blog/wp-json/wp/v2/posts?_embed&slug=${id}`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
}


