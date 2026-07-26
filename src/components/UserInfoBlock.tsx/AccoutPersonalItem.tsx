import type React from "react"


interface AccountPersonalItemProps {
label: string,
children: React.ReactNode
}

const AccountPersonalItem = (props:AccountPersonalItemProps) => {



    const {
        label,
        children
    } = props

    return (
        <div className="info-row">
                <div className="label">
                  {label}
                </div>

                <div className="content">
                  {children}
                </div>
        </div>
    )
}

export default AccountPersonalItem