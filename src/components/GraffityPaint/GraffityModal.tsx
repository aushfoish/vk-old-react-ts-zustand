import { useEffect, useRef, useState } from "react"

export const GraffityModal = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const isDrawing = useRef(false)

    // const [strokeStyle, setStrokeStyle] = useState('red')
    const [lineWidth, setLinewidth] = useState(20)
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
                ctx.lineCap = 'butt'
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
        ctx.strokeStyle = '#517398'
        
        ctx.globalAlpha = globalAlpha
    }, [lineWidth, globalAlpha])

    return (
        <>
            <div>
                <div className="dialog-ui">
                    <div className="dialog-border">
                        <div className="canvas-border-label">Нарисовать граффити</div>
                        <button>X</button>
                    </div>
                    <canvas className='canvas-graffity-workspace' ref={canvasRef} width={600} height={300}>
                    </canvas>
                    <div className="canvas-paint-settings">
                        {/* потом заменю на компоненты */}
                        <div className="graffity-range-settings">

                            <div className="graffity-range-cnt">
                                <label htmlFor="intencity" ></label>
                                <input id="intencity" min={0}  max={1} step={0.01}  value={globalAlpha} onInput={(e) => setGlobalAlpha((Number(e.currentTarget.value)))} type='range'></input> 
                            </div>
                            <div className="graffity-range-cnt">
                                <label htmlFor="weight" ></label>
                                <input id="weight" type='range' min={0.1} max={200} value={lineWidth} onInput={(e) => setLinewidth(Number(e.currentTarget.value))}></input> 
                            </div>

                        </div>
                        
                        <div className="color">
                            <label>Выбрать цвет...</label>
                            <button className="canvas-color">+</button>
                        </div>
                            
                    </div>
                    <div className="dialog-border">
                        <>
                            <button>Отправить</button>
                            <button>Отмена</button>
                        </>
                        <button>Очистить</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}