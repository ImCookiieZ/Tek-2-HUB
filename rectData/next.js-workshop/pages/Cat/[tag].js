import React from 'react'
import { useRouter } from 'next/router';
import axios from "axios";
import Link from "next/link";


export async function getServerSideProps({ params }) {
  const tag = params.tag;
  const res = await axios.get("https://cataas.com/cat/"+ tag + "?json=true", { responseType: 'json' });
  const data = res.data
  return {
      props: {data}
  }
}

export default function DynamicCat(props) {
  const router = useRouter();
  const { tag } = router.query;

  return (
  <div>
      <li>
      <img src={`https://cataas.com/${props.data.url}`} />
      </li>
      <li>
        <Link href="/Cat/srr">
        <a>
          To Server
        </a>
        </Link>
      </li>
  </div>);
}