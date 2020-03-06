class form {
  constructor() {
    this.makeFB();
    this.callAPI();
  }

  makeFB() {
    this.form = $("<Form></Form>");
    $(this.form).append('<input type="text" placeholder="Enter Chirp">');
    $("body").append(this.form);
    this.button = $("<button></button>");
    $(this.button).text("Submit");
    $("body").append(this.button);
  }

  callAPI() {
    $(this.button).click(() => {
      $.get("/api/chirps", data => {
        let chiirp = Object.entries(data);
        chiirp.forEach((element, index) => {
          if (index + 1 < chiirp.length) {
            $("body").append(`
                <div class="card" style="width: 350px">
                  <div><button id="${index}" type="button" class="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="card-body">${JSON.stringify(element)}</div>
                </div>`);

                $(`#${index}`).on('click', (e) => {
                    let parent = $(e.currentTarget).parent().parent();
                    $(parent).remove();
                })
          }
        });
      });
    });
  }
}

new form();
