// ── Sticky nav ──────────────────────────────
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60)
}, { passive: true })

// ── Mobile hamburger ─────────────────────────
const hamburger = document.getElementById('hamburger')
const navLinks   = document.getElementById('nav-links')

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open')
  hamburger.classList.toggle('open', open)
  hamburger.setAttribute('aria-expanded', open)
  document.body.style.overflow = open ? 'hidden' : ''
})

// Close menu on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open')
    hamburger.classList.remove('open')
    hamburger.setAttribute('aria-expanded', 'false')
    document.body.style.overflow = ''
  })
})

// ── Smooth scroll ─────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href')
    if (id === '#') return
    const target = document.querySelector(id)
    if (target) {
      e.preventDefault()
      const navH = nav.getBoundingClientRect().height
      const top  = target.getBoundingClientRect().top + window.scrollY - navH
      window.scrollTo({ top, behavior: 'smooth' })
    }
  })
})
