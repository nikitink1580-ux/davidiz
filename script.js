let points = 0;
let level = 1;

const pointsEl = document.getElementById("points");
const levelEl = document.getElementById("level");
const img = document.getElementById("character");

const stages = [
"images/girl1.jpg.png",
"images/girl2.jpg.png",
"images/girl3.jpg.png",
"images/girl4.jpg.png",
"images/girl5.jpg.png",
"images/girl6.jpg.png"
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