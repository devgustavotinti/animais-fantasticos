export default function initScrollSuave() {
  const linksInterno = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })


    // Forma Alternativa
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }

  linksInterno.forEach((item) => {
    item.addEventListener('click', scrollToSection)
  })
}