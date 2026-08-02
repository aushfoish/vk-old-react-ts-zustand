
interface Micro_headerProps {
    label: string,
}

export const ActionsMicroHeader = (props:Micro_headerProps) => {

    const {
        label,
    } = props

    return (
        <div className="micro_header">
                    <a href="#" className="header-link">{label}</a>

        </div>
    )
}

