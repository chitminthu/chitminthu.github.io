document.addEventListener('DOMContentLoaded', function() {
    const wishlist = [
        {
            title: "Professional DJ Controller",
            imageUrl: "https://unsplash.com/photos/OuLVg5ZKphI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYzNDc5NDExfA&force=true&w=640", 
            buyUrl: "#",
            description: "The key to unlocking my hidden talent as a world-renowned DJ.",
            why: "I'm pretty sure the only thing standing between me and a mainstage set at Tomorrowland is this piece of equipment."
        },
        {
            title: "One (1) Pet Alpaca",
            imageUrl: "your-image-url-here.jpg", 
            buyUrl: "https://unsplash.com/photos/xgQZ1rXbYa4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYzNDc5NTI3fA&force=true&w=640", 
            description: "A fluffy, long-necked friend to bring joy and questionable lawn-mowing services (We should probably replace the fake grass with real grass.)",
            why: "Frenchie needs a friend who's a little more... exotic. What could possibly go wrong?"
        },
        {
            title: "The Couch-Side Convenience Sink",
            imageUrl: "https://unsplash.com/photos/mFQo2uJNf2c/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYzNDc5Njk5fA&force=true&w=640", 
            buyUrl: "#",
            description: "A sink for the living room. Because the kitchen is, like, 10 whole steps away.",
            why: "Every time my hands get messy, getting up to wash them is a whole ordeal, and I might miss something good on TV."
          }

     
    ];

    const container = document.getElementById('wishlist-container');
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close-button');

    wishlist.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('wishlist-item');
        itemElement.innerHTML = `<h3>${item.title}</h3>`;
        itemElement.addEventListener('click', () => openModal(item));
        container.appendChild(itemElement);
    });

    function openModal(item) {
        document.getElementById('modal-img').src = item.imageUrl;
        document.getElementById('modal-title').textContent = item.title;
        document.getElementById('modal-description').textContent = item.description;
        document.getElementById('modal-why').textContent = `Why I want it: ${item.why}`;
        document.getElementById('modal-buy-link').href = item.buyUrl;
        modal.style.display = 'block';
    }

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
