const desktopItem = document.querySelector('.desktop__item');
const desktopBoxes = Array.from(document.querySelectorAll('.desktop__boxes'));
const desktopItemImg = document.querySelector('.desktop__item-img img')
const desktopItemSub = document.querySelector('.desktop__item-sub')

  desktopItem.addEventListener('dragstart', dragstart);
  desktopItem.addEventListener('dragend', dragend);
  
desktopBoxes.forEach((boxes) => {
  boxes.addEventListener('dragover', dragover)
  boxes.addEventListener('drop', dragdrop)
});
function dragstart(e) {
  e.target.classList.remove('cell__object')
  e.target.classList.add('object__dragstart2')

}
function dragend(e) {
  e.target.classList.add('object__dragstart-active')
  e.target.classList.add('cell__object2')
}
function dragover(e) {
  e.preventDefault();
}
function dragdrop(e) {
    e.target.append(desktopItem);
}

document.body.addEventListener('click', function () {
  desktopItem.classList.remove('object__dragstart-active')
})
desktopItem.addEventListener('click', function (e) {
  e.stopPropagation();
  e.target.classList.add('object__dragstart-active')
})
desktopItemImg.addEventListener('click', function (e) {
  e.stopPropagation();
})
desktopItemSub.addEventListener('click', function (e) {
  e.stopPropagation();
})