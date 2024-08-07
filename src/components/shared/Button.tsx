import { ButtonProps } from "./Types"



const ButtonComponent:React.FC<ButtonProps> = ({title,className}) => {
    let defaultColor = "text-xs font-Inter tracking-wider font-bold leading-6    rounded-xl  shadow-textBlack border-b-4 border-r-4 border-black"

    

  return (
    <button className={`${defaultColor} ${className}`}>
        {title}
    </button>
  )
}

export default ButtonComponent