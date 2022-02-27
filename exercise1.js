const text = "python"

const links = document.links;
Array.from(links).forEach((link) => {
  let href = String(link.href);
  if (href.includes(text)) {
    console.log(href);
  }
})


