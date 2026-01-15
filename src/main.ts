import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const contentContainer: HTMLDivElement = document.createElement("div");
contentContainer.className =
  "w-full h-full flex flex-col items-center gap-20 p-10 bg-base-300";
app.appendChild(contentContainer);

const headingContainer: HTMLDivElement = document.createElement("div");
headingContainer.className = "w-full flex flex-col items-center gap-5";
contentContainer.appendChild(headingContainer);

const titleLabel: HTMLHeadingElement = document.createElement("h1");
titleLabel.className = "text-4xl font-bold";
titleLabel.textContent = "Algorithm Race";
headingContainer.appendChild(titleLabel);

const subtitleLabel: HTMLHeadingElement = document.createElement("h2");
subtitleLabel.className = "text-lg";
subtitleLabel.textContent = "Compare the speed and efficiency of algorithms.";
headingContainer.appendChild(subtitleLabel);

const cardsContainer: HTMLDivElement = document.createElement("div");
cardsContainer.className = "w-full h-full flex justify-center gap-10";
contentContainer.appendChild(cardsContainer);

const optionsCard: HTMLDivElement = document.createElement("div"); // card to configure options
optionsCard.className = "card bg-base-100 w-96 h-fit shadow-sm rounded-4xl";
cardsContainer.appendChild(optionsCard);

const optionsCardBody: HTMLDivElement = document.createElement("div");
optionsCardBody.className = "card-body gap-5";
optionsCard.appendChild(optionsCardBody);

const optionsCardHeadingContainer: HTMLDivElement =
  document.createElement("div");
optionsCardHeadingContainer.className = "flex flex-col gap-3";
optionsCardBody.appendChild(optionsCardHeadingContainer);

const optionsCardTitle: HTMLHeadingElement = document.createElement("h2");
optionsCardTitle.className = "card-title";
optionsCardTitle.textContent = "Comparison Options";
optionsCardHeadingContainer.appendChild(optionsCardTitle);

const optionsCardSubtitle: HTMLParagraphElement = document.createElement("p");
optionsCardSubtitle.textContent =
  "Configure options and select algorithms to compare.";
optionsCardHeadingContainer.appendChild(optionsCardSubtitle);

// TODO: add inputs
const optionsCardInputContainer: HTMLDivElement = document.createElement("div");
optionsCardInputContainer.className = "flex flex-col gap-5";
optionsCardBody.appendChild(optionsCardInputContainer);

const optionsCardSizeInput: HTMLInputElement = document.createElement("input");
optionsCardSizeInput.className = "input validator w-full rounded-4xl";
optionsCardSizeInput.type = "number";
optionsCardSizeInput.placeholder = "Enter a size from 1,000 to 1,000,000";
optionsCardSizeInput.min = "1000";
optionsCardSizeInput.max = "1000000";
optionsCardSizeInput.title = "Must be between 1,000 and 1,000,000";
optionsCardInputContainer.appendChild(optionsCardSizeInput);

optionsCardInputContainer.insertAdjacentHTML(
  "beforeend",
  `
<fieldset class="fieldset border-base rounded-box w-full border p-4">
  <legend class="fieldset-legend">Algorithms</legend>
  <label class="label">
    <input type="checkbox" checked="checked" class="checkbox" />
    Linear Search
  </label>
  <label class="label">
    <input type="checkbox" checked="checked" class="checkbox" />
    Binary Search
  </label>
</fieldset>
`,
);

const optionsCardButtonContainer: HTMLDivElement =
  document.createElement("div");
optionsCardButtonContainer.className = "card-actions justify-end";
optionsCardBody.appendChild(optionsCardButtonContainer);

const optionsCardCompareButton: HTMLButtonElement =
  document.createElement("button");
optionsCardCompareButton.className = "btn btn-primary rounded-4xl";
optionsCardCompareButton.textContent = "Compare";
optionsCardButtonContainer.appendChild(optionsCardCompareButton);
