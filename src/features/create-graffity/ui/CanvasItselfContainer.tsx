import type { Ref } from "react"
import { CanvasItself } from "../../../shared/ui"
import styles from './GraffityUI.module.scss'

interface CanvasItselfContainerProps {
    canvasRef: Ref<HTMLCanvasElement>
    width: number,
    height: number,
}

export const CanvasItselfContainer = (props: CanvasItselfContainerProps) => {
    const {canvasRef, width, height} = props
    return (
        <div className={styles.canvasContainer}>
                  <CanvasItself className={styles.graffityWorkspace} width={width} height={height} ref={canvasRef}/>
        </div>
    )
}