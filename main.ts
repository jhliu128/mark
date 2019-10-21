//% weight=0 color=#3CB371 icon="\uf8ae" block="Music"

namespace Music {
    /**
    * 計算長方形面積，並回傳
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }

    /**
    * 演奏 甜蜜的家庭
    */
    //% blockId="sweat_family" block="play sweat_family"
    //% blockGap=2 weight=1
    export function sweat_family(): void {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    }
}
