const openModalbuttons =document.querySelectorAll('[data-modal-target]')
const closeModalbuttons =document.querySelectorAll('[data-close-button]')
var currentModal = null
    
openModalbuttons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget) 
        if (modal === currentModal) closeModal(currentModal)
        else
            openModal(modal)
    })
})

closeModalbuttons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
            closeModal(modal)
    })
})

function openModal(modal) {
    if (modal === null) return
    if (currentModal && currentModal !== null) closeModal(currentModal)
    modal.classList.add('active')
    currentModal = modal
}

function closeModal(modal) {
    if (modal === null) return
    modal.classList.remove('active')
    currentModal = null
}