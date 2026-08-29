import { Input } from "../../../shared/ui"
import { GraffityColors } from "./GraffityColors"
import styles from './GraffityUI.module.scss'

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
        <div className={styles.brushSettings}>
                  {/* заменил как мог, сильнее это можно порезать, но будет очень много пропдриллинга */}
                  <div className={styles.graffityRangeContainer}>
                    <div className={styles.colorSettings}>
                      <label
                        id={styles.color}
                        className={`${styles.canvasSettingLabel} ${styles.color}`}
                        htmlFor="colors"
                      >
                        Цвет:
                      </label>
                      <GraffityColors id="colors" changeColor={setStrokeStyle} />
                    </div>
        
                    <div className={styles.penPrintContainer}>
                      <span
                        className={styles.penPrint}
                        style={{
                          width: lineWidth,
                          height: lineWidth,
                          opacity: globalAlpha,
                          backgroundColor: strokeStyle,
                        }}
                      ></span>
                    </div>
                  </div>
        
                  <div className={styles.graffityRangeSettings}>
                    <div className={styles.graffityRangeContainer}>
                      <label className={styles.canvasSettingLabel} htmlFor="intencity">
                        Прозрачность:
                      </label>
                      <span className="slider-wrapper" id="intencity">
                        <div className="slider-ticks"></div>
        
                        <Input
                          containerClass="slider-wrapper"
                          className="visuallyHidden"
                          classInput={styles.canvasSlider}
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
        
                    <div className={styles.graffityRangeContainer}>
                      <label className={styles.canvasSettingLabel} htmlFor="weight">
                        Толщина:
                      </label>
                      <span className={styles.sliderWrapper} id="weight">
                        <div className={styles.sliderTicks}></div>
                        <Input
                          className="visuallyHidden"
                          classInput={styles.canvasSlider}
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