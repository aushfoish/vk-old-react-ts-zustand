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
                      {label}
                    </label>
                    <div className="content" id={id}>
                      {children}
                    </div>
        </div>
    )
}

export default PersonalInfo