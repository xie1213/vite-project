import { ref } from 'vue';



const colors = ["#ffffff", "#f0e68c", "#d3ffce", "#add8e6", "#e6e6fa", "#dcdcdc", "#f5f5f5"]; // 背景颜色数组


const fontColors = ["#4D9EFF", "#CDC27D", "#65C86E", "#7D94CB", "#4D9EFF", "#4D9EFF"]

const colorIndex = ref(0);
const colorHoverIndex = ref<number | null>(null);

const topBackgroundColor = ref("black"); // 默认顶部背景颜色
const topFontColor = ref("#d4d4d5"); // 默认字体颜色为黑色
const hoverFontColor = ref("black")


const updateBackground = (index: number) => {
    colorIndex.value = index; // 更新选中的索引

    let bg_color = colors[index]
    let ft_color = fontColors[index]

    document.body.style.backgroundColor = bg_color; // 更改 body 的背景颜色
    topBackgroundColor.value = index !== 0 ? bg_color : "black"; // 同时更新顶部背景颜色
    topFontColor.value = index === 0 ? bg_color : "black";
    hoverFontColor.value = fontColors[index]
    // themeStore.setThemeColor(bg_color)
};

// 鼠标悬浮事件处理
// const onMouseEnter = (index: number) => {
//     colorHoverIndex.value = index;
//     hoverFontColor.value = fontColors[index]; // 改变字体颜色为悬浮颜色
//     console.log(hoverFontColor.value);

// };

const onMouseLeave = () => {
    document.body.style.backgroundColor = colors[colorIndex.value]; // 恢复到当前选中的背景颜色
};

export { colorIndex, colorHoverIndex, topBackgroundColor, hoverFontColor, topFontColor, updateBackground, onMouseLeave };
