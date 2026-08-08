// Add your code here
// 8Aug2026 (ก่อนส่งให้ Cluade)
namespace DisplayUtils {
    /**
     * ฟังก์ชันส่วนกลางสำหรับสลับสีฮาร์ดแวร์จอ RGB -> BGR
     * สามารถเรียกใช้ร่วมกันได้จากฟอนต์ทุกขนาด
     */
    export function swapRGB(color: number): number {
        let r = (color >> 11) & 0x1F;
        let g = (color >> 5) & 0x3F;
        let b = color & 0x1F;
        return (b << 11) | (g << 5) | r;
    }
}
