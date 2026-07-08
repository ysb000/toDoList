// CTA 클릭 시 팝업 띄우고 배경 클릭 시 팝업 닫기 기능
const popup = document.querySelector('.write_popup');
const popup_bg = document.querySelector('.popup_bg');
console.log(popup);
console.log(popup_bg);
popup.style.display = 'none';
popup_bg.style.display = 'none';
/* 보이는 작업 처리시 원래 객체가 가지던 CSS display 속성으로 되돌린다. */
/* 후보군: flex block inline inline-block */
function popupShow(){
    popup.style.display = 'flex';
    popup_bg.style.display = 'block';
};
function popupHide(){
    popup.style.display = 'none';
    popup_bg.style.display = 'none';
}; 

