import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image
        src="/images/profile.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  )
}
