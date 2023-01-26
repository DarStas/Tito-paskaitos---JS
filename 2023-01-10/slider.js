import { feedbacks } from "./feedbacks.js";

const feedbacksContainer = document.querySelector("feedback-container");
let displayFeedbacksIndex = 0;

const displayFeedbacks = () => {
  const feedbacksContainers = document.querySelectorAll("feedback");
  feedbacksContainers.forEach((feedback, index) => {
    index === displayFeedbacksIndex
      ? feedback.classList.remove("hidden")
      : feedback.classList.add("hidden");
  });

  displayFeedbacksIndex = 
  displayFeedbacksIndex ===
    feedbacks.length - 1 
    ? 0 
    : displayFeedbacksIndex + 1;

  setTimeout(displayFeedbacks, 3000);
};

const constructFeedback = () => {
  feedbacks.forEach(constructFeedbackCard);
};

const constructFeedbackCard = (feedback) => {
  const feedbackContainer = document.createElement("div");
  const profilePictureImg = document.createElement("img");
  const fullNameParagraph = document.createElement("p");
  const review = document.createElement("p");

  feedbackContainer.classList.add("feedback", "hidden");
  profilePictureImg.scr = feedback.profilePicture;
  fullNameParagraph.textContent = `${feedback.firstName} ${feedback.lastName}`;
  review.textContent = feedback.review;

  feedbackContainer.append(profilePictureImg, fullNameParagraph, review);

  feedbacksContainer.append(feedbackContainer);
};

constructFeedback();
