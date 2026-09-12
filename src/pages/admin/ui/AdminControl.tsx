import { Button } from "@/shared/ui"
import { WallContent } from "@/widgets/account-wall/ui/WallContent"
import { useState } from "react"

export const AdminControl = () => {

    const [cathegory, setCathegory] = useState('посты')

    return (
        <div className="adminControl" style={{display: 'flex', flexDirection: 'row'}}>
            <div className="controlSection">
                <Button children="посты" onClick={() => setCathegory('посты')}/>
                <Button children="музыка"/>
                <Button children="анкета"/>
            </div>
            
            {cathegory === 'посты' && (<WallContent />)}

        </div>
    )
}