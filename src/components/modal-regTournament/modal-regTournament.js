function showTournamentStep(step) {
  $(".tournament-step").addClass("d-none");
  $(`.tournament-step[data-step="${step}"]`).removeClass("d-none");
}

$(document).on("change", ".js-roster-select", function () {
  if (!this.value) return;

  const currentStep = $(this).closest(".tournament-step").data("step");

  if (currentStep === 1) {
    showTournamentStep(2);
  }

  if (currentStep === 3) {
    showTournamentStep(4);
  }
});

$(document).on("click", ".js-submit-roster", function () {
  showTournamentStep(3);
});
