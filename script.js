let points = 0;
let level = 1;

const pointsEl = document.getElementById("points");
const levelEl = document.getElementById("level");
const img = document.getElementById("character");

const stages = [
"https://i.pinimg.com/originals/6a/f1/e8/6af1e8bf3596f76fc19ab6df16858077.jpg?nii=t",
"https://i.pinimg.com/736x/3a/26/54/3a2654ce96a7845663f12f86a0514106.jpg",
"https://i.pinimg.com/originals/2a/b1/82/2ab18240c7c96241d3cc62e88e5c5505.webp",
"https://i.pinimg.com/736x/25/43/38/2543384165ea19f0e221577f522db282.jpg",
"https://a.lmcdn.ru/img600x866/X/D/XD001XW044ZN_31857973_2_v4.jpg"
];

document.getElementById("clickBtn").addEventListener("click", () => {
    points++;
    pointsEl.textContent = points;

    const newLevel = Math.floor(points / 20) + 1;

    if (newLevel > level) {
        level = newLevel;
        levelEl.textContent = level;

        const stageIndex =
            Math.min(level - 1, stages.length - 1);

        img.src = stages[stageIndex];
    }
});