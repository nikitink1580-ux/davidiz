let points = 0;
let level = 1;

const pointsEl = document.getElementById("points");
const levelEl = document.getElementById("level");
const img = document.getElementById("character");

const stages = [
"images/girl1.jpg",
"images/girl2.jpg",
"images/girl3.jpg",
"images/girl4.jpg",
"images/girl5.jpg",
"images/girl6.jpg"
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