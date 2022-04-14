import { createCanvas } from 'canvas';

export default function Home(props) {
  return (
    <h1>{props.message}</h1>
  )
}

export async function getServerSideProps() {
  
  return { props: { message: "Hello cruel world" } }
}