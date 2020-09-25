import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <p>
        <h2>Planning to launch a product with a startup minded team?</h2>

<div>While you're still thinking about your idea sitting on the couch , someone else has built his business, hired someone to implement their idea, and sooner, they are planning to give competition to either FoodPanda, Uber or Daraz and heading  one step ahead from you in business, <strong>so buckle up!!!</strong></div>
<br/>
<div>We are Soft Dev Simplified, we will take your idea and implement it for you, with our flawless services, you will be one step ahead of your competition.</div>
<br/>

Contact Us
<br/><br/>
<strong>What's App: +923476536351</strong> <br/>
<strong>Email: aizazamjadhere@gmail.com</strong>
        </p>
      </section>

      {/* <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}
