import { useEffect, useRef, useState } from "react"
import Button from "../Interface_parts/Button"

export const GraffityModal = () => {


    const canvasRef = useRef<HTMLCanvasElement>(null)
    const isDrawing = useRef(false)

    const [strokeStyle] = useState('red') 
    const [lineWidth, setLinewidth] = useState(50)
    const [globalAlpha, setGlobalAlpha] = useState(1)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const start = (e: MouseEvent) => {
            isDrawing.current = true
            draw(e)
        }


        const stop = () => {
            isDrawing.current = false
            ctx.beginPath()
        }

        const draw = (e: MouseEvent) => {

            const rect = canvas.getBoundingClientRect()
            
            if (isDrawing.current === true) {
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top

                

                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y)
            }
        }

        

        canvas.addEventListener('mousedown', start)
        canvas.addEventListener('mousemove', draw)
        window.addEventListener('mouseup', stop)

        return () => { 
            canvas.removeEventListener('mousedown', start),
            canvas.removeEventListener('mousemove', draw),
            window.removeEventListener('mouseup', stop)
            }
        
        }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas === null) return

        const ctx = canvas.getContext('2d')
        if (ctx === null) return


        ctx.lineWidth = lineWidth
        ctx.strokeStyle = 'red'
        
        ctx.globalAlpha = globalAlpha
    }, [lineWidth, globalAlpha])

    const ctxClear = () => {
        const canvas = canvasRef.current
        if (canvas === null) return
        const ctx = canvas.getContext('2d')
        if (ctx === null) return

        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    const ctxSave = () => {
        const canvas = canvasRef.current
        if (canvas === null) return
        const ctx = canvas.getContext('2d')
        if (ctx === null) return

        const drawData = canvas.toDataURL()
        console.log('data saved', drawData)
            
            
    }

    return (
        <>
            
                <div className="canvas-ui">
                    <div className="canvas-options">
                        <button className="modal-close-button option" onClick={ctxClear}>Очистить холст</button>
                    </div>
                    <div className="canvas-container">
                        <canvas className='canvas-graffity-workspace' ref={canvasRef} width={600} height={300}>
                        </canvas>
                    </div>
                    
                    <div className="canvas-paint-settings">
                        {/* потом заменю на компоненты */}
                        <div className="graffity-range-cnt">
                            <label className="cavnas-settings-label">Цвет:</label>
                            <button className="canvas-color">+</button>
                            <div className="pen-round-container">
                                    <span className="pen-print" style={{width: lineWidth, height: lineWidth, opacity: globalAlpha, backgroundColor: strokeStyle}}></span>
                            </div>
                        </div>
                        <div className="graffity-range-settings">

                            <div className="graffity-range-cnt">
                                <label className="cavnas-settings-label" htmlFor="intencity" >Прозрачность:</label>
                                <span className="slider-wrapper" id="intencity">
                                    <div className="slider-ticks"></div>
                                    <input className="canvas-slider" id="intencity" min={0}  max={1} step={0.01}  value={globalAlpha} onInput={(e) => setGlobalAlpha((Number(e.currentTarget.value)))} type='range'></input> 
                                </span>
                            </div>

                            <div className="graffity-range-cnt">
                                <label className="cavnas-settings-label" htmlFor="weight" >Толщина:</label>
                                <span className="slider-wrapper" id='weight'>
                                    <div className="slider-ticks"></div>
                                    <input className="canvas-slider" id="weight" type='range' min={1} max={50} step={0.5} value={lineWidth} onInput={(e) => setLinewidth(Number(e.currentTarget.value))}></input> 
                                </span>
                            </div>

                        </div>
                        
                        
                            
                    </div>
                    <div className="dialog-border">
                        <Button className="button"
                        children="отправить"
                        onClick={ctxSave}/>
                        
                    </div>
                </div>
            
        </>
    )
}