
interface Micro_headerProps {
    label: string,
}

const Micro_header = (props:Micro_headerProps) => {

    const {
        label,
    } = props

    return (
        <div className="micro_header">
                    <a href="#" className="header-link">{label}</a>

        </div>
    )
}

export default Micro_header