fetch("js/elements.json")
  .then(response => response.json())
  .then(elements => {
const table = document.getElementById("periodic-table");
const detailBox = document.getElementById("element-detail");
const detailSymbol = document.getElementById("detail-symbol");
const detailName = document.getElementById("detail-name");
const detailWeight = document.getElementById("detail-weight");
const detailState = document.getElementById("detail-state");
const detailToxicity = document.getElementById("detail-toxicity");
const closeBtn = document.getElementById("close-btn");

elements.forEach(el => {
  const div = document.createElement("div");
  div.className = "element";

  // 分類に応じたクラス追加
  if (el.group === "Alkali metal") {
    div.classList.add("alkali-metal");
  } else if (el.group === "Alkaline earth metal") {
    div.classList.add("alkaline-earth-metal");
  } else if (el.group === "Transition metal") {
    div.classList.add("transition-metal");
  } else if (el.group === "Post-transition metal") {
    div.classList.add("post-transition-metal");
  } else if (el.group === "Metalloid") {
    div.classList.add("metalloid");
  } else if (el.group === "Nonmetal") {
    div.classList.add("nonmetal");
  } else if (el.group === "Halogen") {
    div.classList.add("halogen");
  } else if (el.group === "Noble gas") {
    div.classList.add("noble-gas");
  }

  // 状態に応じたクラス追加
  div.classList.add(el.state); // "gas", "solid", "liquid"
  div.style.gridColumn = el.x;
  div.style.gridRow = el.y;
  div.innerHTML = `<sup>${el.number}</sup><br><strong>${el.symbol}</strong>`;
  if (el.y === 8 || (el.x === 3 && el.y === 6)){
  div.classList.add("lanthanoid");
} else if (el.y === 9 || (el.x === 3 && el.y === 7)) {
  div.classList.add("actinoid");
}

  div.addEventListener("click", () => {
  detailSymbol.textContent = el.symbol;
  detailName.textContent = el.name;
  detailWeight.textContent = el.weight;
  detailState.textContent = el.state;

  const toxLabel = {
  "low": "🟢 安全",
  "moderate": "🟡 注意",
  "high": "🔴 危険",
  "unknown": "❓ 不明"
};

detailToxicity.textContent = toxLabel[el.toxicity] || "❓ 不明";

  // 分類とWikiリンクを追加
  const detailGroup = document.getElementById("detail-group");
  const detailWiki = document.getElementById("detail-wiki");

  // 日本語の分類名と絵文字を追加
  const groupLabelJa = {
    "Alkali metal": "アルカリ金属 ⚡",
    "Alkaline earth metal": "アルカリ土類金属 🪨",
    "Transition metal": "遷移金属 🔩",
    "Post-transition metal": "後遷移金属 🧲",
    "Metalloid": "半金属 🧬",
    "Nonmetal": "非金属 🌿",
    "Halogen": "ハロゲン 🧪",
    "Noble gas": "希ガス 🧞‍♂️",
    "Lanthanide": "ランタノイド ✨",
    "Actinide": "アクチノイド ☢️",
    "Other metal": "その他の金属 🧱",
    "Rare earth": "希土類元素 🪐",
    "Unknown": "分類不明 ❓"
  };

  detailGroup.textContent = groupLabelJa[el.group] || "分類不明";

  detailWiki.href = el.wiki;
  detailWiki.rel = "noreferrer";

  

  // 状態に応じた背景色
  let bgColor = "#fff";
  if (el.state === "gas") {
    bgColor = "#e0f7ff";
  } else if (el.state === "liquid") {
    bgColor = "#fff4e0";
  } else if (el.state === "solid") {
    bgColor = "#e6ffe6";
  }
  detailBox.style.backgroundColor = bgColor;

  // 絵文字つける
  let emoji = "";
  if (el.state === "gas") {
    emoji = "☁️";
  } else if (el.state === "solid") {
    emoji = "🪨";
  } else if (el.state === "liquid") {
    emoji = "💧";
  }
  detailState.textContent = `${el.state} ${emoji}`;

  detailBox.classList.remove("hidden");
});

  table.appendChild(div);
});

closeBtn.addEventListener("click", () => {
  detailBox.classList.add("hidden");
});
})

.catch(error => {
    console.error("読み込みエラー:", error);
  });

const colors = [
      "rgba(62, 24, 17, 0.4)",
      "rgba(28, 76, 49, 0.4)",
      "rgba(34, 59, 75, 0.4)",
      "rgba(92, 55, 92, 0.4)"
    ];

    document.querySelectorAll(".particles span").forEach(span => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      span.style.background = randomColor;
    });