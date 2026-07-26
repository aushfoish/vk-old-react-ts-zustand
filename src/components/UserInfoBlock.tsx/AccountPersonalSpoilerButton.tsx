import type React from "react"

interface AccountPersonalSpoilerButtonProps {
    children: React.ReactNode;
    onClick: (isShowed:boolean) => void
}

const AccountPersonalSpoilerButton = (props:AccountPersonalSpoilerButtonProps) => {

    const {
        children,
        onClick
    } = props

    return (
        <div className="hidden-info-spoiler">
              <a className="info-spoiler-button" onClick={() => onClick(false)}>{children}</a>
        </div>
    )
}

export default AccountPersonalSpoilerButton