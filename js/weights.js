document.addEventListener('DOMContentLoaded', function(){
    let typeDom = document.querySelectorAll(".table__type");
    let weightInputDom = document.querySelectorAll(".weightInput");
    let metersInputDom = document.querySelectorAll(".metersInput");
    let lengthInputDom = document.querySelectorAll(".lengthInput");
    let countInputDom = document.querySelectorAll(".countInput");
    typeDom.forEach(function (elem, i) {
        weightInputDom[i].addEventListener("input",
            calc.bind(
                this,
                weightInputDom[i],
                [metersInputDom[i], lengthInputDom[i], countInputDom[i]],
                [2, 4, 5.3]
            )
        );
        metersInputDom[i].addEventListener("input",
            calc.bind(
                this,
                metersInputDom[i],
                [weightInputDom[i], lengthInputDom[i], countInputDom[i]],
                [2, 3, 4]
            )
        );
        lengthInputDom[i].addEventListener("input",
            calc.bind(
                this,
                lengthInputDom[i],
                [weightInputDom[i], metersInputDom[i], countInputDom[i]],
                [4, 3, 2]
            )
        );
        countInputDom[i].addEventListener("input",
            calc.bind(
                this,
                countInputDom[i],
                [weightInputDom[i], metersInputDom[i], lengthInputDom[i]],
                [5.3, 4, 2]
            )
        );
    });

    function calc(target, inputs, params) {
        inputs.forEach(function (elem, i) {
            elem.value = target.value * params[i];
        })
    }
});