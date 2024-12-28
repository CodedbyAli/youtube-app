


const Button = ({name,isActive}) => {
    return (
        <>
            <button className={`ml-3 py-1 px-3 rounded-lg ${isActive ? "bg-black text-white" : "bg-zinc-100"} font-semibold`}>
                {name}
            </button>
        </>
    )
}

const ButtonList = () => {
  return (
    <>
        <Button isActive={true} name={"All"} />
        <Button name={"Podcasts"} />
        <Button name={"AI"} />
        <Button name={"APIs"} />
        <Button name={"Music"} />
        <Button name={"Marvel Studios"} />
        <Button name={"News"} />
        <Button name={"Thrillers"} />
        <Button name={"Natural Documentaries"} />
        <Button name={"Satire"} />
        <Button name={"3D modeling"} />
        <Button name={"Cameras"} />
        <Button name={"Mixes"} />
    </>
  )
}

export default ButtonList