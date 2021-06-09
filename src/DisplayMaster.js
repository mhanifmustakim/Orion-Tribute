function renderContent(contentObject) {
    const main = document.querySelector("#main-content");
    main.innerHTML = "";
    if (contentObject.code == "PeersSpecial") {
        main.innerHTML += `<img id="prs-img" src="Assets/peers.png">`
    }
    if (contentObject.link) {
        main.innerHTML += `<div class="yt-vid"><iframe src="https://www.youtube.com/embed/${contentObject.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    }
    if (contentObject.author) {
        main.innerHTML += `<div class="desc">${contentObject.desc}<br><br>By: ${contentObject.author}</div>`;
    } else if (contentObject.video) {
        main.innerHTML += `<video width="320" height="240" autoplay><source src="${contentObject.video}" type="video/mp4">Your browser does not support the video tag.</video>`
    }
}

export { renderContent }