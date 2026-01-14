import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const contentContainer: HTMLDivElement = document.createElement("div");
contentContainer.className =
  "w-full h-full flex justify-center gap-10 p-10 bg-base-300";
app.appendChild(contentContainer);

// Construct card to select options
const optionsCard: HTMLDivElement = document.createElement("div");
optionsCard.className = "card bg-base-100 w-96 h-fit shadow-sm";
contentContainer.appendChild(optionsCard);

const optionsCardBody: HTMLDivElement = document.createElement("div");
optionsCardBody.className = "card-body";
optionsCard.appendChild(optionsCardBody);

const optionsCardTitle: HTMLHeadingElement = document.createElement("h2");
optionsCardTitle.className = "card-title";
optionsCardTitle.textContent = "Options";
optionsCardBody.appendChild(optionsCardTitle);

// TODO: add inputs
const optionsCardInputContainer: HTMLDivElement = document.createElement("div");
optionsCardInputContainer.className = "flex flex-col gap-5";
optionsCardBody.appendChild(optionsCardInputContainer);

const optionsCardButtonContainer: HTMLDivElement =
  document.createElement("div");
optionsCardButtonContainer.className = "card-actions justify-end";
optionsCardBody.appendChild(optionsCardButtonContainer);

const optionsCardAnalyzeButton: HTMLButtonElement =
  document.createElement("button");
optionsCardAnalyzeButton.className = "btn btn-primary";
optionsCardAnalyzeButton.textContent = "Analyze";
optionsCardButtonContainer.appendChild(optionsCardAnalyzeButton);
