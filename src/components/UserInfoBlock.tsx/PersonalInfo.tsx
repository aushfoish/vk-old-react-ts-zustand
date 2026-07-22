interface PersonalInfoProps {
    children: string,
    label: string,
    id: string,
}

const PersonalInfo = (props:PersonalInfoProps) => {

    const {
        children,
        label,
        id
    } = props

    return (
        <div className="info-row" key={id}>
                    <label className="label" htmlFor={id}>
                      {children}:
                    </label>
                    <div className="content" id={id}>
                      {label}
                    </div>
        </div>
    )
}

export default PersonalInfo