class Question{
    constructor(question, propositions, response) {
        this.question = question
        this.propositions = propositions
        this.response = response
    }
}

const questions = [
    new Question("Quel langage de programmation a été créé par Dennis Ritchie en 1972 ?", [
        "COBOL",
        "C",
        "Python",
        "Langage des Schtroumpfs"
        ], 2),
    new Question("Quel est le nom du premier ordinateur électronique, construit en 1946 ?", [
        "ENIAC",
        "EDVAC",
        "UNIVAC",
        "Terminator"
    ], 1),
    new Question("Qu'est-ce que l'algorithme de recherche Google ?", [
        "PageRank",
        "GoogleBot",
        "Bing",
        "Jus de cerveau"
    ], 1),
    new Question("Quel langage de programmation a été créé par Yukihiro Matsumoto ?", [
        "Ruby",
        "JavaScript",
        "Python",
        "Java"
    ], 1),
    new Question("Quel système d'exploitation a été développé par Linus Torvalds ?", [
        "Windows",
        "macOS",
        "Androïd",
        "Linux"
    ], 4),
    new Question("Quel est le protocole utilisé pour transférer des fichiers sur le web ?", [
        "HTTP",
        "FTP",
        "SMTP",
        "Protocole de transfert de pizzas"
    ], 2),
    new Question("Quelle est la principale utilisation du langage de programmation SQL ?", [
        "Gestion de base de données",
        "Développement web",
        "Calcul scientifique",
        "Rédaction de romans"
    ], 1),
    new Question("Quelle entreprise a développé le langage de programmation Java ?", [
        "Microsoft",
        "Apple",
        "Sun Microsystems",
        "Pieds Nickelés Inc."
    ], 3),
]

const question_element = document.getElementById('question')

let question_index = 0
let question_count = questions.length
let question_success = 0

/**
 * Setup le QCM
 */
window.onload = () => {
    build_html(questions[0])
}

/**
 * Affiiche de résultat
 */
function end(){
    question_element.innerText = question_success + '/' + question_count
}

/**
 * @param {int} answer
 */
function check_answer(button){
    const question = questions[question_index]

    if (parseInt(button.dataset.answer) === question.response){
        question_success++
        button.style.background = "green"
    }else{
        button.style.background = "red"

        let response = document.querySelector(`#question button[data-answer='${question.response.toString()}']`)
        response.style.background = "green"
    }

    setTimeout(() => { next() }, 500)
}

/**
 * Passe à la prochaine question
 */
function next(){
    question_index++

    if (question_index === question_count){
        end()
        return
    }

    build_html(questions[question_index])
}

/**
 * Construit l'HTML de la question
 *
 * @param {Question} question
 */
function build_html(question){
    question_element.innerHTML = ""

    let html = "<h3 class='my-3'>" + question.question + "</h3>" +
        "<div class='container row w-50 mx-auto my-5'>"

    question.propositions.forEach((proposition, index) => {
        let answer = parseInt(index+ 1)
        html += `<button class='btn btn-outline-primary my-2' onclick='check_answer(this)' data-answer='${answer}'>${proposition}</button>`
    })

    html += "</div>"

    question_element.insertAdjacentHTML('afterbegin', html)
}

