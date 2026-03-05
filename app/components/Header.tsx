import Image from "next/image";




export default function Header() {
    return (
<header className="content-center">
    <div className="bg-[#FDB608]" style={{ padding: "10px", textAlign: "center" }}>
        <Image
            src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
            alt="Logo"
            width={200}
            height={100}
        />
  </div>
  <div>
    <p>
        EN ES
    </p>
  </div>
</header>
)
}