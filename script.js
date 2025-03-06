// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  menu.classList.toggle("active")
})

// Close mobile menu when clicking on a menu item
document.querySelectorAll(".menu a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    menu.classList.remove("active")
  }),
)

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      const headerOffset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Form submission handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For this demo, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`)

    // Reset the form
    contactForm.reset()
  })
}

// Newsletter form submission
const newsletterForm = document.getElementById("newsletterForm")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get the email value
    const email = this.querySelector('input[type="email"]').value

    // Here you would typically send the email to a server
    // For this demo, we'll just show an alert
    alert(`Thank you for subscribing to our newsletter with ${email}!`)

    // Reset the form
    newsletterForm.reset()
  })
}

// Add animation on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  header.classList.toggle("scrolled", window.scrollY > 0)

  // You can add more scroll animations here if needed
})

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Any initialization code can go here
})

