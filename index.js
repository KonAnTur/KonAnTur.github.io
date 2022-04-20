const girl = document.getElementById("girl")
const tree = document.getElementById("tree")
const fab = document.getElementById("fab")
const build = document.getElementById("build")
const palm = document.getElementById("palm")

const scene = document.getElementById("scene")

var modal = document.getElementById("my_modal");
var text = document.getElementById("text");
var span = document.getElementsByClassName("close_modal_window")[0];

document.addEventListener("keydown", function(event) {
    jump();
})


function jump () {
    if (girl.classList != "jump") {
        girl.classList.remove("jump")
        girl.classList.add("jump")
    }
    setTimeout(function() {
        girl.classList.remove("jump")
    }, 1000)
}

let isAlive = setInterval(function() {
    let girlTop = parseInt(window.getComputedStyle(girl)
        .getPropertyValue("top"))
    let sceneLeft = parseInt(window.getComputedStyle(scene)
        .getPropertyValue("left"))

    if (sceneLeft < -570 && sceneLeft > -590 && girlTop >= 140) {
        scene.classList.add("sceneAnimationPaused")
        modal.style.display = "block";
        h4.innerText = 'Дерево олицетворяет Лесосибирск.'
        text.innerText = 'Не пытайся меня обмануть, я знаю что Яна не осталась в Лесосибирске!!! Ну ка, начинай сначала!!!';
        btn.innerText = 'Пнятненько'
    }
    if (sceneLeft < -1150 && sceneLeft > -1170 && girlTop >= 140) {
        scene.classList.add("sceneAnimationPaused")
        modal.style.display = "block";
        h4.innerText = 'Завод олицетворяет Красноярск.'
        text.innerText = 'Я всё понимаю, квартира, машина, но разве Яна хочет кашлять углём? Мне кажется что нет, так что давай попробуем ещё раз!!!)))';
        btn.innerText = 'Оки'
    }
    if (sceneLeft < -1720 && sceneLeft > -1740 && girlTop >= 140) {
        scene.classList.add("sceneAnimationPaused")
        modal.style.display = "block";
        h4.innerText = 'Этот дом олицетворяет Санкт-Петербург.'
        text.innerText = 'В Питере конечно кайфово, но ля, тут из Воды только залив и тот холодный, Солнце светит раз в год, да и Яна давно хочет на моря, давай ещё раз, в этот раз Яна должна доехать до конца!!!)))';
        btn.innerText = 'Хорошоу'
    }
    if (sceneLeft < -2320 && sceneLeft > -2340) {
        scene.classList.add("sceneAnimationPaused")
        modal.style.display = "block";
        h4.innerText = 'Пальма это конечно же Море.'
        text.innerText = 'КОНГРАТУЛЕЙШН!!!! Яна наконец попала на моря, она скорее всего уже переела морепродуктов и жалуется. Ну как грится, чем бы дитя не тешилось. Сегодня её день рождения, поэтому разработчик данной игры, желает всего что бы она не пожелала. Лавки чмавки :*';
        btn.innerText = 'Спасибки'
    }
}, 10)


span.onclick = function () {
    window.location.reload();
}