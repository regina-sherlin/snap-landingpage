// document.querySelector("#list_item-features").addEventListener('click', () => {
//     document.querySelector(".dropdown").style.display = "block"
// })
console.log('hey');

const toggleDropdown = (id, targetId) => {
    console.log('heyo');
    const trigger = document.querySelector('#'+id) 
    const target = document.querySelector('.'+targetId) 
    defaultDisplay = "none"
    console.log(target);
    // console.log(trigger);
    target.style.display = (target.style.display == 'block') ? defaultDisplay : 'block'   
    
}