import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const contentContainer: HTMLDivElement = document.createElement("div");
contentContainer.className =
  "overflow-auto w-full h-full flex flex-col items-center gap-20 p-10 bg-base-300";
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
cardsContainer.className = "w-full flex flex-wrap justify-center gap-10 ";
contentContainer.appendChild(cardsContainer);

// Card to configure options
const optionsCard: HTMLDivElement = document.createElement("div");
optionsCard.className = "card bg-base-100 w-96 h-128 shadow-sm rounded-4xl";
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

const optionsCardTargetInput: HTMLInputElement =
  document.createElement("input");
optionsCardTargetInput.className = "input validator w-full rounded-4xl";
optionsCardTargetInput.type = "number";
optionsCardTargetInput.placeholder = "Enter the number to search for";
optionsCardTargetInput.min = "1";
optionsCardTargetInput.max = "1000000";
optionsCardTargetInput.title = "Must be between 1 and the size";
optionsCardInputContainer.appendChild(optionsCardTargetInput);

optionsCardInputContainer.insertAdjacentHTML(
  "beforeend",
  `
<fieldset class="fieldset border-base-content/20 rounded-box w-full border p-4">
  <legend class="fieldset-legend">Algorithms to Compare</legend>
  <label class="label">
    <input type="checkbox" checked="checked" class="checkbox" />
    Linear Search
  </label>
  <label class="label">
    <input type="checkbox" checked="checked" class="checkbox" />
    Binary Search
  </label>
  <label class="label">
    <input type="checkbox" checked="checked" class="checkbox" />
    Jump Search
  </label>
  <label class="label">
    <input type="checkbox" checked="checked" class="checkbox" />
    Interpolation Search
  </label>
</fieldset>
`,
);

const optionsCardButtonContainer: HTMLDivElement =
  document.createElement("div");
optionsCardButtonContainer.className =
  "card-actions h-full justify-end items-end";
optionsCardBody.appendChild(optionsCardButtonContainer);

const optionsCardCompareButton: HTMLButtonElement =
  document.createElement("button");
optionsCardCompareButton.className = "btn btn-primary rounded-4xl";
optionsCardCompareButton.textContent = "Compare";
optionsCardButtonContainer.appendChild(optionsCardCompareButton);

// Card to see results
const resultsCard: HTMLDivElement = document.createElement("div");
resultsCard.className =
  "card bg-primary w-96 h-128 shadow-sm rounded-4xl text-primary-content";
cardsContainer.appendChild(resultsCard);

const resultsCardBody: HTMLDivElement = document.createElement("div");
resultsCardBody.className = "card-body gap-5";
resultsCard.appendChild(resultsCardBody);

const resultsCardHeadingContainer: HTMLDivElement =
  document.createElement("div");
resultsCardHeadingContainer.className = "flex flex-col gap-3";
resultsCardBody.appendChild(resultsCardHeadingContainer);

const resultsCardTitle: HTMLHeadingElement = document.createElement("h2");
resultsCardTitle.className = "card-title";
resultsCardTitle.textContent = "Comparison Results";
resultsCardHeadingContainer.appendChild(resultsCardTitle);

const resultsCardSubtitle: HTMLParagraphElement = document.createElement("p");
resultsCardSubtitle.textContent =
  "Below are the results of your algorithm comparison. For smaller inputs, the differences are probably miniscule or invisible, but larger inputs will see more obvious differences.";
resultsCardHeadingContainer.appendChild(resultsCardSubtitle);
