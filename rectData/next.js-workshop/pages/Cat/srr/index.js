import React from 'react'
import axios from "axios";
import Link from "next/link";

export default function SSRCat(props) {
    console.log(props)
    return (
  <div>
      <li>
      <img src={`https://cataas.com/${props.data.url}`} />
      </li>
      <li>
        <Link href="/Cat/static">
        <a>
          To Static
        </a>
        </Link>
      </li>
  </div>);
}

export async function getServerSideProps({params}) {
  const tag = params.tag
  const res = await axios.get("https://cataas.com/cat/"+ tag + "?json=true", { responseType: 'json' });
    const data = res.data
  return {
    props: {data}
  };
}