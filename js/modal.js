const openModalbuttons =document.querySelectorAll('[data-modal-target]')
const closeModalbuttons =document.querySelectorAll('[data-close-button]')

openModalbuttons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget) 
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
    if (modal == null) return
    modal.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}
