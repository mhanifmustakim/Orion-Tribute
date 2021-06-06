function renderContent(contentObject) {
    const main = document.querySelector("#main-content");
    main.innerHTML = `<div class="yt-vid"><iframe src="https://www.youtube.com/embed/${contentObject.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    main.innerHTML += `<div class="desc">${contentObject.desc}</div>`;
}

export { renderContent }