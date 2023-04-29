window.onload = function () {
  var dictionary = {
    // English dictionary
    en: {
      chatPlaceholder: "Type here...",
      userAvatar: "./user.png",
      robotAvatar: "./robot.png",
      inputPlaceholder: "Type here...",
      submit: "Submit",
      previous: "Previous",
      next: "Next",
      successMessage: "Alright, you are done.",
      fieldLabels: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        address: "Address",
      },
    },
    // Spanish dictionary
    es: {
      chatPlaceholder: "Escriba aquí...",
      userAvatar: "./user.png",
      robotAvatar: "./robot.png",
      inputPlaceholder: "Escriba aquí...",
      submit: "Enviar",
      previous: "Anterior",
      next: "Siguiente",
      successMessage: "Listo, has terminado.",
      fieldLabels: {
        name: "Nombre",
        email: "Correo electrónico",
        phone: "Teléfono",
        address: "Dirección",
      },
    },
  };

  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    dictionary: dictionary.en, // Set the initial language
    submitCallback: function () {
      var formData = {};
      var inputs = document.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var name = input.getAttribute("name");
        var value = input.value.trim();
        formData[name] = value;
      }

      conversationalForm.addRobotChatResponse(
        dictionary[conversationalForm.currentLanguage].successMessage
      );
    },
  });
};
