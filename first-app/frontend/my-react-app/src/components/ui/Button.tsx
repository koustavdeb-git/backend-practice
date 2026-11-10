import { useNavigate } from 'react-router-dom'

type ButtonProps = {
    label?: string;
    navigation?: string
}

const Button = ({ label, navigation }: ButtonProps) => {
    const navigate = useNavigate()
    return (
        <button className='rounded-md p-2 mr-4 bg-amber-700 text-amber-50 cursor-pointer'
            onClick={() => {
                if (navigation) {
                    navigate(navigation)
                }
            }}>
            {label}
        </button>
    )
}

export default Button
