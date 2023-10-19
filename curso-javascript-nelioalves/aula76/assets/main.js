function createCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.clearDisplay();
      this.clickButton();
    },

    clickButton() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnSendDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-dell")) {
          this.DeleteLast();
        }

        if (el.classList.contains("btn-eq")) {
          this.operation();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    DeleteLast() {
      this.display.value = this.display.value.slice(0, -1);
    },

    operation() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida!");
          return;
        }

        this.display.value = conta;
      } catch (e) {
        alert("Conta inválida!");
        return;
      }
    },

    btnSendDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = createCalculadora();
calculadora.inicia();
