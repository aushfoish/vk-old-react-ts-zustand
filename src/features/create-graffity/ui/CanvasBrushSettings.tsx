import { Input } from "../../../shared/ui"
import { GraffityColors } from "./GraffityColors"

interface CanvasBrushSettingsProps {
strokeStyle: string,
setStrokeStyle: (color: string) => void,
lineWidth: number,
setLinewidth: (width: number) => void,
globalAlpha: number,
setGlobalAlpha: (alpla: number) => void,
}

export const CanvasBrushSettings = (props: CanvasBrushSettingsProps) => {
    const {strokeStyle, setStrokeStyle, lineWidth, setLinewidth, globalAlpha, setGlobalAlpha} = props
    return (
        <div className="canvas-paint-settings">
                  {/* заменил как мог, сильнее это можно порезать, но будет очень много пропдриллинга */}
                  <div className="graffity-range-cnt">
                    <div className="color-settings">
                      <label
                        id="color-label"
                        className="cavnas-settings-label"
                        htmlFor="colors"
                      >
                        Цвет:
                      </label>
                      <GraffityColors id="colors" changeColor={setStrokeStyle} />
                    </div>
        
                    <div className="pen-round-container">
                      <span
                        className="pen-print"
                        style={{
                          width: lineWidth,
                          height: lineWidth,
                          opacity: globalAlpha,
                          backgroundColor: strokeStyle,
                        }}
                      ></span>
                    </div>
                  </div>
        
                  <div className="graffity-range-settings">
                    <div className="graffity-range-cnt">
                      <label className="cavnas-settings-label" htmlFor="intencity">
                        Прозрачность:
                      </label>
                      <span className="slider-wrapper" id="intencity">
                        <div className="slider-ticks"></div>
        
                        <Input
                          containerClass="slider-wrapper"
                          className="hidden"
                          classInput="canvas-slider"
                          label="настройте интенсивность цвета кисти"
                          id="canvas-intencity"
                          type="range"
                          min={0}
                          max={1}
                          step={0.01}
                          value={globalAlpha}
                          onInput={(e) => setGlobalAlpha(Number(e.currentTarget.value))}
                        />
                      </span>
                    </div>
        
                    <div className="graffity-range-cnt">
                      <label className="cavnas-settings-label" htmlFor="weight">
                        Толщина:
                      </label>
                      <span className="slider-wrapper" id="weight">
                        <div className="slider-ticks"></div>
                        <Input
                          className="hidden"
                          classInput="canvas-slider"
                          label="настройте толщину кисти"
                          id="canvas-weight"
                          type="range"
                          min={1}
                          max={50}
                          step={0.5}
                          value={lineWidth}
                          onInput={(e) => setLinewidth(Number(e.currentTarget.value))}
                        />
                      </span>
                    </div>
                  </div>
        
                </div>
    )
}