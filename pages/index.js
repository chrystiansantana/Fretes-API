function Home() {
    const teste='<script src="https://apis.google.com/js/platform.js?onload=renderBadge" async defer></script><script>window.renderBadge = function() {        var ratingBadgeContainer = document.createElement("div");        document.body.appendChild(ratingBadgeContainer);        window.gapi.load('ratingbadge', function() {window.gapi.ratingbadge.render(ratingBadgeContainer, {"merchant_id": 121249633});});}</script>'
    return <div>Home</div>
}

export default Home