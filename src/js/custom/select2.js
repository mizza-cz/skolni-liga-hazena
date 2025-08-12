$(".js-select").select2({
  width: "100%",
  minimumResultsForSearch: -1,
});

// $(function () {
//   $(".js-select").on("change", function () {
//     $(this).closest("form").submit();
//   });
// });
$(".js-select-multiple").select2({
  placeholder: "Vyberte školní ligu",
  width: "100%",
});
